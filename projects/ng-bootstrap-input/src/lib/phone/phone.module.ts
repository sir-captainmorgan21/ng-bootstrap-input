import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PhoneComponent } from './phone.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  declarations: [
    PhoneComponent
  ],
  exports: [
    PhoneComponent
  ]
})
export class BootstrapPhoneModule {
  constructor() {}
}
