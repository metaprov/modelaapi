import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb from '../../../../../../../github.com/metaprov/modelaapi/pkg/apis/catalog/v1alpha1/generated_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class ApprovalReviewStatus extends jspb.Message {
  getReviewer(): string;
  setReviewer(value: string): ApprovalReviewStatus;
  hasReviewer(): boolean;
  clearReviewer(): ApprovalReviewStatus;

  getResult(): string;
  setResult(value: string): ApprovalReviewStatus;
  hasResult(): boolean;
  clearResult(): ApprovalReviewStatus;

  getApprovedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setApprovedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): ApprovalReviewStatus;
  hasApprovedat(): boolean;
  clearApprovedat(): ApprovalReviewStatus;

  getNotes(): string;
  setNotes(value: string): ApprovalReviewStatus;
  hasNotes(): boolean;
  clearNotes(): ApprovalReviewStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApprovalReviewStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ApprovalReviewStatus): ApprovalReviewStatus.AsObject;
  static serializeBinaryToWriter(message: ApprovalReviewStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApprovalReviewStatus;
  static deserializeBinaryFromReader(message: ApprovalReviewStatus, reader: jspb.BinaryReader): ApprovalReviewStatus;
}

export namespace ApprovalReviewStatus {
  export type AsObject = {
    reviewer?: string,
    result?: string,
    approvedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    notes?: string,
  }
}

export class ApprovalSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): ApprovalSpec;
  hasEnabled(): boolean;
  clearEnabled(): ApprovalSpec;

  getDecisiontype(): string;
  setDecisiontype(value: string): ApprovalSpec;
  hasDecisiontype(): boolean;
  clearDecisiontype(): ApprovalSpec;

  getMembersList(): Array<string>;
  setMembersList(value: Array<string>): ApprovalSpec;
  clearMembersList(): ApprovalSpec;
  addMembers(value: string, index?: number): ApprovalSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApprovalSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ApprovalSpec): ApprovalSpec.AsObject;
  static serializeBinaryToWriter(message: ApprovalSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApprovalSpec;
  static deserializeBinaryFromReader(message: ApprovalSpec, reader: jspb.BinaryReader): ApprovalSpec;
}

export namespace ApprovalSpec {
  export type AsObject = {
    enabled?: boolean,
    decisiontype?: string,
    membersList: Array<string>,
  }
}

export class ApprovalStatus extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): ApprovalStatus;
  hasStatus(): boolean;
  clearStatus(): ApprovalStatus;

  getReviewsList(): Array<ApprovalReviewStatus>;
  setReviewsList(value: Array<ApprovalReviewStatus>): ApprovalStatus;
  clearReviewsList(): ApprovalStatus;
  addReviews(value?: ApprovalReviewStatus, index?: number): ApprovalReviewStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApprovalStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ApprovalStatus): ApprovalStatus.AsObject;
  static serializeBinaryToWriter(message: ApprovalStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApprovalStatus;
  static deserializeBinaryFromReader(message: ApprovalStatus, reader: jspb.BinaryReader): ApprovalStatus;
}

export namespace ApprovalStatus {
  export type AsObject = {
    status?: string,
    reviewsList: Array<ApprovalReviewStatus.AsObject>,
  }
}

export class BarChartSpec extends jspb.Message {
  getDatasetname(): string;
  setDatasetname(value: string): BarChartSpec;
  hasDatasetname(): boolean;
  clearDatasetname(): BarChartSpec;

  getX(): string;
  setX(value: string): BarChartSpec;
  hasX(): boolean;
  clearX(): BarChartSpec;

  getY(): string;
  setY(value: string): BarChartSpec;
  hasY(): boolean;
  clearY(): BarChartSpec;

  getLegend(): boolean;
  setLegend(value: boolean): BarChartSpec;
  hasLegend(): boolean;
  clearLegend(): BarChartSpec;

  getSort(): boolean;
  setSort(value: boolean): BarChartSpec;
  hasSort(): boolean;
  clearSort(): BarChartSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BarChartSpec.AsObject;
  static toObject(includeInstance: boolean, msg: BarChartSpec): BarChartSpec.AsObject;
  static serializeBinaryToWriter(message: BarChartSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BarChartSpec;
  static deserializeBinaryFromReader(message: BarChartSpec, reader: jspb.BinaryReader): BarChartSpec;
}

export namespace BarChartSpec {
  export type AsObject = {
    datasetname?: string,
    x?: string,
    y?: string,
    legend?: boolean,
    sort?: boolean,
  }
}

export class Column extends jspb.Message {
  getName(): string;
  setName(value: string): Column;
  hasName(): boolean;
  clearName(): Column;

  getDisplayname(): string;
  setDisplayname(value: string): Column;
  hasDisplayname(): boolean;
  clearDisplayname(): Column;

  getDatatype(): string;
  setDatatype(value: string): Column;
  hasDatatype(): boolean;
  clearDatatype(): Column;

  getFormat(): string;
  setFormat(value: string): Column;
  hasFormat(): boolean;
  clearFormat(): Column;

  getDescription(): string;
  setDescription(value: string): Column;
  hasDescription(): boolean;
  clearDescription(): Column;

  getIgnore(): boolean;
  setIgnore(value: boolean): Column;
  hasIgnore(): boolean;
  clearIgnore(): Column;

  getTarget(): boolean;
  setTarget(value: boolean): Column;
  hasTarget(): boolean;
  clearTarget(): Column;

  getNullable(): boolean;
  setNullable(value: boolean): Column;
  hasNullable(): boolean;
  clearNullable(): Column;

  getPk(): boolean;
  setPk(value: boolean): Column;
  hasPk(): boolean;
  clearPk(): Column;

  getFk(): boolean;
  setFk(value: boolean): Column;
  hasFk(): boolean;
  clearFk(): Column;

  getMultipleof(): number;
  setMultipleof(value: number): Column;
  hasMultipleof(): boolean;
  clearMultipleof(): Column;

  getMaximum(): number;
  setMaximum(value: number): Column;
  hasMaximum(): boolean;
  clearMaximum(): Column;

  getExclusivemaximum(): boolean;
  setExclusivemaximum(value: boolean): Column;
  hasExclusivemaximum(): boolean;
  clearExclusivemaximum(): Column;

  getMinimum(): number;
  setMinimum(value: number): Column;
  hasMinimum(): boolean;
  clearMinimum(): Column;

  getExclusiveminimum(): boolean;
  setExclusiveminimum(value: boolean): Column;
  hasExclusiveminimum(): boolean;
  clearExclusiveminimum(): Column;

  getMaxlength(): number;
  setMaxlength(value: number): Column;
  hasMaxlength(): boolean;
  clearMaxlength(): Column;

  getMinlength(): number;
  setMinlength(value: number): Column;
  hasMinlength(): boolean;
  clearMinlength(): Column;

  getPattern(): string;
  setPattern(value: string): Column;
  hasPattern(): boolean;
  clearPattern(): Column;

  getRequired(): boolean;
  setRequired(value: boolean): Column;
  hasRequired(): boolean;
  clearRequired(): Column;

  getExample(): string;
  setExample(value: string): Column;
  hasExample(): boolean;
  clearExample(): Column;

  getExternaldocs(): string;
  setExternaldocs(value: string): Column;
  hasExternaldocs(): boolean;
  clearExternaldocs(): Column;

  getEnumList(): Array<string>;
  setEnumList(value: Array<string>): Column;
  clearEnumList(): Column;
  addEnum(value: string, index?: number): Column;

  getMaxitems(): number;
  setMaxitems(value: number): Column;
  hasMaxitems(): boolean;
  clearMaxitems(): Column;

  getMinitems(): number;
  setMinitems(value: number): Column;
  hasMinitems(): boolean;
  clearMinitems(): Column;

  getUniqueitems(): boolean;
  setUniqueitems(value: boolean): Column;
  hasUniqueitems(): boolean;
  clearUniqueitems(): Column;

  getPii(): boolean;
  setPii(value: boolean): Column;
  hasPii(): boolean;
  clearPii(): Column;

  getPhi(): boolean;
  setPhi(value: boolean): Column;
  hasPhi(): boolean;
  clearPhi(): Column;

  getProtected(): boolean;
  setProtected(value: boolean): Column;
  hasProtected(): boolean;
  clearProtected(): Column;

  getDefaultvaluenum(): number;
  setDefaultvaluenum(value: number): Column;
  hasDefaultvaluenum(): boolean;
  clearDefaultvaluenum(): Column;

  getLog(): boolean;
  setLog(value: boolean): Column;
  hasLog(): boolean;
  clearLog(): Column;

  getMu(): number;
  setMu(value: number): Column;
  hasMu(): boolean;
  clearMu(): Column;

  getSigma(): number;
  setSigma(value: number): Column;
  hasSigma(): boolean;
  clearSigma(): Column;

  getSkewthreshold(): number;
  setSkewthreshold(value: number): Column;
  hasSkewthreshold(): boolean;
  clearSkewthreshold(): Column;

  getDriftthreshold(): number;
  setDriftthreshold(value: number): Column;
  hasDriftthreshold(): boolean;
  clearDriftthreshold(): Column;

  getKey(): boolean;
  setKey(value: boolean): Column;
  hasKey(): boolean;
  clearKey(): Column;

  getFold(): boolean;
  setFold(value: boolean): Column;
  hasFold(): boolean;
  clearFold(): Column;

  getWeight(): boolean;
  setWeight(value: boolean): Column;
  hasWeight(): boolean;
  clearWeight(): Column;

  getReserved(): boolean;
  setReserved(value: boolean): Column;
  hasReserved(): boolean;
  clearReserved(): Column;

  getImputation(): string;
  setImputation(value: string): Column;
  hasImputation(): boolean;
  clearImputation(): Column;

  getScaling(): string;
  setScaling(value: string): Column;
  hasScaling(): boolean;
  clearScaling(): Column;

  getGenerated(): boolean;
  setGenerated(value: boolean): Column;
  hasGenerated(): boolean;
  clearGenerated(): Column;

  getFormula(): string;
  setFormula(value: string): Column;
  hasFormula(): boolean;
  clearFormula(): Column;

  getId(): boolean;
  setId(value: boolean): Column;
  hasId(): boolean;
  clearId(): Column;

  getStep(): number;
  setStep(value: number): Column;
  hasStep(): boolean;
  clearStep(): Column;

  getLoc(): number;
  setLoc(value: number): Column;
  hasLoc(): boolean;
  clearLoc(): Column;

  getDatetimeformat(): string;
  setDatetimeformat(value: string): Column;
  hasDatetimeformat(): boolean;
  clearDatetimeformat(): Column;

  getTimeseries(): boolean;
  setTimeseries(value: boolean): Column;
  hasTimeseries(): boolean;
  clearTimeseries(): Column;

  getRegressor(): boolean;
  setRegressor(value: boolean): Column;
  hasRegressor(): boolean;
  clearRegressor(): Column;

  getLaggedregressor(): boolean;
  setLaggedregressor(value: boolean): Column;
  hasLaggedregressor(): boolean;
  clearLaggedregressor(): Column;

  getTimeindex(): boolean;
  setTimeindex(value: boolean): Column;
  hasTimeindex(): boolean;
  clearTimeindex(): Column;

  getAggr(): string;
  setAggr(value: string): Column;
  hasAggr(): boolean;
  clearAggr(): Column;

  getWindow(): number;
  setWindow(value: number): Column;
  hasWindow(): boolean;
  clearWindow(): Column;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Column.AsObject;
  static toObject(includeInstance: boolean, msg: Column): Column.AsObject;
  static serializeBinaryToWriter(message: Column, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Column;
  static deserializeBinaryFromReader(message: Column, reader: jspb.BinaryReader): Column;
}

export namespace Column {
  export type AsObject = {
    name?: string,
    displayname?: string,
    datatype?: string,
    format?: string,
    description?: string,
    ignore?: boolean,
    target?: boolean,
    nullable?: boolean,
    pk?: boolean,
    fk?: boolean,
    multipleof?: number,
    maximum?: number,
    exclusivemaximum?: boolean,
    minimum?: number,
    exclusiveminimum?: boolean,
    maxlength?: number,
    minlength?: number,
    pattern?: string,
    required?: boolean,
    example?: string,
    externaldocs?: string,
    enumList: Array<string>,
    maxitems?: number,
    minitems?: number,
    uniqueitems?: boolean,
    pii?: boolean,
    phi?: boolean,
    pb_protected?: boolean,
    defaultvaluenum?: number,
    log?: boolean,
    mu?: number,
    sigma?: number,
    skewthreshold?: number,
    driftthreshold?: number,
    key?: boolean,
    fold?: boolean,
    weight?: boolean,
    reserved?: boolean,
    imputation?: string,
    scaling?: string,
    generated?: boolean,
    formula?: string,
    id?: boolean,
    step?: number,
    loc?: number,
    datetimeformat?: string,
    timeseries?: boolean,
    regressor?: boolean,
    laggedregressor?: boolean,
    timeindex?: boolean,
    aggr?: string,
    window?: number,
  }
}

export class ColumnHistogram extends jspb.Message {
  getName(): string;
  setName(value: string): ColumnHistogram;
  hasName(): boolean;
  clearName(): ColumnHistogram;

  getHistogram(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.HistogramData | undefined;
  setHistogram(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.HistogramData): ColumnHistogram;
  hasHistogram(): boolean;
  clearHistogram(): ColumnHistogram;

  getMetricsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>;
  setMetricsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement>): ColumnHistogram;
  clearMetricsList(): ColumnHistogram;
  addMetrics(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement;

  getDrift(): boolean;
  setDrift(value: boolean): ColumnHistogram;
  hasDrift(): boolean;
  clearDrift(): ColumnHistogram;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnHistogram.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnHistogram): ColumnHistogram.AsObject;
  static serializeBinaryToWriter(message: ColumnHistogram, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnHistogram;
  static deserializeBinaryFromReader(message: ColumnHistogram, reader: jspb.BinaryReader): ColumnHistogram;
}

export namespace ColumnHistogram {
  export type AsObject = {
    name?: string,
    histogram?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.HistogramData.AsObject,
    metricsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Measurement.AsObject>,
    drift?: boolean,
  }
}

export class ColumnSpec extends jspb.Message {
  getSpacer(): boolean;
  setSpacer(value: boolean): ColumnSpec;
  hasSpacer(): boolean;
  clearSpacer(): ColumnSpec;

  getWidth(): number;
  setWidth(value: number): ColumnSpec;
  hasWidth(): boolean;
  clearWidth(): ColumnSpec;

  getContent(): ComponentSpec | undefined;
  setContent(value?: ComponentSpec): ColumnSpec;
  hasContent(): boolean;
  clearContent(): ColumnSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnSpec): ColumnSpec.AsObject;
  static serializeBinaryToWriter(message: ColumnSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnSpec;
  static deserializeBinaryFromReader(message: ColumnSpec, reader: jspb.BinaryReader): ColumnSpec;
}

export namespace ColumnSpec {
  export type AsObject = {
    spacer?: boolean,
    width?: number,
    content?: ComponentSpec.AsObject,
  }
}

export class ComponentSpec extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ComponentSpec;
  hasTitle(): boolean;
  clearTitle(): ComponentSpec;

  getSubtitle(): string;
  setSubtitle(value: string): ComponentSpec;
  hasSubtitle(): boolean;
  clearSubtitle(): ComponentSpec;

  getFooter(): string;
  setFooter(value: string): ComponentSpec;
  hasFooter(): boolean;
  clearFooter(): ComponentSpec;

  getContent(): ComponentView | undefined;
  setContent(value?: ComponentView): ComponentSpec;
  hasContent(): boolean;
  clearContent(): ComponentSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComponentSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ComponentSpec): ComponentSpec.AsObject;
  static serializeBinaryToWriter(message: ComponentSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComponentSpec;
  static deserializeBinaryFromReader(message: ComponentSpec, reader: jspb.BinaryReader): ComponentSpec;
}

export namespace ComponentSpec {
  export type AsObject = {
    title?: string,
    subtitle?: string,
    footer?: string,
    content?: ComponentView.AsObject,
  }
}

export class ComponentView extends jspb.Message {
  getMetric(): MetricSpec | undefined;
  setMetric(value?: MetricSpec): ComponentView;
  hasMetric(): boolean;
  clearMetric(): ComponentView;

  getGauge(): GaugeSpec | undefined;
  setGauge(value?: GaugeSpec): ComponentView;
  hasGauge(): boolean;
  clearGauge(): ComponentView;

  getHistogram(): HistogramSpec | undefined;
  setHistogram(value?: HistogramSpec): ComponentView;
  hasHistogram(): boolean;
  clearHistogram(): ComponentView;

  getTable(): TableSpec | undefined;
  setTable(value?: TableSpec): ComponentView;
  hasTable(): boolean;
  clearTable(): ComponentView;

  getLinechart(): LineChartSpec | undefined;
  setLinechart(value?: LineChartSpec): ComponentView;
  hasLinechart(): boolean;
  clearLinechart(): ComponentView;

  getBarchart(): BarChartSpec | undefined;
  setBarchart(value?: BarChartSpec): ComponentView;
  hasBarchart(): boolean;
  clearBarchart(): ComponentView;

  getScatterplot(): ScatterPlotSpec | undefined;
  setScatterplot(value?: ScatterPlotSpec): ComponentView;
  hasScatterplot(): boolean;
  clearScatterplot(): ComponentView;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComponentView.AsObject;
  static toObject(includeInstance: boolean, msg: ComponentView): ComponentView.AsObject;
  static serializeBinaryToWriter(message: ComponentView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComponentView;
  static deserializeBinaryFromReader(message: ComponentView, reader: jspb.BinaryReader): ComponentView;
}

export namespace ComponentView {
  export type AsObject = {
    metric?: MetricSpec.AsObject,
    gauge?: GaugeSpec.AsObject,
    histogram?: HistogramSpec.AsObject,
    table?: TableSpec.AsObject,
    linechart?: LineChartSpec.AsObject,
    barchart?: BarChartSpec.AsObject,
    scatterplot?: ScatterPlotSpec.AsObject,
  }
}

export class Correlation extends jspb.Message {
  getX(): string;
  setX(value: string): Correlation;
  hasX(): boolean;
  clearX(): Correlation;

  getY(): string;
  setY(value: string): Correlation;
  hasY(): boolean;
  clearY(): Correlation;

  getValue(): number;
  setValue(value: number): Correlation;
  hasValue(): boolean;
  clearValue(): Correlation;

