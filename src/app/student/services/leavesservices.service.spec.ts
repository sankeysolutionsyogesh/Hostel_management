import { TestBed } from '@angular/core/testing';

import { LeavesservicesService } from './leavesservices.service';

describe('LeavesservicesService', () => {
  let service: LeavesservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavesservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
