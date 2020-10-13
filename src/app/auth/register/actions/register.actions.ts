import { createAction, props } from '@ngrx/store';
import { User } from 'src/app';

export const registerUser = createAction(
  '[Register Page] Registered New User',
  props<User>()
);
