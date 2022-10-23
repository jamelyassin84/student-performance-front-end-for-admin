import { FormArray, FormControl } from '@angular/forms';

export interface ImplicitRatingPayload {
    title: FormControl<string>;
    recommendations: FormArray<FormControl<RecommendationPayload>>;
}

export interface RecommendationPayload {
    title: FormControl<string>;
}
