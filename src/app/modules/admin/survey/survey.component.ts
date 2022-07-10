import { Component, OnInit } from '@angular/core';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { dbwAnimations } from '@global_packages/animations/animation.api';

@Component({
    selector: 'survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.scss'],
    animations: [...dbwAnimations],
})
export class SurveyComponent implements OnInit {
    constructor(private _confirm: FuseConfirmationService) {}

    ngOnInit(): void {}

    remove(id: string) {
        this._confirm.open({
            title: `Are you sure you want to remove this question?`,
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
        });
    }
}
