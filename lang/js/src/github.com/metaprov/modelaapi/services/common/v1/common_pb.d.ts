import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modelaapi/pkg/apis/data/v1alpha1/generated_pb';


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

  getColumnsList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureStatistics>;
  setColumnsList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureStatistics>): DatasetProfile;
  clearColumnsList(): DatasetProfile;
  addColumns(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureStatistics, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureStatistics;

  getTable(): TableView | undefined;
  setTable(value?: TableView): DatasetProfile;
  hasTable(): boolean;
  clearTable(): DatasetProfile;

  getHash(): string;
  setHash(value: string): DatasetProfile;

  getGroups(): TableView | undefined;
  setGroups(value?: TableView): DatasetProfile;
  hasGroups(): boolean;
  clearGroups(): DatasetProfile;

  getTs(): TimeSeriesProfile | undefined;
  setTs(value?: TimeSeriesProfile): DatasetProfile;
  hasTs(): boolean;
  clearTs(): DatasetProfile;

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
    columnsList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureStatistics.AsObject>,
    table?: TableView.AsObject,
    hash: string,
    groups?: TableView.AsObject,
    ts?: TimeSeriesProfile.AsObject,
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

  getRocauc(): ROCCurve | undefined;
  setRocauc(value?: ROCCurve): ModelProfile;
  hasRocauc(): boolean;
  clearRocauc(): ModelProfile;

  getPr(): PrecisionRecallCurve | undefined;
  setPr(value?: PrecisionRecallCurve): ModelProfile;
  hasPr(): boolean;
  clearPr(): ModelProfile;

  getMulticlassrocaucList(): Array<ROCCurve>;
  setMulticlassrocaucList(value: Array<ROCCurve>): ModelProfile;
  clearMulticlassrocaucList(): ModelProfile;
  addMulticlassrocauc(value?: ROCCurve, index?: number): ROCCurve;

  getMulticlassprList(): Array<PrecisionRecallCurve>;
  setMulticlassprList(value: Array<PrecisionRecallCurve>): ModelProfile;
  clearMulticlassprList(): ModelProfile;
  addMulticlasspr(value?: PrecisionRecallCurve, index?: number): PrecisionRecallCurve;

  getAlgsList(): Array<ForecastingAlgProfile>;
  setAlgsList(value: Array<ForecastingAlgProfile>): ModelProfile;
  clearAlgsList(): ModelProfile;
  addAlgs(value?: ForecastingAlgProfile, index?: number): ForecastingAlgProfile;

  getFeatures(): TableView | undefined;
  setFeatures(value?: TableView): ModelProfile;
  hasFeatures(): boolean;
  clearFeatures(): ModelProfile;

  getGroups(): TableView | undefined;
  setGroups(value?: TableView): ModelProfile;
  hasGroups(): boolean;
  clearGroups(): ModelProfile;

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
    rocauc?: ROCCurve.AsObject,
    pr?: PrecisionRecallCurve.AsObject,
    multiclassrocaucList: Array<ROCCurve.AsObject>,
    multiclassprList: Array<PrecisionRecallCurve.AsObject>,
    algsList: Array<ForecastingAlgProfile.AsObject>,
    features?: TableView.AsObject,
    groups?: TableView.AsObject,
  }
}

export class ForecastingAlgProfile extends jspb.Message {
  getAlgorithm(): string;
  setAlgorithm(value: string): ForecastingAlgProfile;

  getSeries(): TableView | undefined;
  setSeries(value?: TableView): ForecastingAlgProfile;
  hasSeries(): boolean;
  clearSeries(): ForecastingAlgProfile;

  getTimestat(): TimeStat | undefined;
  setTimestat(value?: TimeStat): ForecastingAlgProfile;
  hasTimestat(): boolean;
  clearTimestat(): ForecastingAlgProfile;

  getValuestat(): TableView | undefined;
  setValuestat(value?: TableView): ForecastingAlgProfile;
  hasValuestat(): boolean;
  clearValuestat(): ForecastingAlgProfile;

  getCv(): TableView | undefined;
  setCv(value?: TableView): ForecastingAlgProfile;
  hasCv(): boolean;
  clearCv(): ForecastingAlgProfile;

  getForecast(): TableView | undefined;
  setForecast(value?: TableView): ForecastingAlgProfile;
  hasForecast(): boolean;
  clearForecast(): ForecastingAlgProfile;

  getMetrics(): TableView | undefined;
  setMetrics(value?: TableView): ForecastingAlgProfile;
  hasMetrics(): boolean;
  clearMetrics(): ForecastingAlgProfile;

