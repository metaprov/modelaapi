package v1alpha1

type LossFunctionName string

const (
	LossFunctionNameL1                       LossFunctionName = "sgd-loss"
	LossFunctionNameMSE                      LossFunctionName = "mse-loss"
	LossFunctionNameCrossEntropy             LossFunctionName = "cross-entropy-loss"
	LossFunctionNameCTC                      LossFunctionName = "ctc-loss"
	LossFunctionNameNLL                      LossFunctionName = "nll-loss"
	LossFunctionNamePoissonNLL               LossFunctionName = "poisson-nll"
	LossFunctionNameKLDivLoss                LossFunctionName = "kl-div"
	LossFunctionNameBCELoss                  LossFunctionName = "bce-loss"
	LossFunctionNameBCEWithLogitsLoss        LossFunctionName = "bce-with-logits"
	LossFunctionNameMarginRankingLoss        LossFunctionName = "margin-ranking"
	LossFunctionNameHingeEmbeddingLoss       LossFunctionName = "hinge-embedding"
	LossFunctionNameMultiLabelMarginLoss     LossFunctionName = "multi-label-marign"
	LossFunctionNameSmoothL1Loss             LossFunctionName = "smooth-l1"
	LossFunctionNameSoftMarginLoss           LossFunctionName = "soft-margin"
	LossFunctionNameMultiLabelSoftMarginLoss LossFunctionName = "multi-label-soft-margin"
	LossFunctionNameCosineEmbeddingLoss      LossFunctionName = "multi-cosine-embedding"
	LossFunctionNameMultiMarginLoss          LossFunctionName = "multi-margin"
	LossFunctionNameTripletMarginLoss        LossFunctionName = "tripple-margin"
)

type OptimizerName string

const (
	OptimizerNameSGD      OptimizerName = "sgd"
	OptimizerNameRMSprop  OptimizerName = "rmsprop"
	OptimizerNameAdagrad  OptimizerName = "adagrad"
	OptimizerNameAdadelta OptimizerName = "adadelta"
	OptimizerNameAdam     OptimizerName = "adam"
	OptimizerNameAdamax   OptimizerName = "adamax"
	OptimizerNameNadam    OptimizerName = "nadam"
)

type IinitializerName string

const (
	IinitializerZeros            IinitializerName = "zeros"
	IinitializerOnes             IinitializerName = "ones"
	IinitializerConstant         IinitializerName = "constant"
	IinitializerRandom_normal    IinitializerName = "random-normal"
	IinitializerRandom_uniform   IinitializerName = "random-uniform"
	IinitializerTruncated_normal IinitializerName = "truncated-normal"
	IinitializerVariance_scaling IinitializerName = "varieance-scaling"
	IinitializerOrthogonal       IinitializerName = "orthogonal"
	IinitializerIdentity         IinitializerName = "identity"
	IinitializerLecun_uniform    IinitializerName = "lecun-uniform"
	IinitializerGlorot_normal    IinitializerName = "glorot-normal"
	IinitializerGlorot_uniform   IinitializerName = "glorot-uniform"
	IinitializerHe_normal        IinitializerName = "he-normal"
	Iinitializerlecun_normal     IinitializerName = "lecun-normal"
	IinitializerHeUniform        IinitializerName = "uniform"
	IinitializerNone             IinitializerName = "none"
)

type ConstraintName string

const (
	ConstraintNameMaxNorm    ConstraintName = "max-norm"
	ConstraintNameNonNeg     ConstraintName = "non-reg"
	ConstraintNameUnitNorm   ConstraintName = "unit-norm"
	ConstraintNameMinMaxNorm ConstraintName = "max-norm"
	ConstraintNameNone       ConstraintName = "none"
)

type ActivationName string

const (
	ActivationNameSoftMax     ActivationName = "softmax"
	ActivationNameElu         ActivationName = "elu"
	ActivationNameSelu        ActivationName = "selu"
	ActivationNameSoftsign    ActivationName = "softsign"
	ActivationNameRelu        ActivationName = "relu"
	ActivationNameTanh        ActivationName = "tanh"
	ActivationNameSigmoid     ActivationName = "sigmoid"
	ActivationNameHardSigmoid ActivationName = "hardsigmoid"
	ActivationNameExponential ActivationName = "exponential"
	ActivationNameLinear      ActivationName = "linear"
)

