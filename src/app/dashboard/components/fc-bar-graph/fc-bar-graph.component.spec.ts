import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcBarGraphComponent } from './fc-bar-graph.component';

describe('FcBarGraphComponent', () => {
  let component: FcBarGraphComponent;
  let fixture: ComponentFixture<FcBarGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FcBarGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
