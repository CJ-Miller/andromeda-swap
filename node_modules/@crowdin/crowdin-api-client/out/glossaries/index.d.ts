import { CrowdinApi, DownloadLink, PatchRequest, ResponseList, ResponseObject, Status } from '../core';
export declare class Glossaries extends CrowdinApi {
    /**
     * @param groupId group identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     */
    listGlossaries(groupId?: number, limit?: number, offset?: number): Promise<ResponseList<GlossariesModel.Glossary>>;
    /**
     * @param request request body
     */
    addGlossary(request: GlossariesModel.CreateGlossaryRequest): Promise<ResponseObject<GlossariesModel.Glossary>>;
    /**
     * @param glossaryId glossary identifier
     */
    getGlossary(glossaryId: number): Promise<ResponseObject<GlossariesModel.Glossary>>;
    /**
     * @param glossaryId glossary identifier
     */
    deleteGlossary(glossaryId: number): Promise<void>;
    /**
     * @param glossaryId glossary identifier
     * @param request request body
     */
    editGlossary(glossaryId: number, request: PatchRequest[]): Promise<ResponseObject<GlossariesModel.Glossary>>;
    /**
     * @param glossaryId glossary identifier
     * @param request request body
     */
    exportGlossary(glossaryId: number, request: GlossariesModel.ExportGlossaryRequest): Promise<ResponseObject<Status<GlossariesModel.GlossaryExportStatusAttribute>>>;
    /**
     * @param glossaryId glossary identifier
     * @param exportId export identifier
     */
    downloadGlossary(glossaryId: number, exportId: string): Promise<ResponseObject<DownloadLink>>;
    /**
     * @param glossaryId glossary identifier
     * @param exportId export identifier
     */
    checkGlossaryExportStatus(glossaryId: number, exportId: string): Promise<ResponseObject<Status<GlossariesModel.GlossaryExportStatusAttribute>>>;
    /**
     * @param glossaryId glossary identifier
     * @param request request body
     */
    importGlossaryFile(glossaryId: number, request: GlossariesModel.GlossaryFile): Promise<ResponseObject<Status<GlossariesModel.GlossaryImportStatusAttribute>>>;
    /**
     * @param glossaryId glossary identifier
     * @param importId import identifier
     */
    checkGlossaryImportStatus(glossaryId: number, importId: string): Promise<ResponseObject<Status<GlossariesModel.GlossaryImportStatusAttribute>>>;
    listTerms(glossaryId: number, request: GlossariesModel.ListTermsRequest): Promise<ResponseList<GlossariesModel.Term>>;
    /**
     * @param glossaryId glossary identifier
     * @param userId list user glossaries
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param languageId term language identifier
     * @param translationOfTermId filter terms by termId
     */
    listTerms(glossaryId: number, userId?: number, limit?: number, offset?: number, languageId?: string, translationOfTermId?: number): Promise<ResponseList<GlossariesModel.Term>>;
    /**
     * @param glossaryId glossary identifier
     * @param request request body
     */
    addTerm(glossaryId: number, request: GlossariesModel.CreateTermRequest): Promise<ResponseObject<GlossariesModel.Term>>;
    /**
     * @param glossaryId glossary identifier
     * @param languageId languageId identifier
     * @param translationOfTermId term translation identifier
     */
    clearGlossary(glossaryId: number, languageId?: number, translationOfTermId?: number): Promise<ResponseObject<GlossariesModel.Term>>;
    /**
     * @param glossaryId glossary identifier
     * @param termId term identifier
     */
    getTerm(glossaryId: number, termId: number): Promise<ResponseObject<GlossariesModel.Term>>;
    /**
     * @param glossaryId glossary identifier
     * @param termId term identifier
     */
    deleteTerm(glossaryId: number, termId: number): Promise<void>;
    /**
     * @param glossaryId glossary identifier
     * @param termId term identifier
     * @param request request body
     */
    editTerm(glossaryId: number, termId: number, request: PatchRequest[]): Promise<ResponseObject<GlossariesModel.Term>>;
}
export declare namespace GlossariesModel {
    interface Glossary {
        id: number;
        name: string;
        groupId: number;
        userId: number;
        terms: number;
        languageIds: string[];
        projectIds: number[];
        createdAt: string;
    }
    interface CreateGlossaryRequest {
        name: string;
        groupId?: number;
    }
    interface ExportGlossaryRequest {
        format: GlossaryFormat;
    }
    interface GlossaryExportStatusAttribute {
        format: string;
    }
    interface GlossaryImportStatusAttribute {
        storageId: number;
        scheme: any;
        firstLineContainsHeader: boolean;
    }
    interface GlossaryFile {
        storageId: number;
        scheme?: GlossaryFileScheme;
        firstLineContainsHeader?: boolean;
    }
    interface ListTermsRequest {
        userId?: number;
        limit?: number;
        offset?: number;
        languageId?: string;
        translationOfTermId?: number;
    }
    interface Term {
        id: number;
        userId: number;
        glossaryId: number;
        languageId: string;
        text: string;
        description: string;
        partOfSpeech: string;
        lemma: string;
        createdAt: string;
        updatedAt: string;
    }
    interface CreateTermRequest {
        languageId: string;
        text: string;
        description?: string;
        partOfSpeech?: PartOfSpeech;
        translationOfTermId?: number;
    }
    enum GlossaryFormat {
        TBX = "tbx",
        CSV = "csv",
        XLSX = "xlsx"
    }
    interface GlossaryFileScheme {
        [key: string]: number;
    }
    enum PartOfSpeech {
        ADJECTIVE = "adjective",
        ADPOSITION = "adposition",
        ADVERB = "adverb",
        AUXILIARY = "auxiliary",
        COORDINATING_CONJUNCTION = "coordinating conjunction",
        DETERMINER = "determiner",
        INTERJECTION = "interjection",
        NOUN = "noun",
        NUMERAL = "numeral",
        PARTICLE = "particle",
        PRONOUN = "pronoun",
        PROPER_NOUN = "proper noun",
        SUBORDINATING_CONJUNCTION = "subordinating conjunction",
        VERB = "verb",
        OTHER = "other"
    }
}
