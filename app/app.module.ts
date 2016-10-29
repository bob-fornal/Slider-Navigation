
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper.component';
import { WrapperPageComponent } from './components/wr-page.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    WrapperComponent,
    WrapperPageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
