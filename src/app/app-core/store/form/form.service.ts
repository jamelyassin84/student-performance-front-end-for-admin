import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '@global_packages/api/base.api';
import { Injectable } from '@angular/core';
import { SurveyForm } from './form.model';

@Injectable({ providedIn: 'root' })
export class SurveyFormService extends BaseService<any> {
    constructor(_http: HttpClient) {
        super(_http, 'forms');
    }

    addedData$: Subject<SurveyForm> = new Subject();

    editedData$: Subject<SurveyForm> = new Subject();

    current$: BehaviorSubject<SurveyForm | null> =
        new BehaviorSubject<SurveyForm | null>(null);

    add(data: SurveyForm) {
        this.addedData$.next(data);
    }

    edit(data: SurveyForm) {
        this.editedData$.next(data);
    }
}
