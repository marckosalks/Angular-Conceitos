import { TestBed } from '@angular/core/testing';

import { TesteSeService } from './teste-se.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../environments/environment.dev';

describe('TesteSeService', () => {
  let service: TesteSeService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(TesteSeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  //boa pratica
  afterEach(()=>{
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should a return get list of fruits of api', ()=>{
    const expectedFruits = ['manga', 'guarana'];
    service.getFruits().subscribe(item => expect(item).toEqual(expectedFruits));

    const req = httpMock.expectOne(environment.apiUrl);

    expect(req.request.method).toBe('GET');
    req.flush(expectedFruits);
  });

});
