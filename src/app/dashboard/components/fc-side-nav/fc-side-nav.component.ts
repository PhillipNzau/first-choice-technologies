import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";


@Component({
    selector: 'fc-side-nav',
    standalone: true,
    templateUrl: './fc-side-nav.component.html',
    styleUrls: ['./fc-side-nav.component.scss'],
    imports: [CommonModule, RouterLinkActive, RouterLink,],
})
export class FcSideNavComponent {

}
