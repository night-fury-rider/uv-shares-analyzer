import { TestBed } from '@angular/core/testing';

import { UvDashboardService } from './uv-dashboard.service';

describe('UvDashboardService', () => {
  let service: UvDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UvDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