  getMethod(): string;
  setMethod(value: string): Correlation;
  hasMethod(): boolean;
  clearMethod(): Correlation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Correlation.AsObject;
  static toObject(includeInstance: boolean, msg: Correlation): Correlation.AsObject;
  static serializeBinaryToWriter(message: Correlation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Correlation;
  static deserializeBinaryFromReader(message: Correlation, reader: jspb.BinaryReader): Correlation;
}

export namespace Correlation {
  export type AsObject = {
    x?: string,
    y?: string,
    value?: number,
    method?: string,
  }
}

export class CorrelationSpec extends jspb.Message {
  getCutoff(): number;
  setCutoff(value: number): CorrelationSpec;
  hasCutoff(): boolean;
  clearCutoff(): CorrelationSpec;

  getMethod(): string;
  setMethod(value: string): CorrelationSpec;
  hasMethod(): boolean;
  clearMethod(): CorrelationSpec;

  getTop(): number;
  setTop(value: number): CorrelationSpec;
  hasTop(): boolean;
  clearTop(): CorrelationSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CorrelationSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CorrelationSpec): CorrelationSpec.AsObject;
  static serializeBinaryToWriter(message: CorrelationSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CorrelationSpec;
  static deserializeBinaryFromReader(message: CorrelationSpec, reader: jspb.BinaryReader): CorrelationSpec;
}

export namespace CorrelationSpec {
  export type AsObject = {
    cutoff?: number,
    method?: string,
    top?: number,
  }
}

export class CsvFileSpec extends jspb.Message {
  getDelimiter(): string;
  setDelimiter(value: string): CsvFileSpec;
  hasDelimiter(): boolean;
  clearDelimiter(): CsvFileSpec;

  getQuote(): string;
  setQuote(value: string): CsvFileSpec;
  hasQuote(): boolean;
  clearQuote(): CsvFileSpec;

  getEscapechar(): string;
  setEscapechar(value: string): CsvFileSpec;
  hasEscapechar(): boolean;
  clearEscapechar(): CsvFileSpec;

  getCommentchars(): string;
  setCommentchars(value: string): CsvFileSpec;
  hasCommentchars(): boolean;
  clearCommentchars(): CsvFileSpec;

  getHeader(): boolean;
  setHeader(value: boolean): CsvFileSpec;
  hasHeader(): boolean;
  clearHeader(): CsvFileSpec;

  getSkiprows(): number;
  setSkiprows(value: number): CsvFileSpec;
  hasSkiprows(): boolean;
  clearSkiprows(): CsvFileSpec;

  getNullvalues(): string;
  setNullvalues(value: string): CsvFileSpec;
  hasNullvalues(): boolean;
  clearNullvalues(): CsvFileSpec;

  getEncoding(): string;
  setEncoding(value: string): CsvFileSpec;
  hasEncoding(): boolean;
  clearEncoding(): CsvFileSpec;

  getMaxrows(): number;
  setMaxrows(value: number): CsvFileSpec;
  hasMaxrows(): boolean;
  clearMaxrows(): CsvFileSpec;

  getStrict(): boolean;
  setStrict(value: boolean): CsvFileSpec;
  hasStrict(): boolean;
  clearStrict(): CsvFileSpec;

  getCompression(): string;
  setCompression(value: string): CsvFileSpec;
  hasCompression(): boolean;
  clearCompression(): CsvFileSpec;

  getHasindexcolumn(): boolean;
  setHasindexcolumn(value: boolean): CsvFileSpec;
  hasHasindexcolumn(): boolean;
  clearHasindexcolumn(): CsvFileSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsvFileSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CsvFileSpec): CsvFileSpec.AsObject;
  static serializeBinaryToWriter(message: CsvFileSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsvFileSpec;
  static deserializeBinaryFromReader(message: CsvFileSpec, reader: jspb.BinaryReader): CsvFileSpec;
}

export namespace CsvFileSpec {
  export type AsObject = {
    delimiter?: string,
    quote?: string,
    escapechar?: string,
    commentchars?: string,
    header?: boolean,
    skiprows?: number,
    nullvalues?: string,
    encoding?: string,
    maxrows?: number,
    strict?: boolean,
    compression?: string,
    hasindexcolumn?: boolean,
  }
}

export class DataInputSpec extends jspb.Message {
  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): DataInputSpec;
  hasLocation(): boolean;
  clearLocation(): DataInputSpec;

  getFormat(): FlatFileFormatSpec | undefined;
  setFormat(value?: FlatFileFormatSpec): DataInputSpec;
  hasFormat(): boolean;
  clearFormat(): DataInputSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataInputSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataInputSpec): DataInputSpec.AsObject;
  static serializeBinaryToWriter(message: DataInputSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataInputSpec;
  static deserializeBinaryFromReader(message: DataInputSpec, reader: jspb.BinaryReader): DataInputSpec;
}

export namespace DataInputSpec {
  export type AsObject = {
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
    format?: FlatFileFormatSpec.AsObject,
  }
}

export class DataOutputSpec extends jspb.Message {
  getDatasetname(): string;
  setDatasetname(value: string): DataOutputSpec;
  hasDatasetname(): boolean;
  clearDatasetname(): DataOutputSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): DataOutputSpec;
  hasLocation(): boolean;
  clearLocation(): DataOutputSpec;

  getFormat(): string;
  setFormat(value: string): DataOutputSpec;
  hasFormat(): boolean;
  clearFormat(): DataOutputSpec;

  getAction(): string;
  setAction(value: string): DataOutputSpec;
  hasAction(): boolean;
  clearAction(): DataOutputSpec;

  getCreatetableifnotexist(): boolean;
  setCreatetableifnotexist(value: boolean): DataOutputSpec;
  hasCreatetableifnotexist(): boolean;
  clearCreatetableifnotexist(): DataOutputSpec;

  getIncludefeatures(): boolean;
  setIncludefeatures(value: boolean): DataOutputSpec;
  hasIncludefeatures(): boolean;
  clearIncludefeatures(): DataOutputSpec;

  getIncludeshapvalues(): boolean;
  setIncludeshapvalues(value: boolean): DataOutputSpec;
  hasIncludeshapvalues(): boolean;
  clearIncludeshapvalues(): DataOutputSpec;

  getDetectoutliers(): boolean;
  setDetectoutliers(value: boolean): DataOutputSpec;
  hasDetectoutliers(): boolean;
  clearDetectoutliers(): DataOutputSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataOutputSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataOutputSpec): DataOutputSpec.AsObject;
  static serializeBinaryToWriter(message: DataOutputSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataOutputSpec;
  static deserializeBinaryFromReader(message: DataOutputSpec, reader: jspb.BinaryReader): DataOutputSpec;
}

export namespace DataOutputSpec {
  export type AsObject = {
    datasetname?: string,
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
    format?: string,
    action?: string,
    createtableifnotexist?: boolean,
    includefeatures?: boolean,
    includeshapvalues?: boolean,
    detectoutliers?: boolean,
  }
}

export class DataPipeline extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): DataPipeline;
  hasMetadata(): boolean;
  clearMetadata(): DataPipeline;

  getSpec(): DataPipelineSpec | undefined;
  setSpec(value?: DataPipelineSpec): DataPipeline;
  hasSpec(): boolean;
  clearSpec(): DataPipeline;

  getStatus(): DataPipelineStatus | undefined;
  setStatus(value?: DataPipelineStatus): DataPipeline;
  hasStatus(): boolean;
  clearStatus(): DataPipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipeline.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipeline): DataPipeline.AsObject;
  static serializeBinaryToWriter(message: DataPipeline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipeline;
  static deserializeBinaryFromReader(message: DataPipeline, reader: jspb.BinaryReader): DataPipeline;
}

export namespace DataPipeline {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DataPipelineSpec.AsObject,
    status?: DataPipelineStatus.AsObject,
  }
}

export class DataPipelineList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DataPipelineList;
  hasMetadata(): boolean;
  clearMetadata(): DataPipelineList;

  getItemsList(): Array<DataPipeline>;
  setItemsList(value: Array<DataPipeline>): DataPipelineList;
  clearItemsList(): DataPipelineList;
  addItems(value?: DataPipeline, index?: number): DataPipeline;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineList.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineList): DataPipelineList.AsObject;
  static serializeBinaryToWriter(message: DataPipelineList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineList;
  static deserializeBinaryFromReader(message: DataPipelineList, reader: jspb.BinaryReader): DataPipelineList;
}

export namespace DataPipelineList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<DataPipeline.AsObject>,
  }
}

export class DataPipelineRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): DataPipelineRun;
  hasMetadata(): boolean;
  clearMetadata(): DataPipelineRun;

  getSpec(): DataPipelineRunSpec | undefined;
  setSpec(value?: DataPipelineRunSpec): DataPipelineRun;
  hasSpec(): boolean;
  clearSpec(): DataPipelineRun;

  getStatus(): DataPipelineRunStatus | undefined;
  setStatus(value?: DataPipelineRunStatus): DataPipelineRun;
  hasStatus(): boolean;
  clearStatus(): DataPipelineRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineRun.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineRun): DataPipelineRun.AsObject;
  static serializeBinaryToWriter(message: DataPipelineRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineRun;
  static deserializeBinaryFromReader(message: DataPipelineRun, reader: jspb.BinaryReader): DataPipelineRun;
}

export namespace DataPipelineRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DataPipelineRunSpec.AsObject,
    status?: DataPipelineRunStatus.AsObject,
  }
}

export class DataPipelineRunCondition extends jspb.Message {
  getType(): string;
  setType(value: string): DataPipelineRunCondition;
  hasType(): boolean;
  clearType(): DataPipelineRunCondition;

  getStatus(): string;
  setStatus(value: string): DataPipelineRunCondition;
  hasStatus(): boolean;
  clearStatus(): DataPipelineRunCondition;

  getLasttransitiontime(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLasttransitiontime(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataPipelineRunCondition;
  hasLasttransitiontime(): boolean;
  clearLasttransitiontime(): DataPipelineRunCondition;

  getReason(): string;
  setReason(value: string): DataPipelineRunCondition;
  hasReason(): boolean;
  clearReason(): DataPipelineRunCondition;

  getMessage(): string;
  setMessage(value: string): DataPipelineRunCondition;
  hasMessage(): boolean;
  clearMessage(): DataPipelineRunCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineRunCondition.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineRunCondition): DataPipelineRunCondition.AsObject;
  static serializeBinaryToWriter(message: DataPipelineRunCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineRunCondition;
  static deserializeBinaryFromReader(message: DataPipelineRunCondition, reader: jspb.BinaryReader): DataPipelineRunCondition;
}

export namespace DataPipelineRunCondition {
  export type AsObject = {
    type?: string,
    status?: string,
    lasttransitiontime?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    reason?: string,
    message?: string,
  }
}

export class DataPipelineRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DataPipelineRunList;
  hasMetadata(): boolean;
  clearMetadata(): DataPipelineRunList;

  getItemsList(): Array<DataPipelineRun>;
  setItemsList(value: Array<DataPipelineRun>): DataPipelineRunList;
  clearItemsList(): DataPipelineRunList;
  addItems(value?: DataPipelineRun, index?: number): DataPipelineRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineRunList.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineRunList): DataPipelineRunList.AsObject;
  static serializeBinaryToWriter(message: DataPipelineRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineRunList;
  static deserializeBinaryFromReader(message: DataPipelineRunList, reader: jspb.BinaryReader): DataPipelineRunList;
}

export namespace DataPipelineRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<DataPipelineRun.AsObject>,
  }
}

export class DataPipelineRunSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): DataPipelineRunSpec;
  hasVersionname(): boolean;
  clearVersionname(): DataPipelineRunSpec;

  getDatapipelinename(): string;
  setDatapipelinename(value: string): DataPipelineRunSpec;
  hasDatapipelinename(): boolean;
  clearDatapipelinename(): DataPipelineRunSpec;

  getOwner(): string;
  setOwner(value: string): DataPipelineRunSpec;
  hasOwner(): boolean;
  clearOwner(): DataPipelineRunSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): DataPipelineRunSpec;
  hasResources(): boolean;
  clearResources(): DataPipelineRunSpec;

  getPriority(): string;
  setPriority(value: string): DataPipelineRunSpec;
  hasPriority(): boolean;
  clearPriority(): DataPipelineRunSpec;

  getPaused(): boolean;
  setPaused(value: boolean): DataPipelineRunSpec;
  hasPaused(): boolean;
  clearPaused(): DataPipelineRunSpec;

  getAborted(): boolean;
  setAborted(value: boolean): DataPipelineRunSpec;
  hasAborted(): boolean;
  clearAborted(): DataPipelineRunSpec;

  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DataPipelineRunSpec;
  hasLabref(): boolean;
  clearLabref(): DataPipelineRunSpec;

  getModelclassname(): string;
  setModelclassname(value: string): DataPipelineRunSpec;
  hasModelclassname(): boolean;
  clearModelclassname(): DataPipelineRunSpec;

  getModelclassrunname(): string;
  setModelclassrunname(value: string): DataPipelineRunSpec;
  hasModelclassrunname(): boolean;
  clearModelclassrunname(): DataPipelineRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineRunSpec): DataPipelineRunSpec.AsObject;
  static serializeBinaryToWriter(message: DataPipelineRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineRunSpec;
  static deserializeBinaryFromReader(message: DataPipelineRunSpec, reader: jspb.BinaryReader): DataPipelineRunSpec;
}

export namespace DataPipelineRunSpec {
  export type AsObject = {
    versionname?: string,
    datapipelinename?: string,
    owner?: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    priority?: string,
    paused?: boolean,
    aborted?: boolean,
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    modelclassname?: string,
    modelclassrunname?: string,
  }
}

export class DataPipelineRunStatus extends jspb.Message {
  getReciperunsList(): Array<string>;
  setReciperunsList(value: Array<string>): DataPipelineRunStatus;
  clearReciperunsList(): DataPipelineRunStatus;
  addReciperuns(value: string, index?: number): DataPipelineRunStatus;

  getOutput(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setOutput(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): DataPipelineRunStatus;
  hasOutput(): boolean;
  clearOutput(): DataPipelineRunStatus;

  getPhase(): string;
  setPhase(value: string): DataPipelineRunStatus;
  hasPhase(): boolean;
  clearPhase(): DataPipelineRunStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataPipelineRunStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): DataPipelineRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): DataPipelineRunStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): DataPipelineRunStatus;

  getFailurereason(): string;
  setFailurereason(value: string): DataPipelineRunStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): DataPipelineRunStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): DataPipelineRunStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): DataPipelineRunStatus;

  getProgress(): number;
  setProgress(value: number): DataPipelineRunStatus;
  hasProgress(): boolean;
  clearProgress(): DataPipelineRunStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): DataPipelineRunStatus;
  hasLogs(): boolean;
  clearLogs(): DataPipelineRunStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataPipelineRunStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): DataPipelineRunStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): DataPipelineRunStatus;
  clearConditionsList(): DataPipelineRunStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineRunStatus): DataPipelineRunStatus.AsObject;
  static serializeBinaryToWriter(message: DataPipelineRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineRunStatus;
  static deserializeBinaryFromReader(message: DataPipelineRunStatus, reader: jspb.BinaryReader): DataPipelineRunStatus;
}

export namespace DataPipelineRunStatus {
  export type AsObject = {
    reciperunsList: Array<string>,
    output?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
    phase?: string,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    observedgeneration?: number,
    failurereason?: string,
    failuremessage?: string,
    progress?: number,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class DataPipelineSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): DataPipelineSpec;
  hasVersionname(): boolean;
  clearVersionname(): DataPipelineSpec;

  getModelclassname(): string;
  setModelclassname(value: string): DataPipelineSpec;
  hasModelclassname(): boolean;
  clearModelclassname(): DataPipelineSpec;

  getDescription(): string;
  setDescription(value: string): DataPipelineSpec;
  hasDescription(): boolean;
  clearDescription(): DataPipelineSpec;

  getDatasetselectorMap(): jspb.Map<string, string>;
  clearDatasetselectorMap(): DataPipelineSpec;

  getRecipesList(): Array<RecipePartSpec>;
  setRecipesList(value: Array<RecipePartSpec>): DataPipelineSpec;
  clearRecipesList(): DataPipelineSpec;
  addRecipes(value?: RecipePartSpec, index?: number): RecipePartSpec;

  getOutput(): DataOutputSpec | undefined;
  setOutput(value?: DataOutputSpec): DataPipelineSpec;
  hasOutput(): boolean;
  clearOutput(): DataPipelineSpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): DataPipelineSpec;
  hasSchedule(): boolean;
  clearSchedule(): DataPipelineSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): DataPipelineSpec;
  hasNotification(): boolean;
  clearNotification(): DataPipelineSpec;

  getOwner(): string;
  setOwner(value: string): DataPipelineSpec;
  hasOwner(): boolean;
  clearOwner(): DataPipelineSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): DataPipelineSpec;
  hasResources(): boolean;
  clearResources(): DataPipelineSpec;

  getPriority(): string;
  setPriority(value: string): DataPipelineSpec;
  hasPriority(): boolean;
  clearPriority(): DataPipelineSpec;

  getPaused(): boolean;
  setPaused(value: boolean): DataPipelineSpec;
  hasPaused(): boolean;
  clearPaused(): DataPipelineSpec;

  getTtl(): number;
  setTtl(value: number): DataPipelineSpec;
  hasTtl(): boolean;
  clearTtl(): DataPipelineSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineSpec): DataPipelineSpec.AsObject;
  static serializeBinaryToWriter(message: DataPipelineSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineSpec;
  static deserializeBinaryFromReader(message: DataPipelineSpec, reader: jspb.BinaryReader): DataPipelineSpec;
}

export namespace DataPipelineSpec {
  export type AsObject = {
    versionname?: string,
    modelclassname?: string,
    description?: string,
    datasetselectorMap: Array<[string, string]>,
    recipesList: Array<RecipePartSpec.AsObject>,
    output?: DataOutputSpec.AsObject,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    owner?: string,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    priority?: string,
    paused?: boolean,
    ttl?: number,
  }
}

export class DataPipelineStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): DataPipelineStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): DataPipelineStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataPipelineStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): DataPipelineStatus;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus): DataPipelineStatus;
  hasSchedule(): boolean;
  clearSchedule(): DataPipelineStatus;

  getLastrunname(): string;
  setLastrunname(value: string): DataPipelineStatus;
  hasLastrunname(): boolean;
  clearLastrunname(): DataPipelineStatus;

  getRunscount(): number;
  setRunscount(value: number): DataPipelineStatus;
  hasRunscount(): boolean;
  clearRunscount(): DataPipelineStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): DataPipelineStatus;
  clearConditionsList(): DataPipelineStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataPipelineStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DataPipelineStatus): DataPipelineStatus.AsObject;
  static serializeBinaryToWriter(message: DataPipelineStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataPipelineStatus;
  static deserializeBinaryFromReader(message: DataPipelineStatus, reader: jspb.BinaryReader): DataPipelineStatus;
}

