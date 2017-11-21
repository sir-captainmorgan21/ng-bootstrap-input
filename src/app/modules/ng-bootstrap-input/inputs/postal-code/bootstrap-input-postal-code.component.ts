import { Component, Input, OnInit } from '@angular/core';
import { BootstrapInputConfigInterface } from '../../bootstrap-input-config';
import { FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { InputComponentInterface } from '../input-component-interface';
import { FormValidationService } from '../../form-validation.service';
import { BootstrapFormGroup } from '../../bootstrap-form-group';
import { TextMaskModule } from 'angular2-text-mask';

@Component( {
    moduleId: module.id,
    selector: 'bootstrap-input-postal-code',
    templateUrl: 'bootstrap-input-postal-code.component.html'
} )

export class BootstrapInputPostalCodeComponent implements InputComponentInterface, OnInit {

    @Input() inputConfig: BootstrapInputConfigInterface;
    control: FormControl;
    validators: ValidatorFn[] = [];

    maskConfig = {
        mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        guide: false,
        pipe: function( conformedValue ) {
            if ( conformedValue.length === 6 ) {
                conformedValue = conformedValue.substring( 0, 5 );
            }
            return conformedValue;
        }
    };

    regex;

    ngOnInit(): void {
        this.configureInputMask();
        this.buildValidators();
        this.control = new FormControl( null, this.validators );
        this.inputConfig.form.addControl( 'postalCode', this.control );
    }

    constructor( private formValidationService: FormValidationService ) { }

    configureInputMask() {
        if ( this.inputConfig.maskArray ) {
            this.maskConfig.mask = this.inputConfig.maskArray;
        }

        if ( this.inputConfig.maxLength ) {
            this.maskConfig.pipe = this.trimToMaxLength;
        }
    }

    trimToMaxLength( conformedValue: string ): string {
        return conformedValue.substring( 0, this.inputConfig.maxLength );
    }

    buildValidators(): void {

        if ( this.inputConfig.required ) {
            this.validators.push( Validators.required );
        }

        if ( this.inputConfig.maxLength ) {
            this.validators.push( Validators.maxLength( this.inputConfig.maxLength ) );
        }

        if ( this.inputConfig.validationRegex ) {
            this.validators.push( Validators.pattern( this.inputConfig.validationRegex ) );
        }
    }

    hasError( fieldName: string, errorName: string ): boolean {
        return this.formValidationService.hasError( this.inputConfig.form, fieldName, this.inputConfig.form.submitted, errorName );
    }

    isValid( fieldName: string ): boolean {
        return this.formValidationService.isValid( this.inputConfig.form, fieldName );
    }

    getFormControl(): AbstractControl {
        return this.inputConfig.form.controls['postalCode'];
    }
}
