import {Injectable} from "@angular/core";
import {DefaultDataService, HttpUrlGenerator} from "@ngrx/data";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";
import { environment } from "src/environments/environment.development";
import { LocalService } from "src/app/shared/local.service";
import { LoginUserInterface, RefreshTokenInterface, UserModelInterface } from "src/app/shared/models/userModel";

@Injectable({
  providedIn: 'root'
})
export class LoginDataService extends DefaultDataService<any> {
  loginUrl = environment.loginUser;
  signUpUrl = environment.registerUser;
  refreshTokenUrl = environment.refreshToken;
  updateUserUrl = environment.updateUserProfile;

  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private localStore: LocalService,
    private route: Router) {
    super('FarmCrop', http, httpUrlGenerator);
  }

  proceedLogin(userData: LoginUserInterface): Observable<UserModelInterface> {
    return this.http.post<UserModelInterface>(this.loginUrl, userData).pipe(
      map((loginRes: UserModelInterface) => {
        this.localStore.saveData('amst', loginRes.token.access);
        this.localStore.saveData('amsr', loginRes.token.refresh);
        this.localStore.saveData('amsl', loginRes.token.lifetime);
        this.localStore.saveData('amsex', loginRes.token.expiry_time);
        this.localStore.saveData('amslstat', 'true')

        // Navigate if success
        this.route.navigate(['/']).then(() => {})
        return loginRes
      })
    )
  }

  refreshToken(refreshToken:string): Observable<RefreshTokenInterface> {
    return this.http.post<RefreshTokenInterface>(this.refreshTokenUrl, refreshToken).pipe(
      map((refreshRes: RefreshTokenInterface) => {
        this.localStore.saveData('ptt', refreshRes.access);
        this.localStore.saveData('ptr', refreshRes.refresh);
        return refreshRes
      })
    )
  }

}
