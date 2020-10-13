import { createSelector } from '@ngrx/store';
import { AppState, FoodOrdersState, UsersState } from 'src/app';

// simple selector
export const selectUsers = (state: AppState) => state.users;

// selectors with memoization (createSelector, createFeatureSelector)
export const selectUsersRegisteredUsers = createSelector(
  selectUsers,
  (state: UsersState) => state.registeredUsers
);