export namespace DataPipelineStatus {
  export type AsObject = {
    observedgeneration?: number,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.AsObject,
    lastrunname?: string,
    runscount?: number,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class DataProduct extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): DataProduct;
  hasMetadata(): boolean;
  clearMetadata(): DataProduct;

  getSpec(): DataProductSpec | undefined;
  setSpec(value?: DataProductSpec): DataProduct;
  hasSpec(): boolean;
  clearSpec(): DataProduct;

  getStatus(): DataProductStatus | undefined;
  setStatus(value?: DataProductStatus): DataProduct;
  hasStatus(): boolean;
  clearStatus(): DataProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProduct.AsObject;
  static toObject(includeInstance: boolean, msg: DataProduct): DataProduct.AsObject;
  static serializeBinaryToWriter(message: DataProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProduct;
  static deserializeBinaryFromReader(message: DataProduct, reader: jspb.BinaryReader): DataProduct;
}

export namespace DataProduct {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DataProductSpec.AsObject,
    status?: DataProductStatus.AsObject,
  }
}

export class DataProductList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DataProductList;
  hasMetadata(): boolean;
  clearMetadata(): DataProductList;

  getItemsList(): Array<DataProduct>;
  setItemsList(value: Array<DataProduct>): DataProductList;
  clearItemsList(): DataProductList;
  addItems(value?: DataProduct, index?: number): DataProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductList.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductList): DataProductList.AsObject;
  static serializeBinaryToWriter(message: DataProductList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductList;
  static deserializeBinaryFromReader(message: DataProductList, reader: jspb.BinaryReader): DataProductList;
}

export namespace DataProductList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<DataProduct.AsObject>,
  }
}

export class DataProductSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): DataProductSpec;
  hasOwner(): boolean;
  clearOwner(): DataProductSpec;

  getPublic(): boolean;
  setPublic(value: boolean): DataProductSpec;
  hasPublic(): boolean;
  clearPublic(): DataProductSpec;

  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DataProductSpec;
  hasTenantref(): boolean;
  clearTenantref(): DataProductSpec;

  getGitlocation(): GitLocation | undefined;
  setGitlocation(value?: GitLocation): DataProductSpec;
  hasGitlocation(): boolean;
  clearGitlocation(): DataProductSpec;

  getCachebucketname(): string;
  setCachebucketname(value: string): DataProductSpec;
  hasCachebucketname(): boolean;
  clearCachebucketname(): DataProductSpec;

  getDefaultlabname(): string;
  setDefaultlabname(value: string): DataProductSpec;
  hasDefaultlabname(): boolean;
  clearDefaultlabname(): DataProductSpec;

  getDefaultservingsitename(): string;
  setDefaultservingsitename(value: string): DataProductSpec;
  hasDefaultservingsitename(): boolean;
  clearDefaultservingsitename(): DataProductSpec;

  getDefaultbucketname(): string;
  setDefaultbucketname(value: string): DataProductSpec;
  hasDefaultbucketname(): boolean;
  clearDefaultbucketname(): DataProductSpec;

  getTask(): string;
  setTask(value: string): DataProductSpec;
  hasTask(): boolean;
  clearTask(): DataProductSpec;

  getSubtask(): string;
  setSubtask(value: string): DataProductSpec;
  hasSubtask(): boolean;
  clearSubtask(): DataProductSpec;

  getDescription(): string;
  setDescription(value: string): DataProductSpec;
  hasDescription(): boolean;
  clearDescription(): DataProductSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): DataProductSpec;
  hasNotification(): boolean;
  clearNotification(): DataProductSpec;

  getTrainingresources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setTrainingresources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): DataProductSpec;
  hasTrainingresources(): boolean;
  clearTrainingresources(): DataProductSpec;

  getServingresources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setServingresources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): DataProductSpec;
  hasServingresources(): boolean;
  clearServingresources(): DataProductSpec;

  getPriority(): string;
  setPriority(value: string): DataProductSpec;
  hasPriority(): boolean;
  clearPriority(): DataProductSpec;

  getColor(): string;
  setColor(value: string): DataProductSpec;
  hasColor(): boolean;
  clearColor(): DataProductSpec;

  getApproval(): ApprovalSpec | undefined;
  setApproval(value?: ApprovalSpec): DataProductSpec;
  hasApproval(): boolean;
  clearApproval(): DataProductSpec;

  getPermissions(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec | undefined;
  setPermissions(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec): DataProductSpec;
  hasPermissions(): boolean;
  clearPermissions(): DataProductSpec;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): DataProductSpec;
  clearTagsList(): DataProductSpec;
  addTags(value: string, index?: number): DataProductSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductSpec): DataProductSpec.AsObject;
  static serializeBinaryToWriter(message: DataProductSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductSpec;
  static deserializeBinaryFromReader(message: DataProductSpec, reader: jspb.BinaryReader): DataProductSpec;
}

export namespace DataProductSpec {
  export type AsObject = {
    owner?: string,
    pb_public?: boolean,
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    gitlocation?: GitLocation.AsObject,
    cachebucketname?: string,
    defaultlabname?: string,
    defaultservingsitename?: string,
    defaultbucketname?: string,
    task?: string,
    subtask?: string,
    description?: string,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    trainingresources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    servingresources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    priority?: string,
    color?: string,
    approval?: ApprovalSpec.AsObject,
    permissions?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.PermissionsSpec.AsObject,
    tagsList: Array<string>,
  }
}

export class DataProductStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): DataProductStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): DataProductStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataProductStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): DataProductStatus;

  getDatasourcescount(): number;
  setDatasourcescount(value: number): DataProductStatus;
  hasDatasourcescount(): boolean;
  clearDatasourcescount(): DataProductStatus;

  getDatasetscount(): number;
  setDatasetscount(value: number): DataProductStatus;
  hasDatasetscount(): boolean;
  clearDatasetscount(): DataProductStatus;

  getDatapipelinecount(): number;
  setDatapipelinecount(value: number): DataProductStatus;
  hasDatapipelinecount(): boolean;
  clearDatapipelinecount(): DataProductStatus;

  getTotaldatapipelineruns(): number;
  setTotaldatapipelineruns(value: number): DataProductStatus;
  hasTotaldatapipelineruns(): boolean;
  clearTotaldatapipelineruns(): DataProductStatus;

  getStudiescount(): number;
  setStudiescount(value: number): DataProductStatus;
  hasStudiescount(): boolean;
  clearStudiescount(): DataProductStatus;

  getModelscount(): number;
  setModelscount(value: number): DataProductStatus;
  hasModelscount(): boolean;
  clearModelscount(): DataProductStatus;

  getPredictorscount(): number;
  setPredictorscount(value: number): DataProductStatus;
  hasPredictorscount(): boolean;
  clearPredictorscount(): DataProductStatus;

  getDataappscount(): number;
  setDataappscount(value: number): DataProductStatus;
  hasDataappscount(): boolean;
  clearDataappscount(): DataProductStatus;

  getPredictionscount(): number;
  setPredictionscount(value: number): DataProductStatus;
  hasPredictionscount(): boolean;
  clearPredictionscount(): DataProductStatus;

  getInfoalertscount(): number;
  setInfoalertscount(value: number): DataProductStatus;
  hasInfoalertscount(): boolean;
  clearInfoalertscount(): DataProductStatus;

  getErroralertscount(): number;
  setErroralertscount(value: number): DataProductStatus;
  hasErroralertscount(): boolean;
  clearErroralertscount(): DataProductStatus;

  getModelclassescount(): number;
  setModelclassescount(value: number): DataProductStatus;
  hasModelclassescount(): boolean;
  clearModelclassescount(): DataProductStatus;

  getFailurereason(): string;
  setFailurereason(value: string): DataProductStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): DataProductStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): DataProductStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): DataProductStatus;

  getBaselineversion(): string;
  setBaselineversion(value: string): DataProductStatus;
  hasBaselineversion(): boolean;
  clearBaselineversion(): DataProductStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): DataProductStatus;
  clearConditionsList(): DataProductStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductStatus): DataProductStatus.AsObject;
  static serializeBinaryToWriter(message: DataProductStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductStatus;
  static deserializeBinaryFromReader(message: DataProductStatus, reader: jspb.BinaryReader): DataProductStatus;
}

export namespace DataProductStatus {
  export type AsObject = {
    observedgeneration?: number,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    datasourcescount?: number,
    datasetscount?: number,
    datapipelinecount?: number,
    totaldatapipelineruns?: number,
    studiescount?: number,
    modelscount?: number,
    predictorscount?: number,
    dataappscount?: number,
    predictionscount?: number,
    infoalertscount?: number,
    erroralertscount?: number,
    modelclassescount?: number,
    failurereason?: string,
    failuremessage?: string,
    baselineversion?: string,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class DataProductVersion extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): DataProductVersion;
  hasMetadata(): boolean;
  clearMetadata(): DataProductVersion;

  getSpec(): DataProductVersionSpec | undefined;
  setSpec(value?: DataProductVersionSpec): DataProductVersion;
  hasSpec(): boolean;
  clearSpec(): DataProductVersion;

  getStatus(): DataProductVersionStatus | undefined;
  setStatus(value?: DataProductVersionStatus): DataProductVersion;
  hasStatus(): boolean;
  clearStatus(): DataProductVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductVersion.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductVersion): DataProductVersion.AsObject;
  static serializeBinaryToWriter(message: DataProductVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductVersion;
  static deserializeBinaryFromReader(message: DataProductVersion, reader: jspb.BinaryReader): DataProductVersion;
}

export namespace DataProductVersion {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DataProductVersionSpec.AsObject,
    status?: DataProductVersionStatus.AsObject,
  }
}

export class DataProductVersionList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DataProductVersionList;
  hasMetadata(): boolean;
  clearMetadata(): DataProductVersionList;

  getItemsList(): Array<DataProductVersion>;
  setItemsList(value: Array<DataProductVersion>): DataProductVersionList;
  clearItemsList(): DataProductVersionList;
  addItems(value?: DataProductVersion, index?: number): DataProductVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductVersionList.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductVersionList): DataProductVersionList.AsObject;
  static serializeBinaryToWriter(message: DataProductVersionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductVersionList;
  static deserializeBinaryFromReader(message: DataProductVersionList, reader: jspb.BinaryReader): DataProductVersionList;
}

export namespace DataProductVersionList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<DataProductVersion.AsObject>,
  }
}

export class DataProductVersionSpec extends jspb.Message {
  getProductref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setProductref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DataProductVersionSpec;
  hasProductref(): boolean;
  clearProductref(): DataProductVersionSpec;

  getDescription(): string;
  setDescription(value: string): DataProductVersionSpec;
  hasDescription(): boolean;
  clearDescription(): DataProductVersionSpec;

  getPrevversionname(): string;
  setPrevversionname(value: string): DataProductVersionSpec;
  hasPrevversionname(): boolean;
  clearPrevversionname(): DataProductVersionSpec;

  getBaseline(): boolean;
  setBaseline(value: boolean): DataProductVersionSpec;
  hasBaseline(): boolean;
  clearBaseline(): DataProductVersionSpec;

  getOwner(): string;
  setOwner(value: string): DataProductVersionSpec;
  hasOwner(): boolean;
  clearOwner(): DataProductVersionSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductVersionSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductVersionSpec): DataProductVersionSpec.AsObject;
  static serializeBinaryToWriter(message: DataProductVersionSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductVersionSpec;
  static deserializeBinaryFromReader(message: DataProductVersionSpec, reader: jspb.BinaryReader): DataProductVersionSpec;
}

export namespace DataProductVersionSpec {
  export type AsObject = {
    productref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    description?: string,
    prevversionname?: string,
    baseline?: boolean,
    owner?: string,
  }
}

export class DataProductVersionStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): DataProductVersionStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): DataProductVersionStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataProductVersionStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): DataProductVersionStatus;

  getFailurereason(): string;
  setFailurereason(value: string): DataProductVersionStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): DataProductVersionStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): DataProductVersionStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): DataProductVersionStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): DataProductVersionStatus;
  clearConditionsList(): DataProductVersionStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataProductVersionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DataProductVersionStatus): DataProductVersionStatus.AsObject;
  static serializeBinaryToWriter(message: DataProductVersionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataProductVersionStatus;
  static deserializeBinaryFromReader(message: DataProductVersionStatus, reader: jspb.BinaryReader): DataProductVersionStatus;
}

export namespace DataProductVersionStatus {
  export type AsObject = {
    observedgeneration?: number,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason?: string,
    failuremessage?: string,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class DataSource extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): DataSource;
  hasMetadata(): boolean;
  clearMetadata(): DataSource;

  getSpec(): DataSourceSpec | undefined;
  setSpec(value?: DataSourceSpec): DataSource;
  hasSpec(): boolean;
  clearSpec(): DataSource;

  getStatus(): DataSourceStatus | undefined;
  setStatus(value?: DataSourceStatus): DataSource;
  hasStatus(): boolean;
  clearStatus(): DataSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSource.AsObject;
  static toObject(includeInstance: boolean, msg: DataSource): DataSource.AsObject;
  static serializeBinaryToWriter(message: DataSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSource;
  static deserializeBinaryFromReader(message: DataSource, reader: jspb.BinaryReader): DataSource;
}

export namespace DataSource {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DataSourceSpec.AsObject,
    status?: DataSourceStatus.AsObject,
  }
}

export class DataSourceList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DataSourceList;
  hasMetadata(): boolean;
  clearMetadata(): DataSourceList;

  getItemsList(): Array<DataSource>;
  setItemsList(value: Array<DataSource>): DataSourceList;
  clearItemsList(): DataSourceList;
  addItems(value?: DataSource, index?: number): DataSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceList.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceList): DataSourceList.AsObject;
  static serializeBinaryToWriter(message: DataSourceList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceList;
  static deserializeBinaryFromReader(message: DataSourceList, reader: jspb.BinaryReader): DataSourceList;
}

export namespace DataSourceList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<DataSource.AsObject>,
  }
}

export class DataSourceSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): DataSourceSpec;
  hasOwner(): boolean;
  clearOwner(): DataSourceSpec;

  getVersionname(): string;
  setVersionname(value: string): DataSourceSpec;
  hasVersionname(): boolean;
  clearVersionname(): DataSourceSpec;

  getDescription(): string;
  setDescription(value: string): DataSourceSpec;
  hasDescription(): boolean;
  clearDescription(): DataSourceSpec;

  getDatasettype(): string;
  setDatasettype(value: string): DataSourceSpec;
  hasDatasettype(): boolean;
  clearDatasettype(): DataSourceSpec;

  getSchema(): Schema | undefined;
  setSchema(value?: Schema): DataSourceSpec;
  hasSchema(): boolean;
  clearSchema(): DataSourceSpec;

  getFlatfile(): FlatFileFormatSpec | undefined;
  setFlatfile(value?: FlatFileFormatSpec): DataSourceSpec;
  hasFlatfile(): boolean;
  clearFlatfile(): DataSourceSpec;

  getLabeled(): boolean;
  setLabeled(value: boolean): DataSourceSpec;
  hasLabeled(): boolean;
  clearLabeled(): DataSourceSpec;

  getSample(): SampleSpec | undefined;
  setSample(value?: SampleSpec): DataSourceSpec;
  hasSample(): boolean;
  clearSample(): DataSourceSpec;

  getTask(): string;
  setTask(value: string): DataSourceSpec;
  hasTask(): boolean;
  clearTask(): DataSourceSpec;

  getSubtask(): string;
  setSubtask(value: string): DataSourceSpec;
  hasSubtask(): boolean;
  clearSubtask(): DataSourceSpec;

  getRelationshipsList(): Array<RelationshipSpec>;
  setRelationshipsList(value: Array<RelationshipSpec>): DataSourceSpec;
  clearRelationshipsList(): DataSourceSpec;
  addRelationships(value?: RelationshipSpec, index?: number): RelationshipSpec;

  getLabeling(): LabelingSpec | undefined;
  setLabeling(value?: LabelingSpec): DataSourceSpec;
  hasLabeling(): boolean;
  clearLabeling(): DataSourceSpec;

  getInferredfrom(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setInferredfrom(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): DataSourceSpec;
  hasInferredfrom(): boolean;
  clearInferredfrom(): DataSourceSpec;

  getUnitteststemplate(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setUnitteststemplate(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): DataSourceSpec;
  hasUnitteststemplate(): boolean;
  clearUnitteststemplate(): DataSourceSpec;

  getIngestmethod(): string;
  setIngestmethod(value: string): DataSourceSpec;
  hasIngestmethod(): boolean;
  clearIngestmethod(): DataSourceSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceSpec): DataSourceSpec.AsObject;
  static serializeBinaryToWriter(message: DataSourceSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceSpec;
  static deserializeBinaryFromReader(message: DataSourceSpec, reader: jspb.BinaryReader): DataSourceSpec;
}

export namespace DataSourceSpec {
  export type AsObject = {
    owner?: string,
    versionname?: string,
    description?: string,
    datasettype?: string,
    schema?: Schema.AsObject,
    flatfile?: FlatFileFormatSpec.AsObject,
    labeled?: boolean,
    sample?: SampleSpec.AsObject,
    task?: string,
    subtask?: string,
    relationshipsList: Array<RelationshipSpec.AsObject>,
    labeling?: LabelingSpec.AsObject,
    inferredfrom?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
    unitteststemplate?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    ingestmethod?: string,
  }
}

export class DataSourceStatus extends jspb.Message {
  getCols(): number;
  setCols(value: number): DataSourceStatus;
  hasCols(): boolean;
  clearCols(): DataSourceStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): DataSourceStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): DataSourceStatus;

  getLastdatasetcreatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastdatasetcreatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataSourceStatus;
  hasLastdatasetcreatedat(): boolean;
  clearLastdatasetcreatedat(): DataSourceStatus;

  getLastdatasetname(): string;
  setLastdatasetname(value: string): DataSourceStatus;
  hasLastdatasetname(): boolean;
  clearLastdatasetname(): DataSourceStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DataSourceStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): DataSourceStatus;

  getFailurereason(): string;
  setFailurereason(value: string): DataSourceStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): DataSourceStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): DataSourceStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): DataSourceStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): DataSourceStatus;
  clearConditionsList(): DataSourceStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceStatus): DataSourceStatus.AsObject;
  static serializeBinaryToWriter(message: DataSourceStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceStatus;
  static deserializeBinaryFromReader(message: DataSourceStatus, reader: jspb.BinaryReader): DataSourceStatus;
}

