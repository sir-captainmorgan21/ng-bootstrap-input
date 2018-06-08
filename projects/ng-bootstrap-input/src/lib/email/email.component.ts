import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'bootstrap-email',
  templateUrl: 'email.component.html'
})

export class EmailComponent extends InputComponent {

  buildValidators(): void {
    this.validators.push(Validators.email);

    if (this.required) {
      this.validators.push(Validators.required);
    }
    if (this.maxLength) {
      this.validators.push(Validators.maxLength(this.maxLength));
    }
    if (this.minLength) {
      this.validators.push(Validators.minLength(this.minLength));
    }
  }

}
