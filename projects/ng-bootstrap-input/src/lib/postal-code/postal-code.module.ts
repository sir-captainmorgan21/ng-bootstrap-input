import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PostalCodeComponent } from './postal-code.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  declarations: [
    PostalCodeComponent
  ],
  exports: [
    PostalCodeComponent
  ]
})
export class BootstrapPostalCodeModule {
  constructor() {}
}
