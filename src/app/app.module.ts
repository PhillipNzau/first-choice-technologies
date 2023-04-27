import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EntityDataModule, EntityDataService} from "@ngrx/data";
import {LoginDataService} from "./auth/services/login-data.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {entityConfig} from "./entity-metadata";
import {EventsDataService} from "./dashboard/ngrx-store/events/events-data.service";
import {environment} from "../environments/environment";
import {AuthInterceptor} from "./shared/auth.interceptor";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [{
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
      HttpClientModule,

      /// NGRX DATA STORE INIT
      StoreModule.forRoot({}),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
      }),
      EffectsModule.forRoot([]),
      EntityDataModule.forRoot(entityConfig),
    ]
})
export class AppModule {
  constructor(
    entityDataService: EntityDataService,
    EventsDataService: EventsDataService,

  ) {
    entityDataService.registerServices({'Event': EventsDataService})
  }
}
