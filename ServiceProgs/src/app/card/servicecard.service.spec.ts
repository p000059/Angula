import { TestBed } from '@angular/core/testing';

import { ServicecardService } from './servicecard.service';

describe('ServicecardService', () => {
  let service: ServicecardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
