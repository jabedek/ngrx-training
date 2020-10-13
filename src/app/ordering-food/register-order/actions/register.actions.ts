import { createAction, props } from '@ngrx/store';
import { FoodOrder, User } from 'src/app';

export const registerUser = createAction(
  '[Register Page] Registered New User',
  props<User>()
);

export const registerFoodOrder = createAction(
  '[Register Page] Registered New Food Order',
  props<FoodOrder>()
);
