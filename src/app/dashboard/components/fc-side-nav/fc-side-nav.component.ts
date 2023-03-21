import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavItemComponent } from "../side-nav-item/side-nav-item.component";

@Component({
    selector: 'fc-side-nav',
    standalone: true,
    templateUrl: './fc-side-nav.component.html',
    styleUrls: ['./fc-side-nav.component.scss'],
    imports: [CommonModule, SideNavItemComponent]
})
export class FcSideNavComponent {

}