  getChangepoints(): TableView | undefined;
  setChangepoints(value?: TableView): ForecastingAlgProfile;
  hasChangepoints(): boolean;
  clearChangepoints(): ForecastingAlgProfile;

  getPlotsList(): Array<Plot>;
  setPlotsList(value: Array<Plot>): ForecastingAlgProfile;
  clearPlotsList(): ForecastingAlgProfile;
  addPlots(value?: Plot, index?: number): Plot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForecastingAlgProfile.AsObject;
  static toObject(includeInstance: boolean, msg: ForecastingAlgProfile): ForecastingAlgProfile.AsObject;
  static serializeBinaryToWriter(message: ForecastingAlgProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForecastingAlgProfile;
  static deserializeBinaryFromReader(message: ForecastingAlgProfile, reader: jspb.BinaryReader): ForecastingAlgProfile;
}

export namespace ForecastingAlgProfile {
  export type AsObject = {
    algorithm: string,
    series?: TableView.AsObject,
    timestat?: TimeStat.AsObject,
    valuestat?: TableView.AsObject,
    cv?: TableView.AsObject,
    forecast?: TableView.AsObject,
    metrics?: TableView.AsObject,
    changepoints?: TableView.AsObject,
    plotsList: Array<Plot.AsObject>,
  }
}

export class TimeStat extends jspb.Message {
  getGaps(): TableView | undefined;
  setGaps(value?: TableView): TimeStat;
  hasGaps(): boolean;
  clearGaps(): TimeStat;

  getAddedTimepoints(): number;
  setAddedTimepoints(value: number): TimeStat;

  getDroppedTimepoints(): number;
  setDroppedTimepoints(value: number): TimeStat;

  getDataPoints(): number;
  setDataPoints(value: number): TimeStat;

  getMeanIncrementsSecs(): number;
  setMeanIncrementsSecs(value: number): TimeStat;

  getMinTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMinTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): TimeStat;
  hasMinTimestamp(): boolean;
  clearMinTimestamp(): TimeStat;

  getMaxTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMaxTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): TimeStat;
  hasMaxTimestamp(): boolean;
  clearMaxTimestamp(): TimeStat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeStat.AsObject;
  static toObject(includeInstance: boolean, msg: TimeStat): TimeStat.AsObject;
  static serializeBinaryToWriter(message: TimeStat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeStat;
  static deserializeBinaryFromReader(message: TimeStat, reader: jspb.BinaryReader): TimeStat;
}

