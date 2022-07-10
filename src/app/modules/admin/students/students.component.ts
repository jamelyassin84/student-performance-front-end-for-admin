import { Component, OnInit } from '@angular/core';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { dbwAnimations } from '@global_packages/animations/animation.api';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss'],
    animations: [...dbwAnimations],
})
export class StudentsComponent implements OnInit {
    constructor(private _confirm: FuseConfirmationService) {}

    ngOnInit(): void {}

    remove(id: string) {
        this._confirm.open({
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
        });
    }
}
