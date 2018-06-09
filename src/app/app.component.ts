import { Component } from '@angular/core';
import { BootstrapFormGroup } from 'ng-bootstrap-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public form: BootstrapFormGroup = new BootstrapFormGroup({});

  public stateMaskConfig = {
    mask: [/[A-Za-z]/, /[A-Za-z]/],
    pipe: function(conformedValue: string) {
      return conformedValue.toUpperCase();
    },
    guide: false
  };

  alertFormValidation() {
    this.form.submitted = true;
    alert(this.form.valid);
  }
}
