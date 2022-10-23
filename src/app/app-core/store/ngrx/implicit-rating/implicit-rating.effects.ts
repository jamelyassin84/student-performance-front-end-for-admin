import {StoreAction} from './../../core/action.enum'
import {Injectable} from '@angular/core'
import {switchMap, map} from 'rxjs/operators'
import {ImplicitRatingService} from './implicit-rating.service'
import {Actions, createEffect, ofType} from '@ngrx/effects'

@Injectable({
    providedIn: 'root',
})
export class ImplicitRatingEffects {
    constructor(
        private _actions$: Actions,
        private _implicitRatingService: ImplicitRatingService,
    ) {}

    load$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StoreAction.IMPLICIT_RATING.LOAD),
            switchMap(() =>
                this._implicitRatingService.get().pipe(
                    map((ratings) =>
                        StoreAction.IMPLICIT_RATING.LOAD_SUCCESS({
                            ratings: ratings,
                        }),
                    ),
                ),
            ),
        ),
    )

    upsert$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StoreAction.IMPLICIT_RATING.UPSERT),
            switchMap((action) =>
                this._implicitRatingService.upsert(action.rating).pipe(
                    map((rating) =>
                        StoreAction.IMPLICIT_RATING.UPSERT_SUCCESS({
                            rating: rating,
                        }),
                    ),
                ),
            ),
        ),
    )

    remove$ = createEffect(() =>
        this._actions$.pipe(
            ofType(StoreAction.IMPLICIT_RATING.REMOVE),
            switchMap((action) =>
                this._implicitRatingService.remove(action.id).pipe(
                    map(() =>
                        StoreAction.IMPLICIT_RATING.REMOVE_SUCCESS({
                            id: action.id,
                        }),
                    ),
                ),
            ),
        ),
    )
}
