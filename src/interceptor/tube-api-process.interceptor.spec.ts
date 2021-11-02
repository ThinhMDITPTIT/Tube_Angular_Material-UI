import { TestBed } from '@angular/core/testing';

import { TubeApiProcessInterceptor } from './tube-api-process.interceptor';

describe('TubeApiProcessInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TubeApiProcessInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TubeApiProcessInterceptor = TestBed.inject(TubeApiProcessInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
