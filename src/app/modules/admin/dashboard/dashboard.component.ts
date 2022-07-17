import { Component, OnInit } from '@angular/core';
import { dbwAnimations } from '@global_packages/animations/animation.api';
import { Course, Degree, DEPARTMENTS1 } from 'app/app-core/app.constants';
import { StudentService } from 'app/app-core/services/student.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [...dbwAnimations],
})
export class DashboardComponent implements OnInit {
    constructor(private _studentService: StudentService) {}

    users$ = this._studentService.users$;

    DEPARTMENTS = DEPARTMENTS1;

    DEGREES: Degree[] = [];

    COURSES: Course[] = [];

    MAJORS: string[] = [];

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers() {
        this._studentService
            .get()
            .subscribe((users) => this.users$.next(users));
    }

    onDepartmentChange(data: string) {
        this.COURSES = [];
        this.MAJORS = [];
        this.DEGREES = DEPARTMENTS1.find(
            (department) => department.name === data
        ).degrees;
    }

    onDegreeChange(data: string) {
        this.COURSES = [];
        this.MAJORS = [];
        this.COURSES = this.DEGREES.find(
            (degree) => degree.name === data
        ).courses;
    }

    onCourseChange(data: string) {
        this.MAJORS = [];
        this.MAJORS = this.COURSES.find(
            (course) => course.name === data
        ).majors;
    }
}
