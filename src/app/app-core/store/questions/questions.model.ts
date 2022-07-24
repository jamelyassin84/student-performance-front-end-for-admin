import { PHPBaseModel } from '@global_packages/models/core.model';
import { SurveyForm } from '../form/form.model';

export interface SurveyQuestion extends PHPBaseModel {
    title: string;
    question: string;
    survey_form_id: string;
    show_on_website: boolean;
    question_value_type: 'positive' | 'negative';
    form: SurveyForm;
}
