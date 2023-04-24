import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EntityDataModule, EntityDataService} from "@ngrx/data";
import {LoginDataService} from "./auth/services/login-data.service";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {entityConfig} from "./entity-metadata";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
      HttpClientModule,
      StoreModule.forRoot({}, {}),
      EffectsModule.forRoot([]),
      StoreRouterConnectingModule.forRoot(),
      EntityDataModule.forRoot(entityConfig),
      StoreDevtoolsModule.instrument({
        maxAge: 25,

      }),
    ]
})
export class AppModule {
  // constructor(
  //   entityDataService: EntityDataService,
  //   LoginDataService: LoginDataService
  //
  // ) {
  //   entityDataService.registerServices({Auth:LoginDataService})
  //
  // }
}
