import { TestBed } from '@angular/core/testing';

import { StudentmoduleService } from './studentmodule.service';

describe('StudentmoduleService', () => {
  let service: StudentmoduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentmoduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
