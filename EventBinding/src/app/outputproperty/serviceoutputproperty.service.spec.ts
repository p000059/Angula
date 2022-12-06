import { TestBed } from '@angular/core/testing';

import { ServiceoutputpropertyService } from './serviceoutputproperty.service';

describe('ServiceoutputpropertyService', () => {
  let service: ServiceoutputpropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceoutputpropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
