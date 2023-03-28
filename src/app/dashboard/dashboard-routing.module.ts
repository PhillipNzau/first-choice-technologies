import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ChartsComponent } from './views/charts/charts.component';
import { EventsComponent } from './views/events/events.component';
import { OrganisationsComponent } from './views/organisations/organisations.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
  children: [
    {path: '', component: ChartsComponent},
    {path:'events', component: EventsComponent},
    {path:'organisations', component: OrganisationsComponent},
    {path:'profile', component:ProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
