import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fc-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fc-card.component.html',
  styleUrls: ['./fc-card.component.scss']
})
export class FcCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  

}
