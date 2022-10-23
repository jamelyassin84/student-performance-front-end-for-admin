import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImplicitRatingComponent } from './implicit-rating.component';
import { ImplicitRatingAddComponent } from './implicit-rating-add/implicit-rating-add.component';
import { ImplicitRatingEditComponent } from './implicit-rating-edit/implicit-rating-edit.component';
import { ImplicitRatingTableComponent } from './implicit-rating-table/implicit-rating-table.component';



@NgModule({
  declarations: [
    ImplicitRatingComponent,
    ImplicitRatingAddComponent,
    ImplicitRatingEditComponent,
    ImplicitRatingTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImplicitRatingModule { }
