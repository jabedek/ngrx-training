import { Action, createReducer, on } from '@ngrx/store';
import { FoodOrder, FoodOrdersState, Meal, User, UsersState } from 'src/app';
import * as RegisterPageActions from '../actions/register.actions';

export const registerFeatureKey = 'foodOrder';

export const initialFoodOrdersState: FoodOrdersState = {
  allOrders: [],
  totalProfit: 0,
};

const registerReducer = createReducer(
  initialFoodOrdersState,
  on(RegisterPageActions.registerFoodOrder, (state, order: FoodOrder) => {
    let newState = {
      totalProfit: +(state.totalProfit + order.meal.price),
      allOrders: [...state.allOrders, order],
    };

    console.log(newState);

    return newState;
  })
);

export function reducer(state: FoodOrdersState | undefined, action: Action) {
  return registerReducer(state, action);
}
