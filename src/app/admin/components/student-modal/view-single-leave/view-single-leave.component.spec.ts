import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleLeaveComponent } from './view-single-leave.component';

describe('ViewSingleLeaveComponent', () => {
  let component: ViewSingleLeaveComponent;
  let fixture: ComponentFixture<ViewSingleLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSingleLeaveComponent]
    });
    fixture = TestBed.createComponent(ViewSingleLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
