import { TestBed } from '@angular/core/testing';

import { AxiosGetService } from './axios-get.service';

describe('AxiosGetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AxiosGetService = TestBed.get(AxiosGetService);
    expect(service).toBeTruthy();
  });
});
