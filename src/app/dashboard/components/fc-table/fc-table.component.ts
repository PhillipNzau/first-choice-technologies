import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fc-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fc-table.component.html',
  styleUrls: ['./fc-table.component.scss']
})
export class FcTableComponent {
  @Input() title:string= '';
  @Input() items:any[]= [];


}
