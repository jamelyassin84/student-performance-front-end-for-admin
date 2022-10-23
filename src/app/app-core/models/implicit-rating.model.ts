import { PHPBaseModel } from '@global_packages/models/core.model';
import { ImplicitRatingRecommendation } from './implicit-rating-recommendation';

export interface ImplicitRating extends PHPBaseModel {
    title: string;
    recommendations: ImplicitRatingRecommendation[];
}
