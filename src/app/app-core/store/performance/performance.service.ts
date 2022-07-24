import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '@global_packages/api/base.api';
import { Injectable } from '@angular/core';
import { StudentPerformance } from './performance.model';

@Injectable({ providedIn: 'root' })
export class SurveyPerformanceService extends BaseService<any> {
    constructor(_http: HttpClient) {
        super(_http, 'performances');
    }

    current$: BehaviorSubject<StudentPerformance | null> =
        new BehaviorSubject<StudentPerformance | null>(null);
}
