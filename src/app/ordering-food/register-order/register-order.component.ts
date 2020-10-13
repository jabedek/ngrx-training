import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, FoodOrder } from 'src/app';
import {
  selectUsers,
  selectUsersRegisteredUsers,
} from 'src/app/auth/register/selectors';
import { registerFoodOrder } from './actions/register.actions';

@Component({
  selector: 'app-register-order',
  templateUrl: './register-order.component.html',
  styleUrls: ['./register-order.component.scss'],
})
export class RegisterOrderComponent implements OnInit {
  registeredUsers$: Observable<any> = this.store.select(
    selectUsersRegisteredUsers
  );

  foodForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    payer: new FormControl(''),
  });
  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {}

  onSubmit() {
    let order: FoodOrder = {
      meal: {
        payer: this.foodForm.get('payer').value,
        name: this.foodForm.get('name').value,
        price: this.foodForm.get('price').value,
      },
    };
    this.store.dispatch(registerFoodOrder(order));
    this.foodForm.reset();
  }
}
