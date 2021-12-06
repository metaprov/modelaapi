import * as jspb from 'google-protobuf'



export class DatasetProfile extends jspb.Message {
  getCols(): number;
  setCols(value: number): DatasetProfile;

  getRows(): number;
  setRows(value: number): DatasetProfile;

  getFilesize(): number;
  setFilesize(value: number): DatasetProfile;

  getImbalance(): boolean;
  setImbalance(value: boolean): DatasetProfile;

  getPlotsList(): Array<Plot>;
  setPlotsList(value: Array<Plot>): DatasetProfile;
  clearPlotsList(): DatasetProfile;
  addPlots(value?: Plot, index?: number): Plot;

  getColumnsList(): Array<ColumnProfile>;
  setColumnsList(value: Array<ColumnProfile>): DatasetProfile;
  clearColumnsList(): DatasetProfile;
  addColumns(value?: ColumnProfile, index?: number): ColumnProfile;

  getTable(): TableView | undefined;
  setTable(value?: TableView): DatasetProfile;
  hasTable(): boolean;
  clearTable(): DatasetProfile;

  getHash(): string;
  setHash(value: string): DatasetProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetProfile.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetProfile): DatasetProfile.AsObject;
  static serializeBinaryToWriter(message: DatasetProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetProfile;
  static deserializeBinaryFromReader(message: DatasetProfile, reader: jspb.BinaryReader): DatasetProfile;
}

export namespace DatasetProfile {
  export type AsObject = {
    cols: number,
    rows: number,
    filesize: number,
    imbalance: boolean,
    plotsList: Array<Plot.AsObject>,
    columnsList: Array<ColumnProfile.AsObject>,
    table?: TableView.AsObject,
    hash: string,
  }
}

export class ModelProfile extends jspb.Message {
  getName(): string;
  setName(value: string): ModelProfile;

  getPlotsList(): Array<Plot>;
  setPlotsList(value: Array<Plot>): ModelProfile;
  clearPlotsList(): ModelProfile;
  addPlots(value?: Plot, index?: number): Plot;

  getImportanceMap(): jspb.Map<string, number>;
  clearImportanceMap(): ModelProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelProfile.AsObject;
  static toObject(includeInstance: boolean, msg: ModelProfile): ModelProfile.AsObject;
  static serializeBinaryToWriter(message: ModelProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelProfile;
  static deserializeBinaryFromReader(message: ModelProfile, reader: jspb.BinaryReader): ModelProfile;
}

export namespace ModelProfile {
  export type AsObject = {
    name: string,
    plotsList: Array<Plot.AsObject>,
    importanceMap: Array<[string, number]>,
  }
}

export class ForecastProfile extends jspb.Message {
  getName(): string;
  setName(value: string): ForecastProfile;

  getPlotsList(): Array<Plot>;
  setPlotsList(value: Array<Plot>): ForecastProfile;
  clearPlotsList(): ForecastProfile;
  addPlots(value?: Plot, index?: number): Plot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastProfile.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastProfile): ForecastProfile.AsObject;
  static serializeBinaryToWriter(message: ForecastProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastProfile;
  static deserializeBinaryFromReader(message: ForecastProfile, reader: jspb.BinaryReader): ForecastProfile;
}

export namespace ForecastProfile {
  export type AsObject = {
    name: string,
    plotsList: Array<Plot.AsObject>,
  }
}

export class StudyProfile extends jspb.Message {
  getPlotsList(): Array<Plot>;
  setPlotsList(value: Array<Plot>): StudyProfile;
  clearPlotsList(): StudyProfile;
  addPlots(value?: Plot, index?: number): Plot;

  getModelsList(): Array<ModelProfile>;
  setModelsList(value: Array<ModelProfile>): StudyProfile;
  clearModelsList(): StudyProfile;
  addModels(value?: ModelProfile, index?: number): ModelProfile;

  getTraininghash(): string;
  setTraininghash(value: string): StudyProfile;

