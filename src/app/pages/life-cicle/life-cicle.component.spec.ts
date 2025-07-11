import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCicleComponent } from './life-cicle.component';

describe('LifeCicleComponent', () => {
  let component: LifeCicleComponent;
  let fixture: ComponentFixture<LifeCicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeCicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
