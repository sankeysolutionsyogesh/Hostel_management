import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentFormsComponent } from './admin-student-forms.component';

describe('AdminStudentFormsComponent', () => {
  let component: AdminStudentFormsComponent;
  let fixture: ComponentFixture<AdminStudentFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminStudentFormsComponent]
    });
    fixture = TestBed.createComponent(AdminStudentFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
