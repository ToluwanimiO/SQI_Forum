import { TestBed } from '@angular/core/testing';

import { TestInterceptor } from './test.interceptor';

describe('TestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TestInterceptor = TestBed.inject(TestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
