import { GuidanceRequest } from './../models/guidance-request.model';
import { map, Observable, of, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { GuidanceRequestService } from 'app/modules/admin/guidance-request/guidance-request.service';
import regression from 'regression';

@Injectable({ providedIn: 'root' })
export class RegressionService {
    constructor(private _guidanceRequestService: GuidanceRequestService) {
        this.regression$ = this._guidanceRequestService.get().pipe(
            map((response) => Object.values(response)),
            map((guidanceRequest: GuidanceRequest[]) => {
                return guidanceRequest.map((request) => {
                    const linearData = [
                        request.student.performance.performance || 0,
                        request.student.performance.gpa || 0,
                    ] as [number, number];

                    return linearData;
                });
            })
        );

        this.regression$.pipe(take(2)).subscribe((values) => {
            this.regressionResults = regression.linear(values);
        });
    }

    regressionResults: any = regression.linear([0]);

    regression$: Observable<[number, number][]> = of([]);

    predict(value: number): Observable<number> {
        const results = regression.linear(this.regressionResults);

        const prediction = results.predict(value);

        return of(Number.isNaN(prediction[1]) ? 0 : prediction[1]);
    }
}
