import { SurveyQuestionService } from './../../../../app-core/store/questions/questions.service';
import { SurveyFormService } from 'app/app-core/store/form/form.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';

@Component({
    selector: 'survey-question-edit',
    templateUrl: './survey-question-edit.component.html',
    styleUrls: ['./survey-question-edit.component.scss'],
})
export class SurveyQuestionEditComponent implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
        private _surveyFormService: SurveyFormService,
        private _surveyQuestionService: SurveyQuestionService
    ) {}

    form: FormGroup = this._formBuilder.group({
        id: [''],
        title: ['', [Validators.required]],
        question: ['', [Validators.required]],
        show_on_website: [true, [Validators.required]],
        question_value_type: ['positive', [Validators.required]],
    });

    ngOnInit(): void {}

    ngAfterContentInit(): void {
        this._surveyQuestionService.current$
            .pipe(take(1))
            .subscribe((question) => {
                this.form.setValue({
                    id: question.id,
                    title: question.title,
                    question: question.question,
                    show_on_website: question.show_on_website,
                    question_value_type: question.question_value_type,
                });
            });
    }

    save() {
        this.form.disable();

        this._surveyFormService.current$.pipe(take(1)).subscribe((form) => {
            this._surveyQuestionService
                .update(this.form.value.id, {
                    ...this.form.value,
                    survey_form_id: form.id,
                })
                .subscribe({
                    next: (data) => {
                        this._surveyQuestionService.edit(data);

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
