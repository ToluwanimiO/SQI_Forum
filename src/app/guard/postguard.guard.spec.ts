import { TestBed } from '@angular/core/testing';

import { PostguardGuard } from './postguard.guard';

describe('PostguardGuard', () => {
  let guard: PostguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PostguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
