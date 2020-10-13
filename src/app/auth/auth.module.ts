import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromRegisterReducer from './register/reducers/register.reducer';

@NgModule({
  declarations: [AuthComponent, RegisterComponent],
  imports: [
    StoreModule.forFeature(
      fromRegisterReducer.registerFeatureKey,
      fromRegisterReducer.reducer
    ),
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
