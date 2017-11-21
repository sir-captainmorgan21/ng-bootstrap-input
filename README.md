# NgBootstrapInput
Provides Bootstrap 4 driven input components for you angular application.

## Table of Contents
* [Demo](#demo)
* [Installation](#installation)
* [Setup](#setup)
* [Configuration](#configuration)
* [Usage Examples](#usage-examples)

## Demo
You can clone down this repo to deploy a demo locally.

## Installation
```
npm install ng-bootstrap-input
```

## Setup
Import ```BootstrapInputModule``` into your ```app.module```.
```typescript
import { BootstrapInputModule } from 'ng-bootstrap-input';

@NgModule({
  ...
  imports: [
    BootstrapInputModule
  ],
})
```

Import ```BootstrapInputConfigInterface``` and ```BootstrapFormGroup``` into the component you want to include an input in
You will also want to import ```FormBuilder```, ```FormGroup```, ```Validators```, ```FormControl```, and ```NgControl``` into your component for other requirements you may have
```typescript
import { BootstrapInputConfigInterface, BootstrapFormGroup } from 'ng-bootstrap-input';
import { FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';
```

## Configuration
You will have to pass a congifuration object into the BootstrapInputComponent. The following keys are avialable for the configuration object. Some of these options will be defaulted based on the type of the input (Use demo locally to see all form types and their defaults in action).
* ```type``` the type of input (email, phone, postal-code, currency)
* ```form``` the BootstrapFormGroup object that represents your form
* ```required``` whether or not the fied is required
* ```validationRegex``` the regex that the input must conform to
* ```maskArray``` an array that represents the mask of the input
* ```maxLength``` maximum amount of characters aloud

## Usage Examples
The following is an example of all of the available types being used. More types are to come!
### app.component.ts
```typescript
...
public form: BootstrapFormGroup = <BootstrapFormGroup>this.fb.group( {} );

public phoneConfig: BootstrapInputConfigInterface = {
    type: 'phone',
    form: this.form,
    required: true,
    validationRegex: null,
    maskArray: null,
    maxLength: null
};

public postalCodeConfig: BootstrapInputConfigInterface = {
    type: 'postal-code',
    form: this.form,
    required: true,
    validationRegex: null,
    maskArray: null,
    maxLength: null
};

public emailConfig: BootstrapInputConfigInterface = {
    type: 'email',
    form: this.form,
    required: true,
    validationRegex: null,
    maskArray: null,
    maxLength: null
};

public currencyConfig: BootstrapInputConfigInterface = {
    type: 'currency',
    form: this.form,
    required: true,
    validationRegex: null,
    maskArray: null,
    maxLength: null
};
...
```
### app.component.html
```html
...
<label>Phone Number</label>
<bootstrap-input [inputConfig]="phoneConfig"></bootstrap-input>
<label>Postal Code</label>
<bootstrap-input [inputConfig]="postalCodeConfig"></bootstrap-input>
<label>Email</label>
<bootstrap-input [inputConfig]="emailConfig"></bootstrap-input>
<label>Currency</label>
<bootstrap-input [inputConfig]="currencyConfig"></bootstrap-input>
...
```