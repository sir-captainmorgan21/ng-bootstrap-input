import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'bootstrap-postal-code',
  templateUrl: 'postal-code.component.html'
})

export class PostalCodeComponent extends InputComponent {

  @Input() maskArray: (string | RegExp)[] = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

}
