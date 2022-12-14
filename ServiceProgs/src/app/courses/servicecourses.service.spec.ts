import { TestBed } from '@angular/core/testing';

import { ServicecoursesService } from './servicecourses.service';

describe('ServicecoursesService', () => {
  let service: ServicecoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
