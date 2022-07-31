import { PHPBaseModel } from '@global_packages/models/core.model';
import { SurveyQuestion } from '../questions/questions.model';

export interface SurveyForm extends PHPBaseModel {
    name: string;
    question_type: 'radio' | 'button';
    questions: SurveyQuestion[];
    description: string;
}
