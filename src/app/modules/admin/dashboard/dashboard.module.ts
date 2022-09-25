import { SharedModule } from 'app/shared/shared.module';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardTopCardsComponent } from './dashboard-top-cards/dashboard-top-cards.component';
import { DashboardChartListComponent } from './dashboard-chart-list/dashboard-chart-list.component';
import { DashboardChartComponent } from './dashboard-chart/dashboard-chart.component';

@NgModule({
    declarations: [DashboardComponent, DashboardTopCardsComponent, DashboardChartListComponent, DashboardChartComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{ path: '', component: DashboardComponent }]),
    ],
})
export class DashboardModule {}
