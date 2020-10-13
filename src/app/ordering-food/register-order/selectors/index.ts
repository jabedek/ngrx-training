import { createSelector } from '@ngrx/store';
import { AppState, FoodOrdersState } from 'src/app';

// simple selector
export const selectFoodOrders = (state: AppState) => state.foodOrders;

// selectors with memoization (createSelector, createFeatureSelector)
export const selectFoodOrderAllOrders = createSelector(
  selectFoodOrders,
  (state: FoodOrdersState) => state.allOrders
);

export const selectFoodOrderTotalProfit = createSelector(
  selectFoodOrders,
  (state: FoodOrdersState) => state.totalProfit
);
