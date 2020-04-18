import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { CounterFromServiceModule } from './counter-from-service/counter-from-service.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    CounterFromServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
