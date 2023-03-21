import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FcTopNavComponent } from "./dashboard/components/fc-top-nav/fc-top-nav.component";
import { FcSideNavComponent } from "./dashboard/components/fc-side-nav/fc-side-nav.component";
import { SideNavItemComponent } from './dashboard/components/side-nav-item/side-nav-item.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FcSideNavComponent,
        FcTopNavComponent,
        SideNavItemComponent
    ]
})
export class AppModule { }
