import { BootstrapInputConfigInterface } from '../bootstrap-input-config';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';

export interface InputComponentInterface {

    inputConfig: BootstrapInputConfigInterface;
    control: FormControl;
    validators: ValidatorFn[];
    maskConfig: object;
    regex: string;

    configureInputMask(): void;
    trimToMaxLength( conformedValue: string ): string;
    buildValidators(): void;
    hasError( fieldName: string, errorName: string ): boolean;
    isValid( fieldName: string ): boolean;

}
