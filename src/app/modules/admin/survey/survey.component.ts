import { SurveyFormEditComponent } from './survey-form-edit/survey-form-edit.component';
import { SurveyParentAddComponent } from './survey-parent-add/survey-parent-add.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { dbwAnimations } from '@global_packages/animations/animation.api';
import { SurveyChildAddComponent } from './survey-child-add/survey-child-add.component';
import { SurveyQuestionEditComponent } from './survey-question-edit/survey-question-edit.component';

@Component({
    selector: 'survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.scss'],
    animations: [...dbwAnimations],
})
export class SurveyComponent implements OnInit {
    constructor(
        private _confirm: FuseConfirmationService,
        private modal: MatDialog
    ) {}

    ngOnInit(): void {}

    addForm() {
        this.modal.open(SurveyParentAddComponent, {
            hasBackdrop: true,
            panelClass: ['md:w-1/3', 'w-full'],
        });
    }

    editForm() {
        this.modal.open(SurveyFormEditComponent, {
            hasBackdrop: true,
            panelClass: ['md:w-1/3', 'w-full'],
        });
    }

    addQuestion() {
        this.modal.open(SurveyChildAddComponent, {
            hasBackdrop: true,
            panelClass: ['md:w-1/3', 'w-full'],
        });
    }

    editQuestion() {
        this.modal.open(SurveyQuestionEditComponent, {
            hasBackdrop: true,
            panelClass: ['md:w-1/3', 'w-full'],
        });
    }

    removeForm(id: string) {
        this._confirm.open(CONFIRM_PARAM as any);
    }

    removeQuestion(id: string) {
        this._confirm.open(CONFIRM_PARAM as any);
    }
}

export const CONFIRM_PARAM = {
    title: `Are you sure you want to remove this Form?`,
    message: `This will permanently remove this data. Continue?`,
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
};
