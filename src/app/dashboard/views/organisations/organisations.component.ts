import { Component, OnInit } from '@angular/core';
import {OrganisationsInterface} from "../../../shared/models/organisationsModel";
import {OrganisationsEntityService} from "../../ngrx-store/organisation/organisations-entity.service";
import {EventsInterface} from "../../../shared/models/eventsModel";

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.scss']
})
export class OrganisationsComponent implements OnInit {
organisations: OrganisationsInterface[] = [];
constructor(private orgService: OrganisationsEntityService){}
  ngOnInit() {
  this.getAllOrganisations();
  }

  getAllOrganisations() {
    this.orgService.getAll().subscribe({
      next: (event:OrganisationsInterface[]) => {
        this.organisations = event;
      },
      error: (err) => {
        console.log('Error getting organizations')
      },
    })
  }



}
