import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderingFoodRoutingModule } from './ordering-food-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromRegisterOrderReducer from './register-order/reducers/register-order.reducer';
import { RegisterOrderComponent } from './register-order/register-order.component';

@NgModule({
  declarations: [RegisterOrderComponent],
  imports: [
    CommonModule,
    OrderingFoodRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromRegisterOrderReducer.registerFeatureKey,
      fromRegisterOrderReducer.reducer
    ),
  ],
})
export class OrderingFoodModule { }
