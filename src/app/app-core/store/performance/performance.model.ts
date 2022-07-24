import { PHPBaseModel } from '@global_packages/models/core.model';

export interface StudentPerformance extends PHPBaseModel {
    year_level: '1st' | '2nd' | '3rd' | '4th' | '5th';
    semester: '1st' | '2nd' | '3rd';
    performance: number;
}