  getTestinghash(): string;
  setTestinghash(value: string): StudyProfile;

  getValidationhash(): string;
  setValidationhash(value: string): StudyProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudyProfile.AsObject;
  static toObject(includeInstance: boolean, msg: StudyProfile): StudyProfile.AsObject;
  static serializeBinaryToWriter(message: StudyProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudyProfile;
  static deserializeBinaryFromReader(message: StudyProfile, reader: jspb.BinaryReader): StudyProfile;
}

export namespace StudyProfile {
  export type AsObject = {
    plotsList: Array<Plot.AsObject>,
    modelsList: Array<ModelProfile.AsObject>,
    traininghash: string,
    testinghash: string,
    validationhash: string,
  }
}

export class Plot extends jspb.Message {
  getName(): string;
  setName(value: string): Plot;

  getTitle(): string;
  setTitle(value: string): Plot;

  getImg(): Uint8Array | string;
  getImg_asU8(): Uint8Array;
  getImg_asB64(): string;
  setImg(value: Uint8Array | string): Plot;

  getFname(): string;
  setFname(value: string): Plot;

  getUrl(): string;
  setUrl(value: string): Plot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Plot.AsObject;
  static toObject(includeInstance: boolean, msg: Plot): Plot.AsObject;
  static serializeBinaryToWriter(message: Plot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Plot;
  static deserializeBinaryFromReader(message: Plot, reader: jspb.BinaryReader): Plot;
}

export namespace Plot {
  export type AsObject = {
    name: string,
    title: string,
    img: Uint8Array | string,
    fname: string,
    url: string,
  }
}

export class ColumnProfile extends jspb.Message {
  getName(): string;
  setName(value: string): ColumnProfile;

  getCount(): number;
  setCount(value: number): ColumnProfile;

  getType(): string;
  setType(value: string): ColumnProfile;

  getMissing(): number;
  setMissing(value: number): ColumnProfile;

  getPercentmissing(): number;
  setPercentmissing(value: number): ColumnProfile;

  getDistinct(): number;
  setDistinct(value: number): ColumnProfile;

  getMean(): number;
  setMean(value: number): ColumnProfile;

  getMode(): string;
  setMode(value: string): ColumnProfile;

  getStddev(): number;
  setStddev(value: number): ColumnProfile;

  getVariance(): number;
  setVariance(value: number): ColumnProfile;

  getMin(): number;
  setMin(value: number): ColumnProfile;

  getMax(): number;
  setMax(value: number): ColumnProfile;

  getKurtosis(): number;
  setKurtosis(value: number): ColumnProfile;

  getSkewness(): number;
  setSkewness(value: number): ColumnProfile;

  getSum(): number;
  setSum(value: number): ColumnProfile;

  getMad(): number;
  setMad(value: number): ColumnProfile;

  getZeros(): number;
  setZeros(value: number): ColumnProfile;

  getP25(): number;
  setP25(value: number): ColumnProfile;

  getP50(): number;
  setP50(value: number): ColumnProfile;

  getP75(): number;
  setP75(value: number): ColumnProfile;

  getP100(): number;
  setP100(value: number): ColumnProfile;

  getIqr(): number;
  setIqr(value: number): ColumnProfile;

  getCv(): number;
  setCv(value: number): ColumnProfile;

  getTop(): number;
  setTop(value: number): ColumnProfile;

  getFreq(): number;
  setFreq(value: number): ColumnProfile;

  getIgnore(): boolean;
  setIgnore(value: boolean): ColumnProfile;

  getLabel(): boolean;
  setLabel(value: boolean): ColumnProfile;

  getHistogram(): Histogram | undefined;
  setHistogram(value?: Histogram): ColumnProfile;
  hasHistogram(): boolean;
  clearHistogram(): ColumnProfile;

  getInvalid(): number;
  setInvalid(value: number): ColumnProfile;

