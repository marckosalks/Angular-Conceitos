import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AsyncCompComponent } from './async-comp.component';
import { TesteSeService } from '../../../services/teste-se.service';
import {of} from "rxjs";
import {By} from "@angular/platform-browser";

const expectedApiFruits = ['uva', 'morango'];

fdescribe('AsyncCompComponent', () => {
  let component: AsyncCompComponent;
  let fixture: ComponentFixture<AsyncCompComponent>;
  let apiServiceMock: jasmine.SpyObj<TesteSeService>;

  beforeEach(async () => {
    apiServiceMock = jasmine.createSpyObj('TesteSeService', ['getFruits']);
    apiServiceMock.getFruits.and.returnValue(of(expectedApiFruits));

    await TestBed.configureTestingModule({
      imports:[AsyncCompComponent, HttpClientTestingModule],
      providers:[{provide: TesteSeService, useValue: apiServiceMock}]
    }).compileComponents();

    apiServiceMock = TestBed.inject(TesteSeService) as jasmine.SpyObj<TesteSeService>


    fixture = TestBed.createComponent(AsyncCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should call fruits api on Init', () => {
    fixture.detectChanges();
    expect(apiServiceMock.getFruits).toHaveBeenCalled()
  });

  it('should render fruits from api', () => {
    fixture.detectChanges();
    const spanElements = fixture.debugElement.queryAll(By.css('[data-test-id="fruits"]'));

    spanElements.forEach(spanElement => {
      const hasFruit = expectedApiFruits.includes((spanElement.nativeElement as HTMLElement).textContent!.trim())
      expect(hasFruit).toBe(true);
    })
  })
});
