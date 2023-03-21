import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcGraphComponent } from './fc-graph.component';

describe('FcGraphComponent', () => {
  let component: FcGraphComponent;
  let fixture: ComponentFixture<FcGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FcGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
