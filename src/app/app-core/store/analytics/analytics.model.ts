import { PHPBaseModel } from './../../../../@global_packages/models/core.model';

export interface Analytics extends PHPBaseModel {
    total_surveys: number;
    registered_student: number;
    answered_student: number;
    surveyQuestions: number;
}
