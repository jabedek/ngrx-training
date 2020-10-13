import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, FoodOrder, Meal, User } from 'src/app';
import {
  selectUsers,
  selectUsersRegisteredUsers,
} from 'src/app/auth/register/selectors';
import { registerFoodOrder } from './actions/register.actions';
import { selectFoodOrderAllOrders } from './selectors';

@Component({
  selector: 'app-register-order',
  templateUrl: './register-order.component.html',
  styleUrls: ['./register-order.component.scss'],
})
export class RegisterOrderComponent implements OnInit, AfterViewInit {
  registeredUsers$: Observable<User[]>;
  allOrders$: Observable<FoodOrder[]>;

  foodForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    payer: new FormControl(''),
  });
  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.registeredUsers$ = this.store.select(selectUsersRegisteredUsers);

    // this.allOrders$ = this.store.select(selectFoodOrderAllOrders);

    // console.log(this.registeredUsers$, this.allOrders$);
  }

  ngAfterViewInit() {
    // this.allOrders$.subscribe((data) => {
    //   console.log(data);
    // });
    // console.log(this.allOrders$.subscribe((data) => data));
  }

  onSubmit() {
    let meal: Meal = {
      food: this.foodForm.get('name').value,
      size: 'big',
    };
    let order: FoodOrder = {
      meal,
      payer: this.foodForm.get('payer').value,
      price: this.foodForm.get('price').value,
    };
    this.store.dispatch(registerFoodOrder(order));
    this.foodForm.reset();
  }
}
