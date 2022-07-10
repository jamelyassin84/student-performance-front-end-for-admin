import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'survey-parent-add',
    templateUrl: './survey-parent-add.component.html',
    styleUrls: ['./survey-parent-add.component.scss'],
})
export class SurveyParentAddComponent implements OnInit {
    constructor() {}

    form: FormGroup | any;
    ngOnInit(): void {}
    save() {}
}
