import { FormArray, FormControl } from '@angular/forms';

export interface ImplicitRatingPayload {
    title: FormControl<string>;
    discounts: FormArray<FormControl<ImplicitRatingPayload>>;
}
