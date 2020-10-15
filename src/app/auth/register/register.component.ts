import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState, User } from 'src/app';
import { registerUser } from './actions/register.actions';
import { selectUsersRegisteredUsers } from './selectors';
import * as uuid from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public store: Store<AppState>) { }

  ngOnInit(): void { }

  onSubmit() {

    let user: User = { login: this.userForm.get('login').value || 'brain-root', password: this.userForm.get('password').value || "admin123", id: uuid.v4() };

    console.log(user);

    this.store.dispatch(registerUser(user));
    this.userForm.reset();

    this.store
      .select(selectUsersRegisteredUsers)
      .subscribe((data) => console.log(data))
      .unsubscribe();
  }
}
