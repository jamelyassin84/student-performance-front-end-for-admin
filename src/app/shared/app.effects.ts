import {EffectsModule} from '@ngrx/effects'
import {ImplicitRatingEffects} from 'app/app-core/store/ngrx/implicit-rating/implicit-rating.effects'

export const appEffects = [EffectsModule.forFeature([ImplicitRatingEffects])]
