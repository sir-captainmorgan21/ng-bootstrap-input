import { Injectable } from '@angular/core';

@Injectable()
export class FormValidationService {

    constructor() { }

    hasError( form, fieldName, formSubmitted, errorName ) {

        switch ( errorName ) {
            case 'required':
                return ( form.controls[fieldName].touched || formSubmitted ) && form.controls[fieldName].hasError( 'required' );
            case 'pattern':
                return ( form.controls[fieldName].touched || formSubmitted ) && form.controls[fieldName].hasError( 'pattern' );
            case 'maxlength':
                return ( form.controls[fieldName].touched || formSubmitted ) && form.controls[fieldName].hasError( 'maxlength' );
            case 'mismatchedPasswords':
                return ( form.controls[fieldName].touched || formSubmitted ) && form.hasError( 'mismatchedPasswords' );
            default:
                return ( form.controls[fieldName].touched || formSubmitted ) && form.controls[fieldName].invalid;
        }

    }

    isValid( form, fieldName ) {
        return form.controls[fieldName].touched && form.controls[fieldName].valid;
    }

}
