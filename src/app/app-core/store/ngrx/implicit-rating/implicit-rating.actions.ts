import {createAction, props} from '@ngrx/store'
import {ImplicitRating} from 'app/app-core/models/implicit-rating-recommendation'

export enum ImplicitRatingEnum {
    LOAD = '[ImplicitRating/System] Load  ImplicitRating',
    LOAD_SUCCESS = '[Logo/API] Load Success Implicit Rating',

    UPSERT = '[ImplicitRating/System] Upsert  Implicit Rating',
    UPSERT_SUCCESS = '[Logo/API] Upsert Success Implicit Rating',

    REMOVE = '[ImplicitRating/System] Remove  Implicit Rating',
    REMOVE_SUCCESS = '[Logo/API] Remove Success Implicit Rating',
}

export const LOAD = createAction(ImplicitRatingEnum.LOAD)

export const LOAD_SUCCESS = createAction(
    ImplicitRatingEnum.LOAD_SUCCESS,
    props<{ratings: ImplicitRating[]}>(),
)

export const UPSERT = createAction(
    ImplicitRatingEnum.UPSERT,
    props<{rating: ImplicitRating}>(),
)

export const UPSERT_SUCCESS = createAction(
    ImplicitRatingEnum.UPSERT_SUCCESS,
    props<{rating: ImplicitRating}>(),
)

export const REMOVE = createAction(
    ImplicitRatingEnum.REMOVE,
    props<{id: string}>(),
)

export const REMOVE_SUCCESS = createAction(
    ImplicitRatingEnum.REMOVE_SUCCESS,
    props<{id: string}>(),
)
