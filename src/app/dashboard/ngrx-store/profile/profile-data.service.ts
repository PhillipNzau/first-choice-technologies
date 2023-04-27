import {Injectable} from "@angular/core";
import {DefaultDataService, HttpUrlGenerator} from "@ngrx/data";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LocalService} from "../../../shared/local.service";
import {environment} from "../../../../environments/environment.development";
import {map, Observable} from "rxjs";
import {EventsInterface, EventsResponseInterface} from "../../../shared/models/eventsModel";
import {UserInterface} from "../../../shared/models/userModel";

@Injectable({
  providedIn: "root"
})
export class ProfileDataService extends DefaultDataService<any> {
  // Environment urls
  getUserProfileUrl = environment.getUserProfile;
  updateUserProfileUrl = environment.updateUserProfile;


  constructor(
    http:HttpClient,
    httpUrlGenerator:HttpUrlGenerator,
    private route:Router,
    private localStorage:LocalService
  ){
    super('Profile', http, httpUrlGenerator)
  }

  override getAll(): Observable<any> {
    return this.http.get<UserInterface>(this.getUserProfileUrl).pipe(
      map((profile: UserInterface) => {
        console.log(profile)
        return profile
      })
    )
  }
}
