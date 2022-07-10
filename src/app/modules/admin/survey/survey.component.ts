import { Component, OnInit } from '@angular/core';
import { dbwAnimations } from '@global_packages/animations/animation.api';

@Component({
    selector: 'survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.scss'],
    animations: [...dbwAnimations],
})
export class SurveyComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
