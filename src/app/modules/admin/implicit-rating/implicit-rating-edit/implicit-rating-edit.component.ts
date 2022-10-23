import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {Component, OnInit, Inject} from '@angular/core'
import {
    FormArray,
    FormGroup,
    NonNullableFormBuilder,
    Validators,
} from '@angular/forms'
import {dbwAnimations} from '@global_packages/animations/animation.api'
import {Store} from '@ngrx/store'
import {
    ImplicitRatingPayload,
    RecommendationPayload,
} from 'app/app-core/http/payloads/implicit-rating.payload'
import {ImplicitRating} from 'app/app-core/models/implicit-rating-recommendation'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'

@Component({
    selector: 'implicit-rating-edit',
    templateUrl: './implicit-rating-edit.component.html',
    styleUrls: ['./implicit-rating-edit.component.scss'],
    animations: [...dbwAnimations],
})
export class ImplicitRatingEditComponent implements OnInit {
    constructor(
        private _store: Store<AppState>,
        private _formBuilder: NonNullableFormBuilder,
        @Inject(MAT_DIALOG_DATA) public rating: ImplicitRating,
    ) {}

    implicitRatingForm: FormGroup<ImplicitRatingPayload> =
        this._formBuilder.group({
            title: ['', Validators.required],
            average: ['', Validators.required],
            recommendations: this._formBuilder.array<RecommendationPayload>([]),
        })

    ngOnInit(): void {}

    get recommendations() {
        return this.implicitRatingForm.get('recommendations') as FormArray
    }

    get recommendationControls() {
        return this.implicitRatingForm.controls.recommendations.controls
    }

    addRecommendation(): void {
        this.recommendations.push(
            this._formBuilder.group({
                id: [''],
                title: ['', Validators.required],
            }),
        )
    }

    removeRecommendation(index: number): void {
        this.recommendations.removeAt(index)
    }

    save() {
        if (this.implicitRatingForm.invalid) {
            return
        }

        this.implicitRatingForm.disable()

        this._store.dispatch(
            StoreAction.IMPLICIT_RATING.UPSERT(
                this.implicitRatingForm.value as any,
            ),
        )

        this.implicitRatingForm.enable()
    }

    trackByFn(index: number, item: any): any {
        return item.id || index
    }
}
