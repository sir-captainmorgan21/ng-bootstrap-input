import { Component, Input, OnInit } from '@angular/core';
import { BootstrapInputConfigInterface } from './bootstrap-input-config';

@Component( {
    moduleId: module.id,
    selector: 'bootstrap-input',
    templateUrl: 'bootstrap-input.component.html'
} )

export class BootstrapInputComponent implements OnInit {

    @Input() inputConfig: BootstrapInputConfigInterface;

    constructor() { }

    ngOnInit(): void {
        if ( !this.inputConfig ) {
            throw new TypeError( 'InputConfig is undefined' );
        }
    }

    private isType( type: string ): boolean {
        if ( this.inputConfig ) {
            return this.inputConfig.type === type;
        }
    }

}
