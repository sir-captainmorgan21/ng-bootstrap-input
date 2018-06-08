import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
export { IMaskConfig } from './interfaces';
export { BootstrapFormGroup } from './forms';
import { BootstrapConfirmPasswordModule } from './confirm-password/confirm-password.module';
import { BootstrapEmailModule } from './email/email.module';
import { BootstrapInputModule } from './input/input.module';
import { BootstrapPasswordModule } from './password/password.module';
import { BootstrapPhoneModule } from './phone/phone.module';
import { BootstrapPostalCodeModule } from './postal-code/postal-code.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BootstrapConfirmPasswordModule,
    BootstrapEmailModule,
    BootstrapInputModule,
    BootstrapPasswordModule,
    BootstrapPhoneModule,
    BootstrapPostalCodeModule
  ],
  exports: [
    BootstrapConfirmPasswordModule,
    BootstrapEmailModule,
    BootstrapInputModule,
    BootstrapPasswordModule,
    BootstrapPhoneModule,
    BootstrapPostalCodeModule
  ]
})
export class NgBootstrapInputModule { }
