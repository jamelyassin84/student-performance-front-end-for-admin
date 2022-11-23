import {GuidanceRequest} from './../models/guidance-request.model'
import {map, Observable, of, take} from 'rxjs'
import {Injectable} from '@angular/core'
import {GuidanceRequestService} from 'app/modules/admin/guidance-request/guidance-request.service'
import regression from 'regression'

@Injectable({providedIn: 'root'})
export class RegressionService {
    constructor(private _guidanceRequestService: GuidanceRequestService) {}

    init() {
        this._guidanceRequestService
            .get()
            .pipe(map((response) => Object.values(response)))
            .subscribe((guidanceRequest: GuidanceRequest[]) => {
                const regressionData = guidanceRequest.map((request) => {
                    const linearData = [
                        request.student.performance.performance || 0,
                        request.student.performance.gpa || 0,
                    ] as [number, number]

                    return linearData
                })

                localStorage.setItem(
                    'regression',
                    JSON.stringify(regressionData),
                )
            })
    }
}
