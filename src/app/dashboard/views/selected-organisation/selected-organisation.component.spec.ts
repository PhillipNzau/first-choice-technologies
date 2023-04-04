import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedOrganisationComponent } from './selected-organisation.component';

describe('SelectedOrganisationComponent', () => {
  let component: SelectedOrganisationComponent;
  let fixture: ComponentFixture<SelectedOrganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SelectedOrganisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
