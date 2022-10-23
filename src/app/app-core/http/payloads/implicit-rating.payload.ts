import {FormArray, FormControl} from '@angular/forms'

export interface ImplicitRatingPayload {
    id?: FormControl<string>
    title: FormControl<string>
    average: FormControl<string>
    recommendations: FormArray<FormControl<RecommendationPayload>>
}

export interface RecommendationPayload {
    title: FormControl<string>
}