type NNLayerName string

const (
	LayerNameDense         NNLayerName = "dense"
	LayerNameActivation    NNLayerName = "activation"
	LayerNameDropout       NNLayerName = "dropout"
	LayerNameFlatten       NNLayerName = "flatten"
	LayerNameInput         NNLayerName = "input"
	LayerNameReshape       NNLayerName = "reshape"
	LayerNamePermute       NNLayerName = "permute"
	RepeatVector           NNLayerName = "repeat-verctor"
	Lambda                 NNLayerName = "lambda"
	ActivityRegularization NNLayerName = "activity-regularization"
	Masking                NNLayerName = "masking"
	SpatialDropout1D       NNLayerName = "spatial-dropout-1d"
	SpatialDropout2D       NNLayerName = "spatial-dropout-2d"
	SpatialDropout3D       NNLayerName = "spatial-dropout-3d"

	// conv layers
	LayerNameConv1D          NNLayerName = "conv-1d"
	LayerNameConv1DTranspose NNLayerName = "conv-1d-transpose"
	LayerNameConv2D          NNLayerName = "conv-2d"
	LayerNameConv2DTranspose NNLayerName = "conv-2d-transpose"
	LayerNameConv3D          NNLayerName = "conv-3d"
	LayerNameConv3DTranspose NNLayerName = "conv-3d-transpose"
	LayerNameUnfold          NNLayerName = "unfold"
	LayerNamefold            NNLayerName = "fold"

	// VirtualClustering

	LayerNameSeparableConv1D NNLayerName = "separable-conv-1d"
	LayerNameSeparableConv2D NNLayerName = "separable-conv-2d"

	LayerNameCropping1D NNLayerName = "cropping-1d"
	LayerNameCropping2D NNLayerName = "cropping-2d"
	LayerNameCropping3D NNLayerName = "cropping-3d"

	LayerNameUpSampling1D NNLayerName = "upsampling-1d"
	LayerNameUpSampling2D NNLayerName = "upsampling-2d"
	LayerNameUpSampling3D NNLayerName = "upsampling-3d"

	LayerNameZeroPadding1D NNLayerName = "zero-padding-1D"
	LayerNameZeroPadding2D NNLayerName = "zaero-padding-2D"
	LayerNameZeroPadding3D NNLayerName = "zero-padding-3D"

	// VirtualClustering
	LayerNameMaxVirtualClustering1D   NNLayerName = "max-pooling-1D"
	LayerNameMaxVirtualClustering2D   NNLayerName = "max-pooling-2D"
	LayerNameMaxVirtualClustering3D   NNLayerName = "max-pooling-3D"
	LayerNameMaxUnVirtualClustering1D NNLayerName = "max-unpool-1D"
	LayerNameMaxUnVirtualClustering2D NNLayerName = "max-unpool-2D"
	LayerNameMaxUnVirtualClustering3D NNLayerName = "max-unpool-3D"

	LayerNameAverageVirtualClustering1D       NNLayerName = "average-pooling-1D"
	LayerNameAverageVirtualClustering2D       NNLayerName = "average-pooling-2D"
	LayerNameAverageVirtualClustering3D       NNLayerName = "average-pooling-3D"
	LayerNameGlobalMaxVirtualClustering1D     NNLayerName = "global-max-pooling-2D"
	LayerNameGlobalMaxVirtualClustering2D     NNLayerName = "global-max-pooling-2D"
	LayerNameGlobalMaxVirtualClustering3D     NNLayerName = "global-max-pooling-3D"
	LayerNameGlobalAverageVirtualClustering1D NNLayerName = "global-average-pooling-1D"
	LayerNameGlobalAverageVirtualClustering2D NNLayerName = "global-average-pooling-2D"
	LayerNameGlobalAverageVirtualClustering3D NNLayerName = "global-average-pooling-3D"

	LayerNameLocallyConnected1D NNLayerName = "locallly-conntected-1d"
	LayerNameLocallyConnected2D NNLayerName = "localy-connected-2d"

	LayerNameSimpleRNN     NNLayerName = "simple-rnn"
	LayerNameGRU           NNLayerName = "gru"
	LayerNameLSTM          NNLayerName = "lstm"
	LayerNameConvLSTM2D    NNLayerName = "lstm-2d"
	LayerNameSimpleRNNCell NNLayerName = "simple-rnn-cell"
	LayerNameGRUCell       NNLayerName = "gru-cell"
	LayerNameLSTMCell      NNLayerName = "lstm-cell"
	LayerNameCuDNNGRU      NNLayerName = "cudnngru"
	LayerNameCuDNNLSTM     NNLayerName = "cu-dnn-lstm"

	// -------- Embedding --------
	LayerNameEmbedding NNLayerName = "embedding"

	// -------- Advanced Activations --------
	LayerNameLeakyReLU          NNLayerName = "leaky-relru"
	LayerNamePReLU              NNLayerName = "prelu"
	LayerNameELU                NNLayerName = "elu"
	LayerNameThresholdedReLU    NNLayerName = "treshold-relu"
	LayerNameSoftmax            NNLayerName = "softmax"
	LayerNameReLU               NNLayerName = "relu"
	LayerNameBatchNormalization NNLayerName = "batch-normalization"
	LayerNameGaussianNoise      NNLayerName = "gaussian-noise"
	LayerNameGaussianDropout    NNLayerName = "gaussian-dropout"
	LayerNameAlphaDropout       NNLayerName = "alpha-dropout"
)

