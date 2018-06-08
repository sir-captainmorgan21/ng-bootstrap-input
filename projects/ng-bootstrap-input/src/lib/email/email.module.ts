import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailComponent } from './email.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    EmailComponent
  ],
  exports: [
    EmailComponent
  ]
})
export class BootstrapEmailModule {
  constructor() {}
}
