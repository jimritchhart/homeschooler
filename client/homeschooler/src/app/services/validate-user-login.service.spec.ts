import { TestBed } from '@angular/core/testing';

import { ValidateUserLoginService } from './validate-user-login.service';

describe('ValidateUserLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidateUserLoginService = TestBed.get(ValidateUserLoginService);
    expect(service).toBeTruthy();
  });
});
