import { TestBed } from '@angular/core/testing';

import { SupdateService } from './supdate.service';

describe('SupdateService', () => {
  let service: SupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
