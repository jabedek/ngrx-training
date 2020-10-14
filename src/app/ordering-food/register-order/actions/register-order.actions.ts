import { createAction, props } from '@ngrx/store';
import { FoodOrder, User } from 'src/app';

export const registerFoodOrder = createAction(
  '[Register Page] Registered New Food Order',
  props<FoodOrder>()
);
