import { TestBed } from '@angular/core/testing';

import { AlertBaseService } from './alert-base.service';

describe('AlertBaseService', () => {
  let service: AlertBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
