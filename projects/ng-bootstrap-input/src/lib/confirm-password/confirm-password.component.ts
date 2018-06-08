import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'bootstrap-confirm-password',
  templateUrl: 'confirm-password.component.html'
})

export class ConfirmPasswordComponent extends InputComponent {

  @Input() label: string = 'Confirm Password';
  controlName: string = 'confirmPassword';

  buildValidators() {
    this.form.setValidators(this.validateConfirmPassword);
  }

  validateConfirmPassword(c: AbstractControl) {
    const password = c.get('password').value;
    const confirmPassword = c.get('confirmPassword').value;

    if (password !== confirmPassword) {
      c.get('confirmPassword').setErrors({ MatchPassword: true });
    } else {
      return null;
    }

  }
}
