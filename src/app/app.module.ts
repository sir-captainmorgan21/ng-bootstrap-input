import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgBootstrapInputModule } from 'ng-bootstrap-input';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgBootstrapInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
