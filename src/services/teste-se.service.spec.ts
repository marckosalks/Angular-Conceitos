import { TestBed } from '@angular/core/testing';

import { TesteSeService } from './teste-se.service';

describe('TesteSeService', () => {
  let service: TesteSeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesteSeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
