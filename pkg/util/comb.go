/*
 * Copyright (c) 2020.
 *
 * Metaprov.com
 */

package util

func AllCombs(levels [][]string) []string {
	return combinations(levels, 0, "")
}

func combinations(sets [][]string, n int, prefix string) []string {
	result := make([]string, 0)
	if n >= len(sets) {
		result = append(result, prefix)
		return result
	}
	level := sets[n]
	for _, v := range level {
		r := combinations(sets, n+1, prefix+v+"/")
		result = append(result, r...)
	}
	return result

}
