import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'bootstrap-phone',
  templateUrl: 'phone.component.html'
})

export class PhoneComponent extends InputComponent {

  @Input() maskArray:
    (string | RegExp)[] = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

}
