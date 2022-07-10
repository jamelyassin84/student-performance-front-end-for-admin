import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'survey-question-edit',
    templateUrl: './survey-question-edit.component.html',
    styleUrls: ['./survey-question-edit.component.scss'],
})
export class SurveyQuestionEditComponent implements OnInit {
    constructor() {}

    form: FormGroup | any;
    ngOnInit(): void {}
    save() {}
}
