import { PHPBaseModel } from '@global_packages/models/core.model';
import { Student } from '../services/student.service';

export interface GuidanceRequest extends PHPBaseModel {
    student_id: string;
    student: Student;
}
