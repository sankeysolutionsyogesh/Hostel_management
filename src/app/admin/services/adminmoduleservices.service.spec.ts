import { TestBed } from '@angular/core/testing';

import { AdminmoduleservicesService } from './adminmoduleservices.service';

describe('AdminmoduleservicesService', () => {
  let service: AdminmoduleservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminmoduleservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
