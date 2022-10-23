import {StoreAction} from './../../../app-core/store/core/action.enum'
import {map} from 'rxjs/operators'
import {MatDialog} from '@angular/material/dialog'
import {Component, OnInit} from '@angular/core'
import {dbwAnimations} from '@global_packages/animations/animation.api'
import {ImplicitRatingAddComponent} from './implicit-rating-add/implicit-rating-add.component'
import {AppState} from 'app/app-core/store/core/app.state'
import {select, Store} from '@ngrx/store'
import {StateEnum} from 'app/app-core/store/core/store-action.enum'
import {TransformEntity} from '@global_packages/helpers/transform-entity'

@Component({
    selector: 'implicit-rating',
    templateUrl: './implicit-rating.component.html',
    styleUrls: ['./implicit-rating.component.scss'],
    animations: [...dbwAnimations],
})
export class ImplicitRatingComponent implements OnInit {
    constructor(private _modal: MatDialog, private _store: Store<AppState>) {}

    ratings$ = this._store.pipe(
        select(StateEnum.IMPLICIT_RATING),
        map((x) => new TransformEntity(x as any).toArray()),
    )

    ngOnInit(): void {
        this._store.dispatch(StoreAction.IMPLICIT_RATING.LOAD())
    }

    addRating() {
        this._modal.open(ImplicitRatingAddComponent, {
            hasBackdrop: true,
            panelClass: ['md:w-1/3', 'w-full', 'rounded-none'],
        })
    }
}
