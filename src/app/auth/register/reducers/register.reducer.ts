import { Action, createReducer, on } from '@ngrx/store';
import { User, UsersState } from 'src/app';
import * as RegisterPageActions from '../actions/register.actions';

export const registerFeatureKey = 'users';

const usersMock: User[] = [
  {
    login: 'admin',
    password: 'admin',
  },
  {
    login: 'user',
    password: 'user',
  },
];

export const initialUsersState: UsersState = {
  registeredUsers: usersMock,
};

const registerReducer = createReducer(
  initialUsersState,
  on(RegisterPageActions.registerUser, (state, user: User) => {
    let newState = {
      registeredUsers: [...state.registeredUsers, user],
    };

    console.log(newState);

    return newState;
  })
);

export function reducer(state: UsersState | undefined, action: Action) {
  return registerReducer(state, action);
}
