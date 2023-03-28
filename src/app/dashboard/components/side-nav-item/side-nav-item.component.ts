import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";


@Component({
  selector: 'fc-side-nav-item',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink,],
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss']
})
export class SideNavItemComponent {
  @Input() itemName:string='';
  @Input() itemImageName:string='';
  @Input() routerLink:string='';
  constructor(){}

}
