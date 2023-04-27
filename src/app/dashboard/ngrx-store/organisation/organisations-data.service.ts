import {Injectable} from "@angular/core";
import {DefaultDataService, HttpUrlGenerator} from "@ngrx/data";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LocalService} from "../../../shared/local.service";
import {environment} from "../../../../environments/environment.development";
import {map, Observable} from "rxjs";
import {OrganisationsResponseInterface} from "../../../shared/models/organisationsModel";

@Injectable({
  providedIn: "root"
})
export class OrganisationsDataService extends DefaultDataService<any> {
  // Environment urls
  createOrganisationUrl = environment.createOrganization;
  listOrganisationsUrl = environment.getAllOrganization;
  getOrganisationUrl = environment.getOneOrganization;


  constructor(
    http:HttpClient,
    httpUrlGenerator:HttpUrlGenerator,
    private route:Router,
    private localStorage:LocalService
  ){
    super('Organization', http, httpUrlGenerator)
  }

  override getAll(): Observable<any> {
    return this.http.get<OrganisationsResponseInterface>(this.listOrganisationsUrl).pipe(
      map((Organisations: OrganisationsResponseInterface) => {
        console.log(Organisations.results)
        return Organisations.results
      })
    )
  }
}
