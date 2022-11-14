import {Analytics} from './../../../app-core/store/analytics/analytics.model'
import {Component, OnInit} from '@angular/core'
import {dbwAnimations} from '@global_packages/animations/animation.api'
import {Course, Degree, DEPARTMENTS1} from 'app/app-core/app.constants'
import {AnalyticsService} from 'app/app-core/store/analytics/analytics.service'
import {slugify} from '@global_packages/helpers/helpers'
import {Router} from '@angular/router'
import {StudentService, User} from 'app/app-core/services/student.service'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [...dbwAnimations],
})
export class DashboardComponent implements OnInit {
    constructor(
        private _router: Router,
        private _studentService: StudentService,
        private _analyticsService: AnalyticsService,
    ) {}

    users$ = this._studentService.users$

    DEPARTMENTS = DEPARTMENTS1

    DEGREES: Degree[] = []

    COURSES: Course[] = []

    MAJORS: string[] = []

    analytics?: Analytics

    ngOnInit(): void {
        this.getUsers()

        this.getAnalytics()
    }

    getAnalytics() {
        this._analyticsService
            .get()
            .subscribe((analytics: any) => (this.analytics = analytics))
    }

    getUsers() {
        this._studentService
            .get()
            .subscribe((users) =>
                this.users$.next(users.filter((user, index) => index <= 10)),
            )
    }

    onDepartmentChange(data: string) {
        this.COURSES = []
        this.MAJORS = []
        this.DEGREES = DEPARTMENTS1.find(
            (department) => department.name === data,
        ).degrees
    }

    onDegreeChange(data: string) {
        this.COURSES = []
        this.MAJORS = []
        this.COURSES = this.DEGREES.find(
            (degree) => degree.name === data,
        ).courses
    }

    onCourseChange(data: string) {
        this.MAJORS = []
        this.MAJORS = this.COURSES.find((course) => course.name === data).majors
    }

    viewMore(user: User) {
        this._studentService.user$.next(user)

        this._router.navigate([`students/${slugify(user.student.name)}`])

        localStorage.setItem('user', JSON.stringify(user))
    }
}
