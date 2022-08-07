import { SurveyFormService } from './../../../../app-core/store/form/form.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'survey-parent-add',
    templateUrl: './survey-parent-add.component.html',
    styleUrls: ['./survey-parent-add.component.scss'],
})
export class SurveyParentAddComponent implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
        private _surveyFormService: SurveyFormService
    ) {}

    form: FormGroup = this._formBuilder.group({
        name: ['', [Validators.required]],
        question_type: ['radio', [Validators.required]],
        description: ['', [Validators.required]],
    });

    ngOnInit(): void {}

    save() {
        this.form.disable();

        this._surveyFormService
            .post(this.form.value)
            .subscribe({
                next: (data) => {
                    this._surveyFormService.add(data);

                    this.form.reset();
                },
                error: () => {
                    alert('Network Error');
                },
            })
            .add(() => this.form.enable());
    }
}
