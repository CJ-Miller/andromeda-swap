"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModel = exports.Tasks = void 0;
const core_1 = require("../core");
class Tasks extends core_1.CrowdinApi {
    /**
     * @param projectId project identifier
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param status list tasks with specified statuses. It can be one status or a list of comma-separated status values
     */
    listTasks(projectId, limit, offset, status) {
        let url = `${this.url}/projects/${projectId}/tasks`;
        url = this.addQueryParam(url, 'status', status);
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param request request body
     */
    addTask(projectId, request) {
        const url = `${this.url}/projects/${projectId}/tasks`;
        return this.post(url, request, this.defaultConfig());
    }
    exportTaskStrings(projectId, taskId) {
        const url = `${this.url}/projects/${projectId}/tasks/${taskId}/exports`;
        return this.post(url, {}, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param taskId task identifier
     */
    getTask(projectId, taskId) {
        const url = `${this.url}/projects/${projectId}/tasks/${taskId}`;
        return this.get(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param taskId task identifier
     */
    deleteTask(projectId, taskId) {
        const url = `${this.url}/projects/${projectId}/tasks/${taskId}`;
        return this.delete(url, this.defaultConfig());
    }
    /**
     * @param projectId project identifier
     * @param taskId task identifier
     * @param request request body
     */
    editTask(projectId, taskId, request) {
        const url = `${this.url}/projects/${projectId}/tasks/${taskId}`;
        return this.patch(url, request, this.defaultConfig());
    }
    /**
     * @param limit maximum number of items to retrieve (default 25)
     * @param offset starting offset in the collection (default 0)
     * @param status list tasks with specified statuses. It can be one status or a list of comma-separated status values
     * @param isArchived list archived/not archived tasks for the authorized user. 1 - archived, 0 - not archived
     */
    listUserTasks(limit, offset, status, isArchived) {
        let url = `${this.url}/user/tasks`;
        url = this.addQueryParam(url, 'status', status);
        url = this.addQueryParam(url, 'isArchived', isArchived);
        return this.getList(url, limit, offset);
    }
    /**
     * @param projectId project identifier
     * @param taskId task identifier
     * @param request request body
     */
    editTaskArchivedStatus(projectId, taskId, request) {
        let url = `${this.url}/user/tasks/${taskId}`;
        url = this.addQueryParam(url, 'projectId', projectId);
        return this.patch(url, request, this.defaultConfig());
    }
}
exports.Tasks = Tasks;
var TasksModel;
(function (TasksModel) {
    let Status;
    (function (Status) {
        Status["TODO"] = "todo";
        Status["IN_PROGRESS"] = "in_progress";
        Status["DONE"] = "done";
        Status["CLOSED"] = "closed";
    })(Status = TasksModel.Status || (TasksModel.Status = {}));
    let Type;
    (function (Type) {
        Type[Type["TRANSLATE"] = 0] = "TRANSLATE";
        Type[Type["PROOFREAD"] = 1] = "PROOFREAD";
        Type[Type["TRANSLATE_BY_VENDOR"] = 2] = "TRANSLATE_BY_VENDOR";
    })(Type = TasksModel.Type || (TasksModel.Type = {}));
    let Expertise;
    (function (Expertise) {
        Expertise["STANDARD"] = "standard";
        Expertise["MOBILE_APPLICATIONS"] = "mobile-applications";
        Expertise["SOFTWARE_IT"] = "software-it";
        Expertise["GAMING_VIDEO_GAMES"] = "gaming-video-games";
        Expertise["TECHNICAL_ENGINEERING"] = "technical-engineering";
        Expertise["MARKETING_CONSUMER_MEDIA"] = "marketing-consumer-media";
        Expertise["BUSINESS_FINANCE"] = "business-finance";
        Expertise["LEGAL_CERTIFICATE"] = "legal-certificate";
        Expertise["CV"] = "cv";
        Expertise["MEDICAL"] = "medical";
        Expertise["PATENTS"] = "patents";
        Expertise["AD_WORDS_BANNERS"] = "ad-words-banners";
        Expertise["AUTOMOTIVE_AEROSPACE"] = "automotive-aerospace";
        Expertise["SCIENTIFIC"] = "scientific";
        Expertise["SCIENTIFIC_ACADEMIC"] = "scientific-academic";
        Expertise["TOURISM"] = "tourism";
        Expertise["CERTIFICATES_TRANSLATION"] = "certificates-translation";
        Expertise["TRAINING_EMPLOYEE_HANDBOOKS"] = "training-employee-handbooks";
        Expertise["FOREX_CRYPTO"] = "forex-crypto";
    })(Expertise = TasksModel.Expertise || (TasksModel.Expertise = {}));
    let Tone;
    (function (Tone) {
        Tone["EPTY"] = "";
        Tone["INFORMAL"] = "Informal";
        Tone["FRIENDLY"] = "Friendly";
        Tone["BUSINESS"] = "Business";
        Tone["FORMAL"] = "Formal";
        Tone["OTHER"] = "other";
    })(Tone = TasksModel.Tone || (TasksModel.Tone = {}));
    let Purpose;
    (function (Purpose) {
        Purpose["STANDARD"] = "standard";
        Purpose["PERSONAL_USE"] = "Personal use";
        Purpose["ONLINE_CONTENT"] = "Online content";
        Purpose["APP_WEB_LOCALIZATION"] = "App/Web localization";
        Purpose["MEDIA_CONTENT"] = "Media content";
        Purpose["SEMI_TECHNICAL"] = "Semi-technical";
        Purpose["OTHER"] = "other";
    })(Purpose = TasksModel.Purpose || (TasksModel.Purpose = {}));
    let Subject;
    (function (Subject) {
        Subject["GENERAL"] = "general";
        Subject["ACCOUNTING_FINANCE"] = "accounting_finance";
        Subject["AEROSPACE_DEFENCE"] = "aerospace_defence";
        Subject["ARCHITECTURE"] = "architecture";
        Subject["ART"] = "art";
        Subject["AUTOMOTIVE"] = "automotive";
        Subject["CERTIFICATES_DIPLOMAS_LICENCES_CV_ETC"] = "certificates_diplomas_licences_cv_etc";
        Subject["CHEMICAL"] = "chemical";
        Subject["CIVIL_ENGINEERING_CONSTRUCTION"] = "civil_engineering_construction";
        Subject["CORPORATE_SOCIAL_RESPONSIBILITY"] = "corporate_social_responsibility";
        Subject["COSMETICS"] = "cosmetics";
        Subject["CULINARY"] = "culinary";
        Subject["ELECTRONICS_ELECTRICAL_ENGINEERING"] = "electronics_electrical_engineering";
        Subject["ENERGY_POWER_GENERATION_OIL_GAS"] = "energy_power_generation_oil_gas";
        Subject["ENVIRONMENT"] = "environment";
        Subject["FASHION"] = "fashion";
        Subject["GAMES_VISEOGAMES_CASINO"] = "games_viseogames_casino";
        Subject["GENERAL_BUSINESS_COMMERCE"] = "general_business_commerce";
        Subject["HISTORY_ARCHAEOLOGY"] = "history_archaeology";
        Subject["INFORMATION_TECHNOLOGY"] = "information_technology";
        Subject["INSURANCE"] = "insurance";
        Subject["INTERNET_E_COMMERCE"] = "internet_e-commerce";
        Subject["LEGAL_DOCUMENTS_CONTRACTS"] = "legal_documents_contracts";
        Subject["LITERARY_TRANSLATIONS"] = "literary_translations";
        Subject["MARKETING_ADVERTISING_MATERIAL_PUBLIC_RELATIONS"] = "marketing_advertising_material_public_relations";
        Subject["MATEMATICS_AND_PHYSICS"] = "matematics_and_physics";
        Subject["MECHANICAL_MANUFACTURING"] = "mechanical_manufacturing";
        Subject["MEDIA_JOURNALISM_PUBLISHING"] = "media_journalism_publishing";
        Subject["MEDICAL_PHARMACEUTICAL"] = "medical_pharmaceutical";
        Subject["MUSIC"] = "music";
        Subject["PRIVATE_CORRESPONDENCE_LETTERS"] = "private_correspondence_letters";
        Subject["RELIGION"] = "religion";
        Subject["SCIENCE"] = "science";
        Subject["SHIPPING_SAILING_MARITIME"] = "shipping_sailing_maritime";
        Subject["SOCIAL_SCIENCE"] = "social_science";
        Subject["TELECOMMUNICATIONS"] = "telecommunications";
        Subject["TRAVEL_TOURISM"] = "travel_tourism";
    })(Subject = TasksModel.Subject || (TasksModel.Subject = {}));
})(TasksModel = exports.TasksModel || (exports.TasksModel = {}));
