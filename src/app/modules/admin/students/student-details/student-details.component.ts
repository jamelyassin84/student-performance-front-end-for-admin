import { StudentService } from './../../../../app-core/services/student.service';
import { Component, OnInit } from '@angular/core';
import { dbwAnimations } from '@global_packages/animations/animation.api';
import { SurveyPerformanceService } from 'app/app-core/store/performance/performance.service';
import { StudentPerformance } from 'app/app-core/store/performance/performance.model';
import { take } from 'rxjs';

@Component({
    selector: 'app-student-details',
    templateUrl: './student-details.component.html',
    styleUrls: ['./student-details.component.scss'],
    animations: [...dbwAnimations],
})
export class StudentDetailsComponent implements OnInit {
    constructor(
        private _studentService: StudentService,
        private _surveyPerformanceService: SurveyPerformanceService
    ) {}

    user$ = this._studentService.user$;

    chart = {
        chart: {
            fontFamily: 'inherit',
            foreColor: 'inherit',
            height: '100%',
            type: 'line',
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        colors: ['#14B8A6', '#14B8A6'],
        dataLabels: {
            enabled: true,
            enabledOnSeries: [0],
            background: {
                borderWidth: 0,
            },
        },
        grid: {
            borderColor: 'var(--fuse-border)',
        },
        labels: ['1st Yr-2nd Sem', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        legend: {
            show: false,
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            },
        },
        series: [
            {
                name: '1',
                data: [
                    { x: '1st Yr - 1st Sem', y: [0] },
                    { x: '1st Yr - 2nd Sem', y: [0] },
                    { x: '2nd Yr - 1st Sem', y: [0] },
                    { x: '2nd Yr - 2nd Sem', y: [0] },
                    { x: '3rd Yr - 1st Sem', y: [0] },
                    { x: '3rd Yr - 2nd Sem', y: [0] },
                    { x: '4th Yr - 1st Sem', y: [0] },
                    { x: '4th Yr - 2nd Sem', y: [0] },
                ],
            },
        ],
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 0.75,
                },
            },
        },
        stroke: {
            width: [3, 0],
        },
        tooltip: {
            followCursor: true,
            theme: 'dark',
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            axisTicks: {
                color: 'var(--fuse-border)',
            },
            labels: {
                style: {
                    colors: 'var(--fuse-text-secondary)',
                },
            },
            tooltip: {
                enabled: false,
            },
        },
        yaxis: {
            labels: {
                offsetX: -16,
                style: {
                    colors: 'var(--fuse-text-secondary)',
                },
            },
        },
    };

    performances: StudentPerformance[] = [];

    averagePerformance: number = 0;

    ngOnInit(): void {
        this.getPerformances();
    }

    identity = (item: any) => item;

    SPLIT_VALUE = ' - ';

    getPerformances() {
        this._studentService.user$.pipe(take(1)).subscribe((user) => {
            this._surveyPerformanceService
                .query(`?student_id=${user.student.id}`)
                .subscribe((performances: StudentPerformance[]) => {
                    let total = 0;

                    performances.forEach((performance) => {
                        this.chart.series[0].data.forEach(
                            (dataset, datasetIndex) => {
                                if (
                                    `${performance.year_level} Yr${this.SPLIT_VALUE}${performance.semester} Sem` ===
                                    dataset.x
                                ) {
                                    this.chart.series[0].data[datasetIndex].y =
                                        [performance.performance];
                                }
                            }
                        );

                        total += performance.performance;
                    });

                    this.averagePerformance = total / performances.length;

                    this.performances = performances;
                });
        });
    }
}
