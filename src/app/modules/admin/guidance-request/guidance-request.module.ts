import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuidanceRequestComponent } from './guidance-request.component';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { GuidanceRequestEditComponent } from './guidance-request-edit/guidance-request-edit.component';

@NgModule({
    declarations: [GuidanceRequestComponent, GuidanceRequestEditComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '', component: GuidanceRequestComponent },
        ]),
    ],
})
export class GuidanceRequestModule {}
