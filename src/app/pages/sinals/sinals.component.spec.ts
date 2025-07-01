import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinalsComponent } from './sinals.component';

describe('SinalsComponent', () => {
  let component: SinalsComponent;
  let fixture: ComponentFixture<SinalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
