import {empty} from '@global_packages/helpers/helpers'
import {StudentPerformance} from 'app/app-core/store/performance/performance.model'
import {Component, OnInit} from '@angular/core'
import {SurveyPerformanceService} from 'app/app-core/store/performance/performance.service'
import {TEMPORARY_CHART_CONFIG} from 'app/app-core/models/temporary-chart-config'
import {DEPARTMENTS1} from 'app/app-core/constants/departments'

@Component({
    selector: 'dashboard-chart-list',
    templateUrl: './dashboard-chart-list.component.html',
    styleUrls: ['./dashboard-chart-list.component.scss'],
})
export class DashboardChartListComponent implements OnInit {
    constructor(private _surveyPerformanceService: SurveyPerformanceService) {}

    readonly FILTERS = DEPARTMENTS1.map((department) => department.name)

    college = this.FILTERS[0]

    pieCharts: any[] = undefined

    ngOnInit(): void {
        this._surveyPerformanceService
            .query('/by_college/get')
            .subscribe((performance) => {
                const studentPerformances: StudentPerformance[] =
                    Object.values(performance)

                const groups = studentPerformances.reduce((groups, item) => {
                    let group = groups[item.student.department] || []

                    group.push(item)

                    groups[item.student.department] = group

                    return groups
                }, {})

                const colleges = DEPARTMENTS1.map(
                    (department) => department.name,
                ).filter((college) => Object.keys(groups).includes(college))

                let temporaryCharts = colleges.map((department) => {
                    return {
                        ...TEMPORARY_CHART_CONFIG,
                        department: department,
                    }
                })

                Object.values(groups)
                    .reverse()
                    .forEach((currentPerformances: any[], index) => {
                        if (empty(currentPerformances[0]?.student)) {
                            return
                        }

                        const department =
                            currentPerformances[0]?.student.department

                        const chartIndex = temporaryCharts.findIndex(
                            (chart) => chart.department === department,
                        )

                        const {labels, series} =
                            this.processSeriesAndLabels(currentPerformances)

                        temporaryCharts[chartIndex].series = series
                        temporaryCharts[chartIndex].labels = labels
                    })

                this.pieCharts = temporaryCharts.filter(
                    (chart) => chart.department === this.college,
                )
            })
    }

    processSeriesAndLabels(performances: StudentPerformance[]): {
        labels: string[]
        series: number[]
    } {
        let labels = []
        let series = []

        for (let performance of performances) {
            const records = Object.values(performance.records)

            for (let record of records) {
                const index = labels.findIndex(
                    (label) => label === record.survey_form.description,
                )

                const score =
                    record.score / records.length / performances.length

                if (index < 0) {
                    labels.push(record.survey_form.description)

                    series.push(score)
                } else {
                    series[index] = series[index] + score
                }
            }
        }

        return {
            labels: labels,
            series: series,
        }
    }

    onFilter() {
        this.ngOnInit()
    }
}
