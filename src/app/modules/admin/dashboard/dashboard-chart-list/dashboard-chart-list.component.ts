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
                const groups = [
                    'College of Computer Studies',
                    'College of Nursing',
                    'College of Arts and Sciences',
                ];

                let temporaryCharts = groups.map((department) => {
                    return {
                        ...TEMPORARY_CHART_CONFIG,
                        department: department,
                    };
                });

                const studentPerformances: StudentPerformance[] =
                    Object.values(performance);

                studentPerformances.forEach((performance) => {
                    const studentDepartment = performance.student.department;

                    const currentDepartmentIndex = temporaryCharts.findIndex(
                        (chart) => chart.department === studentDepartment
                    );

                    Object.values(performance.records).forEach((record) => {
                        if (
                            !temporaryCharts[
                                currentDepartmentIndex
                            ].labels.includes(record.survey_form.name)
                        ) {
                            temporaryCharts[currentDepartmentIndex].labels.push(
                                record.survey_form.name
                            );
                        }
                    });

                    temporaryCharts[currentDepartmentIndex].series.push(
                        performance.performance
                    );
                });

                console.log(temporaryCharts);

                this.pieCharts = temporaryCharts;
            });
    }

    process() {}
}
