import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AStudentCompliantComponent } from './a-student-compliant.component';

describe('AStudentCompliantComponent', () => {
  let component: AStudentCompliantComponent;
  let fixture: ComponentFixture<AStudentCompliantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AStudentCompliantComponent]
    });
    fixture = TestBed.createComponent(AStudentCompliantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
