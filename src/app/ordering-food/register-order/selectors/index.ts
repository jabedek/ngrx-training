import { createSelector } from '@ngrx/store';
import { AppState, FoodOrdersState } from 'src/app';

// simple selector
export const selectFoodOrders = (state: AppState) => state.foodOrders;

export const selectFoodOrders2 = createSelector((state: AppState) => state, (state: AppState) => state.foodOrders);

// selectors with memoization (createSelector, createFeatureSelector)
export const selectFoodOrderAllOrders = createSelector(
  selectFoodOrders,
  (state: FoodOrdersState) => state.allOrders
);
export const selectFoodOrderAllOrders2 = (state: AppState) => state.foodOrders.allOrders

export const selectFoodOrderTotalProfit = createSelector(
  selectFoodOrders,
  (state: FoodOrdersState) => state.totalProfit
);
