import { TestBed } from '@angular/core/testing';

import { ComplaintservicesService } from './complaintservices.service';

describe('ComplaintservicesService', () => {
  let service: ComplaintservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
