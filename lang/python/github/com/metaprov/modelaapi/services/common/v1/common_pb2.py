# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modelaapi/services/common/v1/common.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n=github.com/metaprov/modelaapi/services/common/v1/common.proto\x12\x30github.com.metaprov.modelaapi.services.common.v1\"\xa9\x03\n\x0e\x44\x61tasetProfile\x12\x0c\n\x04\x63ols\x18\x01 \x01(\x05\x12\x0c\n\x04rows\x18\x02 \x01(\x05\x12\x10\n\x08\x66ilesize\x18\x03 \x01(\x05\x12\x11\n\timbalance\x18\x04 \x01(\x08\x12\x45\n\x05plots\x18\x05 \x03(\x0b\x32\x36.github.com.metaprov.modelaapi.services.common.v1.Plot\x12P\n\x07\x63olumns\x18\x06 \x03(\x0b\x32?.github.com.metaprov.modelaapi.services.common.v1.ColumnProfile\x12J\n\x05table\x18\x07 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x12\x0c\n\x04hash\x18\x08 \x01(\t\x12\x12\n\nanomalyURI\x18\t \x01(\t\x12O\n\x02ts\x18\n \x01(\x0b\x32\x43.github.com.metaprov.modelaapi.services.common.v1.TimeSeriesProfile\"\xa5\x05\n\x0cModelProfile\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x45\n\x05plots\x18\x02 \x03(\x0b\x32\x36.github.com.metaprov.modelaapi.services.common.v1.Plot\x12\x62\n\nimportance\x18\x03 \x03(\x0b\x32N.github.com.metaprov.modelaapi.services.common.v1.ModelProfile.ImportanceEntry\x12J\n\x06rocauc\x18\x04 \x01(\x0b\x32:.github.com.metaprov.modelaapi.services.common.v1.ROCCurve\x12R\n\x02pr\x18\x05 \x01(\x0b\x32\x46.github.com.metaprov.modelaapi.services.common.v1.PrecisionRecallCurve\x12T\n\x10multiclassRocAuc\x18\x06 \x03(\x0b\x32:.github.com.metaprov.modelaapi.services.common.v1.ROCCurve\x12\\\n\x0cmulticlassPR\x18\x07 \x03(\x0b\x32\x46.github.com.metaprov.modelaapi.services.common.v1.PrecisionRecallCurve\x12U\n\x10groupForecasters\x18\x08 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x1a\x31\n\x0fImportanceEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02:\x02\x38\x01\"\\\n\x08ROCCurve\x12\x11\n\tclassname\x18\x01 \x01(\t\x12\x0f\n\x07\x63lassid\x18\x02 \x01(\x05\x12\x0b\n\x03\x66pr\x18\x03 \x03(\x01\x12\x0b\n\x03tpr\x18\x04 \x03(\x01\x12\x12\n\nthresholds\x18\x05 \x03(\x01\"q\n\x14PrecisionRecallCurve\x12\x11\n\tclassname\x18\x01 \x01(\t\x12\x0f\n\x07\x63lassid\x18\x02 \x01(\x05\x12\x11\n\tprecision\x18\x03 \x03(\x01\x12\x0e\n\x06recall\x18\x04 \x03(\x01\x12\x12\n\nthresholds\x18\x05 \x03(\x01\"\xa5\x04\n\x11TimeSeriesProfile\x12\x44\n\x04kpss\x18\x01 \x01(\x0b\x32\x36.github.com.metaprov.modelaapi.services.common.v1.KPSS\x12\x42\n\x03\x61\x64\x66\x18\x02 \x01(\x0b\x32\x35.github.com.metaprov.modelaapi.services.common.v1.ADF\x12L\n\x05zivot\x18\x03 \x01(\x0b\x32=.github.com.metaprov.modelaapi.services.common.v1.ZivotAndrew\x12N\n\x07kendall\x18\x04 \x01(\x0b\x32=.github.com.metaprov.modelaapi.services.common.v1.MannKendall\x12J\n\x02\x64w\x18\x05 \x01(\x0b\x32>.github.com.metaprov.modelaapi.services.common.v1.DurbinWatson\x12M\n\x08\x66\x65\x61tures\x18\x06 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\x12M\n\x08\x64\x61tasets\x18\x07 \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.TableView\"\xb5\x01\n\x04KPSS\x12\x11\n\tkpss_stat\x18\x01 \x01(\x02\x12\x0f\n\x07p_value\x18\x02 \x01(\x02\x12\x0c\n\x04lags\x18\x03 \x01(\x02\x12N\n\x04\x63rit\x18\x04 \x03(\x0b\x32@.github.com.metaprov.modelaapi.services.common.v1.KPSS.CritEntry\x1a+\n\tCritEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02:\x02\x38\x01\"A\n\x03\x41\x44\x46\x12\x0b\n\x03\x61\x64\x66\x18\x01 \x01(\x02\x12\x0e\n\x06pvalue\x18\x02 \x01(\x02\x12\x0f\n\x07usedlag\x18\x03 \x01(\x05\x12\x0c\n\x04nobs\x18\x04 \x01(\x05\"\xd1\x01\n\x0bZivotAndrew\x12\x0e\n\x06zastat\x18\x01 \x01(\x02\x12\x0e\n\x06pvalue\x18\x02 \x01(\x02\x12U\n\x04\x63rit\x18\x03 \x03(\x0b\x32G.github.com.metaprov.modelaapi.services.common.v1.ZivotAndrew.CritEntry\x12\x0f\n\x07\x62\x61selag\x18\x04 \x01(\x05\x12\r\n\x05\x62pidx\x18\x05 \x01(\x05\x1a+\n\tCritEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x02:\x02\x38\x01\"\x86\x01\n\x0bMannKendall\x12\r\n\x05trend\x18\x01 \x01(\x02\x12\t\n\x01h\x18\x02 \x01(\x02\x12\t\n\x01p\x18\x03 \x01(\x02\x12\t\n\x01z\x18\x04 \x01(\x02\x12\x0b\n\x03tau\x18\x05 \x01(\x02\x12\t\n\x01s\x18\x06 \x01(\x02\x12\r\n\x05var_s\x18\x07 \x01(\x02\x12\r\n\x05slope\x18\x08 \x01(\x02\x12\x11\n\tintercept\x18\t \x01(\x02\"\x1a\n\x0c\x44urbinWatson\x12\n\n\x02\x64w\x18\x01 \x01(\x02\"f\n\x0f\x46orecastProfile\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x45\n\x05plots\x18\x02 \x03(\x0b\x32\x36.github.com.metaprov.modelaapi.services.common.v1.Plot\"\xe8\x01\n\x0cStudyProfile\x12\x45\n\x05plots\x18\x01 \x03(\x0b\x32\x36.github.com.metaprov.modelaapi.services.common.v1.Plot\x12N\n\x06models\x18\x02 \x03(\x0b\x32>.github.com.metaprov.modelaapi.services.common.v1.ModelProfile\x12\x14\n\x0ctrainingHash\x18\x03 \x01(\t\x12\x13\n\x0btestingHash\x18\x04 \x01(\t\x12\x16\n\x0evalidationHash\x18\x05 \x01(\t\"L\n\x04Plot\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05title\x18\x02 \x01(\t\x12\x0b\n\x03img\x18\x03 \x01(\x0c\x12\r\n\x05\x66name\x18\x04 \x01(\t\x12\x0b\n\x03url\x18\x05 \x01(\t\"\xd3\x07\n\rColumnProfile\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05\x63ount\x18\x02 \x01(\x05\x12\x0c\n\x04type\x18\x03 \x01(\t\x12\x0f\n\x07missing\x18\x04 \x01(\x05\x12\x16\n\x0epercentMissing\x18\x05 \x01(\x02\x12\x10\n\x08\x64istinct\x18\x06 \x01(\x05\x12\x0c\n\x04mean\x18\x07 \x01(\x01\x12\x0c\n\x04mode\x18\x08 \x01(\t\x12\x0e\n\x06stddev\x18\t \x01(\x01\x12\x10\n\x08variance\x18\n \x01(\x01\x12\x0b\n\x03min\x18\x0b \x01(\x01\x12\x0b\n\x03max\x18\x0c \x01(\x01\x12\x10\n\x08kurtosis\x18\r \x01(\x01\x12\x10\n\x08skewness\x18\x0e \x01(\x01\x12\x0b\n\x03sum\x18\x0f \x01(\x01\x12\x0b\n\x03mad\x18\x10 \x01(\x01\x12\r\n\x05zeros\x18\x11 \x01(\x01\x12\x0b\n\x03p25\x18\x12 \x01(\x01\x12\x0b\n\x03p50\x18\x13 \x01(\x01\x12\x0b\n\x03p75\x18\x14 \x01(\x01\x12\x0c\n\x04p100\x18\x15 \x01(\x01\x12\x0b\n\x03iqr\x18\x16 \x01(\x01\x12\n\n\x02\x63v\x18\x17 \x01(\x01\x12\x0b\n\x03top\x18\x18 \x01(\x05\x12\x0c\n\x04\x66req\x18\x19 \x01(\x05\x12\x0e\n\x06ignore\x18\x1a \x01(\x08\x12\x0e\n\x06target\x18\x1b \x01(\x08\x12N\n\thistogram\x18\x1c \x01(\x0b\x32;.github.com.metaprov.modelaapi.services.common.v1.Histogram\x12\x0f\n\x07invalid\x18\x1d \x01(\x05\x12\x12\n\nimportance\x18\x1e \x01(\x01\x12\x10\n\x08nullable\x18\x1f \x01(\x08\x12\x17\n\x0fhighCardinality\x18  \x01(\x08\x12!\n\x19highCorrWithOtherFeatures\x18! \x01(\x08\x12\x19\n\x11lowCorrWithTarget\x18\" \x01(\x08\x12\x16\n\x0ehighMissingPct\x18# \x01(\x08\x12\x0e\n\x06skewed\x18$ \x01(\x08\x12\n\n\x02id\x18% \x01(\x08\x12\x10\n\x08\x63onstant\x18& \x01(\x08\x12\x11\n\tduplicate\x18\' \x01(\x08\x12\x10\n\x08reserved\x18( \x01(\x08\x12\x15\n\routliersUpper\x18) \x01(\x05\x12\x15\n\routliersLower\x18* \x01(\x05\x12\x17\n\x0foutliersPercent\x18+ \x01(\x02\x12\x14\n\x0c\x63ompleteness\x18, \x01(\x01\x12\x1a\n\x12\x64istinctValueCount\x18- \x01(\x01\x12\x1b\n\x13mostFreqValuesRatio\x18. \x01(\x01\x12\x1a\n\x12indexOfPeculiarity\x18/ \x01(\x01\x12\x0e\n\x06values\x18\x30 \x03(\t\x12\x14\n\x0c\x63orrToTarget\x18\x31 \x01(\x01\x12\r\n\x05index\x18\x32 \x01(\x05\"=\n\tHistogram\x12\x0e\n\x06values\x18\x01 \x03(\x01\x12\x0c\n\x04\x62ins\x18\x02 \x03(\x01\x12\x12\n\ncategories\x18\x03 \x03(\t\"\xf6\x02\n\rNamespaceInfo\x12[\n\x04type\x18\x01 \x01(\x0e\x32M.github.com.metaprov.modelaapi.services.common.v1.NamespaceInfo.NamespaceType\x12\x0c\n\x04Name\x18\x02 \x01(\t\x12\x10\n\x08\x61\x63\x63ounts\x18\x03 \x01(\x05\x12\x0f\n\x07\x62uckets\x18\x04 \x01(\x05\x12\x0c\n\x04labs\x18\x05 \x01(\x05\x12\x14\n\x0cservingsites\x18\x06 \x01(\x05\x12\x10\n\x08\x64\x61tasets\x18\x07 \x01(\x05\x12\x13\n\x0b\x64\x61tasources\x18\x08 \x01(\x05\x12\x0f\n\x07studies\x18\t \x01(\x05\x12\x0e\n\x06models\x18\n \x01(\x05\"k\n\rNamespaceType\x12\n\n\x06TENANT\x10\x00\x12\x0f\n\x0b\x44\x41TAPRODUCT\x10\x01\x12\x07\n\x03LAB\x10\x02\x12\x0f\n\x0bSERVINGSITE\x10\x03\x12\x10\n\x0cMODELASYSTEM\x10\x04\x12\x11\n\rMODELACATALOG\x10\x05\"\xba\x01\n\tTableView\x12\x0c\n\x04\x63ols\x18\x01 \x03(\t\x12L\n\x04rows\x18\x02 \x03(\x0b\x32>.github.com.metaprov.modelaapi.services.common.v1.TableViewRow\x12Q\n\x08profiles\x18\x03 \x03(\x0b\x32?.github.com.metaprov.modelaapi.services.common.v1.ColumnProfile\"\x1e\n\x0cTableViewRow\x12\x0e\n\x06values\x18\x02 \x03(\tB2Z0github.com/metaprov/modelaapi/services/common/v1b\x06proto3')