export namespace DataSourceStatus {
  export type AsObject = {
    cols?: number,
    observedgeneration?: number,
    lastdatasetcreatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    lastdatasetname?: string,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failurereason?: string,
    failuremessage?: string,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class Dataset extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Dataset;
  hasMetadata(): boolean;
  clearMetadata(): Dataset;

  getSpec(): DatasetSpec | undefined;
  setSpec(value?: DatasetSpec): Dataset;
  hasSpec(): boolean;
  clearSpec(): Dataset;

  getStatus(): DatasetStatus | undefined;
  setStatus(value?: DatasetStatus): Dataset;
  hasStatus(): boolean;
  clearStatus(): Dataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dataset.AsObject;
  static toObject(includeInstance: boolean, msg: Dataset): Dataset.AsObject;
  static serializeBinaryToWriter(message: Dataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dataset;
  static deserializeBinaryFromReader(message: Dataset, reader: jspb.BinaryReader): Dataset;
}

export namespace Dataset {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DatasetSpec.AsObject,
    status?: DatasetStatus.AsObject,
  }
}

export class DatasetGroupByStatus extends jspb.Message {
  getDatasetsuri(): string;
  setDatasetsuri(value: string): DatasetGroupByStatus;
  hasDatasetsuri(): boolean;
  clearDatasetsuri(): DatasetGroupByStatus;

  getProfilesuri(): string;
  setProfilesuri(value: string): DatasetGroupByStatus;
  hasProfilesuri(): boolean;
  clearProfilesuri(): DatasetGroupByStatus;

  getReportsuri(): string;
  setReportsuri(value: string): DatasetGroupByStatus;
  hasReportsuri(): boolean;
  clearReportsuri(): DatasetGroupByStatus;

  getUnittestsuri(): string;
  setUnittestsuri(value: string): DatasetGroupByStatus;
  hasUnittestsuri(): boolean;
  clearUnittestsuri(): DatasetGroupByStatus;

  getFeaturesuri(): string;
  setFeaturesuri(value: string): DatasetGroupByStatus;
  hasFeaturesuri(): boolean;
  clearFeaturesuri(): DatasetGroupByStatus;

  getWorkerresultsList(): Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult>;
  setWorkerresultsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult>): DatasetGroupByStatus;
  clearWorkerresultsList(): DatasetGroupByStatus;
  addWorkerresults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult, index?: number): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetGroupByStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetGroupByStatus): DatasetGroupByStatus.AsObject;
  static serializeBinaryToWriter(message: DatasetGroupByStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetGroupByStatus;
  static deserializeBinaryFromReader(message: DatasetGroupByStatus, reader: jspb.BinaryReader): DatasetGroupByStatus;
}

export namespace DatasetGroupByStatus {
  export type AsObject = {
    datasetsuri?: string,
    profilesuri?: string,
    reportsuri?: string,
    unittestsuri?: string,
    featuresuri?: string,
    workerresultsList: Array<github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.WorkerRunResult.AsObject>,
  }
}

export class DatasetList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DatasetList;
  hasMetadata(): boolean;
  clearMetadata(): DatasetList;

  getItemsList(): Array<Dataset>;
  setItemsList(value: Array<Dataset>): DatasetList;
  clearItemsList(): DatasetList;
  addItems(value?: Dataset, index?: number): Dataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetList.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetList): DatasetList.AsObject;
  static serializeBinaryToWriter(message: DatasetList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetList;
  static deserializeBinaryFromReader(message: DatasetList, reader: jspb.BinaryReader): DatasetList;
}

export namespace DatasetList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Dataset.AsObject>,
  }
}

export class DatasetSnapshot extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): DatasetSnapshot;
  hasMetadata(): boolean;
  clearMetadata(): DatasetSnapshot;

  getSpec(): DatasetSnapshotSpec | undefined;
  setSpec(value?: DatasetSnapshotSpec): DatasetSnapshot;
  hasSpec(): boolean;
  clearSpec(): DatasetSnapshot;

  getStatus(): DatasetSnapshotStatus | undefined;
  setStatus(value?: DatasetSnapshotStatus): DatasetSnapshot;
  hasStatus(): boolean;
  clearStatus(): DatasetSnapshot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetSnapshot): DatasetSnapshot.AsObject;
  static serializeBinaryToWriter(message: DatasetSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetSnapshot;
  static deserializeBinaryFromReader(message: DatasetSnapshot, reader: jspb.BinaryReader): DatasetSnapshot;
}

export namespace DatasetSnapshot {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: DatasetSnapshotSpec.AsObject,
    status?: DatasetSnapshotStatus.AsObject,
  }
}

export class DatasetSnapshotList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): DatasetSnapshotList;
  hasMetadata(): boolean;
  clearMetadata(): DatasetSnapshotList;

  getItemsList(): Array<DatasetSnapshot>;
  setItemsList(value: Array<DatasetSnapshot>): DatasetSnapshotList;
  clearItemsList(): DatasetSnapshotList;
  addItems(value?: DatasetSnapshot, index?: number): DatasetSnapshot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetSnapshotList.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetSnapshotList): DatasetSnapshotList.AsObject;
  static serializeBinaryToWriter(message: DatasetSnapshotList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetSnapshotList;
  static deserializeBinaryFromReader(message: DatasetSnapshotList, reader: jspb.BinaryReader): DatasetSnapshotList;
}

export namespace DatasetSnapshotList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<DatasetSnapshot.AsObject>,
  }
}

export class DatasetSnapshotSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): DatasetSnapshotSpec;
  hasOwner(): boolean;
  clearOwner(): DatasetSnapshotSpec;

  getDatasetname(): string;
  setDatasetname(value: string): DatasetSnapshotSpec;
  hasDatasetname(): boolean;
  clearDatasetname(): DatasetSnapshotSpec;

  getTimeout(): number;
  setTimeout(value: number): DatasetSnapshotSpec;
  hasTimeout(): boolean;
  clearTimeout(): DatasetSnapshotSpec;

  getPause(): boolean;
  setPause(value: boolean): DatasetSnapshotSpec;
  hasPause(): boolean;
  clearPause(): DatasetSnapshotSpec;

  getAbort(): boolean;
  setAbort(value: boolean): DatasetSnapshotSpec;
  hasAbort(): boolean;
  clearAbort(): DatasetSnapshotSpec;

  getModelclassrunname(): string;
  setModelclassrunname(value: string): DatasetSnapshotSpec;
  hasModelclassrunname(): boolean;
  clearModelclassrunname(): DatasetSnapshotSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetSnapshotSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetSnapshotSpec): DatasetSnapshotSpec.AsObject;
  static serializeBinaryToWriter(message: DatasetSnapshotSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetSnapshotSpec;
  static deserializeBinaryFromReader(message: DatasetSnapshotSpec, reader: jspb.BinaryReader): DatasetSnapshotSpec;
}

export namespace DatasetSnapshotSpec {
  export type AsObject = {
    owner?: string,
    datasetname?: string,
    timeout?: number,
    pause?: boolean,
    abort?: boolean,
    modelclassrunname?: string,
  }
}

export class DatasetSnapshotStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): DatasetSnapshotStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): DatasetSnapshotStatus;

  getManifestlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setManifestlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): DatasetSnapshotStatus;
  hasManifestlocation(): boolean;
  clearManifestlocation(): DatasetSnapshotStatus;

  getManifestversion(): number;
  setManifestversion(value: number): DatasetSnapshotStatus;
  hasManifestversion(): boolean;
  clearManifestversion(): DatasetSnapshotStatus;

  getSnapshotversion(): number;
  setSnapshotversion(value: number): DatasetSnapshotStatus;
  hasSnapshotversion(): boolean;
  clearSnapshotversion(): DatasetSnapshotStatus;

  getStatistics(): DatasetStatistics | undefined;
  setStatistics(value?: DatasetStatistics): DatasetSnapshotStatus;
  hasStatistics(): boolean;
  clearStatistics(): DatasetSnapshotStatus;

  getPhase(): string;
  setPhase(value: string): DatasetSnapshotStatus;
  hasPhase(): boolean;
  clearPhase(): DatasetSnapshotStatus;

  getReportname(): string;
  setReportname(value: string): DatasetSnapshotStatus;
  hasReportname(): boolean;
  clearReportname(): DatasetSnapshotStatus;

  getDatalocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setDatalocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): DatasetSnapshotStatus;
  hasDatalocation(): boolean;
  clearDatalocation(): DatasetSnapshotStatus;

  getReportlocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setReportlocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): DatasetSnapshotStatus;
  hasReportlocation(): boolean;
  clearReportlocation(): DatasetSnapshotStatus;

  getProfilelocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setProfilelocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): DatasetSnapshotStatus;
  hasProfilelocation(): boolean;
  clearProfilelocation(): DatasetSnapshotStatus;

  getAnomalieslocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation | undefined;
  setAnomalieslocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation): DatasetSnapshotStatus;
  hasAnomalieslocation(): boolean;
  clearAnomalieslocation(): DatasetSnapshotStatus;

  getImbalanced(): boolean;
  setImbalanced(value: boolean): DatasetSnapshotStatus;
  hasImbalanced(): boolean;
  clearImbalanced(): DatasetSnapshotStatus;

  getUnittestresults(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult | undefined;
  setUnittestresults(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult): DatasetSnapshotStatus;
  hasUnittestresults(): boolean;
  clearUnittestresults(): DatasetSnapshotStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): DatasetSnapshotStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): DatasetSnapshotStatus;

  getProgress(): number;
  setProgress(value: number): DatasetSnapshotStatus;
  hasProgress(): boolean;
  clearProgress(): DatasetSnapshotStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): DatasetSnapshotStatus;
  hasLogs(): boolean;
  clearLogs(): DatasetSnapshotStatus;

  getHash(): string;
  setHash(value: string): DatasetSnapshotStatus;
  hasHash(): boolean;
  clearHash(): DatasetSnapshotStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DatasetSnapshotStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): DatasetSnapshotStatus;

  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DatasetSnapshotStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): DatasetSnapshotStatus;

  getLaststudyat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLaststudyat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DatasetSnapshotStatus;
  hasLaststudyat(): boolean;
  clearLaststudyat(): DatasetSnapshotStatus;

  getImages(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Images | undefined;
  setImages(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Images): DatasetSnapshotStatus;
  hasImages(): boolean;
  clearImages(): DatasetSnapshotStatus;

  getFeaturehistogramref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setFeaturehistogramref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DatasetSnapshotStatus;
  hasFeaturehistogramref(): boolean;
  clearFeaturehistogramref(): DatasetSnapshotStatus;

  getGroupby(): DatasetGroupByStatus | undefined;
  setGroupby(value?: DatasetGroupByStatus): DatasetSnapshotStatus;
  hasGroupby(): boolean;
  clearGroupby(): DatasetSnapshotStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): DatasetSnapshotStatus;
  clearConditionsList(): DatasetSnapshotStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetSnapshotStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetSnapshotStatus): DatasetSnapshotStatus.AsObject;
  static serializeBinaryToWriter(message: DatasetSnapshotStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetSnapshotStatus;
  static deserializeBinaryFromReader(message: DatasetSnapshotStatus, reader: jspb.BinaryReader): DatasetSnapshotStatus;
}

export namespace DatasetSnapshotStatus {
  export type AsObject = {
    observedgeneration?: number,
    manifestlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    manifestversion?: number,
    snapshotversion?: number,
    statistics?: DatasetStatistics.AsObject,
    phase?: string,
    reportname?: string,
    datalocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    reportlocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    profilelocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    anomalieslocation?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.FileLocation.AsObject,
    imbalanced?: boolean,
    unittestresults?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.AsObject,
    failuremessage?: string,
    progress?: number,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    hash?: string,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    laststudyat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    images?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Images.AsObject,
    featurehistogramref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    groupby?: DatasetGroupByStatus.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class DatasetSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): DatasetSpec;
  hasOwner(): boolean;
  clearOwner(): DatasetSpec;

  getDatasourcename(): string;
  setDatasourcename(value: string): DatasetSpec;
  hasDatasourcename(): boolean;
  clearDatasourcename(): DatasetSpec;

  getDescription(): string;
  setDescription(value: string): DatasetSpec;
  hasDescription(): boolean;
  clearDescription(): DatasetSpec;

  getRun(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSpec | undefined;
  setRun(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSpec): DatasetSpec;
  hasRun(): boolean;
  clearRun(): DatasetSpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): DatasetSpec;
  hasSchedule(): boolean;
  clearSchedule(): DatasetSpec;

  getRole(): string;
  setRole(value: string): DatasetSpec;
  hasRole(): boolean;
  clearRole(): DatasetSpec;

  getTask(): string;
  setTask(value: string): DatasetSpec;
  hasTask(): boolean;
  clearTask(): DatasetSpec;

  getSubtask(): string;
  setSubtask(value: string): DatasetSpec;
  hasSubtask(): boolean;
  clearSubtask(): DatasetSpec;

  getType(): string;
  setType(value: string): DatasetSpec;
  hasType(): boolean;
  clearType(): DatasetSpec;

  getOrigin(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setOrigin(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): DatasetSpec;
  hasOrigin(): boolean;
  clearOrigin(): DatasetSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): DatasetSpec;
  hasResources(): boolean;
  clearResources(): DatasetSpec;

  getUnittests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setUnittests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): DatasetSpec;
  hasUnittests(): boolean;
  clearUnittests(): DatasetSpec;

  getReport(): boolean;
  setReport(value: boolean): DatasetSpec;
  hasReport(): boolean;
  clearReport(): DatasetSpec;

  getUnittest(): boolean;
  setUnittest(value: boolean): DatasetSpec;
  hasUnittest(): boolean;
  clearUnittest(): DatasetSpec;

  getGeneratefeaturehistogram(): boolean;
  setGeneratefeaturehistogram(value: boolean): DatasetSpec;
  hasGeneratefeaturehistogram(): boolean;
  clearGeneratefeaturehistogram(): DatasetSpec;

  getFast(): boolean;
  setFast(value: boolean): DatasetSpec;
  hasFast(): boolean;
  clearFast(): DatasetSpec;

  getArtifactbucketname(): string;
  setArtifactbucketname(value: string): DatasetSpec;
  hasArtifactbucketname(): boolean;
  clearArtifactbucketname(): DatasetSpec;

  getSample(): SampleSpec | undefined;
  setSample(value?: SampleSpec): DatasetSpec;
  hasSample(): boolean;
  clearSample(): DatasetSpec;

  getSynthetic(): SyntheticSpec | undefined;
  setSynthetic(value?: SyntheticSpec): DatasetSpec;
  hasSynthetic(): boolean;
  clearSynthetic(): DatasetSpec;

  getCorrelation(): CorrelationSpec | undefined;
  setCorrelation(value?: CorrelationSpec): DatasetSpec;
  hasCorrelation(): boolean;
  clearCorrelation(): DatasetSpec;

  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DatasetSpec;
  hasLabref(): boolean;
  clearLabref(): DatasetSpec;

  getServingdatasetref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setServingdatasetref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DatasetSpec;
  hasServingdatasetref(): boolean;
  clearServingdatasetref(): DatasetSpec;

  getPredictorref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setPredictorref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): DatasetSpec;
  hasPredictorref(): boolean;
  clearPredictorref(): DatasetSpec;

  getGroupby(): GroupBySpec | undefined;
  setGroupby(value?: GroupBySpec): DatasetSpec;
  hasGroupby(): boolean;
  clearGroupby(): DatasetSpec;

  getGrouplocations(): GroupDatasetLocationSpec | undefined;
  setGrouplocations(value?: GroupDatasetLocationSpec): DatasetSpec;
  hasGrouplocations(): boolean;
  clearGrouplocations(): DatasetSpec;

  getKeyList(): Array<string>;
  setKeyList(value: Array<string>): DatasetSpec;
  clearKeyList(): DatasetSpec;
  addKey(value: string, index?: number): DatasetSpec;

  getModelclassname(): string;
  setModelclassname(value: string): DatasetSpec;
  hasModelclassname(): boolean;
  clearModelclassname(): DatasetSpec;

  getFeaturegroupname(): string;
  setFeaturegroupname(value: string): DatasetSpec;
  hasFeaturegroupname(): boolean;
  clearFeaturegroupname(): DatasetSpec;

  getNotification(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec | undefined;
  setNotification(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec): DatasetSpec;
  hasNotification(): boolean;
  clearNotification(): DatasetSpec;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): DatasetSpec;
  clearTagsList(): DatasetSpec;
  addTags(value: string, index?: number): DatasetSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetSpec.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetSpec): DatasetSpec.AsObject;
  static serializeBinaryToWriter(message: DatasetSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetSpec;
  static deserializeBinaryFromReader(message: DatasetSpec, reader: jspb.BinaryReader): DatasetSpec;
}

export namespace DatasetSpec {
  export type AsObject = {
    owner?: string,
    datasourcename?: string,
    description?: string,
    run?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSpec.AsObject,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    role?: string,
    task?: string,
    subtask?: string,
    type?: string,
    origin?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    unittests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    report?: boolean,
    unittest?: boolean,
    generatefeaturehistogram?: boolean,
    fast?: boolean,
    artifactbucketname?: string,
    sample?: SampleSpec.AsObject,
    synthetic?: SyntheticSpec.AsObject,
    correlation?: CorrelationSpec.AsObject,
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    servingdatasetref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    predictorref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    groupby?: GroupBySpec.AsObject,
    grouplocations?: GroupDatasetLocationSpec.AsObject,
    keyList: Array<string>,
    modelclassname?: string,
    featuregroupname?: string,
    notification?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.NotificationSpec.AsObject,
    tagsList: Array<string>,
  }
}

export class DatasetStatistics extends jspb.Message {
  getFeaturesList(): Array<FeatureStatistics>;
  setFeaturesList(value: Array<FeatureStatistics>): DatasetStatistics;
  clearFeaturesList(): DatasetStatistics;
  addFeatures(value?: FeatureStatistics, index?: number): FeatureStatistics;

  getRows(): number;
  setRows(value: number): DatasetStatistics;
  hasRows(): boolean;
  clearRows(): DatasetStatistics;

  getColumns(): number;
  setColumns(value: number): DatasetStatistics;
  hasColumns(): boolean;
  clearColumns(): DatasetStatistics;

  getSizeinbytes(): number;
  setSizeinbytes(value: number): DatasetStatistics;
  hasSizeinbytes(): boolean;
  clearSizeinbytes(): DatasetStatistics;

  getCorrelationswithtargetList(): Array<Correlation>;
  setCorrelationswithtargetList(value: Array<Correlation>): DatasetStatistics;
  clearCorrelationswithtargetList(): DatasetStatistics;
  addCorrelationswithtarget(value?: Correlation, index?: number): Correlation;

