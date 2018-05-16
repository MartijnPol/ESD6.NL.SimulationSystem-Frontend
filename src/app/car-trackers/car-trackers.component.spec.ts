import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTrackersComponent } from './car-trackers.component';

describe('CarTrackersComponent', () => {
  let component: CarTrackersComponent;
  let fixture: ComponentFixture<CarTrackersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarTrackersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTrackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
