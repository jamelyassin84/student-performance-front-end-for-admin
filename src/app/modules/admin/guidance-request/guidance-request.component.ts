import {GuidanceRequest} from './../../../app-core/models/guidance-request.model'
import {GuidanceRequestEditComponent} from './guidance-request-edit/guidance-request-edit.component'
import {Component, OnInit} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'
import {dbwAnimations} from '@global_packages/animations/animation.api'
import {GuidanceRequestService} from './guidance-request.service'
import {Subject, takeUntil} from 'rxjs'
import {RegressionService} from 'app/app-core/services/regression.service'
import {GPAFilterEnum} from 'app/app-core/enum/gpa-filter.enum'
import * as dayjs from 'dayjs'

@Component({
    selector: 'guidance-request',
    templateUrl: './guidance-request.component.html',
    styleUrls: ['./guidance-request.component.scss'],
    animations: [...dbwAnimations],
})
export class GuidanceRequestComponent implements OnInit {
    constructor(
        private _modal: MatDialog,
        private _guidanceRequestService: GuidanceRequestService,
        private _regressionService: RegressionService,
    ) {
        this._regressionService.init()
    }

    readonly GPA_SELECTIONS = Object.values(GPAFilterEnum)

    guidanceRequests: GuidanceRequest[] = []

    filter = {
        gpa: GPAFilterEnum.HAS_GPA,
        from: dayjs().startOf('month').format('YYYY-MM-DD'),
        to: dayjs().format('YYYY-MM-DD'),
    }

    unsubscribe$: Subject<any> = new Subject()

    ngOnInit(): void {
        this.onFilter()
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next(null)

        this.unsubscribe$.complete()
    }

    onFilter() {
        const filter = {...this.filter}

        for (let key in filter) {
            if (key === 'from' || key === 'to') {
                filter[key] = dayjs(filter[key]).add(1, 'day').toJSON()
            }
        }

        const payload = new URLSearchParams(filter)

        this._guidanceRequestService
            .query(`?${payload}`)
            .subscribe((guidanceRequests) => {
                this.guidanceRequests = Object.values(guidanceRequests)
            })

        this._guidanceRequestService.editedData$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((data) => {
                location.reload()
            })
    }

    updateGPA(request: any) {
        this._guidanceRequestService.current$.next(request)

        this._modal.open(GuidanceRequestEditComponent, {
            hasBackdrop: true,
            panelClass: ['md:w-1/3', 'w-full'],
        })
    }
}
