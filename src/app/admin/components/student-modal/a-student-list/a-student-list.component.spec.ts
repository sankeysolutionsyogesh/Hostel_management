import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AStudentListComponent } from './a-student-list.component';

describe('AStudentListComponent', () => {
  let component: AStudentListComponent;
  let fixture: ComponentFixture<AStudentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AStudentListComponent]
    });
    fixture = TestBed.createComponent(AStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
