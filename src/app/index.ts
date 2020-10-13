export interface User {
  login: string;
  password: string;
}

export interface Meal {
  food: string;
  size: string;
}

export interface FoodOrder {
  price: number;
  meal: Meal;
  payer: string;
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
