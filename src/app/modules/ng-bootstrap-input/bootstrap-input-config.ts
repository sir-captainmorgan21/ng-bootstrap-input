import { BootstrapFormGroup } from './bootstrap-form-group';

export interface BootstrapInputConfigInterface {
    type: type;
    required: boolean;
    validationRegex: string;
    maskArray: ( string | RegExp )[];
    maxLength: number;
    form: BootstrapFormGroup;
}

export type type = 'name' | 'phone' | 'email' | 'password' | 'password-new'
    | 'postal-code' | 'date' | 'currency' | 'routing-number' | 'account-number' | 'default';

export class BootstrapInputConfig implements BootstrapInputConfigInterface {
    private _type: type;
    private _required: boolean;
    private _validationRegex: string;
    private _maskArray: string[];
    private _maxLength: number;
    private _form: BootstrapFormGroup;

    constructor() {
        this._required = false;
        this._type = 'default';
    }

    public get type(): type {
        return this._type;
    }

    public set type( type: type ) {
        this._type = type;
    }

    public get required(): boolean {
        return this._required;
    }

    public set required( required: boolean ) {
        this._required = required;
    }

    public get validationRegex(): string {
        return this._validationRegex;
    }

    public set validationRegex( validationRegex: string ) {
        this._validationRegex = validationRegex;
    }

    public get maskArray(): string[] {
        return this._maskArray;
    }

    public set maskArray( maskArray: string[] ) {
        this._maskArray = maskArray;
    }

    public get maxLength(): number {
        return this._maxLength;
    }

    public set maxLength( maxLength: number ) {
        this._maxLength = maxLength;
    }

    public get form(): BootstrapFormGroup {
        return this._form;
    }

    public set form( form: BootstrapFormGroup ) {
        this._form = form;
    }
}
