import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcTopNavComponent } from './fc-top-nav.component';

describe('FcTopNavComponent', () => {
  let component: FcTopNavComponent;
  let fixture: ComponentFixture<FcTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FcTopNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
