import { SurveyForm } from './../form/form.model';
import { Student } from './../../services/student.service';
import { PHPBaseModel } from '@global_packages/models/core.model';

export interface StudentPerformance extends PHPBaseModel {
    year_level: '1st' | '2nd' | '3rd' | '4th' | '5th';
    semester: '1st' | '2nd' | '3rd';
    performance: number;
    gpa: number;
    student: Student;
    survey_form: SurveyForm;
    records: any[];
}
