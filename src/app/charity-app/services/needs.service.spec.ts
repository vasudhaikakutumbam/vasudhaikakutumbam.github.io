import { TestBed, inject } from '@angular/core/testing';

import { NeedsService } from './needs.service';

describe('NeedsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NeedsService]
    });
  });

  it('should be created', inject([NeedsService], (service: NeedsService) => {
    expect(service).toBeTruthy();
  }));
});
