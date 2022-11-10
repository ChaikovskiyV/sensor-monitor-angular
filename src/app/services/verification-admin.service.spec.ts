import { TestBed } from '@angular/core/testing';

import { VerificationAdminService } from './verification-admin.service';

describe('HideElementService', () => {
  let service: VerificationAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificationAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
