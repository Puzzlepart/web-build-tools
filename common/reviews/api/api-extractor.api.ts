// @public
declare class Extractor {
    // (undocumented)
    constructor(config: IExtractorConfig, options?: IExtractorOptions);
    readonly actualConfig: IExtractorConfig;
    // @deprecated
    analyzeProject(options?: IAnalyzeProjectOptions): void;
    static generateFilePathsForAnalysis(inputFilePaths: string[]): string[];
    static jsonSchema: JsonSchema;
    static loadConfigObject(jsonConfigFile: string): IExtractorConfig;
    static readonly packageName: string;
    processProject(options?: IAnalyzeProjectOptions): boolean;
    static processProjectFromConfigFile(jsonConfigFile: string, options?: IExtractorOptions): void;
    static readonly version: string | undefined;
}

// @public
declare class ExtractorMessage {
    // @internal (undocumented)
    constructor(options: IExtractorMessageOptions);
    readonly category: ExtractorMessageCategory;
    formatMessageWithLocation(workingPackageFolderPath: string): string;
    // (undocumented)
    formatMessageWithoutLocation(): string;
    readonly messageId: tsdoc.TSDocMessageId | ExtractorMessageId | string;
    readonly sourceFileColumn: number | undefined;
    readonly sourceFileLine: number | undefined;
    readonly sourceFilePath: string | undefined;
    readonly text: string;
}

// @public
declare const enum ExtractorMessageCategory {
    Compiler = "Compiler",
    Extractor = "Extractor",
    TSDoc = "TSDoc"
}

// @public
declare const enum ExtractorMessageId {
    ExtraReleaseTag = "ae-extra-release-tag",
    ForgottenExport = "ae-forgotten-export",
    InconsistentReleaseTags = "ae-inconsistent-release-tags",
    MisplacedPackageTag = "ae-misplaced-package-tag",
    MissingReleaseTag = "ae-missing-release-tag"
}

// @public
declare const enum ExtractorMessageLogLevel {
    Error = "error",
    None = "none",
    Warning = "warning"
}

// @public
declare const enum ExtractorValidationRulePolicy {
    allow = "allow",
    error = "error"
}

// @public
interface IAnalyzeProjectOptions {
    projectConfig?: IExtractorProjectConfig;
}

// @public
interface IExtractorApiJsonFileConfig {
    enabled: boolean;
    outputFolder?: string;
}

// @public
interface IExtractorApiReviewFileConfig {
    apiReviewFolder?: string;
    enabled: boolean;
    tempFolder?: string;
}

// @public
interface IExtractorConfig {
    // (undocumented)
    apiJsonFile?: IExtractorApiJsonFileConfig;
    // (undocumented)
    apiReviewFile?: IExtractorApiReviewFileConfig;
    compiler: IExtractorTsconfigCompilerConfig | IExtractorRuntimeCompilerConfig;
    // @beta (undocumented)
    dtsRollup?: IExtractorDtsRollupConfig;
    extends?: string;
    // (undocumented)
    messages?: IExtractorMessagesConfig;
    // (undocumented)
    policies?: IExtractorPoliciesConfig;
    // (undocumented)
    project: IExtractorProjectConfig;
    skipLibCheck?: boolean;
    testMode?: boolean;
    // @beta (undocumented)
    tsdocMetadata?: IExtractorTsdocMetadataConfig;
    // (undocumented)
    validationRules?: IExtractorValidationRulesConfig;
}

// @beta
interface IExtractorDtsRollupConfig {
    enabled: boolean;
    mainDtsRollupPath?: string;
    publishFolder?: string;
    publishFolderForBeta?: string;
    publishFolderForInternal?: string;
    publishFolderForPublic?: string;
    trimming?: boolean;
}

// @public
interface IExtractorMessageReportingRuleConfig {
    addToApiReviewFile?: boolean;
    logLevel: ExtractorMessageLogLevel;
}

// @public
interface IExtractorMessageReportingTableConfig {
    [messageId: string]: IExtractorMessageReportingRuleConfig;
}

// @public
interface IExtractorMessagesConfig {
    compilerMessageReporting?: IExtractorMessageReportingTableConfig;
    extractorMessageReporting?: IExtractorMessageReportingTableConfig;
    tsdocMessageReporting?: IExtractorMessageReportingTableConfig;
}

// @public
interface IExtractorOptions {
    compilerProgram?: ts.Program;
    customLogger?: Partial<ILogger>;
    localBuild?: boolean;
    // @beta
    typescriptCompilerFolder?: string;
}

// @public
interface IExtractorPoliciesConfig {
    namespaceSupport?: 'conservative' | 'permissive';
}

// @public
interface IExtractorProjectConfig {
    entryPointSourceFile: string;
}

// @public
interface IExtractorRuntimeCompilerConfig {
    // (undocumented)
    configType: 'runtime';
}

// @public
interface IExtractorTsconfigCompilerConfig {
    // (undocumented)
    configType: 'tsconfig';
    overrideTsconfig?: {};
    rootFolder: string;
}

// @beta
interface IExtractorTsdocMetadataConfig {
    enabled: boolean;
    tsdocMetadataPath?: string;
}

// @public
interface IExtractorValidationRulesConfig {
    missingReleaseTags?: ExtractorValidationRulePolicy;
}

// @public
interface ILogger {
    logError(message: string): void;
    logInfo(message: string): void;
    logVerbose(message: string): void;
    logWarning(message: string): void;
}

