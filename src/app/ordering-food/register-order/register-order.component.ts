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
  selectFoodOrderAllOrders2,
  selectFoodOrders2,
  selectFoodOrders,
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
  orders2$: Observable<any | any[]>;
  profit$: Observable<number>;

  foodForm = new FormGroup({
    name: new FormControl('pizza'),
    price: new FormControl(12),
    payer: new FormControl(''),
    size: new FormControl('L'),
  });
  constructor(public store: Store<AppState>) { }

  ngOnInit(): void {
    this.registeredUsers$ = this.store.select(selectUsersRegisteredUsers);
    this.orders$ = this.store.select(selectFoodOrderAllOrders);

    this.store.select(selectFoodOrderAllOrders).subscribe(data => console.log("allorders1", data)
    );
    this.store.select(selectFoodOrderAllOrders2).subscribe(data => console.log("allorders2", data)
    );
    this.store.select(selectFoodOrders).subscribe(data => console.log("data111", data)
    );
    this.store.select(selectFoodOrders2).subscribe(data => console.log("data222", data)
    );
    this.profit$ = this.store.select(selectFoodOrderTotalProfit);
    this.foodForm.get('payer').valueChanges.subscribe(data => console.log(data)
    )
  }

  onSubmit() {
    let payer: User = this.foodForm.get('payer').value
    console.log(payer);

    let order: FoodOrder = {
      food: this.foodForm.get('name').value || 'spaghetti bolognese',
      size: this.foodForm.get('size').value || 'L',
      payer: this.foodForm.get('payer').value,
      price: this.foodForm.get('price').value || 420,
    };
    this.store.dispatch(registerFoodOrder(order));
    this.foodForm.reset();

    this.store
      .select(selectFoodOrderAllOrders)
      .subscribe((data) => console.log(data));
  }
}