_DATASETPROFILE = DESCRIPTOR.message_types_by_name['DatasetProfile']
_MODELPROFILE = DESCRIPTOR.message_types_by_name['ModelProfile']
_MODELPROFILE_IMPORTANCEENTRY = _MODELPROFILE.nested_types_by_name['ImportanceEntry']
_ROCCURVE = DESCRIPTOR.message_types_by_name['ROCCurve']
_PRECISIONRECALLCURVE = DESCRIPTOR.message_types_by_name['PrecisionRecallCurve']
_TIMESERIESPROFILE = DESCRIPTOR.message_types_by_name['TimeSeriesProfile']
_KPSS = DESCRIPTOR.message_types_by_name['KPSS']
_KPSS_CRITENTRY = _KPSS.nested_types_by_name['CritEntry']
_ADF = DESCRIPTOR.message_types_by_name['ADF']
_ZIVOTANDREW = DESCRIPTOR.message_types_by_name['ZivotAndrew']
_ZIVOTANDREW_CRITENTRY = _ZIVOTANDREW.nested_types_by_name['CritEntry']
_MANNKENDALL = DESCRIPTOR.message_types_by_name['MannKendall']
_DURBINWATSON = DESCRIPTOR.message_types_by_name['DurbinWatson']
_FORECASTPROFILE = DESCRIPTOR.message_types_by_name['ForecastProfile']
_STUDYPROFILE = DESCRIPTOR.message_types_by_name['StudyProfile']
_PLOT = DESCRIPTOR.message_types_by_name['Plot']
_COLUMNPROFILE = DESCRIPTOR.message_types_by_name['ColumnProfile']
_HISTOGRAM = DESCRIPTOR.message_types_by_name['Histogram']
_NAMESPACEINFO = DESCRIPTOR.message_types_by_name['NamespaceInfo']
_TABLEVIEW = DESCRIPTOR.message_types_by_name['TableView']
_TABLEVIEWROW = DESCRIPTOR.message_types_by_name['TableViewRow']
_NAMESPACEINFO_NAMESPACETYPE = _NAMESPACEINFO.enum_types_by_name['NamespaceType']
DatasetProfile = _reflection.GeneratedProtocolMessageType('DatasetProfile', (_message.Message,), {
  'DESCRIPTOR' : _DATASETPROFILE,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.DatasetProfile)
  })
