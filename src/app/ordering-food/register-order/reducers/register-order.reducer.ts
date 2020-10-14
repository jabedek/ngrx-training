import { Action, createReducer, on } from '@ngrx/store';
import { FoodOrder, FoodOrdersState, User, UsersState } from 'src/app';
import * as RegisterPageActions from '../actions/register-order.actions';

export const registerFeatureKey = 'foodOrders';

export const initialFoodOrdersState: FoodOrdersState = {
  allOrders: [
    {
      price: 5,
      food: 'pizza',
      size: 'M',
      payer: 'brain',
    },
  ],
  totalProfit: 5,
};

const registerOrderReducer = createReducer(
  initialFoodOrdersState,
  on(
    RegisterPageActions.registerFoodOrder,
    (state, { price, food, size, payer }) => {
      let newState = {
        allOrders: [...state.allOrders, { price, food, size, payer }],
        totalProfit: +(state.totalProfit + price),
      };

      console.log(newState);

      return newState;
    }
  )
);

export function reducer(state: FoodOrdersState | undefined, action: Action) {
  return registerOrderReducer(state, action);
}
