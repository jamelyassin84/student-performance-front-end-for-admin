import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SurveyFormService } from 'app/app-core/store/form/form.service';
import { take } from 'rxjs';

@Component({
    selector: 'survey-form-edit',
    templateUrl: './survey-form-edit.component.html',
    styleUrls: ['./survey-form-edit.component.scss'],
})
export class SurveyFormEditComponent implements OnInit {
    constructor(
        private _formBuilder: UntypedFormBuilder,
        private _surveyFormService: SurveyFormService
    ) {}

    form: UntypedFormGroup = this._formBuilder.group({
        id: [''],
        name: ['', [Validators.required]],
        question_type: ['radio', [Validators.required]],
        description: ['', [Validators.required]],
    });

    ngOnInit(): void {}

    ngAfterContentInit(): void {
        this._surveyFormService.current$.pipe(take(1)).subscribe((form) => {
            this.form.setValue({
                id: form.id,
                name: form.name,
                question_type: form.question_type,
                description: form.description,
            });
        });
    }

    save() {
        this.form.disable();

        this._surveyFormService
            .update(this.form.value.id, this.form.value)
            .subscribe({
                next: (data) => {
                    this._surveyFormService.edit(data);

                    this.form.reset();
                },
                error: () => {
                    alert('Network Error');
                },
            })
            .add(() => this.form.enable());
    }
}
