import {PHPBaseModel} from '@global_packages/models/core.model'
import {ImplicitRatingRecommendation} from './implicit-rating.model'

export interface ImplicitRating extends PHPBaseModel {
    title: string
    recommendations: ImplicitRatingRecommendation[]
}
