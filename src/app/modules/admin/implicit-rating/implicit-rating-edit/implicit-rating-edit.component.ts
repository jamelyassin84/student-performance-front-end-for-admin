import { Component, OnInit } from '@angular/core';
import {
    FormArray,
    FormGroup,
    NonNullableFormBuilder,
    Validators,
} from '@angular/forms';
import { dbwAnimations } from '@global_packages/animations/animation.api';
import {
    ImplicitRatingPayload,
    RecommendationPayload,
} from 'app/app-core/http/payloads/implicit-rating.payload';

@Component({
    selector: 'implicit-rating-edit',
    templateUrl: './implicit-rating-edit.component.html',
    styleUrls: ['./implicit-rating-edit.component.scss'],
    animations: [...dbwAnimations],
})
export class ImplicitRatingEditComponent implements OnInit {
    constructor(private _formBuilder: NonNullableFormBuilder) {}

    implicitRatingForm: FormGroup<ImplicitRatingPayload> =
        this._formBuilder.group({
            title: ['', Validators.required],
            recommendations: this._formBuilder.array<RecommendationPayload>([]),
        });

    ngOnInit(): void {}

    get recommendations() {
        return this.implicitRatingForm.get('recommendations') as FormArray;
    }

    get recommendationControls() {
        return this.implicitRatingForm.controls.recommendations.controls;
    }

    addRecommendation(): void {
        this.recommendations.push(
            this._formBuilder.group({
                id: [''],
                title: ['', Validators.required],
            })
        );
    }

    removeRecommendation(index: number): void {
        this.recommendations.removeAt(index);
    }

    save() {
        if (this.implicitRatingForm.invalid) {
            return;
        }

        this.implicitRatingForm.disable();

        this.implicitRatingForm.enable();
    }

    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
