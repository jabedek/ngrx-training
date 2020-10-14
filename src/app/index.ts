export interface AppState {
  foodOrders: FoodOrdersState;
  users: UsersState;
}

export interface FoodOrdersState {
  allOrders: FoodOrder[];
  totalProfit: number;
}

export interface UsersState {
  registeredUsers: User[];
  newestUser: User;
}
///

export interface FoodOrder {
  price: number;
  food: string;
  size: 'S' | 'M' | 'L';
  payer: string;
}

export interface User {
  id: string;
  login: string;
  password: string;
}

////
