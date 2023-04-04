import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FcTableComponent } from "../../components/fc-table/fc-table.component";
import { ActivatedRoute } from '@angular/router';
import { FcCardComponent } from "../../components/fc-card/fc-card.component";

@Component({
    selector: 'app-selected-event',
    standalone: true,
    templateUrl: './selected-event.component.html',
    styleUrls: ['./selected-event.component.scss'],
    imports: [CommonModule, FcTableComponent, FcCardComponent]
})
export class SelectedEventComponent implements OnInit {
  organisations = [1,2,3,4];
  route: any

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {

    
  }
}