_sym_db.RegisterMessage(DatasetProfile)

ModelProfile = _reflection.GeneratedProtocolMessageType('ModelProfile', (_message.Message,), {

  'ImportanceEntry' : _reflection.GeneratedProtocolMessageType('ImportanceEntry', (_message.Message,), {
    'DESCRIPTOR' : _MODELPROFILE_IMPORTANCEENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.ModelProfile.ImportanceEntry)
    })
  ,
  'DESCRIPTOR' : _MODELPROFILE,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.ModelProfile)
  })
_sym_db.RegisterMessage(ModelProfile)
_sym_db.RegisterMessage(ModelProfile.ImportanceEntry)

ROCCurve = _reflection.GeneratedProtocolMessageType('ROCCurve', (_message.Message,), {
  'DESCRIPTOR' : _ROCCURVE,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.ROCCurve)
  })
_sym_db.RegisterMessage(ROCCurve)

PrecisionRecallCurve = _reflection.GeneratedProtocolMessageType('PrecisionRecallCurve', (_message.Message,), {
  'DESCRIPTOR' : _PRECISIONRECALLCURVE,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.PrecisionRecallCurve)
  })
_sym_db.RegisterMessage(PrecisionRecallCurve)

TimeSeriesProfile = _reflection.GeneratedProtocolMessageType('TimeSeriesProfile', (_message.Message,), {
  'DESCRIPTOR' : _TIMESERIESPROFILE,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.TimeSeriesProfile)
  })
