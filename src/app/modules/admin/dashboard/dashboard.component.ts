import { Component, OnInit } from '@angular/core';
import { dbwAnimations } from '@global_packages/animations/animation.api';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [...dbwAnimations],
})
export class DashboardComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    chart = {
        chart: {
            fontFamily: 'inherit',
            foreColor: 'inherit',
            height: '100%',
            type: 'bar',
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
        labels: [
            'Innovation',
            'Dont give easily on setbacks',
            'Not Goal Oriented',
            'Hard working',
            'Difficulty Focusing on Projects',
            'Completion',
            'Changing interest',
        ],
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
                    { x: 'Innovation', y: [80] },
                    { x: 'Dont give easily on setbacks', y: [79] },
                    { x: 'Not Goal Oriented', y: [78] },
                    { x: 'Hard working', y: [77] },
                    { x: 'Difficulty Focusing on Projects', y: [76] },
                    { x: 'Completion', y: [53] },
                    { x: 'Changing interest', y: [42] },
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
}
