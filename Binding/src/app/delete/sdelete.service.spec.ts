import { TestBed } from '@angular/core/testing';

import { SdeleteService } from './sdelete.service';

describe('SdeleteService', () => {
  let service: SdeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
