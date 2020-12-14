import { TestBed } from '@angular/core/testing';

import { UserguardGuard } from './userguard.guard';

describe('UserguardGuard', () => {
  let guard: UserguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
