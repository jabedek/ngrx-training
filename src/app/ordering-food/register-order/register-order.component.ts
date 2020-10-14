import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, FoodOrder, User } from 'src/app';
import {
  selectUsers,
  selectUsersRegisteredUsers,
} from 'src/app/auth/register/selectors';
import { registerFoodOrder } from './actions/register-order.actions';
import {
  selectFoodOrderAllOrders,
  selectFoodOrderTotalProfit,
} from './selectors';

@Component({
  selector: 'app-register-order',
  templateUrl: './register-order.component.html',
  styleUrls: ['./register-order.component.scss'],
})
export class RegisterOrderComponent implements OnInit {
  registeredUsers$: Observable<User[]>;
  orders$: Observable<FoodOrder[]>;
  profit$: Observable<number>;

  foodForm = new FormGroup({
    name: new FormControl('pizza'),
    price: new FormControl(12),
    payer: new FormControl(''),
    size: new FormControl('L'),
  });
  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.registeredUsers$ = this.store.select(selectUsersRegisteredUsers);
    this.orders$ = this.store.select(selectFoodOrderAllOrders);
    this.profit$ = this.store.select(selectFoodOrderTotalProfit);
  }

  onSubmit() {
    let order: FoodOrder = {
      food: this.foodForm.get('name').value || 'spaghetti bolognese',
      size: this.foodForm.get('size').value || 'L',
      payer: this.foodForm.get('payer').value || 'brain-root',
      price: this.foodForm.get('price').value || 420,
    };
    this.store.dispatch(registerFoodOrder(order));
    this.foodForm.reset();

    this.store
      .select(selectFoodOrderAllOrders)
      .subscribe((data) => console.log(data));
  }
}