  getTopcorrelationsList(): Array<Correlation>;
  setTopcorrelationsList(value: Array<Correlation>): DatasetStatistics;
  clearTopcorrelationsList(): DatasetStatistics;
  addTopcorrelations(value?: Correlation, index?: number): Correlation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetStatistics): DatasetStatistics.AsObject;
  static serializeBinaryToWriter(message: DatasetStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetStatistics;
  static deserializeBinaryFromReader(message: DatasetStatistics, reader: jspb.BinaryReader): DatasetStatistics;
}

export namespace DatasetStatistics {
  export type AsObject = {
    featuresList: Array<FeatureStatistics.AsObject>,
    rows?: number,
    columns?: number,
    sizeinbytes?: number,
    correlationswithtargetList: Array<Correlation.AsObject>,
    topcorrelationsList: Array<Correlation.AsObject>,
  }
}

export class DatasetStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): DatasetStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): DatasetStatus;

  getVersion(): number;
  setVersion(value: number): DatasetStatus;
  hasVersion(): boolean;
  clearVersion(): DatasetStatus;

  getLastsnapshotversion(): number;
  setLastsnapshotversion(value: number): DatasetStatus;
  hasLastsnapshotversion(): boolean;
  clearLastsnapshotversion(): DatasetStatus;

  getAvailablesnapshotversionsList(): Array<number>;
  setAvailablesnapshotversionsList(value: Array<number>): DatasetStatus;
  clearAvailablesnapshotversionsList(): DatasetStatus;
  addAvailablesnapshotversions(value: number, index?: number): DatasetStatus;

  getLastsnapshotat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setLastsnapshotat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DatasetStatus;
  hasLastsnapshotat(): boolean;
  clearLastsnapshotat(): DatasetStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): DatasetStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): DatasetStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): DatasetStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): DatasetStatus;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus): DatasetStatus;
  hasSchedule(): boolean;
  clearSchedule(): DatasetStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): DatasetStatus;
  clearConditionsList(): DatasetStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetStatus): DatasetStatus.AsObject;
  static serializeBinaryToWriter(message: DatasetStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetStatus;
  static deserializeBinaryFromReader(message: DatasetStatus, reader: jspb.BinaryReader): DatasetStatus;
}

export namespace DatasetStatus {
  export type AsObject = {
    observedgeneration?: number,
    version?: number,
    lastsnapshotversion?: number,
    availablesnapshotversionsList: Array<number>,
    lastsnapshotat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    failuremessage?: string,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class DriftThreshold extends jspb.Message {
  getMetric(): string;
  setMetric(value: string): DriftThreshold;
  hasMetric(): boolean;
  clearMetric(): DriftThreshold;

  getValue(): number;
  setValue(value: number): DriftThreshold;
  hasValue(): boolean;
  clearValue(): DriftThreshold;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DriftThreshold.AsObject;
  static toObject(includeInstance: boolean, msg: DriftThreshold): DriftThreshold.AsObject;
  static serializeBinaryToWriter(message: DriftThreshold, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DriftThreshold;
  static deserializeBinaryFromReader(message: DriftThreshold, reader: jspb.BinaryReader): DriftThreshold;
}

export namespace DriftThreshold {
  export type AsObject = {
    metric?: string,
    value?: number,
  }
}

export class Entity extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Entity;
  hasMetadata(): boolean;
  clearMetadata(): Entity;

  getSpec(): EntitySpec | undefined;
  setSpec(value?: EntitySpec): Entity;
  hasSpec(): boolean;
  clearSpec(): Entity;

  getStatus(): EntityStatus | undefined;
  setStatus(value?: EntityStatus): Entity;
  hasStatus(): boolean;
  clearStatus(): Entity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
  static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entity;
  static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
}

export namespace Entity {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: EntitySpec.AsObject,
    status?: EntityStatus.AsObject,
  }
}

export class EntityList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): EntityList;
  hasMetadata(): boolean;
  clearMetadata(): EntityList;

  getItemsList(): Array<Entity>;
  setItemsList(value: Array<Entity>): EntityList;
  clearItemsList(): EntityList;
  addItems(value?: Entity, index?: number): Entity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityList.AsObject;
  static toObject(includeInstance: boolean, msg: EntityList): EntityList.AsObject;
  static serializeBinaryToWriter(message: EntityList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityList;
  static deserializeBinaryFromReader(message: EntityList, reader: jspb.BinaryReader): EntityList;
}

export namespace EntityList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Entity.AsObject>,
  }
}

export class EntitySpec extends jspb.Message {
  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): EntitySpec;
  hasTenantref(): boolean;
  clearTenantref(): EntitySpec;

  getDescription(): string;
  setDescription(value: string): EntitySpec;
  hasDescription(): boolean;
  clearDescription(): EntitySpec;

  getJoinkey(): string;
  setJoinkey(value: string): EntitySpec;
  hasJoinkey(): boolean;
  clearJoinkey(): EntitySpec;

  getOwner(): string;
  setOwner(value: string): EntitySpec;
  hasOwner(): boolean;
  clearOwner(): EntitySpec;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): EntitySpec;
  clearTagsList(): EntitySpec;
  addTags(value: string, index?: number): EntitySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntitySpec.AsObject;
  static toObject(includeInstance: boolean, msg: EntitySpec): EntitySpec.AsObject;
  static serializeBinaryToWriter(message: EntitySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntitySpec;
  static deserializeBinaryFromReader(message: EntitySpec, reader: jspb.BinaryReader): EntitySpec;
}

export namespace EntitySpec {
  export type AsObject = {
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    description?: string,
    joinkey?: string,
    owner?: string,
    tagsList: Array<string>,
  }
}

export class EntityStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): EntityStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): EntityStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): EntityStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): EntityStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): EntityStatus;
  clearConditionsList(): EntityStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityStatus.AsObject;
  static toObject(includeInstance: boolean, msg: EntityStatus): EntityStatus.AsObject;
  static serializeBinaryToWriter(message: EntityStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityStatus;
  static deserializeBinaryFromReader(message: EntityStatus, reader: jspb.BinaryReader): EntityStatus;
}

export namespace EntityStatus {
  export type AsObject = {
    observedgeneration?: number,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class ExcelNotebookSpec extends jspb.Message {
  getFirstsheetwithdata(): boolean;
  setFirstsheetwithdata(value: boolean): ExcelNotebookSpec;
  hasFirstsheetwithdata(): boolean;
  clearFirstsheetwithdata(): ExcelNotebookSpec;

  getSheetname(): string;
  setSheetname(value: string): ExcelNotebookSpec;
  hasSheetname(): boolean;
  clearSheetname(): ExcelNotebookSpec;

  getSheetindex(): number;
  setSheetindex(value: number): ExcelNotebookSpec;
  hasSheetindex(): boolean;
  clearSheetindex(): ExcelNotebookSpec;

  getColumnnamerow(): number;
  setColumnnamerow(value: number): ExcelNotebookSpec;
  hasColumnnamerow(): boolean;
  clearColumnnamerow(): ExcelNotebookSpec;

  getData(): ExcelSheetArea | undefined;
  setData(value?: ExcelSheetArea): ExcelNotebookSpec;
  hasData(): boolean;
  clearData(): ExcelNotebookSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExcelNotebookSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ExcelNotebookSpec): ExcelNotebookSpec.AsObject;
  static serializeBinaryToWriter(message: ExcelNotebookSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExcelNotebookSpec;
  static deserializeBinaryFromReader(message: ExcelNotebookSpec, reader: jspb.BinaryReader): ExcelNotebookSpec;
}

export namespace ExcelNotebookSpec {
  export type AsObject = {
    firstsheetwithdata?: boolean,
    sheetname?: string,
    sheetindex?: number,
    columnnamerow?: number,
    data?: ExcelSheetArea.AsObject,
  }
}

export class ExcelSheetArea extends jspb.Message {
  getEntiresheet(): boolean;
  setEntiresheet(value: boolean): ExcelSheetArea;
  hasEntiresheet(): boolean;
  clearEntiresheet(): ExcelSheetArea;

  getFromcolumn(): number;
  setFromcolumn(value: number): ExcelSheetArea;
  hasFromcolumn(): boolean;
  clearFromcolumn(): ExcelSheetArea;

  getTocolumn(): number;
  setTocolumn(value: number): ExcelSheetArea;
  hasTocolumn(): boolean;
  clearTocolumn(): ExcelSheetArea;

  getFromrow(): number;
  setFromrow(value: number): ExcelSheetArea;
  hasFromrow(): boolean;
  clearFromrow(): ExcelSheetArea;

  getTorow(): number;
  setTorow(value: number): ExcelSheetArea;
  hasTorow(): boolean;
  clearTorow(): ExcelSheetArea;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExcelSheetArea.AsObject;
  static toObject(includeInstance: boolean, msg: ExcelSheetArea): ExcelSheetArea.AsObject;
  static serializeBinaryToWriter(message: ExcelSheetArea, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExcelSheetArea;
  static deserializeBinaryFromReader(message: ExcelSheetArea, reader: jspb.BinaryReader): ExcelSheetArea;
}

export namespace ExcelSheetArea {
  export type AsObject = {
    entiresheet?: boolean,
    fromcolumn?: number,
    tocolumn?: number,
    fromrow?: number,
    torow?: number,
  }
}

export class FeatureGroup extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): FeatureGroup;
  hasMetadata(): boolean;
  clearMetadata(): FeatureGroup;

  getSpec(): FeatureGroupSpec | undefined;
  setSpec(value?: FeatureGroupSpec): FeatureGroup;
  hasSpec(): boolean;
  clearSpec(): FeatureGroup;

  getStatus(): FeatureGroupStatus | undefined;
  setStatus(value?: FeatureGroupStatus): FeatureGroup;
  hasStatus(): boolean;
  clearStatus(): FeatureGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureGroup.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureGroup): FeatureGroup.AsObject;
  static serializeBinaryToWriter(message: FeatureGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureGroup;
  static deserializeBinaryFromReader(message: FeatureGroup, reader: jspb.BinaryReader): FeatureGroup;
}

export namespace FeatureGroup {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: FeatureGroupSpec.AsObject,
    status?: FeatureGroupStatus.AsObject,
  }
}

export class FeatureGroupList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): FeatureGroupList;
  hasMetadata(): boolean;
  clearMetadata(): FeatureGroupList;

  getItemsList(): Array<FeatureGroup>;
  setItemsList(value: Array<FeatureGroup>): FeatureGroupList;
  clearItemsList(): FeatureGroupList;
  addItems(value?: FeatureGroup, index?: number): FeatureGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureGroupList.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureGroupList): FeatureGroupList.AsObject;
  static serializeBinaryToWriter(message: FeatureGroupList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureGroupList;
  static deserializeBinaryFromReader(message: FeatureGroupList, reader: jspb.BinaryReader): FeatureGroupList;
}

export namespace FeatureGroupList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<FeatureGroup.AsObject>,
  }
}

export class FeatureGroupSpec extends jspb.Message {
  getTenantref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setTenantref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): FeatureGroupSpec;
  hasTenantref(): boolean;
  clearTenantref(): FeatureGroupSpec;

  getOwner(): string;
  setOwner(value: string): FeatureGroupSpec;
  hasOwner(): boolean;
  clearOwner(): FeatureGroupSpec;

  getDescription(): string;
  setDescription(value: string): FeatureGroupSpec;
  hasDescription(): boolean;
  clearDescription(): FeatureGroupSpec;

  getArtifactbucketname(): string;
  setArtifactbucketname(value: string): FeatureGroupSpec;
  hasArtifactbucketname(): boolean;
  clearArtifactbucketname(): FeatureGroupSpec;

  getIngesttype(): string;
  setIngesttype(value: string): FeatureGroupSpec;
  hasIngesttype(): boolean;
  clearIngesttype(): FeatureGroupSpec;

  getEntityname(): string;
  setEntityname(value: string): FeatureGroupSpec;
  hasEntityname(): boolean;
  clearEntityname(): FeatureGroupSpec;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): FeatureGroupSpec;
  clearTagsList(): FeatureGroupSpec;
  addTags(value: string, index?: number): FeatureGroupSpec;

  getIngestschedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setIngestschedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): FeatureGroupSpec;
  hasIngestschedule(): boolean;
  clearIngestschedule(): FeatureGroupSpec;

  getSyncschedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSyncschedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): FeatureGroupSpec;
  hasSyncschedule(): boolean;
  clearSyncschedule(): FeatureGroupSpec;

  getFlatfile(): FlatFileFormatSpec | undefined;
  setFlatfile(value?: FlatFileFormatSpec): FeatureGroupSpec;
  hasFlatfile(): boolean;
  clearFlatfile(): FeatureGroupSpec;

  getSchema(): Schema | undefined;
  setSchema(value?: Schema): FeatureGroupSpec;
  hasSchema(): boolean;
  clearSchema(): FeatureGroupSpec;

  getTests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setTests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): FeatureGroupSpec;
  hasTests(): boolean;
  clearTests(): FeatureGroupSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): FeatureGroupSpec;
  hasLocation(): boolean;
  clearLocation(): FeatureGroupSpec;

  getTimecolumn(): string;
  setTimecolumn(value: string): FeatureGroupSpec;
  hasTimecolumn(): boolean;
  clearTimecolumn(): FeatureGroupSpec;

  getTimecolumnformat(): string;
  setTimecolumnformat(value: string): FeatureGroupSpec;
  hasTimecolumnformat(): boolean;
  clearTimecolumnformat(): FeatureGroupSpec;

  getKeycolumn(): string;
  setKeycolumn(value: string): FeatureGroupSpec;
  hasKeycolumn(): boolean;
  clearKeycolumn(): FeatureGroupSpec;

  getMaterialization(): MaterializationSpec | undefined;
  setMaterialization(value?: MaterializationSpec): FeatureGroupSpec;
  hasMaterialization(): boolean;
  clearMaterialization(): FeatureGroupSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): FeatureGroupSpec;
  hasResources(): boolean;
  clearResources(): FeatureGroupSpec;

  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): FeatureGroupSpec;
  hasLabref(): boolean;
  clearLabref(): FeatureGroupSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureGroupSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureGroupSpec): FeatureGroupSpec.AsObject;
  static serializeBinaryToWriter(message: FeatureGroupSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureGroupSpec;
  static deserializeBinaryFromReader(message: FeatureGroupSpec, reader: jspb.BinaryReader): FeatureGroupSpec;
}

export namespace FeatureGroupSpec {
  export type AsObject = {
    tenantref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    owner?: string,
    description?: string,
    artifactbucketname?: string,
    ingesttype?: string,
    entityname?: string,
    tagsList: Array<string>,
    ingestschedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    syncschedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
    flatfile?: FlatFileFormatSpec.AsObject,
    schema?: Schema.AsObject,
    tests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
    timecolumn?: string,
    timecolumnformat?: string,
    keycolumn?: string,
    materialization?: MaterializationSpec.AsObject,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
  }
}

export class FeatureGroupStatus extends jspb.Message {
  getPhase(): string;
  setPhase(value: string): FeatureGroupStatus;
  hasPhase(): boolean;
  clearPhase(): FeatureGroupStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): FeatureGroupStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): FeatureGroupStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeatureGroupStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): FeatureGroupStatus;

  getRows(): number;
  setRows(value: number): FeatureGroupStatus;
  hasRows(): boolean;
  clearRows(): FeatureGroupStatus;

  getIngestschedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus | undefined;
  setIngestschedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus): FeatureGroupStatus;
  hasIngestschedule(): boolean;
  clearIngestschedule(): FeatureGroupStatus;

  getSyncschedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus | undefined;
  setSyncschedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus): FeatureGroupStatus;
  hasSyncschedule(): boolean;
  clearSyncschedule(): FeatureGroupStatus;

  getOnlinetable(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setOnlinetable(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): FeatureGroupStatus;
  hasOnlinetable(): boolean;
  clearOnlinetable(): FeatureGroupStatus;

  getOnlinetablecreated(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setOnlinetablecreated(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeatureGroupStatus;
  hasOnlinetablecreated(): boolean;
  clearOnlinetablecreated(): FeatureGroupStatus;

  getIngestdatasetname(): string;
  setIngestdatasetname(value: string): FeatureGroupStatus;
  hasIngestdatasetname(): boolean;
  clearIngestdatasetname(): FeatureGroupStatus;

  getFailurereason(): string;
  setFailurereason(value: string): FeatureGroupStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): FeatureGroupStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): FeatureGroupStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): FeatureGroupStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): FeatureGroupStatus;
  clearConditionsList(): FeatureGroupStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureGroupStatus.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureGroupStatus): FeatureGroupStatus.AsObject;
  static serializeBinaryToWriter(message: FeatureGroupStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureGroupStatus;
  static deserializeBinaryFromReader(message: FeatureGroupStatus, reader: jspb.BinaryReader): FeatureGroupStatus;
}

export namespace FeatureGroupStatus {
  export type AsObject = {
    phase?: string,
    observedgeneration?: number,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    rows?: number,
    ingestschedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.AsObject,
    syncschedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunScheduleStatus.AsObject,
    onlinetable?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
    onlinetablecreated?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    ingestdatasetname?: string,
    failurereason?: string,
    failuremessage?: string,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class FeatureHistogram extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): FeatureHistogram;
  hasMetadata(): boolean;
  clearMetadata(): FeatureHistogram;

  getSpec(): FeatureHistogramSpec | undefined;
  setSpec(value?: FeatureHistogramSpec): FeatureHistogram;
  hasSpec(): boolean;
  clearSpec(): FeatureHistogram;

  getStatus(): FeatureHistogramStatus | undefined;
  setStatus(value?: FeatureHistogramStatus): FeatureHistogram;
  hasStatus(): boolean;
  clearStatus(): FeatureHistogram;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureHistogram.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureHistogram): FeatureHistogram.AsObject;
  static serializeBinaryToWriter(message: FeatureHistogram, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureHistogram;
  static deserializeBinaryFromReader(message: FeatureHistogram, reader: jspb.BinaryReader): FeatureHistogram;
}

export namespace FeatureHistogram {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: FeatureHistogramSpec.AsObject,
    status?: FeatureHistogramStatus.AsObject,
  }
}

export class FeatureHistogramList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): FeatureHistogramList;
  hasMetadata(): boolean;
  clearMetadata(): FeatureHistogramList;

  getItemsList(): Array<FeatureHistogram>;
  setItemsList(value: Array<FeatureHistogram>): FeatureHistogramList;
  clearItemsList(): FeatureHistogramList;
  addItems(value?: FeatureHistogram, index?: number): FeatureHistogram;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureHistogramList.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureHistogramList): FeatureHistogramList.AsObject;
  static serializeBinaryToWriter(message: FeatureHistogramList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureHistogramList;
  static deserializeBinaryFromReader(message: FeatureHistogramList, reader: jspb.BinaryReader): FeatureHistogramList;
}

