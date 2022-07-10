import { Component, OnInit } from '@angular/core';
import { dbwAnimations } from '@global_packages/animations/animation.api';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss'],
    animations: [...dbwAnimations],
})
export class StudentsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
