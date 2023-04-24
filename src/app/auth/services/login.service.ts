import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import { LocalService } from "src/app/shared/local.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = false;

  constructor(
    private localStore: LocalService,
    private route: Router
  ) {

  }

  get isLoggedIn() {
    this.loggedIn = !!this.localStore.getData('ptlstat');

    if (!this.loggedIn) {
      this.route.navigate(['/auth']).then(() => {})
    }
    return this.loggedIn;
  }
}
