import {Observable} from 'rxjs'
import {Injectable} from '@angular/core'
import {ImplicitRatingAPI} from 'app/app-core/http/api/implicit-rating.api'
import {ImplicitRating} from 'app/app-core/models/implicit-rating-recommendation'

@Injectable({
    providedIn: 'root',
})
export class ImplicitRatingService {
    constructor(private _implicitRatingAPI: ImplicitRatingAPI) {}

    get(): Observable<ImplicitRating[]> {
        return this._implicitRatingAPI.get()
    }

    upsert(rating: ImplicitRating): Observable<ImplicitRating> {
        return this._implicitRatingAPI.post(rating)
    }

    remove(id: string): Observable<void> {
        return this._implicitRatingAPI.remove(id)
    }
}
