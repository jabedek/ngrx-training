import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState, User } from 'src/app';
import { registerUser } from './actions/register.actions';

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

  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {}

  onSubmit() {
    let user: User = this.userForm.value;

    this.store.dispatch(registerUser(user));
    this.userForm.reset();
  }
}
