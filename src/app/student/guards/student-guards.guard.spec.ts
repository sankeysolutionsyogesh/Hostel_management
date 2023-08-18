import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { studentGuardsGuard } from './student-guards.guard';

describe('studentGuardsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => studentGuardsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
