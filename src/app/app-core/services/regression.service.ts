import { map, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { GuidanceRequestService } from 'app/modules/admin/guidance-request/guidance-request.service';

@Injectable({ providedIn: 'root' })
export class RegressionService {
    constructor(private _guidanceRequestService: GuidanceRequestService) {
        this.getPerformancesAndGrades();
    }

    regression$: Observable<[number, number][]> = of([]);

    getPerformancesAndGrades() {
        this.regression$ = this._guidanceRequestService.get().pipe(
            map((guidanceRequest: any[]) => {
                return guidanceRequest.map((request) => {
                    return [
                        request.student.performance.performance,
                        request.student.performance.gpa,
                    ] as [number, number];
                });
            })
        );
    }
}
