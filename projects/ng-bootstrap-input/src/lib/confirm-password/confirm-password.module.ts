import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmPasswordComponent } from './confirm-password.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ConfirmPasswordComponent
  ],
  exports: [
    ConfirmPasswordComponent
  ]
})
export class BootstrapConfirmPasswordModule {
  constructor() {}
}
