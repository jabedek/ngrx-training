import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterOrderComponent } from './register-order/register-order.component';

const routes: Routes = [
  {
    path: '',

    children: [
      { path: '', component: RegisterOrderComponent },
      { path: 'order', component: RegisterOrderComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderingFoodRoutingModule {}
