import { EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { User, UsersState } from 'src/app';
import * as RegisterPageActions from '../actions/register.actions';
import * as uuid from 'uuid';
export const registerFeatureKey = 'users';

const usersMock: User[] = [
  {
    id: uuid.v4(),
    login: 'admin',
    password: 'admin',
  },
  {
    id: uuid.v4(),
    login: 'user',
    password: 'user',
  },
];

export const initialUsersState: UsersState = {
  registeredUsers: usersMock,
  newestUser: usersMock[1],
};

const registerReducer = createReducer(
  initialUsersState,
  on(RegisterPageActions.registerUser, (state, { login, password }) => ({
    registeredUsers: [...state.registeredUsers, { login, password }],
  }))
);

export function reducer(state: UsersState | undefined, action: Action) {
  return registerReducer(state, action);
}
