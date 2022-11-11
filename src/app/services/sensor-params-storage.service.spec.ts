import { TestBed } from '@angular/core/testing';

import { SensorParamsStorageService } from './sensor-params-storage.service';

describe('SensorParamsStorageService', () => {
  let service: SensorParamsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorParamsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
