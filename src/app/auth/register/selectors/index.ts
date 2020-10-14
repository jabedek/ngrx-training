import { createSelector, select, State } from '@ngrx/store';
import { AppState, FoodOrdersState, UsersState } from 'src/app';

export const selectUsers = (state: AppState) => state.users;

export const selectUsersRegisteredUsers = createSelector(
  selectUsers,
  (state: UsersState) => state.registeredUsers
);
