import { Component, OnInit } from '@angular/core';
import { dbwAnimations } from '@global_packages/animations/animation.api';

@Component({
    selector: 'app-student-details',
    templateUrl: './student-details.component.html',
    styleUrls: ['./student-details.component.scss'],
    animations: [...dbwAnimations],
})
export class StudentDetailsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
