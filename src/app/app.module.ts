import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BeforeEachTestComponent } from './before-each-test/before-each-test.component';

@NgModule({
  declarations: [
    AppComponent,
    BeforeEachTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
