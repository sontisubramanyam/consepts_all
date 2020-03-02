import { TestBed } from '@angular/core/testing';

import { UnrelatedcService } from './unrelatedc.service';

describe('UnrelatedcService', () => {
  let service: UnrelatedcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnrelatedcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
