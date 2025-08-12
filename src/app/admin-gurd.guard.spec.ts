import { TestBed } from '@angular/core/testing';

import { AdminGurdGuard } from './admin-gurd.guard';

describe('AdminGurdGuard', () => {
  let guard: AdminGurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
