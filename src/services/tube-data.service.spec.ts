import { TestBed } from '@angular/core/testing';

import { TubeDataService } from './tube-data.service';

describe('TubeDataService', () => {
  let service: TubeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TubeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
