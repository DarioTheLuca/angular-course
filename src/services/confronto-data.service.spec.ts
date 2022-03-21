import { TestBed } from '@angular/core/testing';

import { ConfrontoDataService } from './confronto-data.service';

describe('ConfrontoDataService', () => {
  let service: ConfrontoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfrontoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
