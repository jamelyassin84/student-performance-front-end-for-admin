import {MatDialog} from '@angular/material/dialog'
import {Component, OnInit, Input} from '@angular/core'
import {dbwAnimations} from '@global_packages/animations/animation.api'
import {Store} from '@ngrx/store'
import {ImplicitRating} from 'app/app-core/models/implicit-rating-recommendation'
import {StoreAction} from 'app/app-core/store/core/action.enum'
import {AppState} from 'app/app-core/store/core/app.state'
import {ImplicitRatingEditComponent} from '../implicit-rating-edit/implicit-rating-edit.component'

@Component({
    selector: 'implicit-rating-table',
    templateUrl: './implicit-rating-table.component.html',
    styleUrls: ['./implicit-rating-table.component.scss'],
    animations: [...dbwAnimations],
})
export class ImplicitRatingTableComponent implements OnInit {
    constructor(private _store: Store<AppState>, private _modal: MatDialog) {}

    @Input()
    ratings?: ImplicitRating[]

    ngOnInit(): void {}

    edit(rating: ImplicitRating) {
        this._modal.open(ImplicitRatingEditComponent, {
            hasBackdrop: true,
            panelClass: ['md:w-1/3', 'w-full'],
            data: {...rating},
        })
    }

    remove(rating: ImplicitRating) {
        this._store.dispatch(
            StoreAction.IMPLICIT_RATING.REMOVE({id: rating.id}),
        )
    }

    trackByFn(index: number, item: any): any {
        return item.id || index
    }
}
