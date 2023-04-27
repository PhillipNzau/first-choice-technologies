import {Injectable} from "@angular/core";
import {DefaultDataService, HttpUrlGenerator} from "@ngrx/data";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LocalService} from "../../../shared/local.service";
import {environment} from "../../../../environments/environment.development";
import {map, Observable} from "rxjs";
import {EventsInterface, EventsResponseInterface} from "../../../shared/models/eventsModel";

@Injectable({
  providedIn: "root"
})
export class EventsDataService extends DefaultDataService<any> {
  // Environment urls
  createEventUrl = environment.createEvents;
  listEventsUrl = environment.getAllEvents;
  getEventUrl = environment.getSingleEvents;


  constructor(
    http:HttpClient,
    httpUrlGenerator:HttpUrlGenerator,
    private route:Router,
    private localStorage:LocalService
  ){
    super('Event', http, httpUrlGenerator)
  }

  override getAll(): Observable<any> {
    return this.http.get<EventsResponseInterface>(this.listEventsUrl).pipe(
      map((events: EventsResponseInterface) => {
        console.log(events.results)
        return events.results
      })
    )
  }
}
