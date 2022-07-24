import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SurveyFormService } from 'app/app-core/store/form/form.service';
import { take } from 'rxjs';

@Component({
    selector: 'survey-form-edit',
    templateUrl: './survey-form-edit.component.html',
    styleUrls: ['./survey-form-edit.component.scss'],
})
export class SurveyFormEditComponent implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
        private _surveyFormService: SurveyFormService
    ) {}

    form: FormGroup = this._formBuilder.group({
        id: [''],
        name: ['', [Validators.required]],
        question_type: ['radio', [Validators.required]],
    });

    ngOnInit(): void {}

    ngAfterContentInit(): void {
        this._surveyFormService.current$.pipe(take(1)).subscribe((form) => {
            this.form.setValue({
                id: form.id,
                name: form.name,
                question_type: form.question_type,
            });
        });
    }

    save() {
        this.form.disable();

        this._surveyFormService
            .update(this.form.value.id, this.form.value)
            .subscribe({
                next: () => {
                    alert('Updated');
                },
                error: () => {
                    alert('Network Error');
                },
            })
            .add(() => this.form.enable());
    }
}
