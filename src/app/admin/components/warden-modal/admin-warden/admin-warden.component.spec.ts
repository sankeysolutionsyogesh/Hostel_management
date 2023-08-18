import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWardenComponent } from './admin-warden.component';

describe('AdminWardenComponent', () => {
  let component: AdminWardenComponent;
  let fixture: ComponentFixture<AdminWardenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminWardenComponent]
    });
    fixture = TestBed.createComponent(AdminWardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
