import { Component, Input, OnInit } from '@angular/core';
import { Analytics } from 'app/app-core/store/analytics/analytics.model';

@Component({
    selector: 'dashboard-top-cards',
    templateUrl: './dashboard-top-cards.component.html',
    styleUrls: ['./dashboard-top-cards.component.scss'],
})
export class DashboardTopCardsComponent implements OnInit {
    constructor() {}

    @Input() analytics?: Analytics;

    ngOnInit(): void {}
}
