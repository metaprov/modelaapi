/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package v1alpha1

//EnsembleRules is an algorithm class that decide
type EnsembleRules struct {
	// best score pre alg
	byAlg map[string]float64
	// best model per alg, alg->model
	byModel map[string]Model
}

func NewEnsemble() *EnsembleRules {
	return &EnsembleRules{
		byAlg:   make(map[string]float64),
		byModel: make(map[string]Model),
	}
}

// Add a new model to the ensemble
func (e *EnsembleRules) Add(m Model) {
	// we do not count ensemble models
	if m.IsEnsemble() {
		return
	}

	// Add only trained model
	if !m.Trained() {
		return
	}

	_, ok := e.byAlg[m.Spec.Estimator.AlgorithmName]
	if !ok {
		e.byAlg[m.Spec.Estimator.AlgorithmName] = m.Status.CVScore
		e.byModel[m.Spec.Estimator.AlgorithmName] = m
	} else {
		currentScore := e.byAlg[m.Spec.Estimator.AlgorithmName]
		if m.Spec.Objective.Compare(currentScore, m.Status.CVScore) {
			e.byAlg[m.Spec.Estimator.AlgorithmName] = m.Status.CVScore
			e.byModel[m.Spec.Estimator.AlgorithmName] = m
		}
	}
}

// Exist return true if we can form an ensemble.
// we can form an ensemble only if we have 3 models from different alg
func (e *EnsembleRules) Exist() bool {
	return len(e.byAlg) >= 3
}

func (e *EnsembleRules) Models() []Model {
	result := make([]Model, 0)
	i := 0
	for k := range e.byModel {
		result = append(result, e.byModel[k])
		i++
		if i == 3 {
			break
		}
	}
	return result
}

func (e *EnsembleRules) ModelNames() []string {
	models := e.Models()
	result := make([]string, 0)
	for _, v := range models {
		result = append(result, v.Name)
	}
	return result
}
