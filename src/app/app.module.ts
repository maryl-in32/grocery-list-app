import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GroceryComponent } from './app.grocery';


@NgModule({
  declarations: [
    GroceryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule { }
