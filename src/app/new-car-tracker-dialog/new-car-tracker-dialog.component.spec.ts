import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarTrackerDialogComponent } from './new-car-tracker-dialog.component';

describe('NewCarTrackerDialogComponent', () => {
  let component: NewCarTrackerDialogComponent;
  let fixture: ComponentFixture<NewCarTrackerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCarTrackerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarTrackerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
