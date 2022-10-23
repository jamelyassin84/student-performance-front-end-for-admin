import {RouterModule} from '@angular/router'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ImplicitRatingComponent} from './implicit-rating.component'
import {ImplicitRatingAddComponent} from './implicit-rating-add/implicit-rating-add.component'
import {ImplicitRatingEditComponent} from './implicit-rating-edit/implicit-rating-edit.component'
import {ImplicitRatingTableComponent} from './implicit-rating-table/implicit-rating-table.component'
import {SharedModule} from 'app/shared/shared.module'
import {IMPLICIT_RATING_ROUTES} from 'app/app-core/routes/implicit-rating.routing'

const components = [
    ImplicitRatingComponent,
    ImplicitRatingAddComponent,
    ImplicitRatingEditComponent,
    ImplicitRatingTableComponent,
]

const modules = [SharedModule, RouterModule.forChild(IMPLICIT_RATING_ROUTES)]

@NgModule({
    declarations: [...components],
    imports: [...modules],
})
export class ImplicitRatingModule {}
