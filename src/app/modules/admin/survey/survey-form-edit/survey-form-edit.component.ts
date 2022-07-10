import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'survey-form-edit',
    templateUrl: './survey-form-edit.component.html',
    styleUrls: ['./survey-form-edit.component.scss'],
})
export class SurveyFormEditComponent implements OnInit {
    constructor() {}

    form: FormGroup | any;
    ngOnInit(): void {}
    save() {}
}
