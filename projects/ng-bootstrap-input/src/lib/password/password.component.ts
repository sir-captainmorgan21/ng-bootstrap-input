import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'bootstrap-password',
  templateUrl: 'password.component.html'
})

export class PasswordComponent extends InputComponent {

  @Input() label: string = 'Password';
  @Input() controlName: string = 'password';

}