_sym_db.RegisterMessage(TimeSeriesProfile)

KPSS = _reflection.GeneratedProtocolMessageType('KPSS', (_message.Message,), {

  'CritEntry' : _reflection.GeneratedProtocolMessageType('CritEntry', (_message.Message,), {
    'DESCRIPTOR' : _KPSS_CRITENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.KPSS.CritEntry)
    })
  ,
  'DESCRIPTOR' : _KPSS,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.KPSS)
  })
_sym_db.RegisterMessage(KPSS)
_sym_db.RegisterMessage(KPSS.CritEntry)

ADF = _reflection.GeneratedProtocolMessageType('ADF', (_message.Message,), {
  'DESCRIPTOR' : _ADF,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.ADF)
  })
_sym_db.RegisterMessage(ADF)

ZivotAndrew = _reflection.GeneratedProtocolMessageType('ZivotAndrew', (_message.Message,), {

  'CritEntry' : _reflection.GeneratedProtocolMessageType('CritEntry', (_message.Message,), {
    'DESCRIPTOR' : _ZIVOTANDREW_CRITENTRY,
    '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.ZivotAndrew.CritEntry)
    })
  ,
  'DESCRIPTOR' : _ZIVOTANDREW,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.ZivotAndrew)
  })
_sym_db.RegisterMessage(ZivotAndrew)
_sym_db.RegisterMessage(ZivotAndrew.CritEntry)

