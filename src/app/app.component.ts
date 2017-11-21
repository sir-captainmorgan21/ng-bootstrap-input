import { Component, OnInit } from '@angular/core';
import { BootstrapInputConfigInterface, BootstrapFormGroup } from './modules/ng-bootstrap-input/ng-bootstrap-input';
import { FormBuilder, FormGroup, Validators, FormControl, NgControl } from '@angular/forms';

@Component( {
    selector: 'bootstrap-app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
} )
export class AppComponent implements OnInit {

    title = 'app';
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

    ngOnInit(): void { }

    constructor( public fb: FormBuilder ) { }

}