export namespace FeatureHistogramList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<FeatureHistogram.AsObject>,
  }
}

export class FeatureHistogramSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): FeatureHistogramSpec;
  hasOwner(): boolean;
  clearOwner(): FeatureHistogramSpec;

  getVersionname(): string;
  setVersionname(value: string): FeatureHistogramSpec;
  hasVersionname(): boolean;
  clearVersionname(): FeatureHistogramSpec;

  getDescription(): string;
  setDescription(value: string): FeatureHistogramSpec;
  hasDescription(): boolean;
  clearDescription(): FeatureHistogramSpec;

  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): FeatureHistogramSpec;
  clearColumnsList(): FeatureHistogramSpec;
  addColumns(value: string, index?: number): FeatureHistogramSpec;

  getSourceref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setSourceref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): FeatureHistogramSpec;
  hasSourceref(): boolean;
  clearSourceref(): FeatureHistogramSpec;

  getTraining(): boolean;
  setTraining(value: boolean): FeatureHistogramSpec;
  hasTraining(): boolean;
  clearTraining(): FeatureHistogramSpec;

  getLive(): boolean;
  setLive(value: boolean): FeatureHistogramSpec;
  hasLive(): boolean;
  clearLive(): FeatureHistogramSpec;

  getStart(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStart(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeatureHistogramSpec;
  hasStart(): boolean;
  clearStart(): FeatureHistogramSpec;

  getEnd(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setEnd(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeatureHistogramSpec;
  hasEnd(): boolean;
  clearEnd(): FeatureHistogramSpec;

  getBaseref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setBaseref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): FeatureHistogramSpec;
  hasBaseref(): boolean;
  clearBaseref(): FeatureHistogramSpec;

  getDriftthresholdsList(): Array<DriftThreshold>;
  setDriftthresholdsList(value: Array<DriftThreshold>): FeatureHistogramSpec;
  clearDriftthresholdsList(): FeatureHistogramSpec;
  addDriftthresholds(value?: DriftThreshold, index?: number): DriftThreshold;

  getSyncintervalsec(): number;
  setSyncintervalsec(value: number): FeatureHistogramSpec;
  hasSyncintervalsec(): boolean;
  clearSyncintervalsec(): FeatureHistogramSpec;

  getUnittests(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setUnittests(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): FeatureHistogramSpec;
  hasUnittests(): boolean;
  clearUnittests(): FeatureHistogramSpec;

  getGenunittests(): boolean;
  setGenunittests(value: boolean): FeatureHistogramSpec;
  hasGenunittests(): boolean;
  clearGenunittests(): FeatureHistogramSpec;

  getFeaturefilter(): string;
  setFeaturefilter(value: string): FeatureHistogramSpec;
  hasFeaturefilter(): boolean;
  clearFeaturefilter(): FeatureHistogramSpec;

  getReferencetype(): string;
  setReferencetype(value: string): FeatureHistogramSpec;
  hasReferencetype(): boolean;
  clearReferencetype(): FeatureHistogramSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureHistogramSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureHistogramSpec): FeatureHistogramSpec.AsObject;
  static serializeBinaryToWriter(message: FeatureHistogramSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureHistogramSpec;
  static deserializeBinaryFromReader(message: FeatureHistogramSpec, reader: jspb.BinaryReader): FeatureHistogramSpec;
}

export namespace FeatureHistogramSpec {
  export type AsObject = {
    owner?: string,
    versionname?: string,
    description?: string,
    columnsList: Array<string>,
    sourceref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    training?: boolean,
    live?: boolean,
    start?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    end?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    baseref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    driftthresholdsList: Array<DriftThreshold.AsObject>,
    syncintervalsec?: number,
    unittests?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
    genunittests?: boolean,
    featurefilter?: string,
    referencetype?: string,
  }
}

export class FeatureHistogramStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): FeatureHistogramStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): FeatureHistogramStatus;

  getColumnsList(): Array<ColumnHistogram>;
  setColumnsList(value: Array<ColumnHistogram>): FeatureHistogramStatus;
  clearColumnsList(): FeatureHistogramStatus;
  addColumns(value?: ColumnHistogram, index?: number): ColumnHistogram;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): FeatureHistogramStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): FeatureHistogramStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): FeatureHistogramStatus;
  hasLogs(): boolean;
  clearLogs(): FeatureHistogramStatus;

  getPhase(): string;
  setPhase(value: string): FeatureHistogramStatus;
  hasPhase(): boolean;
  clearPhase(): FeatureHistogramStatus;

  getFailurereason(): string;
  setFailurereason(value: string): FeatureHistogramStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): FeatureHistogramStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): FeatureHistogramStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): FeatureHistogramStatus;

  getUnittestsresult(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult | undefined;
  setUnittestsresult(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult): FeatureHistogramStatus;
  hasUnittestsresult(): boolean;
  clearUnittestsresult(): FeatureHistogramStatus;

  getTotal(): number;
  setTotal(value: number): FeatureHistogramStatus;
  hasTotal(): boolean;
  clearTotal(): FeatureHistogramStatus;

  getErrors(): number;
  setErrors(value: number): FeatureHistogramStatus;
  hasErrors(): boolean;
  clearErrors(): FeatureHistogramStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): FeatureHistogramStatus;
  clearConditionsList(): FeatureHistogramStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureHistogramStatus.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureHistogramStatus): FeatureHistogramStatus.AsObject;
  static serializeBinaryToWriter(message: FeatureHistogramStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureHistogramStatus;
  static deserializeBinaryFromReader(message: FeatureHistogramStatus, reader: jspb.BinaryReader): FeatureHistogramStatus;
}

