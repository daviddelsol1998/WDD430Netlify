
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WrestlerComponent } from './wrestler/wrestler.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WrestlerComponent // Import the module if in a separate module
  ],
  // ...
})
export class AppModule { }