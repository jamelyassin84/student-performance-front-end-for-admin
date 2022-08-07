import { GuidanceRequestEditComponent } from './guidance-request-edit/guidance-request-edit.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { dbwAnimations } from '@global_packages/animations/animation.api';
import { GuidanceRequestService } from './guidance-request.service';

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

    guidanceRequests: any[] = [];

    ngOnInit(): void {
        this._guidanceRequestService
            .get()
            .subscribe(
                (guidanceRequests) => (this.guidanceRequests = guidanceRequests)
            );
    }

    updateGPA(request: any) {
        this._guidanceRequestService.current$.next(request);

        this._modal.open(GuidanceRequestEditComponent, {
            hasBackdrop: true,
            panelClass: ['md:w-1/3', 'w-full'],
        });
    }
}
