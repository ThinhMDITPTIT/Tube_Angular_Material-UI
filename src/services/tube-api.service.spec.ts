import { TestBed } from '@angular/core/testing';

import { TubeApiService } from './tube-api.service';

describe('TubeApiService', () => {
  let service: TubeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TubeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
