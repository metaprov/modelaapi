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

  getAnomalyuri(): string;
  setAnomalyuri(value: string): DatasetProfile;

  getFeatures(): TableView | undefined;
  setFeatures(value?: TableView): DatasetProfile;
  hasFeatures(): boolean;
  clearFeatures(): DatasetProfile;

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
    columnsList: Array<ColumnProfile.AsObject>,
    table?: TableView.AsObject,
    hash: string,
    anomalyuri: string,
    features?: TableView.AsObject,
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

  getTimeseriesprofilesList(): Array<TimeSeriesModelProfile>;
  setTimeseriesprofilesList(value: Array<TimeSeriesModelProfile>): ModelProfile;
  clearTimeseriesprofilesList(): ModelProfile;
  addTimeseriesprofiles(value?: TimeSeriesModelProfile, index?: number): TimeSeriesModelProfile;

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
    timeseriesprofilesList: Array<TimeSeriesModelProfile.AsObject>,
  }
}

export class TimeSeriesModelProfile extends jspb.Message {
  getAlgorithm(): string;
  setAlgorithm(value: string): TimeSeriesModelProfile;

  getSeries(): TableView | undefined;
  setSeries(value?: TableView): TimeSeriesModelProfile;
  hasSeries(): boolean;
  clearSeries(): TimeSeriesModelProfile;

  getTimestat(): TableView | undefined;
  setTimestat(value?: TableView): TimeSeriesModelProfile;
  hasTimestat(): boolean;
  clearTimestat(): TimeSeriesModelProfile;

  getValuestat(): TableView | undefined;
  setValuestat(value?: TableView): TimeSeriesModelProfile;
  hasValuestat(): boolean;
  clearValuestat(): TimeSeriesModelProfile;

  getCv(): TableView | undefined;
  setCv(value?: TableView): TimeSeriesModelProfile;
  hasCv(): boolean;
  clearCv(): TimeSeriesModelProfile;

  getForecast(): TableView | undefined;
  setForecast(value?: TableView): TimeSeriesModelProfile;
  hasForecast(): boolean;
  clearForecast(): TimeSeriesModelProfile;

  getMetrics(): TableView | undefined;
  setMetrics(value?: TableView): TimeSeriesModelProfile;
  hasMetrics(): boolean;
  clearMetrics(): TimeSeriesModelProfile;

  getChangepoints(): TableView | undefined;
  setChangepoints(value?: TableView): TimeSeriesModelProfile;
  hasChangepoints(): boolean;
  clearChangepoints(): TimeSeriesModelProfile;

  getPlotsList(): Array<Plot>;
  setPlotsList(value: Array<Plot>): TimeSeriesModelProfile;
  clearPlotsList(): TimeSeriesModelProfile;
  addPlots(value?: Plot, index?: number): Plot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSeriesModelProfile.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSeriesModelProfile): TimeSeriesModelProfile.AsObject;
  static serializeBinaryToWriter(message: TimeSeriesModelProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSeriesModelProfile;
  static deserializeBinaryFromReader(message: TimeSeriesModelProfile, reader: jspb.BinaryReader): TimeSeriesModelProfile;
}

export namespace TimeSeriesModelProfile {
  export type AsObject = {
    algorithm: string,
    series?: TableView.AsObject,
    timestat?: TableView.AsObject,
    valuestat?: TableView.AsObject,
    cv?: TableView.AsObject,
    forecast?: TableView.AsObject,
    metrics?: TableView.AsObject,
    changepoints?: TableView.AsObject,
    plotsList: Array<Plot.AsObject>,
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

  getTarget(): boolean;
  setTarget(value: boolean): ColumnProfile;

  getHistogram(): Histogram | undefined;
  setHistogram(value?: Histogram): ColumnProfile;
  hasHistogram(): boolean;
  clearHistogram(): ColumnProfile;

  getInvalid(): number;
  setInvalid(value: number): ColumnProfile;

  getImportance(): number;
  setImportance(value: number): ColumnProfile;

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

  getOutliersupper(): number;
  setOutliersupper(value: number): ColumnProfile;

  getOutlierslower(): number;
  setOutlierslower(value: number): ColumnProfile;

  getOutlierspercent(): number;
  setOutlierspercent(value: number): ColumnProfile;

  getCompleteness(): number;
  setCompleteness(value: number): ColumnProfile;

  getDistinctvaluecount(): number;
  setDistinctvaluecount(value: number): ColumnProfile;

  getMostfreqvaluesratio(): number;
  setMostfreqvaluesratio(value: number): ColumnProfile;

  getIndexofpeculiarity(): number;
  setIndexofpeculiarity(value: number): ColumnProfile;

  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): ColumnProfile;
  clearValuesList(): ColumnProfile;
  addValues(value: string, index?: number): ColumnProfile;

  getCorrtotarget(): number;
  setCorrtotarget(value: number): ColumnProfile;

  getIndex(): number;
  setIndex(value: number): ColumnProfile;

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
    target: boolean,
    histogram?: Histogram.AsObject,
    invalid: number,
    importance: number,
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
    outliersupper: number,
    outlierslower: number,
    outlierspercent: number,
    completeness: number,
    distinctvaluecount: number,
    mostfreqvaluesratio: number,
    indexofpeculiarity: number,
    valuesList: Array<string>,
    corrtotarget: number,
    index: number,
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

