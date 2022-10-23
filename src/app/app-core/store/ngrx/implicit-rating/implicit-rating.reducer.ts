import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity'
import {createReducer, on} from '@ngrx/store'
import {LoadingState} from 'app/app-core/enum/loading-state.enum'
import {ImplicitRating} from 'app/app-core/models/implicit-rating-recommendation'
import {StoreAction} from 'app/app-core/store/core/action.enum'

export const adapter: EntityAdapter<ImplicitRating> =
    createEntityAdapter<ImplicitRating>()

export interface State extends EntityState<ImplicitRating> {
    loading: LoadingState
    error: any
}

export const initialState: State = adapter.getInitialState({
    loading: LoadingState.IDLE,
    error: null,
})

export const implicitRatingReducer = createReducer(
    initialState,

    on(StoreAction.IMPLICIT_RATING.LOAD_SUCCESS, (state, action) =>
        adapter.setAll(action.ratings, state),
    ),

    on(StoreAction.IMPLICIT_RATING.UPSERT_SUCCESS, (state, action) =>
        adapter.upsertOne(action.rating, state),
    ),

    on(StoreAction.IMPLICIT_RATING.REMOVE_SUCCESS, (state, action) =>
        adapter.removeOne(action.id, state),
    ),
)
