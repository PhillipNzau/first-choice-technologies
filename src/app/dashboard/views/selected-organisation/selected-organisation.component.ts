import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FcTableComponent } from "../../components/fc-table/fc-table.component";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-selected-organisation',
    standalone: true,
    templateUrl: './selected-organisation.component.html',
    styleUrls: ['./selected-organisation.component.scss'],
    imports: [CommonModule, FcTableComponent]
})
export class SelectedOrganisationComponent implements OnInit {
  organisations = [1,2,3,4];
  route: any

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {

    
  }



}
