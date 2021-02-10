/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package common

import validation "github.com/go-ozzo/ozzo-validation"

func ValidateResourceName(name string) error {
	return validation.Validate(name, validation.Required, validation.Length(1, 253))
}

func ValidateResourceNameIfNotEmpty(name string) error {
	return nil
}
