import { StudentPerformance } from './../store/performance/performance.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '@global_packages/api/base.api';
import { PHPBaseModel } from '@global_packages/models/core.model';
import { BehaviorSubject, combineLatest, take } from 'rxjs';
import { SurveyForm } from '../store/form/form.model';

@Injectable({ providedIn: 'root' })
export class StudentService extends BaseService<any> {
    constructor(http: HttpClient) {
        super(http, 'students');

        this.user$.pipe(take(1)).subscribe((user) => {
            if (user === null) {
                this.user$.next(JSON.parse(localStorage.getItem('user')));
            }
        });
    }

    users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
        null
    );
}

export interface Student extends PHPBaseModel {
    name: string;
    sex: string;
    phone: string;
    department: string;
    degree: string;
    course: string;
    major: string;
    address: string;
    user_id: string;
    performances: StudentPerformance[];
    performance: StudentPerformance;
    surveys: SurveyForm;
}

export interface User extends PHPBaseModel {
    email: string;
    type: string;
    student: Student;
}
