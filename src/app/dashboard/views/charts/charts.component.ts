import { Component, OnInit } from '@angular/core';
import {ProfileEntityService} from "../../ngrx-store/profile/profile-entity.service";
import {OrganisationsEntityService} from "../../ngrx-store/organisation/organisations-entity.service";
import {EventsInterface} from "../../../shared/models/eventsModel";
import {EventsEntityService} from "../../ngrx-store/events/events-entity.service";
import {OrganisationsInterface} from "../../../shared/models/organisationsModel";
import {UserInterface} from "../../../shared/models/userModel";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  organisations: OrganisationsInterface[] = [];

  events:EventsInterface[] = [];
  profile:UserInterface[] =[];

  constructor(
    private profileService: ProfileEntityService,
    private orgService: OrganisationsEntityService,
    private eventService: EventsEntityService

  ){}
  ngOnInit() {
    this.getAllEvents()
    // this.getUserProfile()
    this.getAllOrganisations()
  }
  getAllOrganisations() {
    this.orgService.getAll().subscribe({
      next: (event: OrganisationsInterface[]) => {
        this.organisations = event;
      },
      error: (err) => {
        console.log('Error getting organizations')
      },
    })
  }

  getUserProfile() {
    this.profileService.getAll().subscribe({
      next:(profile:any[])=> {
        this.profile = profile;
        console.log(profile)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  getAllEvents(){
    this.eventService.getAll().subscribe({
      next: (event:EventsInterface[]) => {
        this.events = event;
      },
      error: (err) => {
        console.log('Error getting events')
      },
    })
  }

}
