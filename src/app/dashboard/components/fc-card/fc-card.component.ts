import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";


@Component({
  selector: 'fc-card',
  standalone: true,
  imports: [CommonModule,RouterLinkActive, RouterLink,],
  templateUrl: './fc-card.component.html',
  styleUrls: ['./fc-card.component.scss']
})
export class FcCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() location: string = '';
  @Input() startDate: string = '';
  @Input() endDate: string = '';

  @Input() items:any[]=[];

  @Input() id: any;
  @Input() navigation: string = '';


}
