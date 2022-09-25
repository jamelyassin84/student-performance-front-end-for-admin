import { GuidanceRequest } from './../../../app-core/models/guidance-request.model';
import { GuidanceRequestEditComponent } from './guidance-request-edit/guidance-request-edit.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { dbwAnimations } from '@global_packages/animations/animation.api';
import { GuidanceRequestService } from './guidance-request.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'guidance-request',
    templateUrl: './guidance-request.component.html',
    styleUrls: ['./guidance-request.component.scss'],
    animations: [...dbwAnimations],
})
export class GuidanceRequestComponent implements OnInit {
    constructor(
        private _modal: MatDialog,
        private _guidanceRequestService: GuidanceRequestService
    ) {}

    guidanceRequests: GuidanceRequest[] = [];

    unsubscribe$: Subject<any> = new Subject();

    ngOnInit(): void {
        this._guidanceRequestService.get().subscribe((guidanceRequests) => {
            this.guidanceRequests = Object.values(guidanceRequests);
        });

        this._guidanceRequestService.editedData$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((data) => {
                const guidance = this.guidanceRequests.find(
                    (request) => request.id === request.id
                );

                const formIndex = this.guidanceRequests.findIndex(
                    (request) => request.id === guidance.id
                );

                this.guidanceRequests[formIndex] = {
                    ...data,
                };
            });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next(null);

        this.unsubscribe$.complete();
    }

    updateGPA(request: any) {
        this._guidanceRequestService.current$.next(request);

        this._modal.open(GuidanceRequestEditComponent, {
            hasBackdrop: true,
            panelClass: ['md:w-1/3', 'w-full'],
        });
    }
}
