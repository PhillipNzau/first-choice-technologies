import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fc-side-nav-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss']
})
export class SideNavItemComponent {
  @Input() itemName:string='';
  @Input() itemImageName:string='';
  constructor(){}

}
