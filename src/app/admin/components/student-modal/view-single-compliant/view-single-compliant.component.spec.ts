import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleCompliantComponent } from './view-single-compliant.component';

describe('ViewSingleCompliantComponent', () => {
  let component: ViewSingleCompliantComponent;
  let fixture: ComponentFixture<ViewSingleCompliantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSingleCompliantComponent]
    });
    fixture = TestBed.createComponent(ViewSingleCompliantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