export namespace TimeStat {
  export type AsObject = {
    gaps?: TableView.AsObject,
    addedTimepoints: number,
    droppedTimepoints: number,
    dataPoints: number,
    meanIncrementsSecs: number,
    minTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    maxTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ROCCurve extends jspb.Message {
  getClassname(): string;
  setClassname(value: string): ROCCurve;

  getClassid(): number;
  setClassid(value: number): ROCCurve;

  getFprList(): Array<number>;
  setFprList(value: Array<number>): ROCCurve;
  clearFprList(): ROCCurve;
  addFpr(value: number, index?: number): ROCCurve;

  getTprList(): Array<number>;
  setTprList(value: Array<number>): ROCCurve;
  clearTprList(): ROCCurve;
  addTpr(value: number, index?: number): ROCCurve;

  getThresholdsList(): Array<number>;
  setThresholdsList(value: Array<number>): ROCCurve;
  clearThresholdsList(): ROCCurve;
  addThresholds(value: number, index?: number): ROCCurve;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ROCCurve.AsObject;
  static toObject(includeInstance: boolean, msg: ROCCurve): ROCCurve.AsObject;
  static serializeBinaryToWriter(message: ROCCurve, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ROCCurve;
  static deserializeBinaryFromReader(message: ROCCurve, reader: jspb.BinaryReader): ROCCurve;
}

export namespace ROCCurve {
  export type AsObject = {
    classname: string,
    classid: number,
    fprList: Array<number>,
    tprList: Array<number>,
    thresholdsList: Array<number>,
  }
}

export class PrecisionRecallCurve extends jspb.Message {
  getClassname(): string;
  setClassname(value: string): PrecisionRecallCurve;

  getClassid(): number;
  setClassid(value: number): PrecisionRecallCurve;

  getPrecisionList(): Array<number>;
  setPrecisionList(value: Array<number>): PrecisionRecallCurve;
  clearPrecisionList(): PrecisionRecallCurve;
  addPrecision(value: number, index?: number): PrecisionRecallCurve;

  getRecallList(): Array<number>;
  setRecallList(value: Array<number>): PrecisionRecallCurve;
  clearRecallList(): PrecisionRecallCurve;
  addRecall(value: number, index?: number): PrecisionRecallCurve;

  getThresholdsList(): Array<number>;
  setThresholdsList(value: Array<number>): PrecisionRecallCurve;
  clearThresholdsList(): PrecisionRecallCurve;
  addThresholds(value: number, index?: number): PrecisionRecallCurve;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrecisionRecallCurve.AsObject;
  static toObject(includeInstance: boolean, msg: PrecisionRecallCurve): PrecisionRecallCurve.AsObject;
  static serializeBinaryToWriter(message: PrecisionRecallCurve, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrecisionRecallCurve;
  static deserializeBinaryFromReader(message: PrecisionRecallCurve, reader: jspb.BinaryReader): PrecisionRecallCurve;
}

export namespace PrecisionRecallCurve {
  export type AsObject = {
    classname: string,
    classid: number,
    precisionList: Array<number>,
    recallList: Array<number>,
    thresholdsList: Array<number>,
  }
}

export class TimeSeriesProfile extends jspb.Message {
  getKpss(): KPSS | undefined;
  setKpss(value?: KPSS): TimeSeriesProfile;
  hasKpss(): boolean;
  clearKpss(): TimeSeriesProfile;

  getAdf(): ADF | undefined;
  setAdf(value?: ADF): TimeSeriesProfile;
  hasAdf(): boolean;
  clearAdf(): TimeSeriesProfile;

  getZivot(): ZivotAndrew | undefined;
  setZivot(value?: ZivotAndrew): TimeSeriesProfile;
  hasZivot(): boolean;
  clearZivot(): TimeSeriesProfile;

  getKendall(): MannKendall | undefined;
  setKendall(value?: MannKendall): TimeSeriesProfile;
  hasKendall(): boolean;
  clearKendall(): TimeSeriesProfile;

  getDw(): DurbinWatson | undefined;
  setDw(value?: DurbinWatson): TimeSeriesProfile;
  hasDw(): boolean;
  clearDw(): TimeSeriesProfile;

  getKey(): string;
  setKey(value: string): TimeSeriesProfile;

  getSeries(): TableView | undefined;
  setSeries(value?: TableView): TimeSeriesProfile;
  hasSeries(): boolean;
  clearSeries(): TimeSeriesProfile;

  getValuestat(): TableView | undefined;
  setValuestat(value?: TableView): TimeSeriesProfile;
  hasValuestat(): boolean;
  clearValuestat(): TimeSeriesProfile;

  getFeaturesview(): TableView | undefined;
  setFeaturesview(value?: TableView): TimeSeriesProfile;
  hasFeaturesview(): boolean;
  clearFeaturesview(): TimeSeriesProfile;

  getFeaturesMap(): jspb.Map<string, number>;
  clearFeaturesMap(): TimeSeriesProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSeriesProfile.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSeriesProfile): TimeSeriesProfile.AsObject;
  static serializeBinaryToWriter(message: TimeSeriesProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSeriesProfile;
  static deserializeBinaryFromReader(message: TimeSeriesProfile, reader: jspb.BinaryReader): TimeSeriesProfile;
}

export namespace TimeSeriesProfile {
  export type AsObject = {
    kpss?: KPSS.AsObject,
    adf?: ADF.AsObject,
    zivot?: ZivotAndrew.AsObject,
    kendall?: MannKendall.AsObject,
    dw?: DurbinWatson.AsObject,
    key: string,
    series?: TableView.AsObject,
    valuestat?: TableView.AsObject,
    featuresview?: TableView.AsObject,
    featuresMap: Array<[string, number]>,
  }
}

export class KPSS extends jspb.Message {
  getKpssStat(): number;
  setKpssStat(value: number): KPSS;

  getPvalue(): number;
  setPvalue(value: number): KPSS;

  getLags(): number;
  setLags(value: number): KPSS;

  getCritMap(): jspb.Map<string, number>;
  clearCritMap(): KPSS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KPSS.AsObject;
  static toObject(includeInstance: boolean, msg: KPSS): KPSS.AsObject;
  static serializeBinaryToWriter(message: KPSS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KPSS;
  static deserializeBinaryFromReader(message: KPSS, reader: jspb.BinaryReader): KPSS;
}

export namespace KPSS {
  export type AsObject = {
    kpssStat: number,
    pvalue: number,
    lags: number,
    critMap: Array<[string, number]>,
  }
}

export class ADF extends jspb.Message {
  getAdf(): number;
  setAdf(value: number): ADF;

  getPvalue(): number;
  setPvalue(value: number): ADF;

  getUsedlag(): number;
  setUsedlag(value: number): ADF;

  getNobs(): number;
  setNobs(value: number): ADF;

  getCritMap(): jspb.Map<string, number>;
  clearCritMap(): ADF;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ADF.AsObject;
  static toObject(includeInstance: boolean, msg: ADF): ADF.AsObject;
  static serializeBinaryToWriter(message: ADF, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ADF;
  static deserializeBinaryFromReader(message: ADF, reader: jspb.BinaryReader): ADF;
}

export namespace ADF {
  export type AsObject = {
    adf: number,
    pvalue: number,
    usedlag: number,
    nobs: number,
    critMap: Array<[string, number]>,
  }
}

export class ZivotAndrew extends jspb.Message {
  getZastat(): number;
  setZastat(value: number): ZivotAndrew;

  getPvalue(): number;
  setPvalue(value: number): ZivotAndrew;

  getCritMap(): jspb.Map<string, number>;
  clearCritMap(): ZivotAndrew;

  getBaselag(): number;
  setBaselag(value: number): ZivotAndrew;

  getBpidx(): number;
  setBpidx(value: number): ZivotAndrew;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZivotAndrew.AsObject;
  static toObject(includeInstance: boolean, msg: ZivotAndrew): ZivotAndrew.AsObject;
  static serializeBinaryToWriter(message: ZivotAndrew, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZivotAndrew;
  static deserializeBinaryFromReader(message: ZivotAndrew, reader: jspb.BinaryReader): ZivotAndrew;
}

export namespace ZivotAndrew {
  export type AsObject = {
    zastat: number,
    pvalue: number,
    critMap: Array<[string, number]>,
    baselag: number,
    bpidx: number,
  }
}

export class MannKendall extends jspb.Message {
  getTrend(): string;
  setTrend(value: string): MannKendall;

  getH(): number;
  setH(value: number): MannKendall;

  getP(): number;
  setP(value: number): MannKendall;

  getZ(): number;
  setZ(value: number): MannKendall;

  getTau(): number;
  setTau(value: number): MannKendall;

  getS(): number;
  setS(value: number): MannKendall;

  getVarS(): number;
  setVarS(value: number): MannKendall;

  getSlope(): number;
  setSlope(value: number): MannKendall;

  getIntercept(): number;
  setIntercept(value: number): MannKendall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MannKendall.AsObject;
  static toObject(includeInstance: boolean, msg: MannKendall): MannKendall.AsObject;
  static serializeBinaryToWriter(message: MannKendall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MannKendall;
  static deserializeBinaryFromReader(message: MannKendall, reader: jspb.BinaryReader): MannKendall;
}

export namespace MannKendall {
  export type AsObject = {
    trend: string,
    h: number,
    p: number,
    z: number,
    tau: number,
    s: number,
    varS: number,
    slope: number,
    intercept: number,
  }
}

export class DurbinWatson extends jspb.Message {
  getDw(): number;
  setDw(value: number): DurbinWatson;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DurbinWatson.AsObject;
  static toObject(includeInstance: boolean, msg: DurbinWatson): DurbinWatson.AsObject;
  static serializeBinaryToWriter(message: DurbinWatson, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DurbinWatson;
  static deserializeBinaryFromReader(message: DurbinWatson, reader: jspb.BinaryReader): DurbinWatson;
}

export namespace DurbinWatson {
  export type AsObject = {
    dw: number,
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

export class Histogram extends jspb.Message {
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): Histogram;
  clearValuesList(): Histogram;
  addValues(value: number, index?: number): Histogram;

  getBinsList(): Array<number>;
  setBinsList(value: Array<number>): Histogram;
  clearBinsList(): Histogram;
  addBins(value: number, index?: number): Histogram;

  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): Histogram;
  clearCategoriesList(): Histogram;
  addCategories(value: string, index?: number): Histogram;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Histogram.AsObject;
  static toObject(includeInstance: boolean, msg: Histogram): Histogram.AsObject;
  static serializeBinaryToWriter(message: Histogram, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Histogram;
  static deserializeBinaryFromReader(message: Histogram, reader: jspb.BinaryReader): Histogram;
}

export namespace Histogram {
  export type AsObject = {
    valuesList: Array<number>,
    binsList: Array<number>,
    categoriesList: Array<string>,
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

  getProfilesList(): Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureStatistics>;
  setProfilesList(value: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureStatistics>): TableView;
  clearProfilesList(): TableView;
  addProfiles(value?: github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureStatistics, index?: number): github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureStatistics;

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
    profilesList: Array<github_com_metaprov_modelaapi_pkg_apis_data_v1alpha1_generated_pb.FeatureStatistics.AsObject>,
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