  getImportance(): number;
  setImportance(value: number): ColumnProfile;

  getTarget(): boolean;
  setTarget(value: boolean): ColumnProfile;

  getIgnored(): boolean;
  setIgnored(value: boolean): ColumnProfile;

  getNullable(): boolean;
  setNullable(value: boolean): ColumnProfile;

  getHighcardinality(): boolean;
  setHighcardinality(value: boolean): ColumnProfile;

  getHighcorrwithotherfeatures(): boolean;
  setHighcorrwithotherfeatures(value: boolean): ColumnProfile;

  getLowcorrwithtarget(): boolean;
  setLowcorrwithtarget(value: boolean): ColumnProfile;

  getHighmissingpct(): boolean;
  setHighmissingpct(value: boolean): ColumnProfile;

  getSkewed(): boolean;
  setSkewed(value: boolean): ColumnProfile;

  getId(): boolean;
  setId(value: boolean): ColumnProfile;

  getConstant(): boolean;
  setConstant(value: boolean): ColumnProfile;

  getDuplicate(): boolean;
  setDuplicate(value: boolean): ColumnProfile;

  getReserved(): boolean;
  setReserved(value: boolean): ColumnProfile;

  getOutliers(): number;
  setOutliers(value: number): ColumnProfile;

  getCompleteness(): boolean;
  setCompleteness(value: boolean): ColumnProfile;

  getDistinctvaluecount(): number;
  setDistinctvaluecount(value: number): ColumnProfile;

  getMostfreqvaluesratio(): number;
  setMostfreqvaluesratio(value: number): ColumnProfile;

  getIndexofpeculiarity(): number;
  setIndexofpeculiarity(value: number): ColumnProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ColumnProfile.AsObject;
  static toObject(includeInstance: boolean, msg: ColumnProfile): ColumnProfile.AsObject;
  static serializeBinaryToWriter(message: ColumnProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ColumnProfile;
  static deserializeBinaryFromReader(message: ColumnProfile, reader: jspb.BinaryReader): ColumnProfile;
}

export namespace ColumnProfile {
  export type AsObject = {
    name: string,
    count: number,
    type: string,
    missing: number,
    percentmissing: number,
    distinct: number,
    mean: number,
    mode: string,
    stddev: number,
    variance: number,
    min: number,
    max: number,
    kurtosis: number,
    skewness: number,
    sum: number,
    mad: number,
    zeros: number,
    p25: number,
    p50: number,
    p75: number,
    p100: number,
    iqr: number,
    cv: number,
    top: number,
    freq: number,
    ignore: boolean,
    label: boolean,
    histogram?: Histogram.AsObject,
    invalid: number,
    importance: number,
    target: boolean,
    ignored: boolean,
    nullable: boolean,
    highcardinality: boolean,
    highcorrwithotherfeatures: boolean,
    lowcorrwithtarget: boolean,
    highmissingpct: boolean,
    skewed: boolean,
    id: boolean,
    constant: boolean,
    duplicate: boolean,
    reserved: boolean,
    outliers: number,
    completeness: boolean,
    distinctvaluecount: number,
    mostfreqvaluesratio: number,
    indexofpeculiarity: number,
  }
}

export class HistogramValue extends jspb.Message {
  getName(): string;
  setName(value: string): HistogramValue;

