import { SharedModule } from 'app/shared/shared.module';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{ path: '', component: DashboardComponent }]),
    ],
})
export class DashboardModule {}
