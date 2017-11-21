import { NgModule } from '@angular/core';
import { BootstrapInputComponent } from './bootstrap-input.component';
import { CommonModule } from '@angular/common';
import { FormValidationService } from './form-validation.service';
import { BootstrapInputPhoneComponent } from './inputs/phone/bootstrap-input-phone.component';
import { BootstrapInputPostalCodeComponent } from './inputs/postal-code/bootstrap-input-postal-code.component';
import { BootstrapInputEmailComponent } from './inputs/email/bootstrap-input-email.component';
import { BootstrapInputCurrencyComponent } from './inputs/currency/bootstrap-input-currency.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule( {
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TextMaskModule
    ],
    declarations: [
        BootstrapInputComponent,
        BootstrapInputPhoneComponent,
        BootstrapInputPostalCodeComponent,
        BootstrapInputEmailComponent,
        BootstrapInputCurrencyComponent
    ],
    exports: [
        BootstrapInputComponent,
        BootstrapInputPhoneComponent,
        BootstrapInputPostalCodeComponent,
        BootstrapInputEmailComponent,
        BootstrapInputCurrencyComponent
    ],
    providers: [
        FormValidationService
    ]
} )

export class BootstrapInputModule { }
