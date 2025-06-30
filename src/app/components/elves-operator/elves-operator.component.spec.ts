import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElvesOperatorComponent } from './elves-operator.component';

describe('ElvesOperatorComponent', () => {
  let component: ElvesOperatorComponent;
  let fixture: ComponentFixture<ElvesOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElvesOperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElvesOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
