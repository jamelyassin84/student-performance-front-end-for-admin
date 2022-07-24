import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '@global_packages/api/base.api';
import { Injectable } from '@angular/core';
import { SurveyQuestion } from './questions.model';

@Injectable({ providedIn: 'root' })
export class SurveyQuestionService extends BaseService<any> {
    constructor(_http: HttpClient) {
        super(_http, 'survey-questions');
    }

    addedData$: Subject<SurveyQuestion> = new Subject();

    editedData$: Subject<SurveyQuestion> = new Subject();

    current$: BehaviorSubject<SurveyQuestion | null> =
        new BehaviorSubject<SurveyQuestion | null>(null);

    add(data: SurveyQuestion) {
        this.addedData$.next(data);
    }

    edit(data: SurveyQuestion) {
        this.editedData$.next(data);
    }
}
