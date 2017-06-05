import { TestBed, inject } from '@angular/core/testing';

import { HutService } from './hut.service';

describe('HutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HutService]
    });
  });

  it('should be created', inject([HutService], (service: HutService) => {
    expect(service).toBeTruthy();
  }));
});