export namespace FeatureHistogramStatus {
  export type AsObject = {
    observedgeneration?: number,
    columnsList: Array<ColumnHistogram.AsObject>,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    phase?: string,
    failurereason?: string,
    failuremessage?: string,
    unittestsresult?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuiteResult.AsObject,
    total?: number,
    errors?: number,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class FeatureStatistics extends jspb.Message {
  getName(): string;
  setName(value: string): FeatureStatistics;
  hasName(): boolean;
  clearName(): FeatureStatistics;

  getDatatype(): string;
  setDatatype(value: string): FeatureStatistics;
  hasDatatype(): boolean;
  clearDatatype(): FeatureStatistics;

  getCount(): number;
  setCount(value: number): FeatureStatistics;
  hasCount(): boolean;
  clearCount(): FeatureStatistics;

  getDistinct(): number;
  setDistinct(value: number): FeatureStatistics;
  hasDistinct(): boolean;
  clearDistinct(): FeatureStatistics;

  getMissing(): number;
  setMissing(value: number): FeatureStatistics;
  hasMissing(): boolean;
  clearMissing(): FeatureStatistics;

  getPercentmissing(): number;
  setPercentmissing(value: number): FeatureStatistics;
  hasPercentmissing(): boolean;
  clearPercentmissing(): FeatureStatistics;

  getMean(): number;
  setMean(value: number): FeatureStatistics;
  hasMean(): boolean;
  clearMean(): FeatureStatistics;

  getStddev(): number;
  setStddev(value: number): FeatureStatistics;
  hasStddev(): boolean;
  clearStddev(): FeatureStatistics;

  getVariance(): number;
  setVariance(value: number): FeatureStatistics;
  hasVariance(): boolean;
  clearVariance(): FeatureStatistics;

  getMin(): number;
  setMin(value: number): FeatureStatistics;
  hasMin(): boolean;
  clearMin(): FeatureStatistics;

  getMax(): number;
  setMax(value: number): FeatureStatistics;
  hasMax(): boolean;
  clearMax(): FeatureStatistics;

  getKurtosis(): number;
  setKurtosis(value: number): FeatureStatistics;
  hasKurtosis(): boolean;
  clearKurtosis(): FeatureStatistics;

  getSkewness(): number;
  setSkewness(value: number): FeatureStatistics;
  hasSkewness(): boolean;
  clearSkewness(): FeatureStatistics;

  getSum(): number;
  setSum(value: number): FeatureStatistics;
  hasSum(): boolean;
  clearSum(): FeatureStatistics;

  getMad(): number;
  setMad(value: number): FeatureStatistics;
  hasMad(): boolean;
  clearMad(): FeatureStatistics;

  getP25(): number;
  setP25(value: number): FeatureStatistics;
  hasP25(): boolean;
  clearP25(): FeatureStatistics;

  getP50(): number;
  setP50(value: number): FeatureStatistics;
  hasP50(): boolean;
  clearP50(): FeatureStatistics;

  getP75(): number;
  setP75(value: number): FeatureStatistics;
  hasP75(): boolean;
  clearP75(): FeatureStatistics;

  getIqr(): number;
  setIqr(value: number): FeatureStatistics;
  hasIqr(): boolean;
  clearIqr(): FeatureStatistics;

  getMode(): string;
  setMode(value: string): FeatureStatistics;
  hasMode(): boolean;
  clearMode(): FeatureStatistics;

  getZeros(): number;
  setZeros(value: number): FeatureStatistics;
  hasZeros(): boolean;
  clearZeros(): FeatureStatistics;

  getInvalid(): number;
  setInvalid(value: number): FeatureStatistics;
  hasInvalid(): boolean;
  clearInvalid(): FeatureStatistics;

  getImportance(): number;
  setImportance(value: number): FeatureStatistics;
  hasImportance(): boolean;
  clearImportance(): FeatureStatistics;

  getTarget(): boolean;
  setTarget(value: boolean): FeatureStatistics;
  hasTarget(): boolean;
  clearTarget(): FeatureStatistics;

  getIgnore(): boolean;
  setIgnore(value: boolean): FeatureStatistics;
  hasIgnore(): boolean;
  clearIgnore(): FeatureStatistics;

  getNullable(): boolean;
  setNullable(value: boolean): FeatureStatistics;
  hasNullable(): boolean;
  clearNullable(): FeatureStatistics;

  getHighcardinality(): boolean;
  setHighcardinality(value: boolean): FeatureStatistics;
  hasHighcardinality(): boolean;
  clearHighcardinality(): FeatureStatistics;

  getHighcorrwithotherfeatures(): boolean;
  setHighcorrwithotherfeatures(value: boolean): FeatureStatistics;
  hasHighcorrwithotherfeatures(): boolean;
  clearHighcorrwithotherfeatures(): FeatureStatistics;

  getLowcorrwithtarget(): boolean;
  setLowcorrwithtarget(value: boolean): FeatureStatistics;
  hasLowcorrwithtarget(): boolean;
  clearLowcorrwithtarget(): FeatureStatistics;

  getHighmissingpct(): boolean;
  setHighmissingpct(value: boolean): FeatureStatistics;
  hasHighmissingpct(): boolean;
  clearHighmissingpct(): FeatureStatistics;

  getSkewed(): boolean;
  setSkewed(value: boolean): FeatureStatistics;
  hasSkewed(): boolean;
  clearSkewed(): FeatureStatistics;

  getConstant(): boolean;
  setConstant(value: boolean): FeatureStatistics;
  hasConstant(): boolean;
  clearConstant(): FeatureStatistics;

  getDuplicate(): boolean;
  setDuplicate(value: boolean): FeatureStatistics;
  hasDuplicate(): boolean;
  clearDuplicate(): FeatureStatistics;

  getReserved(): boolean;
  setReserved(value: boolean): FeatureStatistics;
  hasReserved(): boolean;
  clearReserved(): FeatureStatistics;

  getCompleteness(): number;
  setCompleteness(value: number): FeatureStatistics;
  hasCompleteness(): boolean;
  clearCompleteness(): FeatureStatistics;

  getDistinctvaluecount(): number;
  setDistinctvaluecount(value: number): FeatureStatistics;
  hasDistinctvaluecount(): boolean;
  clearDistinctvaluecount(): FeatureStatistics;

  getMostfreqvaluesratio(): number;
  setMostfreqvaluesratio(value: number): FeatureStatistics;
  hasMostfreqvaluesratio(): boolean;
  clearMostfreqvaluesratio(): FeatureStatistics;

  getHistogram(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.HistogramData | undefined;
  setHistogram(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.HistogramData): FeatureStatistics;
  hasHistogram(): boolean;
  clearHistogram(): FeatureStatistics;

  getCorrtotarget(): number;
  setCorrtotarget(value: number): FeatureStatistics;
  hasCorrtotarget(): boolean;
  clearCorrtotarget(): FeatureStatistics;

  getIndex(): number;
  setIndex(value: number): FeatureStatistics;
  hasIndex(): boolean;
  clearIndex(): FeatureStatistics;

  getOutliers(): OutlierStatistics | undefined;
  setOutliers(value?: OutlierStatistics): FeatureStatistics;
  hasOutliers(): boolean;
  clearOutliers(): FeatureStatistics;

  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): FeatureStatistics;
  clearValuesList(): FeatureStatistics;
  addValues(value: string, index?: number): FeatureStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureStatistics): FeatureStatistics.AsObject;
  static serializeBinaryToWriter(message: FeatureStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureStatistics;
  static deserializeBinaryFromReader(message: FeatureStatistics, reader: jspb.BinaryReader): FeatureStatistics;
}

export namespace FeatureStatistics {
  export type AsObject = {
    name?: string,
    datatype?: string,
    count?: number,
    distinct?: number,
    missing?: number,
    percentmissing?: number,
    mean?: number,
    stddev?: number,
    variance?: number,
    min?: number,
    max?: number,
    kurtosis?: number,
    skewness?: number,
    sum?: number,
    mad?: number,
    p25?: number,
    p50?: number,
    p75?: number,
    iqr?: number,
    mode?: string,
    zeros?: number,
    invalid?: number,
    importance?: number,
    target?: boolean,
    ignore?: boolean,
    nullable?: boolean,
    highcardinality?: boolean,
    highcorrwithotherfeatures?: boolean,
    lowcorrwithtarget?: boolean,
    highmissingpct?: boolean,
    skewed?: boolean,
    constant?: boolean,
    duplicate?: boolean,
    reserved?: boolean,
    completeness?: number,
    distinctvaluecount?: number,
    mostfreqvaluesratio?: number,
    histogram?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.HistogramData.AsObject,
    corrtotarget?: number,
    index?: number,
    outliers?: OutlierStatistics.AsObject,
    valuesList: Array<string>,
  }
}

export class FlatFileFormatSpec extends jspb.Message {
  getFiletype(): string;
  setFiletype(value: string): FlatFileFormatSpec;
  hasFiletype(): boolean;
  clearFiletype(): FlatFileFormatSpec;

  getCsv(): CsvFileSpec | undefined;
  setCsv(value?: CsvFileSpec): FlatFileFormatSpec;
  hasCsv(): boolean;
  clearCsv(): FlatFileFormatSpec;

  getExcel(): ExcelNotebookSpec | undefined;
  setExcel(value?: ExcelNotebookSpec): FlatFileFormatSpec;
  hasExcel(): boolean;
  clearExcel(): FlatFileFormatSpec;

  getParquet(): ParquetFileSpec | undefined;
  setParquet(value?: ParquetFileSpec): FlatFileFormatSpec;
  hasParquet(): boolean;
  clearParquet(): FlatFileFormatSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlatFileFormatSpec.AsObject;
  static toObject(includeInstance: boolean, msg: FlatFileFormatSpec): FlatFileFormatSpec.AsObject;
  static serializeBinaryToWriter(message: FlatFileFormatSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlatFileFormatSpec;
  static deserializeBinaryFromReader(message: FlatFileFormatSpec, reader: jspb.BinaryReader): FlatFileFormatSpec;
}

export namespace FlatFileFormatSpec {
  export type AsObject = {
    filetype?: string,
    csv?: CsvFileSpec.AsObject,
    excel?: ExcelNotebookSpec.AsObject,
    parquet?: ParquetFileSpec.AsObject,
  }
}

export class GaugeSpec extends jspb.Message {
  getDatasetname(): string;
  setDatasetname(value: string): GaugeSpec;
  hasDatasetname(): boolean;
  clearDatasetname(): GaugeSpec;

  getColumn(): string;
  setColumn(value: string): GaugeSpec;
  hasColumn(): boolean;
  clearColumn(): GaugeSpec;

  getRow(): number;
  setRow(value: number): GaugeSpec;
  hasRow(): boolean;
  clearRow(): GaugeSpec;

  getScalar(): string;
  setScalar(value: string): GaugeSpec;
  hasScalar(): boolean;
  clearScalar(): GaugeSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GaugeSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GaugeSpec): GaugeSpec.AsObject;
  static serializeBinaryToWriter(message: GaugeSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GaugeSpec;
  static deserializeBinaryFromReader(message: GaugeSpec, reader: jspb.BinaryReader): GaugeSpec;
}

export namespace GaugeSpec {
  export type AsObject = {
    datasetname?: string,
    column?: string,
    row?: number,
    scalar?: string,
  }
}

export class GitLocation extends jspb.Message {
  getGitconnectionname(): string;
  setGitconnectionname(value: string): GitLocation;
  hasGitconnectionname(): boolean;
  clearGitconnectionname(): GitLocation;

  getUrl(): string;
  setUrl(value: string): GitLocation;
  hasUrl(): boolean;
  clearUrl(): GitLocation;

  getBranch(): string;
  setBranch(value: string): GitLocation;
  hasBranch(): boolean;
  clearBranch(): GitLocation;

  getPrivate(): boolean;
  setPrivate(value: boolean): GitLocation;
  hasPrivate(): boolean;
  clearPrivate(): GitLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GitLocation.AsObject;
  static toObject(includeInstance: boolean, msg: GitLocation): GitLocation.AsObject;
  static serializeBinaryToWriter(message: GitLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GitLocation;
  static deserializeBinaryFromReader(message: GitLocation, reader: jspb.BinaryReader): GitLocation;
}

export namespace GitLocation {
  export type AsObject = {
    gitconnectionname?: string,
    url?: string,
    branch?: string,
    pb_private?: boolean,
  }
}

export class GroupBySpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): GroupBySpec;
  hasEnabled(): boolean;
  clearEnabled(): GroupBySpec;

  getGroupbyList(): Array<string>;
  setGroupbyList(value: Array<string>): GroupBySpec;
  clearGroupbyList(): GroupBySpec;
  addGroupby(value: string, index?: number): GroupBySpec;

  getFrequency(): string;
  setFrequency(value: string): GroupBySpec;
  hasFrequency(): boolean;
  clearFrequency(): GroupBySpec;

  getInterval(): number;
  setInterval(value: number): GroupBySpec;
  hasInterval(): boolean;
  clearInterval(): GroupBySpec;

  getAggregate(): string;
  setAggregate(value: string): GroupBySpec;
  hasAggregate(): boolean;
  clearAggregate(): GroupBySpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupBySpec.AsObject;
  static toObject(includeInstance: boolean, msg: GroupBySpec): GroupBySpec.AsObject;
  static serializeBinaryToWriter(message: GroupBySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupBySpec;
  static deserializeBinaryFromReader(message: GroupBySpec, reader: jspb.BinaryReader): GroupBySpec;
}

export namespace GroupBySpec {
  export type AsObject = {
    enabled?: boolean,
    groupbyList: Array<string>,
    frequency?: string,
    interval?: number,
    aggregate?: string,
  }
}

export class GroupDatasetLocationSpec extends jspb.Message {
  getGroupsroot(): string;
  setGroupsroot(value: string): GroupDatasetLocationSpec;
  hasGroupsroot(): boolean;
  clearGroupsroot(): GroupDatasetLocationSpec;

  getGrouproot(): string;
  setGrouproot(value: string): GroupDatasetLocationSpec;
  hasGrouproot(): boolean;
  clearGrouproot(): GroupDatasetLocationSpec;

  getGroupdatafolder(): string;
  setGroupdatafolder(value: string): GroupDatasetLocationSpec;
  hasGroupdatafolder(): boolean;
  clearGroupdatafolder(): GroupDatasetLocationSpec;

  getGroupdatafile(): string;
  setGroupdatafile(value: string): GroupDatasetLocationSpec;
  hasGroupdatafile(): boolean;
  clearGroupdatafile(): GroupDatasetLocationSpec;

  getGroupprofilefolder(): string;
  setGroupprofilefolder(value: string): GroupDatasetLocationSpec;
  hasGroupprofilefolder(): boolean;
  clearGroupprofilefolder(): GroupDatasetLocationSpec;

  getGroupreportfile(): string;
  setGroupreportfile(value: string): GroupDatasetLocationSpec;
  hasGroupreportfile(): boolean;
  clearGroupreportfile(): GroupDatasetLocationSpec;

  getGroupfeaturesfile(): string;
  setGroupfeaturesfile(value: string): GroupDatasetLocationSpec;
  hasGroupfeaturesfile(): boolean;
  clearGroupfeaturesfile(): GroupDatasetLocationSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupDatasetLocationSpec.AsObject;
  static toObject(includeInstance: boolean, msg: GroupDatasetLocationSpec): GroupDatasetLocationSpec.AsObject;
  static serializeBinaryToWriter(message: GroupDatasetLocationSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupDatasetLocationSpec;
  static deserializeBinaryFromReader(message: GroupDatasetLocationSpec, reader: jspb.BinaryReader): GroupDatasetLocationSpec;
}

export namespace GroupDatasetLocationSpec {
  export type AsObject = {
    groupsroot?: string,
    grouproot?: string,
    groupdatafolder?: string,
    groupdatafile?: string,
    groupprofilefolder?: string,
    groupreportfile?: string,
    groupfeaturesfile?: string,
  }
}

export class HistogramSpec extends jspb.Message {
  getDatasetname(): string;
  setDatasetname(value: string): HistogramSpec;
  hasDatasetname(): boolean;
  clearDatasetname(): HistogramSpec;

  getX(): string;
  setX(value: string): HistogramSpec;
  hasX(): boolean;
  clearX(): HistogramSpec;

  getBins(): number;
  setBins(value: number): HistogramSpec;
  hasBins(): boolean;
  clearBins(): HistogramSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistogramSpec.AsObject;
  static toObject(includeInstance: boolean, msg: HistogramSpec): HistogramSpec.AsObject;
  static serializeBinaryToWriter(message: HistogramSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistogramSpec;
  static deserializeBinaryFromReader(message: HistogramSpec, reader: jspb.BinaryReader): HistogramSpec;
}

export namespace HistogramSpec {
  export type AsObject = {
    datasetname?: string,
    x?: string,
    bins?: number,
  }
}

export class ImageLocation extends jspb.Message {
  getName(): string;
  setName(value: string): ImageLocation;
  hasName(): boolean;
  clearName(): ImageLocation;

  getRegistryconnectionname(): string;
  setRegistryconnectionname(value: string): ImageLocation;
  hasRegistryconnectionname(): boolean;
  clearRegistryconnectionname(): ImageLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageLocation.AsObject;
  static toObject(includeInstance: boolean, msg: ImageLocation): ImageLocation.AsObject;
  static serializeBinaryToWriter(message: ImageLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageLocation;
  static deserializeBinaryFromReader(message: ImageLocation, reader: jspb.BinaryReader): ImageLocation;
}

export namespace ImageLocation {
  export type AsObject = {
    name?: string,
    registryconnectionname?: string,
  }
}

export class KPI extends jspb.Message {
  getName(): string;
  setName(value: string): KPI;
  hasName(): boolean;
  clearName(): KPI;

  getValue(): number;
  setValue(value: number): KPI;
  hasValue(): boolean;
  clearValue(): KPI;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KPI.AsObject;
  static toObject(includeInstance: boolean, msg: KPI): KPI.AsObject;
  static serializeBinaryToWriter(message: KPI, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KPI;
  static deserializeBinaryFromReader(message: KPI, reader: jspb.BinaryReader): KPI;
}

export namespace KPI {
  export type AsObject = {
    name?: string,
    value?: number,
  }
}

export class LabelingRule extends jspb.Message {
  getColumn(): string;
  setColumn(value: string): LabelingRule;
  hasColumn(): boolean;
  clearColumn(): LabelingRule;

  getOperator(): string;
  setOperator(value: string): LabelingRule;
  hasOperator(): boolean;
  clearOperator(): LabelingRule;

  getValue(): string;
  setValue(value: string): LabelingRule;
  hasValue(): boolean;
  clearValue(): LabelingRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelingRule.AsObject;
  static toObject(includeInstance: boolean, msg: LabelingRule): LabelingRule.AsObject;
  static serializeBinaryToWriter(message: LabelingRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelingRule;
  static deserializeBinaryFromReader(message: LabelingRule, reader: jspb.BinaryReader): LabelingRule;
}

export namespace LabelingRule {
  export type AsObject = {
    column?: string,
    operator?: string,
    value?: string,
  }
}

export class LabelingSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): LabelingSpec;
  hasEnabled(): boolean;
  clearEnabled(): LabelingSpec;

  getResultcolumn(): string;
  setResultcolumn(value: string): LabelingSpec;
  hasResultcolumn(): boolean;
  clearResultcolumn(): LabelingSpec;

  getPositiveList(): Array<LabelingRule>;
  setPositiveList(value: Array<LabelingRule>): LabelingSpec;
  clearPositiveList(): LabelingSpec;
  addPositive(value?: LabelingRule, index?: number): LabelingRule;

  getNegativeList(): Array<LabelingRule>;
  setNegativeList(value: Array<LabelingRule>): LabelingSpec;
  clearNegativeList(): LabelingSpec;
  addNegative(value?: LabelingRule, index?: number): LabelingRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelingSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LabelingSpec): LabelingSpec.AsObject;
  static serializeBinaryToWriter(message: LabelingSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelingSpec;
  static deserializeBinaryFromReader(message: LabelingSpec, reader: jspb.BinaryReader): LabelingSpec;
}

export namespace LabelingSpec {
  export type AsObject = {
    enabled?: boolean,
    resultcolumn?: string,
    positiveList: Array<LabelingRule.AsObject>,
    negativeList: Array<LabelingRule.AsObject>,
  }
}

export class LineChartSpec extends jspb.Message {
  getDatasetname(): string;
  setDatasetname(value: string): LineChartSpec;
  hasDatasetname(): boolean;
  clearDatasetname(): LineChartSpec;

  getX(): string;
  setX(value: string): LineChartSpec;
  hasX(): boolean;
  clearX(): LineChartSpec;

  getY(): string;
  setY(value: string): LineChartSpec;
  hasY(): boolean;
  clearY(): LineChartSpec;

  getLegend(): boolean;
  setLegend(value: boolean): LineChartSpec;
  hasLegend(): boolean;
  clearLegend(): LineChartSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LineChartSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LineChartSpec): LineChartSpec.AsObject;
  static serializeBinaryToWriter(message: LineChartSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LineChartSpec;
  static deserializeBinaryFromReader(message: LineChartSpec, reader: jspb.BinaryReader): LineChartSpec;
}

export namespace LineChartSpec {
  export type AsObject = {
    datasetname?: string,
    x?: string,
    y?: string,
    legend?: boolean,
  }
}

export class MaterializationSpec extends jspb.Message {
  getOnline(): boolean;
  setOnline(value: boolean): MaterializationSpec;
  hasOnline(): boolean;
  clearOnline(): MaterializationSpec;

  getOffline(): boolean;
  setOffline(value: boolean): MaterializationSpec;
  hasOffline(): boolean;
  clearOffline(): MaterializationSpec;

  getStartdate(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setStartdate(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): MaterializationSpec;
  hasStartdate(): boolean;
  clearStartdate(): MaterializationSpec;

  getOfflinettl(): number;
  setOfflinettl(value: number): MaterializationSpec;
  hasOfflinettl(): boolean;
  clearOfflinettl(): MaterializationSpec;

  getOnlinettl(): number;
  setOnlinettl(value: number): MaterializationSpec;
  hasOnlinettl(): boolean;
  clearOnlinettl(): MaterializationSpec;

  getBackfill(): number;
  setBackfill(value: number): MaterializationSpec;
  hasBackfill(): boolean;
  clearBackfill(): MaterializationSpec;

  getSchedule(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule | undefined;
  setSchedule(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule): MaterializationSpec;
  hasSchedule(): boolean;
  clearSchedule(): MaterializationSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaterializationSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MaterializationSpec): MaterializationSpec.AsObject;
  static serializeBinaryToWriter(message: MaterializationSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaterializationSpec;
  static deserializeBinaryFromReader(message: MaterializationSpec, reader: jspb.BinaryReader): MaterializationSpec;
}

export namespace MaterializationSpec {
  export type AsObject = {
    online?: boolean,
    offline?: boolean,
    startdate?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    offlinettl?: number,
    onlinettl?: number,
    backfill?: number,
    schedule?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.RunSchedule.AsObject,
  }
}

export class MetricSpec extends jspb.Message {
  getDatasetname(): string;
  setDatasetname(value: string): MetricSpec;
  hasDatasetname(): boolean;
  clearDatasetname(): MetricSpec;

  getColumn(): string;
  setColumn(value: string): MetricSpec;
  hasColumn(): boolean;
  clearColumn(): MetricSpec;

  getRow(): number;
  setRow(value: number): MetricSpec;
  hasRow(): boolean;
  clearRow(): MetricSpec;

  getScalar(): string;
  setScalar(value: string): MetricSpec;
  hasScalar(): boolean;
  clearScalar(): MetricSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetricSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MetricSpec): MetricSpec.AsObject;
  static serializeBinaryToWriter(message: MetricSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetricSpec;
  static deserializeBinaryFromReader(message: MetricSpec, reader: jspb.BinaryReader): MetricSpec;
}

export namespace MetricSpec {
  export type AsObject = {
    datasetname?: string,
    column?: string,
    row?: number,
    scalar?: string,
  }
}

export class OutlierStatistics extends jspb.Message {
  getLower(): number;
  setLower(value: number): OutlierStatistics;
  hasLower(): boolean;
  clearLower(): OutlierStatistics;

  getUpper(): number;
  setUpper(value: number): OutlierStatistics;
  hasUpper(): boolean;
  clearUpper(): OutlierStatistics;

  getPercent(): number;
  setPercent(value: number): OutlierStatistics;
  hasPercent(): boolean;
  clearPercent(): OutlierStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutlierStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: OutlierStatistics): OutlierStatistics.AsObject;
  static serializeBinaryToWriter(message: OutlierStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutlierStatistics;
  static deserializeBinaryFromReader(message: OutlierStatistics, reader: jspb.BinaryReader): OutlierStatistics;
}

export namespace OutlierStatistics {
  export type AsObject = {
    lower?: number,
    upper?: number,
    percent?: number,
  }
}

export class PageSpec extends jspb.Message {
  getRowsList(): Array<RowSpec>;
  setRowsList(value: Array<RowSpec>): PageSpec;
  clearRowsList(): PageSpec;
  addRows(value?: RowSpec, index?: number): RowSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PageSpec): PageSpec.AsObject;
  static serializeBinaryToWriter(message: PageSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageSpec;
  static deserializeBinaryFromReader(message: PageSpec, reader: jspb.BinaryReader): PageSpec;
}

export namespace PageSpec {
  export type AsObject = {
    rowsList: Array<RowSpec.AsObject>,
  }
}

export class ParquetFileSpec extends jspb.Message {
  getEngine(): string;
  setEngine(value: string): ParquetFileSpec;
  hasEngine(): boolean;
  clearEngine(): ParquetFileSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParquetFileSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ParquetFileSpec): ParquetFileSpec.AsObject;
  static serializeBinaryToWriter(message: ParquetFileSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParquetFileSpec;
  static deserializeBinaryFromReader(message: ParquetFileSpec, reader: jspb.BinaryReader): ParquetFileSpec;
}

export namespace ParquetFileSpec {
  export type AsObject = {
    engine?: string,
  }
}

export class Recipe extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Recipe;
  hasMetadata(): boolean;
  clearMetadata(): Recipe;

  getSpec(): RecipeSpec | undefined;
  setSpec(value?: RecipeSpec): Recipe;
  hasSpec(): boolean;
  clearSpec(): Recipe;

  getStatus(): RecipeStatus | undefined;
  setStatus(value?: RecipeStatus): Recipe;
  hasStatus(): boolean;
  clearStatus(): Recipe;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Recipe.AsObject;
  static toObject(includeInstance: boolean, msg: Recipe): Recipe.AsObject;
  static serializeBinaryToWriter(message: Recipe, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Recipe;
  static deserializeBinaryFromReader(message: Recipe, reader: jspb.BinaryReader): Recipe;
}

export namespace Recipe {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: RecipeSpec.AsObject,
    status?: RecipeStatus.AsObject,
  }
}

export class RecipeInputSpec extends jspb.Message {
  getDatasetname(): string;
  setDatasetname(value: string): RecipeInputSpec;
  hasDatasetname(): boolean;
  clearDatasetname(): RecipeInputSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): RecipeInputSpec;
  hasLocation(): boolean;
  clearLocation(): RecipeInputSpec;

  getFormat(): string;
  setFormat(value: string): RecipeInputSpec;
  hasFormat(): boolean;
  clearFormat(): RecipeInputSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeInputSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeInputSpec): RecipeInputSpec.AsObject;
  static serializeBinaryToWriter(message: RecipeInputSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeInputSpec;
  static deserializeBinaryFromReader(message: RecipeInputSpec, reader: jspb.BinaryReader): RecipeInputSpec;
}

export namespace RecipeInputSpec {
  export type AsObject = {
    datasetname?: string,
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
    format?: string,
  }
}

export class RecipeList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): RecipeList;
  hasMetadata(): boolean;
  clearMetadata(): RecipeList;

  getItemsList(): Array<Recipe>;
  setItemsList(value: Array<Recipe>): RecipeList;
  clearItemsList(): RecipeList;
  addItems(value?: Recipe, index?: number): Recipe;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeList.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeList): RecipeList.AsObject;
  static serializeBinaryToWriter(message: RecipeList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeList;
  static deserializeBinaryFromReader(message: RecipeList, reader: jspb.BinaryReader): RecipeList;
}

export namespace RecipeList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Recipe.AsObject>,
  }
}

export class RecipeOutputSpec extends jspb.Message {
  getCreatedataset(): boolean;
  setCreatedataset(value: boolean): RecipeOutputSpec;
  hasCreatedataset(): boolean;
  clearCreatedataset(): RecipeOutputSpec;

  getDatasetname(): string;
  setDatasetname(value: string): RecipeOutputSpec;
  hasDatasetname(): boolean;
  clearDatasetname(): RecipeOutputSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): RecipeOutputSpec;
  hasLocation(): boolean;
  clearLocation(): RecipeOutputSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeOutputSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeOutputSpec): RecipeOutputSpec.AsObject;
  static serializeBinaryToWriter(message: RecipeOutputSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeOutputSpec;
  static deserializeBinaryFromReader(message: RecipeOutputSpec, reader: jspb.BinaryReader): RecipeOutputSpec;
}

export namespace RecipeOutputSpec {
  export type AsObject = {
    createdataset?: boolean,
    datasetname?: string,
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
  }
}

export class RecipePartSpec extends jspb.Message {
  getRecipename(): string;
  setRecipename(value: string): RecipePartSpec;
  hasRecipename(): boolean;
  clearRecipename(): RecipePartSpec;

  getDependentsList(): Array<string>;
  setDependentsList(value: Array<string>): RecipePartSpec;
  clearDependentsList(): RecipePartSpec;
  addDependents(value: string, index?: number): RecipePartSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipePartSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RecipePartSpec): RecipePartSpec.AsObject;
  static serializeBinaryToWriter(message: RecipePartSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipePartSpec;
  static deserializeBinaryFromReader(message: RecipePartSpec, reader: jspb.BinaryReader): RecipePartSpec;
}

export namespace RecipePartSpec {
  export type AsObject = {
    recipename?: string,
    dependentsList: Array<string>,
  }
}

export class RecipeRun extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): RecipeRun;
  hasMetadata(): boolean;
  clearMetadata(): RecipeRun;

  getSpec(): RecipeRunSpec | undefined;
  setSpec(value?: RecipeRunSpec): RecipeRun;
  hasSpec(): boolean;
  clearSpec(): RecipeRun;

  getStatus(): RecipeRunStatus | undefined;
  setStatus(value?: RecipeRunStatus): RecipeRun;
  hasStatus(): boolean;
  clearStatus(): RecipeRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeRun.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeRun): RecipeRun.AsObject;
  static serializeBinaryToWriter(message: RecipeRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeRun;
  static deserializeBinaryFromReader(message: RecipeRun, reader: jspb.BinaryReader): RecipeRun;
}

export namespace RecipeRun {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: RecipeRunSpec.AsObject,
    status?: RecipeRunStatus.AsObject,
  }
}

export class RecipeRunList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): RecipeRunList;
  hasMetadata(): boolean;
  clearMetadata(): RecipeRunList;

  getItemsList(): Array<RecipeRun>;
  setItemsList(value: Array<RecipeRun>): RecipeRunList;
  clearItemsList(): RecipeRunList;
  addItems(value?: RecipeRun, index?: number): RecipeRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeRunList.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeRunList): RecipeRunList.AsObject;
  static serializeBinaryToWriter(message: RecipeRunList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeRunList;
  static deserializeBinaryFromReader(message: RecipeRunList, reader: jspb.BinaryReader): RecipeRunList;
}

export namespace RecipeRunList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<RecipeRun.AsObject>,
  }
}

