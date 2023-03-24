import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FcTopNavComponent } from "./components/fc-top-nav/fc-top-nav.component";
import { FcSideNavComponent } from "./components/fc-side-nav/fc-side-nav.component";


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FcTopNavComponent,
        FcSideNavComponent
    ]
})
export class DashboardModule { }
