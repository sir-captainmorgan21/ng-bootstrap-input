import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  declarations: [
    InputComponent
  ],
  exports: [
    InputComponent
  ]
})
export class BootstrapInputModule {
  constructor() {}
}
