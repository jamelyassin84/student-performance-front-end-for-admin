import { StudentPerformance } from 'app/app-core/store/performance/performance.model';
import { Component, OnInit } from '@angular/core';
import { SurveyPerformanceService } from 'app/app-core/store/performance/performance.service';
import { TEMPORARY_CHART_CONFIG } from 'app/app-core/models/temporary-chart-config';

@Component({
    selector: 'dashboard-chart-list',
    templateUrl: './dashboard-chart-list.component.html',
    styleUrls: ['./dashboard-chart-list.component.scss'],
})
export class DashboardChartListComponent implements OnInit {
    constructor(private _surveyPerformanceService: SurveyPerformanceService) {}

    pieCharts: any[] = undefined;

    ngOnInit(): void {
        this._surveyPerformanceService
            .query('/by_college/get')
            .subscribe((performance) => {
                const studentPerformances: StudentPerformance[] =
                    Object.values(performance);

                const groups = studentPerformances.reduce((groups, item) => {
                    let group = groups[item.student.department] || [];

                    group.push(item);

                    groups[item.student.department] = group;

                    return groups;
                }, {});

                console.log(groups);

                const colleges = [
                    'College of Computer Studies',
                    'College of Nursing',
                    'College of Arts and Sciences',
                ].filter((college) => Object.keys(groups).includes(college));

                let temporaryCharts = colleges
                    .map((department) => {
                        return {
                            ...TEMPORARY_CHART_CONFIG,
                            department: department,
                        };
                    })
                    .filter((chart) =>
                        Object.keys(groups).includes(chart.department)
                    );

                Object.values(groups)
                    .reverse()
                    .forEach(
                        (currentPerformances: StudentPerformance[], index) => {
                            const department =
                                currentPerformances[index].student.department;

                            const chartIndex = temporaryCharts.findIndex(
                                (chart) => chart.department === department
                            );

                            const { labels, series } =
                                this.processSeriesAndLabels(
                                    currentPerformances
                                );

                            temporaryCharts[chartIndex].series = series;
                            temporaryCharts[chartIndex].labels = labels;
                        }
                    );
                this.pieCharts = temporaryCharts;
                console.log(temporaryCharts);
            });
    }

    processSeriesAndLabels(performances: StudentPerformance[]): {
        labels: string[];
        series: number[];
    } {
        let labels = [];
        let series = [];

        for (let performance of performances) {
            const records = Object.values(performance.records);

            for (let record of records) {
                const index = labels.findIndex(
                    (label) => label === record.survey_form.name
                );

                const score =
                    record.score / records.length / performances.length;

                if (index < 0) {
                    labels.push(record.survey_form.name);

                    series.push(score);
                } else {
                    series[index] = series[index] + score;
                }
            }
        }

        return {
            labels: labels,
            series: series,
        };
    }
}
