import { TestBed } from '@angular/core/testing';

import { SreadService } from './sread.service';

describe('SreadService', () => {
  let service: SreadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SreadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
