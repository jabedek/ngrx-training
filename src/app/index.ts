export interface User {
  login: string;
  password: string;
}

export interface Meal {
  payer: string;
  name: string;
  price: number;
}

export interface FoodOrder {
  meal: Meal;
}
////
export interface FoodOrdersState {
  allOrders: FoodOrder[];
  totalProfit: number;
}

export interface UsersState {
  registeredUsers: User[];
}

export interface AppState {
  foodOrders: FoodOrdersState;
  users: UsersState;
}
