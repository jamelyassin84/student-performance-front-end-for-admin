import { slugify } from './../../../../@global_packages/helpers/helpers';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { dbwAnimations } from '@global_packages/animations/animation.api';
import { StudentService, User } from 'app/app-core/services/student.service';
import { Course, Degree, DEPARTMENTS1 } from 'app/app-core/app.constants';
import { take } from 'rxjs';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss'],
    animations: [...dbwAnimations],
})
export class StudentsComponent implements OnInit {
    constructor(
        private _confirm: FuseConfirmationService,
        private _router: Router,
        private _studentService: StudentService
    ) {}

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

    viewMore(user: User) {
        this._studentService.user$.next(user);

        this._router.navigate([`students/${slugify(user.student.name)}`]);

        localStorage.setItem('user', JSON.stringify(user));
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

    remove(id: string) {
        this._confirm
            .open({
                title: `Are you sure you want to remove ernest sandoval?`,
                message: `This will permanently remove his data. Continue?`,
                dismissible: true,
                icon: {
                    name: 'feather:trash',
                    color: 'accent',
                },
                actions: {
                    confirm: {
                        color: 'accent',
                        label: `Continue Remove`,
                    },
                },
            })
            .afterClosed()
            .subscribe((result) => {
                if (result === 'confirmed') {
                    this._studentService.remove(id).subscribe(() => {
                        this.users$.pipe(take(1)).subscribe((users) => {
                            const newUsers = users.filter(
                                (newUser) => newUser.id !== id
                            );

                            this.users$.next(newUsers);

                            alert('You have deleted a student');
                        });
                    });
                }
            });
    }
}
