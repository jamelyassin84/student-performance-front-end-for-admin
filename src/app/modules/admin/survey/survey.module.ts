import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey.component';
import { RouterModule } from '@angular/router';
import { SurveyChildAddComponent } from './survey-child-add/survey-child-add.component';
import { SurveyParentAddComponent } from './survey-parent-add/survey-parent-add.component';
import { SurveyQuestionEditComponent } from './survey-question-edit/survey-question-edit.component';
import { SurveyFormEditComponent } from './survey-form-edit/survey-form-edit.component';

@NgModule({
    declarations: [
        SurveyComponent,
        SurveyParentAddComponent,
        SurveyChildAddComponent,
        SurveyQuestionEditComponent,
        SurveyFormEditComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '', component: SurveyComponent },
            { path: 'child/add', component: SurveyChildAddComponent },
            { path: 'parent/add', component: SurveyParentAddComponent },
        ]),
    ],
})
export class SurveyModule {}
