/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	"github.com/metaprov/modeldapi/pkg/util"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &DataSource{}

func (datasource *DataSource) Default() {

	if datasource.Spec.OwnerName == nil {
		datasource.Spec.OwnerName = util.StrPtr("")
	}

	if datasource.Spec.Description != nil {
		datasource.Spec.Description = util.StrPtr("")
	}

	for i, v := range datasource.Spec.Schema.Columns {
		c := v
		datasource.Spec.Schema.Columns[i] = c

	}

	if datasource.Spec.FlatFile != nil {
		ffile := datasource.Spec.FlatFile
		if ffile.Header == nil {
			ffile.Header = util.BoolPtr(true)
		}
		if ffile.SkipRows == nil {
			ffile.SkipRows = util.Int32Ptr(0)
		}

		if ffile.FileType != nil {
			csv := FlatFileTypeCsv
			ffile.FileType = &csv
		}
		if ffile.Delimiter != nil {
			delimiter := DelimiterComma
			ffile.Delimiter = &delimiter
		}

		if ffile.Encoding == nil {
			encoding := catalog.FileEncodingUtf8
			ffile.Encoding = &encoding
		}
	}

}
