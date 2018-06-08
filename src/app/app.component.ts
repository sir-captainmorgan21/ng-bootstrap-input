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

  alertFormValidation() {
    this.form.submitted = true;
    alert(this.form.valid);
  }
}
