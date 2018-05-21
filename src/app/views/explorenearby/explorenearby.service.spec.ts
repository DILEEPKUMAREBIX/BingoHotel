import { TestBed, inject } from '@angular/core/testing';

import { ExplorenearbyService } from './explorenearby.service';

describe('ExplorenearbyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExplorenearbyService]
    });
  });

  it('should be created', inject([ExplorenearbyService], (service: ExplorenearbyService) => {
    expect(service).toBeTruthy();
  }));
});
