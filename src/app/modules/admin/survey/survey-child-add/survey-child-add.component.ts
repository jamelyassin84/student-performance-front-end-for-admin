import { SurveyFormService } from './../../../../app-core/store/form/form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SurveyQuestionService } from 'app/app-core/store/questions/questions.service';
import { take } from 'rxjs';

@Component({
    selector: 'survey-child-add',
    templateUrl: './survey-child-add.component.html',
    styleUrls: ['./survey-child-add.component.scss'],
})
export class SurveyChildAddComponent implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
        private _surveyFormService: SurveyFormService,
        private _surveyQuestionService: SurveyQuestionService
    ) {}

    form: FormGroup = this._formBuilder.group({
        title: ['', [Validators.required]],
        question: ['', [Validators.required]],
        show_on_website: [true, [Validators.required]],
        question_value_type: ['positive', [Validators.required]],
    });

    ngOnInit(): void {}

    save() {
        this.form.disable();

        this._surveyFormService.current$.pipe(take(1)).subscribe((form) => {
            this._surveyQuestionService
                .post({ ...this.form.value, survey_form_id: form.id })
                .subscribe({
                    next: (data) => {
                        this._surveyQuestionService.add(data);

                        document.getElementById('close-btn')?.click();
                    },
                    error: () => {
                        alert('Network Error');
                    },
                })
                .add(() => this.form.enable());
        });
    }
}
