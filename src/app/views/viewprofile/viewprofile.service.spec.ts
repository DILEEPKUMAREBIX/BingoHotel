import { TestBed, inject } from '@angular/core/testing';

import { ViewprofileService } from './viewprofile.service';

describe('ViewprofileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewprofileService]
    });
  });

  it('should be created', inject([ViewprofileService], (service: ViewprofileService) => {
    expect(service).toBeTruthy();
  }));
});
