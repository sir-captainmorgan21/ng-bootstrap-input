import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './password.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PasswordComponent
  ],
  exports: [
    PasswordComponent
  ]
})
export class BootstrapPasswordModule {
  constructor() {}
}