MannKendall = _reflection.GeneratedProtocolMessageType('MannKendall', (_message.Message,), {
  'DESCRIPTOR' : _MANNKENDALL,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.MannKendall)
  })
_sym_db.RegisterMessage(MannKendall)

DurbinWatson = _reflection.GeneratedProtocolMessageType('DurbinWatson', (_message.Message,), {
  'DESCRIPTOR' : _DURBINWATSON,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.DurbinWatson)
  })
_sym_db.RegisterMessage(DurbinWatson)

ForecastProfile = _reflection.GeneratedProtocolMessageType('ForecastProfile', (_message.Message,), {
  'DESCRIPTOR' : _FORECASTPROFILE,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.ForecastProfile)
  })
_sym_db.RegisterMessage(ForecastProfile)

StudyProfile = _reflection.GeneratedProtocolMessageType('StudyProfile', (_message.Message,), {
  'DESCRIPTOR' : _STUDYPROFILE,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.StudyProfile)
  })
_sym_db.RegisterMessage(StudyProfile)

Plot = _reflection.GeneratedProtocolMessageType('Plot', (_message.Message,), {
  'DESCRIPTOR' : _PLOT,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.Plot)
  })
_sym_db.RegisterMessage(Plot)

ColumnProfile = _reflection.GeneratedProtocolMessageType('ColumnProfile', (_message.Message,), {
  'DESCRIPTOR' : _COLUMNPROFILE,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.ColumnProfile)
  })
_sym_db.RegisterMessage(ColumnProfile)

