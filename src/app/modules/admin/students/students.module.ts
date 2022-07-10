import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
    declarations: [StudentsComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '', component: StudentsComponent },
            { path: ':id', component: StudentDetailsComponent },
        ]),
    ],
})
export class StudentsModule {}
