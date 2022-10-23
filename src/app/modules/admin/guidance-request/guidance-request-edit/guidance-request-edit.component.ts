import { SurveyPerformanceService } from 'app/app-core/store/performance/performance.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { GuidanceRequestService } from '../guidance-request.service';

@Component({
    selector: 'guidance-request-edit',
    templateUrl: './guidance-request-edit.component.html',
    styleUrls: ['./guidance-request-edit.component.scss'],
})
export class GuidanceRequestEditComponent implements OnInit {
    constructor(
        private _formBuilder: UntypedFormBuilder,
        private _guidanceRequestService: GuidanceRequestService,
        private _surveyPerformanceService: SurveyPerformanceService
    ) {}

    form: UntypedFormGroup = this._formBuilder.group({
        gpa: ['', [Validators.required]],
    });

    ngAfterViewInit(): void {
        this._guidanceRequestService.current$
            .pipe(take(1))
            .subscribe((request) => {
                this.form.setValue({ gpa: request.student.performance.gpa });
            });
    }

    ngOnInit(): void {}

    save() {
        this._guidanceRequestService.current$
            .pipe(take(1))
            .subscribe((request) => {
                this._surveyPerformanceService
                    .update(request.student.performance.id, this.form.value)
                    .subscribe(() => {
                        this._guidanceRequestService.editedData$.next({
                            ...request,
                            student: {
                                ...request.student,
                                performance: {
                                    ...request.student.performance,
                                    gpa: this.form.value.gpa,
                                },
                            },
                        });
                    });
            });
    }
}
