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
}
