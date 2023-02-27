# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/common/v1/common.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n=github.com/metaprov/modelaapi/services/common/v1/common.proto\x12\x30github.com.metaprov.modelaapi.services.common.v1\x1a\x1egoogle/protobuf/duration.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"\xf6\x03\n\x0e\x44\x61tasetProfile\x12\x0c\n\x04\x63ols\x18\x01 \x01(\x05\x12\x0c\n\x04rows\x18\x02 \x01(\x05\x12\x10\n\x08\x66ilesize\x18\x03 \x01(\x05\x12\x11\n\timbalance\x18\x04 \x01(\x08\x12\x45\n\x05plots\x18\x05 \x03(\x0b\x32\x36.github.com.metaprov.modelaapi.services.common.v1.Plot\x12P\n\x07\x63olumns\x18\x06 \x03(\x0b\x32?.github.com.metaprov.modelaapi.services.common.v1.ColumnProfile\x12J\n\x05table\x18\x07 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x12\x0c\n\x04hash\x18\x08 \x01(\t\x12\x12\n\nanomalyURI\x18\t \x01(\t\x12K\n\x06groups\x18\x0b \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x12O\n\x02ts\x18\x0c \x01(\x0b\x32\x43.github.com.metaprov.modelaapi.services.common.v1.TimeSeriesProfile\"\xc1\x06\n\x0cModelProfile\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x45\n\x05plots\x18\x02 \x03(\x0b\x32\x36.github.com.metaprov.modelaapi.services.common.v1.Plot\x12\x62\n\nimportance\x18\x03 \x03(\x0b\x32N.github.com.metaprov.modelaapi.services.common.v1.ModelProfile.ImportanceEntry\x12J\n\x06rocauc\x18\x04 \x01(\x0b\x32:.github.com.metaprov.modelaapi.services.common.v1.ROCCurve\x12R\n\x02pr\x18\x05 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.services.common.v1.PrecisionRecallCurve\x12T\n\x10multiclassRocAuc\x18\x06 \x03(\x0b\x32:.github.com.metaprov.modelaapi.services.common.v1.ROCCurve\x12\\\n\x0cmulticlassPR\x18\x07 \x03(\x0b\x32\x46.github.com.metaprov.modelaapi.services.common.v1.PrecisionRecallCurve\x12U\n\x04\x61lgs\x18\x08 \x03(\x0b\x32G.github.com.metaprov.modelaapi.services.common.v1.ForecastingAlgProfile\x12M\n\x08\x66\x65\x61tures\x18\n \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x12K\n\x06groups\x18\x0b \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x1a\x31\n\x0fImportanceEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02:\x02\x38\x01\"\x95\x05\n\x15\x46orecastingAlgProfile\x12\x11\n\talgorithm\x18\x01 \x01(\t\x12K\n\x06series\x18\x02 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x12L\n\x08timeStat\x18\x03 \x01(\x0b\x32:.github.com.metaprov.modelaapi.services.common.v1.TimeStat\x12N\n\tvalueStat\x18\x04 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x12G\n\x02\x63v\x18\x05 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x12M\n\x08\x66orecast\x18\x06 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x12L\n\x07metrics\x18\x07 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x12Q\n\x0c\x63hangePoints\x18\x08 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x12\x45\n\x05plots\x18\n \x03(\x0b\x32\x36.github.com.metaprov.modelaapi.services.common.v1.Plot\"\xa4\x02\n\x08TimeStat\x12I\n\x04gaps\x18\x01 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x12\x18\n\x10\x61\x64\x64\x65\x64_timepoints\x18\x02 \x01(\x05\x12\x1a\n\x12\x64ropped_timepoints\x18\x03 \x01(\x05\x12\x13\n\x0b\x64\x61ta_points\x18\x04 \x01(\x05\x12\x1c\n\x14mean_increments_secs\x18\x05 \x01(\x02\x12\x31\n\rmin_timestamp\x18\x06 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x31\n\rmax_timestamp\x18\x07 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"\\\n\x08ROCCurve\x12\x11\n\tclassname\x18\x01 \x01(\t\x12\x0f\n\x07\x63lassid\x18\x02 \x01(\x05\x12\x0b\n\x03\x66pr\x18\x03 \x03(\x01\x12\x0b\n\x03tpr\x18\x04 \x03(\x01\x12\x12\n\nthresholds\x18\x05 \x03(\x01\"q\n\x14PrecisionRecallCurve\x12\x11\n\tclassname\x18\x01 \x01(\t\x12\x0f\n\x07\x63lassid\x18\x02 \x01(\x05\x12\x11\n\tprecision\x18\x03 \x03(\x01\x12\x0e\n\x06recall\x18\x04 \x03(\x01\x12\x12\n\nthresholds\x18\x05 \x03(\x01\"\x9a\x06\n\x11TimeSeriesProfile\x12\x44\n\x04kpss\x18\x01 \x01(\x0b\x32\x36.github.com.metaprov.modelaapi.services.common.v1.KPSS\x12\x42\n\x03\x61\x64\x66\x18\x02 \x01(\x0b\x32\x35.github.com.metaprov.modelaapi.services.common.v1.ADF\x12L\n\x05zivot\x18\x03 \x01(\x0b\x32=.github.com.metaprov.modelaapi.services.common.v1.ZivotAndrew\x12N\n\x07kendall\x18\x04 \x01(\x0b\x32=.github.com.metaprov.modelaapi.services.common.v1.MannKendall\x12J\n\x02\x64w\x18\x05 \x01(\x0b\x32>.github.com.metaprov.modelaapi.services.common.v1.DurbinWatson\x12\x0b\n\x03key\x18\x06 \x01(\t\x12K\n\x06series\x18\x07 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x12N\n\tvalueStat\x18\x08 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x12Q\n\x0c\x66\x65\x61turesView\x18\t \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x12\x63\n\x08\x66\x65\x61tures\x18\n \x03(\x0b\x32Q.github.com.metaprov.modelaapi.services.common.v1.TimeSeriesProfile.FeaturesEntry\x1a/\n\rFeaturesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02:\x02\x38\x01\"\xb4\x01\n\x04KPSS\x12\x11\n\tkpss_stat\x18\x01 \x01(\x02\x12\x0e\n\x06pvalue\x18\x02 \x01(\x02\x12\x0c\n\x04lags\x18\x03 \x01(\x02\x12N\n\x04\x63rit\x18\x04 \x03(\x0b\x32@.github.com.metaprov.modelaapi.services.common.v1.KPSS.CritEntry\x1a+\n\tCritEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02:\x02\x38\x01\"\xbd\x01\n\x03\x41\x44\x46\x12\x0b\n\x03\x61\x64\x66\x18\x01 \x01(\x02\x12\x0e\n\x06pvalue\x18\x02 \x01(\x02\x12\x0f\n\x07usedlag\x18\x03 \x01(\x05\x12\x0c\n\x04nobs\x18\x04 \x01(\x05\x12M\n\x04\x63rit\x18\x05 \x03(\x0b\x32?.github.com.metaprov.modelaapi.services.common.v1.ADF.CritEntry\x1a+\n\tCritEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02:\x02\x38\x01\"\xd1\x01\n\x0bZivotAndrew\x12\x0e\n\x06zastat\x18\x01 \x01(\x02\x12\x0e\n\x06pvalue\x18\x02 \x01(\x02\x12U\n\x04\x63rit\x18\x03 \x03(\x0b\x32G.github.com.metaprov.modelaapi.services.common.v1.ZivotAndrew.CritEntry\x12\x0f\n\x07\x62\x61selag\x18\x04 \x01(\x05\x12\r\n\x05\x62pidx\x18\x05 \x01(\x05\x1a+\n\tCritEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02:\x02\x38\x01\"\x86\x01\n\x0bMannKendall\x12\r\n\x05trend\x18\x01 \x01(\t\x12\t\n\x01h\x18\x02 \x01(\x02\x12\t\n\x01p\x18\x03 \x01(\x02\x12\t\n\x01z\x18\x04 \x01(\x02\x12\x0b\n\x03tau\x18\x05 \x01(\x02\x12\t\n\x01s\x18\x06 \x01(\x02\x12\r\n\x05var_s\x18\x07 \x01(\x02\x12\r\n\x05slope\x18\x08 \x01(\x02\x12\x11\n\tintercept\x18\t \x01(\x02\"\x1a\n\x0c\x44urbinWatson\x12\n\n\x02\x64w\x18\x01 \x01(\x02\"f\n\x0f\x46orecastProfile\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x45\n\x05plots\x18\x02 \x03(\x0b\x32\x36.github.com.metaprov.modelaapi.services.common.v1.Plot\"\xe8\x01\n\x0cStudyProfile\x12\x45\n\x05plots\x18\x01 \x03(\x0b\x32\x36.github.com.metaprov.modelaapi.services.common.v1.Plot\x12N\n\x06models\x18\x02 \x03(\x0b\x32>.github.com.metaprov.modelaapi.services.common.v1.ModelProfile\x12\x14\n\x0ctrainingHash\x18\x03 \x01(\t\x12\x13\n\x0btestingHash\x18\x04 \x01(\t\x12\x16\n\x0evalidationHash\x18\x05 \x01(\t\"L\n\x04Plot\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05title\x18\x02 \x01(\t\x12\x0b\n\x03img\x18\x03 \x01(\x0c\x12\r\n\x05\x66name\x18\x04 \x01(\t\x12\x0b\n\x03url\x18\x05 \x01(\t\"\xd3\x07\n\rColumnProfile\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05\x63ount\x18\x02 \x01(\x05\x12\x0c\n\x04type\x18\x03 \x01(\t\x12\x0f\n\x07missing\x18\x04 \x01(\x05\x12\x16\n\x0epercentMissing\x18\x05 \x01(\x02\x12\x10\n\x08\x64istinct\x18\x06 \x01(\x05\x12\x0c\n\x04mean\x18\x07 \x01(\x01\x12\x0c\n\x04mode\x18\x08 \x01(\t\x12\x0e\n\x06stddev\x18\t \x01(\x01\x12\x10\n\x08variance\x18\n \x01(\x01\x12\x0b\n\x03min\x18\x0b \x01(\x01\x12\x0b\n\x03max\x18\x0c \x01(\x01\x12\x10\n\x08kurtosis\x18\r \x01(\x01\x12\x10\n\x08skewness\x18\x0e \x01(\x01\x12\x0b\n\x03sum\x18\x0f \x01(\x01\x12\x0b\n\x03mad\x18\x10 \x01(\x01\x12\r\n\x05zeros\x18\x11 \x01(\x01\x12\x0b\n\x03p25\x18\x12 \x01(\x01\x12\x0b\n\x03p50\x18\x13 \x01(\x01\x12\x0b\n\x03p75\x18\x14 \x01(\x01\x12\x0c\n\x04p100\x18\x15 \x01(\x01\x12\x0b\n\x03iqr\x18\x16 \x01(\x01\x12\n\n\x02\x63v\x18\x17 \x01(\x01\x12\x0b\n\x03top\x18\x18 \x01(\x05\x12\x0c\n\x04\x66req\x18\x19 \x01(\x05\x12\x0e\n\x06ignore\x18\x1a \x01(\x08\x12\x0e\n\x06target\x18\x1b \x01(\x08\x12N\n\thistogram\x18\x1c \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.Histogram\x12\x0f\n\x07invalid\x18\x1d \x01(\x05\x12\x12\n\nimportance\x18\x1e \x01(\x01\x12\x10\n\x08nullable\x18\x1f \x01(\x08\x12\x17\n\x0fhighCardinality\x18  \x01(\x08\x12!\n\x19highCorrWithOtherFeatures\x18! \x01(\x08\x12\x19\n\x11lowCorrWithTarget\x18\" \x01(\x08\x12\x16\n\x0ehighMissingPct\x18# \x01(\x08\x12\x0e\n\x06skewed\x18$ \x01(\x08\x12\n\n\x02id\x18% \x01(\x08\x12\x10\n\x08\x63onstant\x18& \x01(\x08\x12\x11\n\tduplicate\x18\' \x01(\x08\x12\x10\n\x08reserved\x18( \x01(\x08\x12\x15\n\routliersUpper\x18) \x01(\x05\x12\x15\n\routliersLower\x18* \x01(\x05\x12\x17\n\x0foutliersPercent\x18+ \x01(\x02\x12\x14\n\x0c\x63ompleteness\x18, \x01(\x01\x12\x1a\n\x12\x64istinctValueCount\x18- \x01(\x01\x12\x1b\n\x13mostFreqValuesRatio\x18. \x01(\x01\x12\x1a\n\x12indexOfPeculiarity\x18/ \x01(\x01\x12\x0e\n\x06values\x18\x30 \x03(\t\x12\x14\n\x0c\x63orrToTarget\x18\x31 \x01(\x01\x12\r\n\x05index\x18\x32 \x01(\x05\"=\n\tHistogram\x12\x0e\n\x06values\x18\x01 \x03(\x01\x12\x0c\n\x04\x62ins\x18\x02 \x03(\x01\x12\x12\n\ncategories\x18\x03 \x03(\t\"\xf6\x02\n\rNamespaceInfo\x12[\n\x04type\x18\x01 \x01(\x0e\x32M.github.com.metaprov.modelaapi.services.common.v1.NamespaceInfo.NamespaceType\x12\x0c\n\x04Name\x18\x02 \x01(\t\x12\x10\n\x08\x61\x63\x63ounts\x18\x03 \x01(\x05\x12\x0f\n\x07\x62uckets\x18\x04 \x01(\x05\x12\x0c\n\x04labs\x18\x05 \x01(\x05\x12\x14\n\x0cservingsites\x18\x06 \x01(\x05\x12\x10\n\x08\x64\x61tasets\x18\x07 \x01(\x05\x12\x13\n\x0b\x64\x61tasources\x18\x08 \x01(\x05\x12\x0f\n\x07studies\x18\t \x01(\x05\x12\x0e\n\x06models\x18\n \x01(\x05\"k\n\rNamespaceType\x12\n\n\x06TENANT\x10\x00\x12\x0f\n\x0b\x44\x41TAPRODUCT\x10\x01\x12\x07\n\x03LAB\x10\x02\x12\x0f\n\x0bSERVINGSITE\x10\x03\x12\x10\n\x0cMODELASYSTEM\x10\x04\x12\x11\n\rMODELACATALOG\x10\x05\"\xba\x01\n\tTableView\x12\x0c\n\x04\x63ols\x18\x01 \x03(\t\x12L\n\x04rows\x18\x02 \x03(\x0b\x32>.github.com.metaprov.modelaapi.services.common.v1.TableViewRow\x12Q\n\x08profiles\x18\x03 \x03(\x0b\x32?.github.com.metaprov.modelaapi.services.common.v1.ColumnProfile\"\x1e\n\x0cTableViewRow\x12\x0e\n\x06values\x18\x02 \x03(\tB2Z0github.com/metaprov/modelaapi/services/common/v1b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'github.com.metaprov.modelaapi.services.common.v1.common_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z0github.com/metaprov/modelaapi/services/common/v1'
  _MODELPROFILE_IMPORTANCEENTRY._options = None
  _MODELPROFILE_IMPORTANCEENTRY._serialized_options = b'8\001'
  _TIMESERIESPROFILE_FEATURESENTRY._options = None
  _TIMESERIESPROFILE_FEATURESENTRY._serialized_options = b'8\001'
  _KPSS_CRITENTRY._options = None
  _KPSS_CRITENTRY._serialized_options = b'8\001'
  _ADF_CRITENTRY._options = None
  _ADF_CRITENTRY._serialized_options = b'8\001'
  _ZIVOTANDREW_CRITENTRY._options = None
  _ZIVOTANDREW_CRITENTRY._serialized_options = b'8\001'
  _DATASETPROFILE._serialized_start=181
  _DATASETPROFILE._serialized_end=683
  _MODELPROFILE._serialized_start=686
  _MODELPROFILE._serialized_end=1519
  _MODELPROFILE_IMPORTANCEENTRY._serialized_start=1470
  _MODELPROFILE_IMPORTANCEENTRY._serialized_end=1519
  _FORECASTINGALGPROFILE._serialized_start=1522
  _FORECASTINGALGPROFILE._serialized_end=2183
  _TIMESTAT._serialized_start=2186
  _TIMESTAT._serialized_end=2478
  _ROCCURVE._serialized_start=2480
  _ROCCURVE._serialized_end=2572
  _PRECISIONRECALLCURVE._serialized_start=2574
  _PRECISIONRECALLCURVE._serialized_end=2687
  _TIMESERIESPROFILE._serialized_start=2690
  _TIMESERIESPROFILE._serialized_end=3484
  _TIMESERIESPROFILE_FEATURESENTRY._serialized_start=3437
  _TIMESERIESPROFILE_FEATURESENTRY._serialized_end=3484
  _KPSS._serialized_start=3487
  _KPSS._serialized_end=3667
  _KPSS_CRITENTRY._serialized_start=3624
  _KPSS_CRITENTRY._serialized_end=3667
  _ADF._serialized_start=3670
  _ADF._serialized_end=3859
  _ADF_CRITENTRY._serialized_start=3624
  _ADF_CRITENTRY._serialized_end=3667
  _ZIVOTANDREW._serialized_start=3862
  _ZIVOTANDREW._serialized_end=4071
  _ZIVOTANDREW_CRITENTRY._serialized_start=3624
  _ZIVOTANDREW_CRITENTRY._serialized_end=3667
  _MANNKENDALL._serialized_start=4074
  _MANNKENDALL._serialized_end=4208
  _DURBINWATSON._serialized_start=4210
  _DURBINWATSON._serialized_end=4236
  _FORECASTPROFILE._serialized_start=4238
  _FORECASTPROFILE._serialized_end=4340
  _STUDYPROFILE._serialized_start=4343
  _STUDYPROFILE._serialized_end=4575
  _PLOT._serialized_start=4577
  _PLOT._serialized_end=4653
  _COLUMNPROFILE._serialized_start=4656
  _COLUMNPROFILE._serialized_end=5635
  _HISTOGRAM._serialized_start=5637
  _HISTOGRAM._serialized_end=5698
  _NAMESPACEINFO._serialized_start=5701
  _NAMESPACEINFO._serialized_end=6075
  _NAMESPACEINFO_NAMESPACETYPE._serialized_start=5968
  _NAMESPACEINFO_NAMESPACETYPE._serialized_end=6075
  _TABLEVIEW._serialized_start=6078
  _TABLEVIEW._serialized_end=6264
  _TABLEVIEWROW._serialized_start=6266
  _TABLEVIEWROW._serialized_end=6296
# @@protoc_insertion_point(module_scope)
