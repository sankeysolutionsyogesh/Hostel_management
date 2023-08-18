import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StduentHomeComponent } from './stduent-home.component';

describe('StduentHomeComponent', () => {
  let component: StduentHomeComponent;
  let fixture: ComponentFixture<StduentHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StduentHomeComponent]
    });
    fixture = TestBed.createComponent(StduentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
