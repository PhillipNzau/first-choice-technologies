import { Component, OnInit } from '@angular/core';
import {EventsEntityService} from "../../ngrx-store/events/events-entity.service";
import {EventsInterface} from "../../../shared/models/eventsModel";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

events:EventsInterface[] = [];

constructor( private eventService: EventsEntityService) {}

  ngOnInit() {
this.getAllEvents()
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
