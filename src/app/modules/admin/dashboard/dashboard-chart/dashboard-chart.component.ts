import { Component, Input, OnInit } from '@angular/core';
import { PIE_CHART_CONFIG } from 'app/app-core/configs/pie-chart.config';
import { TemporaryChart } from 'app/app-core/models/temporary-chart-config';

@Component({
    selector: 'dashboard-chart',
    templateUrl: './dashboard-chart.component.html',
    styleUrls: ['./dashboard-chart.component.scss'],
})
export class DashboardChartComponent implements OnInit {
    constructor() {}

    @Input('data')
    set setData(data: TemporaryChart) {
        this.pie.labels = data.labels;

        this.pie.series = data.series;

        this.chartTitle = data.department;
    }

    chartTitle: string = '';

    pie = { ...PIE_CHART_CONFIG };

    ngOnInit(): void {}
}
