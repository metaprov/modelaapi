/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

func (report *Report) Default() {
	f := Pdf
	report.Spec.Format = &f
}
