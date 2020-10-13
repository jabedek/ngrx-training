import { Action, createReducer, on } from '@ngrx/store';
import { FoodOrder, FoodOrdersState, Meal, User, UsersState } from 'src/app';
import * as RegisterPageActions from '../actions/register.actions';

export const registerFeatureKey = 'foodOrder';

const meal: Meal = { food: 'pizza', size: 'big' };

const order: FoodOrder = {
  price: 5,
  meal,
  payer: 'dupa',
};

export const initialFoodOrdersState: FoodOrdersState = {
  allOrders: [order],
  totalProfit: 5,
};

const registerReducer = createReducer(
  initialFoodOrdersState,
  on(RegisterPageActions.registerFoodOrder, (state, order: FoodOrder) => {
    let newState = {
      allOrders: [...state.allOrders, order],
      totalProfit: +(state.totalProfit + order.price),
    };

    console.log(newState);

    return newState;
  })
);

export function reducer(state: FoodOrdersState | undefined, action: Action) {
  return registerReducer(state, action);
}
