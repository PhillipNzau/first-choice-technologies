import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FcTopNavComponent } from "./components/fc-top-nav/fc-top-nav.component";
import { FcSideNavComponent } from "./components/fc-side-nav/fc-side-nav.component";
import { ChartsComponent } from './views/charts/charts.component';
import { EventsComponent } from './views/events/events.component';
import { OrganisationsComponent } from './views/organisations/organisations.component';
import { ProfileComponent } from './views/profile/profile.component';
import { FcCardComponent } from "./components/fc-card/fc-card.component";
import { FcTableComponent } from "./components/fc-table/fc-table.component";
import { FcGraphComponent } from "./components/fc-graph/fc-graph.component";
import { FcBarGraphComponent } from "./components/fc-bar-graph/fc-bar-graph.component";


@NgModule({
    declarations: [
        DashboardComponent,
        ChartsComponent,
        EventsComponent,
        OrganisationsComponent,
        ProfileComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FcTopNavComponent,
        FcSideNavComponent,
        FcCardComponent,
        FcTableComponent,
        FcGraphComponent,
        FcBarGraphComponent
    ]
})
export class DashboardModule { }
