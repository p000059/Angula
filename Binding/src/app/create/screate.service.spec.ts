import { TestBed } from '@angular/core/testing';

import { ScreateService } from './screate.service';

describe('ScreateService', () => {
  let service: ScreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