Histogram = _reflection.GeneratedProtocolMessageType('Histogram', (_message.Message,), {
  'DESCRIPTOR' : _HISTOGRAM,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.Histogram)
  })
_sym_db.RegisterMessage(Histogram)

NamespaceInfo = _reflection.GeneratedProtocolMessageType('NamespaceInfo', (_message.Message,), {
  'DESCRIPTOR' : _NAMESPACEINFO,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.NamespaceInfo)
  })
_sym_db.RegisterMessage(NamespaceInfo)

TableView = _reflection.GeneratedProtocolMessageType('TableView', (_message.Message,), {
  'DESCRIPTOR' : _TABLEVIEW,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.TableView)
  })
_sym_db.RegisterMessage(TableView)

TableViewRow = _reflection.GeneratedProtocolMessageType('TableViewRow', (_message.Message,), {
  'DESCRIPTOR' : _TABLEVIEWROW,
  '__module__' : 'github.com.metaprov.modelaapi.services.common.v1.common_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modelaapi.services.common.v1.TableViewRow)
  })
_sym_db.RegisterMessage(TableViewRow)

if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z0github.com/metaprov/modelaapi/services/common/v1'
  _MODELPROFILE_IMPORTANCEENTRY._options = None
  _MODELPROFILE_IMPORTANCEENTRY._serialized_options = b'8\001'
  _KPSS_CRITENTRY._options = None
  _KPSS_CRITENTRY._serialized_options = b'8\001'
  _ZIVOTANDREW_CRITENTRY._options = None
  _ZIVOTANDREW_CRITENTRY._serialized_options = b'8\001'
  _DATASETPROFILE._serialized_start=116
  _DATASETPROFILE._serialized_end=541
  _MODELPROFILE._serialized_start=544
  _MODELPROFILE._serialized_end=1221
  _MODELPROFILE_IMPORTANCEENTRY._serialized_start=1172
  _MODELPROFILE_IMPORTANCEENTRY._serialized_end=1221
  _ROCCURVE._serialized_start=1223
  _ROCCURVE._serialized_end=1315
  _PRECISIONRECALLCURVE._serialized_start=1317
  _PRECISIONRECALLCURVE._serialized_end=1430
  _TIMESERIESPROFILE._serialized_start=1433
  _TIMESERIESPROFILE._serialized_end=1982
  _KPSS._serialized_start=1985
  _KPSS._serialized_end=2166
  _KPSS_CRITENTRY._serialized_start=2123
  _KPSS_CRITENTRY._serialized_end=2166
  _ADF._serialized_start=2168
  _ADF._serialized_end=2233
  _ZIVOTANDREW._serialized_start=2236
  _ZIVOTANDREW._serialized_end=2445
  _ZIVOTANDREW_CRITENTRY._serialized_start=2123
  _ZIVOTANDREW_CRITENTRY._serialized_end=2166
  _MANNKENDALL._serialized_start=2448
  _MANNKENDALL._serialized_end=2582
  _DURBINWATSON._serialized_start=2584
  _DURBINWATSON._serialized_end=2610
  _FORECASTPROFILE._serialized_start=2612
  _FORECASTPROFILE._serialized_end=2714
  _STUDYPROFILE._serialized_start=2717
  _STUDYPROFILE._serialized_end=2949
  _PLOT._serialized_start=2951
  _PLOT._serialized_end=3027
  _COLUMNPROFILE._serialized_start=3030
  _COLUMNPROFILE._serialized_end=4009
  _HISTOGRAM._serialized_start=4011
  _HISTOGRAM._serialized_end=4072
  _NAMESPACEINFO._serialized_start=4075
  _NAMESPACEINFO._serialized_end=4449
  _NAMESPACEINFO_NAMESPACETYPE._serialized_start=4342
  _NAMESPACEINFO_NAMESPACETYPE._serialized_end=4449
  _TABLEVIEW._serialized_start=4452
  _TABLEVIEW._serialized_end=4638
  _TABLEVIEWROW._serialized_start=4640
  _TABLEVIEWROW._serialized_end=4670
# @@protoc_insertion_point(module_scope)
