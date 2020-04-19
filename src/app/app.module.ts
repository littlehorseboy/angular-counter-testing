import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { CounterFromServiceModule } from './counter-from-service/counter-from-service.module';
import { UserInfoModule } from './user-info/user-info.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CounterModule,
    CounterFromServiceModule,
    UserInfoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