  getV(): number;
  setV(value: number): HistogramValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistogramValue.AsObject;
  static toObject(includeInstance: boolean, msg: HistogramValue): HistogramValue.AsObject;
  static serializeBinaryToWriter(message: HistogramValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistogramValue;
  static deserializeBinaryFromReader(message: HistogramValue, reader: jspb.BinaryReader): HistogramValue;
}

export namespace HistogramValue {
  export type AsObject = {
    name: string,
    v: number,
  }
}

export class Histogram extends jspb.Message {
  getValuesList(): Array<HistogramValue>;
  setValuesList(value: Array<HistogramValue>): Histogram;
  clearValuesList(): Histogram;
  addValues(value?: HistogramValue, index?: number): HistogramValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Histogram.AsObject;
  static toObject(includeInstance: boolean, msg: Histogram): Histogram.AsObject;
  static serializeBinaryToWriter(message: Histogram, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Histogram;
  static deserializeBinaryFromReader(message: Histogram, reader: jspb.BinaryReader): Histogram;
}

export namespace Histogram {
  export type AsObject = {
    valuesList: Array<HistogramValue.AsObject>,
  }
}

export class NamespaceInfo extends jspb.Message {
  getType(): NamespaceInfo.NamespaceType;
  setType(value: NamespaceInfo.NamespaceType): NamespaceInfo;

  getName(): string;
  setName(value: string): NamespaceInfo;

  getAccounts(): number;
  setAccounts(value: number): NamespaceInfo;

  getBuckets(): number;
  setBuckets(value: number): NamespaceInfo;

  getLabs(): number;
  setLabs(value: number): NamespaceInfo;

  getServingsites(): number;
  setServingsites(value: number): NamespaceInfo;

  getDatasets(): number;
  setDatasets(value: number): NamespaceInfo;

  getDatasources(): number;
  setDatasources(value: number): NamespaceInfo;

  getStudies(): number;
  setStudies(value: number): NamespaceInfo;

  getModels(): number;
  setModels(value: number): NamespaceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamespaceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NamespaceInfo): NamespaceInfo.AsObject;
  static serializeBinaryToWriter(message: NamespaceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamespaceInfo;
  static deserializeBinaryFromReader(message: NamespaceInfo, reader: jspb.BinaryReader): NamespaceInfo;
}

export namespace NamespaceInfo {
  export type AsObject = {
    type: NamespaceInfo.NamespaceType,
    name: string,
    accounts: number,
    buckets: number,
    labs: number,
    servingsites: number,
    datasets: number,
    datasources: number,
    studies: number,
    models: number,
  }

  export enum NamespaceType { 
    TENANT = 0,
    DATAPRODUCT = 1,
    LAB = 2,
    SERVINGSITE = 3,
    MODELASYSTEM = 4,
    MODELACATALOG = 5,
  }
}

export class TableView extends jspb.Message {
  getColsList(): Array<string>;
  setColsList(value: Array<string>): TableView;
  clearColsList(): TableView;
  addCols(value: string, index?: number): TableView;

  getRowsList(): Array<TableViewRow>;
  setRowsList(value: Array<TableViewRow>): TableView;
  clearRowsList(): TableView;
  addRows(value?: TableViewRow, index?: number): TableViewRow;

  getProfilesList(): Array<ColumnProfile>;
  setProfilesList(value: Array<ColumnProfile>): TableView;
  clearProfilesList(): TableView;
  addProfiles(value?: ColumnProfile, index?: number): ColumnProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableView.AsObject;
  static toObject(includeInstance: boolean, msg: TableView): TableView.AsObject;
  static serializeBinaryToWriter(message: TableView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableView;
  static deserializeBinaryFromReader(message: TableView, reader: jspb.BinaryReader): TableView;
}

export namespace TableView {
  export type AsObject = {
    colsList: Array<string>,
    rowsList: Array<TableViewRow.AsObject>,
    profilesList: Array<ColumnProfile.AsObject>,
  }
}

export class TableViewRow extends jspb.Message {
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): TableViewRow;
  clearValuesList(): TableViewRow;
  addValues(value: string, index?: number): TableViewRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TableViewRow.AsObject;
  static toObject(includeInstance: boolean, msg: TableViewRow): TableViewRow.AsObject;
  static serializeBinaryToWriter(message: TableViewRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TableViewRow;
  static deserializeBinaryFromReader(message: TableViewRow, reader: jspb.BinaryReader): TableViewRow;
}

export namespace TableViewRow {
  export type AsObject = {
    valuesList: Array<string>,
  }
}

