import {StoreModule} from '@ngrx/store'
import {StateEnum} from 'app/app-core/store/core/store-action.enum'
import {implicitRatingReducer} from 'app/app-core/store/ngrx/implicit-rating/implicit-rating.reducer'

export const appStateModules = [
    StoreModule.forFeature(StateEnum.IMPLICIT_RATING, implicitRatingReducer),
]
