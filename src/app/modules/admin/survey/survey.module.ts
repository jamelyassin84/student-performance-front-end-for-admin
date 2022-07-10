import { SurveyParentAddComponent } from './../survey-parent-add/survey-parent-add.component';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey.component';
import { RouterModule } from '@angular/router';
import { SurveyChildAddComponent } from './survey-child-add/survey-child-add.component';

@NgModule({
    declarations: [SurveyComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '', component: SurveyComponent },
            { path: 'add', component: SurveyParentAddComponent },
            { path: 'child/add', component: SurveyChildAddComponent },
        ]),
    ],
})
export class SurveyModule {}
