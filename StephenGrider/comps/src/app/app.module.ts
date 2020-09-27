import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from '../app/elements/elements.module';
import { CollectionsModule } from '../app/collections/collections.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule,
    CollectionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