type DNNTypeName string

const (
	Mlp  DNNTypeName = "mlp"
	Conv DNNTypeName = "cnn"
	Rnn  DNNTypeName = "rnn"
)

type NNLayerParameter struct {
	Name  string `json:"name" protobuf:"bytes,1,opt,name=name"`
	Value string `json:"value" protobuf:"bytes,2,opt,name=value"`
}

type DeepEstimatorLayer struct {
	// Name is the name of the layer
	Name string `json:"name" protobuf:"bytes,1,opt,name=name"`
	// Type is the type of the layers
	Type NNLayerName `json:"type" protobuf:"bytes,2,opt,name=type"`
	// Parameters are the hyper parameters of this layer
	Parameters []NNLayerParameter `json:"parameters" protobuf:"bytes,3,rep,name=parameters"`
	// InputLayers are the layer input to this layer
	InputLayers []string `json:"inputLayers" protobuf:"bytes,4,rep,name=inputLayers"`
}

type DeepEstimatorSpec struct {
	// Layers is the dnn architecture
	// +kubebuilder:validation:Optional
	Layers []DeepEstimatorLayer `json:"layers,omitempty" protobuf:"bytes,1,rep,name=layers"`
	// The type of the dnn
	// +kubebuilder:validation:Optional
	Type *DNNTypeName `json:"type,omitempty" protobuf:"bytes,2,opt,name=type"`
	// Batch size specify about
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	BatchSize *int32 `json:"batchSize,omitempty" protobuf:"varint,3,opt,name=batchSize"`
	// Budget size specify about
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Epochs *int32 `json:"epochs,omitempty" protobuf:"varint,4,opt,name=epochs"`
	// ValidationSplit specify about
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	ValidationSplit *int32 `json:"validationSplit,omitempty" protobuf:"varint,5,opt,name=validationSplit"`
	// Is this a seq model
	// +kubebuilder:validation:Optional
	Seq *bool `json:"isSeq,omitempty" protobuf:"bytes,6,opt,name=isSeq"`
	// Gpus denote of gpu for trainer, any number more than 1 denote distribute training
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	Gpus *int32 `json:"gpus,omitempty" protobuf:"varint,7,opt,name=gpus"`
	// compile
	// +kubebuilder:validation:Optional
	Loss string `json:"loss,omitempty" protobuf:"bytes,8,opt,name=loss"`
}
