import {EntityStateAdapter} from '@ngrx/entity/src/models'
import {ImplicitRating} from 'app/app-core/models/implicit-rating-recommendation'

export interface AppState {
    implicitRatings: EntityStateAdapter<ImplicitRating>
}
