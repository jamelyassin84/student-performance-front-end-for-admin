import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '@global_packages/api/base.api';
import { Injectable } from '@angular/core';
import { SurveyForm } from './form.model';

@Injectable({ providedIn: 'root' })
export class SurveyFormService extends BaseService<any> {
    constructor(_http: HttpClient) {
        super(_http, 'forms');
    }

    current$: BehaviorSubject<SurveyForm | null> =
        new BehaviorSubject<SurveyForm | null>(null);
}
