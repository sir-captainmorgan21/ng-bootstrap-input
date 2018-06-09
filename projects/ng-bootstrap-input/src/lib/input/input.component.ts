import { FormGroup, FormControl, ValidatorFn, Validators, AbstractControl } from '@angular/forms';
import { BootstrapFormGroup } from '../forms';
import { Component, OnInit, Input } from '@angular/core';
import { IMaskConfig } from '../interfaces';

@Component({
  selector: 'bootstrap-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {

  @Input() maskArray: (string | RegExp)[];
  @Input() maxLength: number;
  @Input() minLength: number;
  @Input() regex: RegExp;
  @Input() required: boolean;
  @Input() label: string = '<No Label Provided>';
  @Input() controlName: string;
  @Input() form: BootstrapFormGroup;
  control: FormControl;
  validators: ValidatorFn[] = [];
  @Input() maskConfig: IMaskConfig = {
    mask: false,
    pipe: false,
    guide: false
  };

  ngOnInit(): void {
    this.validateInputs();
    this.configureInputMask();
    this.buildValidators();
    this.control = new FormControl('', this.validators);
    this.form.addControl(this.controlName, this.control);
  }

  constructor() {}

  hasError(errorName: string): boolean {
    return (this.control.touched || this.form.submitted) && this.control.hasError(errorName);
  }

  isInvalid() {
    return (this.control.touched || this.form.submitted) && this.control.invalid;
  }

  isValid(): boolean {
    return this.control.touched && this.control.valid;
  }

  configureInputMask(): void {
    if (this.maskArray) {
      this.maskConfig.mask = this.maskArray;
    }
  }

  trimToMaxLength(conformedValue: string): string {
    return conformedValue.substring(0, this.maxLength);
  }

  buildValidators(): void {
    if (this.required) {
      this.validators.push(Validators.required);
    }
    if (this.maxLength) {
      this.validators.push(Validators.maxLength(this.maxLength));
    }
    if (this.minLength) {
      this.validators.push(Validators.minLength(this.minLength));
    }
    if (this.regex) {
      this.validators.push(Validators.pattern(this.regex));
    }
  }

  validateInputs() {
    if (!this.form) {
      throw Error('Dont forget to pass in your SnagFormGroup! EX: <snag-input [form]=\'mySnagFormGroup\'>');
    }
  }

  getFormControl(): AbstractControl {
    return this.form.controls[this.controlName];
  }

}