export class RecipeRunSpec extends jspb.Message {
  getVersionname(): string;
  setVersionname(value: string): RecipeRunSpec;
  hasVersionname(): boolean;
  clearVersionname(): RecipeRunSpec;

  getRecipename(): string;
  setRecipename(value: string): RecipeRunSpec;
  hasRecipename(): boolean;
  clearRecipename(): RecipeRunSpec;

  getLabref(): k8s_io_api_core_v1_generated_pb.ObjectReference | undefined;
  setLabref(value?: k8s_io_api_core_v1_generated_pb.ObjectReference): RecipeRunSpec;
  hasLabref(): boolean;
  clearLabref(): RecipeRunSpec;

  getLocation(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation | undefined;
  setLocation(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation): RecipeRunSpec;
  hasLocation(): boolean;
  clearLocation(): RecipeRunSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): RecipeRunSpec;
  hasResources(): boolean;
  clearResources(): RecipeRunSpec;

  getTtl(): number;
  setTtl(value: number): RecipeRunSpec;
  hasTtl(): boolean;
  clearTtl(): RecipeRunSpec;

  getModelclassname(): string;
  setModelclassname(value: string): RecipeRunSpec;
  hasModelclassname(): boolean;
  clearModelclassname(): RecipeRunSpec;

  getModelclassrunname(): string;
  setModelclassrunname(value: string): RecipeRunSpec;
  hasModelclassrunname(): boolean;
  clearModelclassrunname(): RecipeRunSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeRunSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeRunSpec): RecipeRunSpec.AsObject;
  static serializeBinaryToWriter(message: RecipeRunSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeRunSpec;
  static deserializeBinaryFromReader(message: RecipeRunSpec, reader: jspb.BinaryReader): RecipeRunSpec;
}

export namespace RecipeRunSpec {
  export type AsObject = {
    versionname?: string,
    recipename?: string,
    labref?: k8s_io_api_core_v1_generated_pb.ObjectReference.AsObject,
    location?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.DataLocation.AsObject,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    ttl?: number,
    modelclassname?: string,
    modelclassrunname?: string,
  }
}

export class RecipeRunStatus extends jspb.Message {
  getCompletedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setCompletedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RecipeRunStatus;
  hasCompletedat(): boolean;
  clearCompletedat(): RecipeRunStatus;

  getPhase(): string;
  setPhase(value: string): RecipeRunStatus;
  hasPhase(): boolean;
  clearPhase(): RecipeRunStatus;

  getObservedgeneration(): number;
  setObservedgeneration(value: number): RecipeRunStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): RecipeRunStatus;

  getFailurereason(): string;
  setFailurereason(value: string): RecipeRunStatus;
  hasFailurereason(): boolean;
  clearFailurereason(): RecipeRunStatus;

  getFailuremessage(): string;
  setFailuremessage(value: string): RecipeRunStatus;
  hasFailuremessage(): boolean;
  clearFailuremessage(): RecipeRunStatus;

  getTriggeredby(): string;
  setTriggeredby(value: string): RecipeRunStatus;
  hasTriggeredby(): boolean;
  clearTriggeredby(): RecipeRunStatus;

  getLogs(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs | undefined;
  setLogs(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs): RecipeRunStatus;
  hasLogs(): boolean;
  clearLogs(): RecipeRunStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RecipeRunStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): RecipeRunStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): RecipeRunStatus;
  clearConditionsList(): RecipeRunStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeRunStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeRunStatus): RecipeRunStatus.AsObject;
  static serializeBinaryToWriter(message: RecipeRunStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeRunStatus;
  static deserializeBinaryFromReader(message: RecipeRunStatus, reader: jspb.BinaryReader): RecipeRunStatus;
}

export namespace RecipeRunStatus {
  export type AsObject = {
    completedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    phase?: string,
    observedgeneration?: number,
    failurereason?: string,
    failuremessage?: string,
    triggeredby?: string,
    logs?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.Logs.AsObject,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class RecipeSpec extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): RecipeSpec;
  hasOwner(): boolean;
  clearOwner(): RecipeSpec;

  getVersionname(): string;
  setVersionname(value: string): RecipeSpec;
  hasVersionname(): boolean;
  clearVersionname(): RecipeSpec;

  getDescription(): string;
  setDescription(value: string): RecipeSpec;
  hasDescription(): boolean;
  clearDescription(): RecipeSpec;

  getInput(): RecipeInputSpec | undefined;
  setInput(value?: RecipeInputSpec): RecipeSpec;
  hasInput(): boolean;
  clearInput(): RecipeSpec;

  getStepsList(): Array<RecipeStep>;
  setStepsList(value: Array<RecipeStep>): RecipeSpec;
  clearStepsList(): RecipeSpec;
  addSteps(value?: RecipeStep, index?: number): RecipeStep;

  getOutput(): RecipeOutputSpec | undefined;
  setOutput(value?: RecipeOutputSpec): RecipeSpec;
  hasOutput(): boolean;
  clearOutput(): RecipeSpec;

  getSample(): SampleSpec | undefined;
  setSample(value?: SampleSpec): RecipeSpec;
  hasSample(): boolean;
  clearSample(): RecipeSpec;

  getResources(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec | undefined;
  setResources(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec): RecipeSpec;
  hasResources(): boolean;
  clearResources(): RecipeSpec;

  getTimeout(): number;
  setTimeout(value: number): RecipeSpec;
  hasTimeout(): boolean;
  clearTimeout(): RecipeSpec;

  getTtl(): number;
  setTtl(value: number): RecipeSpec;
  hasTtl(): boolean;
  clearTtl(): RecipeSpec;

  getUnitteststemplate(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite | undefined;
  setUnitteststemplate(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite): RecipeSpec;
  hasUnitteststemplate(): boolean;
  clearUnitteststemplate(): RecipeSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeSpec): RecipeSpec.AsObject;
  static serializeBinaryToWriter(message: RecipeSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeSpec;
  static deserializeBinaryFromReader(message: RecipeSpec, reader: jspb.BinaryReader): RecipeSpec;
}

export namespace RecipeSpec {
  export type AsObject = {
    owner?: string,
    versionname?: string,
    description?: string,
    input?: RecipeInputSpec.AsObject,
    stepsList: Array<RecipeStep.AsObject>,
    output?: RecipeOutputSpec.AsObject,
    sample?: SampleSpec.AsObject,
    resources?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.ResourceSpec.AsObject,
    timeout?: number,
    ttl?: number,
    unitteststemplate?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.TestSuite.AsObject,
  }
}

export class RecipeStatus extends jspb.Message {
  getObservedgeneration(): number;
  setObservedgeneration(value: number): RecipeStatus;
  hasObservedgeneration(): boolean;
  clearObservedgeneration(): RecipeStatus;

  getLastrun(): github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus | undefined;
  setLastrun(value?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus): RecipeStatus;
  hasLastrun(): boolean;
  clearLastrun(): RecipeStatus;

  getUpdatedat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setUpdatedat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): RecipeStatus;
  hasUpdatedat(): boolean;
  clearUpdatedat(): RecipeStatus;

  getConditionsList(): Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>;
  setConditionsList(value: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition>): RecipeStatus;
  clearConditionsList(): RecipeStatus;
  addConditions(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition, index?: number): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeStatus): RecipeStatus.AsObject;
  static serializeBinaryToWriter(message: RecipeStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeStatus;
  static deserializeBinaryFromReader(message: RecipeStatus, reader: jspb.BinaryReader): RecipeStatus;
}

export namespace RecipeStatus {
  export type AsObject = {
    observedgeneration?: number,
    lastrun?: github_com_metaprov_modelaapi_pkg_apis_catalog_v1alpha1_generated_pb.LastRunStatus.AsObject,
    updatedat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    conditionsList: Array<k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Condition.AsObject>,
  }
}

export class RecipeStep extends jspb.Message {
  getOp(): string;
  setOp(value: string): RecipeStep;
  hasOp(): boolean;
  clearOp(): RecipeStep;

  getParametersList(): Array<RecipeStepParam>;
  setParametersList(value: Array<RecipeStepParam>): RecipeStep;
  clearParametersList(): RecipeStep;
  addParameters(value?: RecipeStepParam, index?: number): RecipeStepParam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeStep.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeStep): RecipeStep.AsObject;
  static serializeBinaryToWriter(message: RecipeStep, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeStep;
  static deserializeBinaryFromReader(message: RecipeStep, reader: jspb.BinaryReader): RecipeStep;
}

export namespace RecipeStep {
  export type AsObject = {
    op?: string,
    parametersList: Array<RecipeStepParam.AsObject>,
  }
}

export class RecipeStepParam extends jspb.Message {
  getName(): string;
  setName(value: string): RecipeStepParam;
  hasName(): boolean;
  clearName(): RecipeStepParam;

  getValue(): string;
  setValue(value: string): RecipeStepParam;
  hasValue(): boolean;
  clearValue(): RecipeStepParam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeStepParam.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeStepParam): RecipeStepParam.AsObject;
  static serializeBinaryToWriter(message: RecipeStepParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeStepParam;
  static deserializeBinaryFromReader(message: RecipeStepParam, reader: jspb.BinaryReader): RecipeStepParam;
}

export namespace RecipeStepParam {
  export type AsObject = {
    name?: string,
    value?: string,
  }
}

export class RecommendationSchema extends jspb.Message {
  getUseridcolumn(): string;
  setUseridcolumn(value: string): RecommendationSchema;
  hasUseridcolumn(): boolean;
  clearUseridcolumn(): RecommendationSchema;

  getItemidcolumn(): string;
  setItemidcolumn(value: string): RecommendationSchema;
  hasItemidcolumn(): boolean;
  clearItemidcolumn(): RecommendationSchema;

  getRatingcolumn(): string;
  setRatingcolumn(value: string): RecommendationSchema;
  hasRatingcolumn(): boolean;
  clearRatingcolumn(): RecommendationSchema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendationSchema.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendationSchema): RecommendationSchema.AsObject;
  static serializeBinaryToWriter(message: RecommendationSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendationSchema;
  static deserializeBinaryFromReader(message: RecommendationSchema, reader: jspb.BinaryReader): RecommendationSchema;
}

export namespace RecommendationSchema {
  export type AsObject = {
    useridcolumn?: string,
    itemidcolumn?: string,
    ratingcolumn?: string,
  }
}

export class RelationshipSpec extends jspb.Message {
  getType(): string;
  setType(value: string): RelationshipSpec;
  hasType(): boolean;
  clearType(): RelationshipSpec;

  getColumn(): string;
  setColumn(value: string): RelationshipSpec;
  hasColumn(): boolean;
  clearColumn(): RelationshipSpec;

  getArity(): string;
  setArity(value: string): RelationshipSpec;
  hasArity(): boolean;
  clearArity(): RelationshipSpec;

  getRelatesto(): string;
  setRelatesto(value: string): RelationshipSpec;
  hasRelatesto(): boolean;
  clearRelatesto(): RelationshipSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelationshipSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RelationshipSpec): RelationshipSpec.AsObject;
  static serializeBinaryToWriter(message: RelationshipSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelationshipSpec;
  static deserializeBinaryFromReader(message: RelationshipSpec, reader: jspb.BinaryReader): RelationshipSpec;
}

export namespace RelationshipSpec {
  export type AsObject = {
    type?: string,
    column?: string,
    arity?: string,
    relatesto?: string,
  }
}

export class RowSpec extends jspb.Message {
  getColsList(): Array<ColumnSpec>;
  setColsList(value: Array<ColumnSpec>): RowSpec;
  clearColsList(): RowSpec;
  addCols(value?: ColumnSpec, index?: number): ColumnSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RowSpec.AsObject;
  static toObject(includeInstance: boolean, msg: RowSpec): RowSpec.AsObject;
  static serializeBinaryToWriter(message: RowSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RowSpec;
  static deserializeBinaryFromReader(message: RowSpec, reader: jspb.BinaryReader): RowSpec;
}

export namespace RowSpec {
  export type AsObject = {
    colsList: Array<ColumnSpec.AsObject>,
  }
}

export class SampleSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): SampleSpec;
  hasEnabled(): boolean;
  clearEnabled(): SampleSpec;

  getType(): string;
  setType(value: string): SampleSpec;
  hasType(): boolean;
  clearType(): SampleSpec;

  getRows(): number;
  setRows(value: number): SampleSpec;
  hasRows(): boolean;
  clearRows(): SampleSpec;

  getPercent(): number;
  setPercent(value: number): SampleSpec;
  hasPercent(): boolean;
  clearPercent(): SampleSpec;

  getFilter(): string;
  setFilter(value: string): SampleSpec;
  hasFilter(): boolean;
  clearFilter(): SampleSpec;

  getColumn(): string;
  setColumn(value: string): SampleSpec;
  hasColumn(): boolean;
  clearColumn(): SampleSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SampleSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SampleSpec): SampleSpec.AsObject;
  static serializeBinaryToWriter(message: SampleSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SampleSpec;
  static deserializeBinaryFromReader(message: SampleSpec, reader: jspb.BinaryReader): SampleSpec;
}

export namespace SampleSpec {
  export type AsObject = {
    enabled?: boolean,
    type?: string,
    rows?: number,
    percent?: number,
    filter?: string,
    column?: string,
  }
}

export class ScatterPlotSpec extends jspb.Message {
  getDatasetname(): string;
  setDatasetname(value: string): ScatterPlotSpec;
  hasDatasetname(): boolean;
  clearDatasetname(): ScatterPlotSpec;

  getX(): string;
  setX(value: string): ScatterPlotSpec;
  hasX(): boolean;
  clearX(): ScatterPlotSpec;

  getY(): string;
  setY(value: string): ScatterPlotSpec;
  hasY(): boolean;
  clearY(): ScatterPlotSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScatterPlotSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ScatterPlotSpec): ScatterPlotSpec.AsObject;
  static serializeBinaryToWriter(message: ScatterPlotSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScatterPlotSpec;
  static deserializeBinaryFromReader(message: ScatterPlotSpec, reader: jspb.BinaryReader): ScatterPlotSpec;
}

export namespace ScatterPlotSpec {
  export type AsObject = {
    datasetname?: string,
    x?: string,
    y?: string,
  }
}

export class Schema extends jspb.Message {
  getTimeseriesschema(): TimeSeriesSchema | undefined;
  setTimeseriesschema(value?: TimeSeriesSchema): Schema;
  hasTimeseriesschema(): boolean;
  clearTimeseriesschema(): Schema;

  getRecommendationschema(): RecommendationSchema | undefined;
  setRecommendationschema(value?: RecommendationSchema): Schema;
  hasRecommendationschema(): boolean;
  clearRecommendationschema(): Schema;

  getColumnsList(): Array<Column>;
  setColumnsList(value: Array<Column>): Schema;
  clearColumnsList(): Schema;
  addColumns(value?: Column, index?: number): Column;

  getKeyList(): Array<string>;
  setKeyList(value: Array<string>): Schema;
  clearKeyList(): Schema;
  addKey(value: string, index?: number): Schema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schema.AsObject;
  static toObject(includeInstance: boolean, msg: Schema): Schema.AsObject;
  static serializeBinaryToWriter(message: Schema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schema;
  static deserializeBinaryFromReader(message: Schema, reader: jspb.BinaryReader): Schema;
}

export namespace Schema {
  export type AsObject = {
    timeseriesschema?: TimeSeriesSchema.AsObject,
    recommendationschema?: RecommendationSchema.AsObject,
    columnsList: Array<Column.AsObject>,
    keyList: Array<string>,
  }
}

export class SyntheticSpec extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): SyntheticSpec;
  hasEnabled(): boolean;
  clearEnabled(): SyntheticSpec;

  getRows(): number;
  setRows(value: number): SyntheticSpec;
  hasRows(): boolean;
  clearRows(): SyntheticSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyntheticSpec.AsObject;
  static toObject(includeInstance: boolean, msg: SyntheticSpec): SyntheticSpec.AsObject;
  static serializeBinaryToWriter(message: SyntheticSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyntheticSpec;
  static deserializeBinaryFromReader(message: SyntheticSpec, reader: jspb.BinaryReader): SyntheticSpec;
}

export namespace SyntheticSpec {
  export type AsObject = {
    enabled?: boolean,
    rows?: number,
  }
}

export class TableSpec extends jspb.Message {
  getDatasetname(): string;
  setDatasetname(value: string): TableSpec;
  hasDatasetname(): boolean;
  clearDatasetname(): TableSpec;

  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): TableSpec;
  clearColumnsList(): TableSpec;
  addColumns(value: string, index?: number): TableSpec;

  getFiltersList(): Array<string>;
  setFiltersList(value: Array<string>): TableSpec;
  clearFiltersList(): TableSpec;
  addFilters(value: string, index?: number): TableSpec;

  getGroupbyList(): Array<string>;
  setGroupbyList(value: Array<string>): TableSpec;
  clearGroupbyList(): TableSpec;
  addGroupby(value: string, index?: number): TableSpec;

  getRows(): number;
  setRows(value: number): TableSpec;
  hasRows(): boolean;
  clearRows(): TableSpec;

  getShowindex(): boolean;
  setShowindex(value: boolean): TableSpec;
  hasShowindex(): boolean;
  clearShowindex(): TableSpec;

  getBorder(): boolean;
  setBorder(value: boolean): TableSpec;
  hasBorder(): boolean;
  clearBorder(): TableSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableSpec.AsObject;
  static toObject(includeInstance: boolean, msg: TableSpec): TableSpec.AsObject;
  static serializeBinaryToWriter(message: TableSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableSpec;
  static deserializeBinaryFromReader(message: TableSpec, reader: jspb.BinaryReader): TableSpec;
}

export namespace TableSpec {
  export type AsObject = {
    datasetname?: string,
    columnsList: Array<string>,
    filtersList: Array<string>,
    groupbyList: Array<string>,
    rows?: number,
    showindex?: boolean,
    border?: boolean,
  }
}

export class TimeSeriesSchema extends jspb.Message {
  getType(): string;
  setType(value: string): TimeSeriesSchema;
  hasType(): boolean;
  clearType(): TimeSeriesSchema;

  getFreq(): string;
  setFreq(value: string): TimeSeriesSchema;
  hasFreq(): boolean;
  clearFreq(): TimeSeriesSchema;

  getInterval(): number;
  setInterval(value: number): TimeSeriesSchema;
  hasInterval(): boolean;
  clearInterval(): TimeSeriesSchema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSeriesSchema.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSeriesSchema): TimeSeriesSchema.AsObject;
  static serializeBinaryToWriter(message: TimeSeriesSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSeriesSchema;
  static deserializeBinaryFromReader(message: TimeSeriesSchema, reader: jspb.BinaryReader): TimeSeriesSchema;
}

export namespace TimeSeriesSchema {
  export type AsObject = {
    type?: string,
    freq?: string,
    interval?: number,
  }
}

