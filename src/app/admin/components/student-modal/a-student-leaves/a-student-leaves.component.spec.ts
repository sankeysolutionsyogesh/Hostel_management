import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AStudentLeavesComponent } from './a-student-leaves.component';

describe('AStudentLeavesComponent', () => {
  let component: AStudentLeavesComponent;
  let fixture: ComponentFixture<AStudentLeavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AStudentLeavesComponent]
    });
    fixture = TestBed.createComponent(AStudentLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
