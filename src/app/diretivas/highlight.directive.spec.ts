import { HighlightDirective } from './highlight.directive';
import {Component} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";


//adicionar um componente diretamente no teste
@Component({
  template: `<span appHighlight [highlightColor]="colorName"> Texto </span>`,
  standalone: true,
  imports: [HighlightDirective]
})
// criamos classe para nosso componente -- seria nosso component.ts
class TestHostComponent{
  colorName = 'red';
}

describe('HighlightDirective', () => {
  //contecto para acessar propriedades do comp
  let fixture: ComponentFixture<TestHostComponent>
  let component: TestHostComponent



  beforeEach(async () => {
    await TestBed.configureTestingModule({

    }).compileComponents();


    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance of Host Component', () => {
    expect(component).toBeTruthy();
  });

  // it('should change background color based on directive param', () => {
  //   // Arrange
  //   // const expectedColor = 'red';
  //   // component.colorName = expectedColor;

  //   // // Act
  //   // fixture.detectChanges();

  //   // // Assert
  //   // const elementDirective = fixture.debugElement.query(By.css('span')).nativeElement as HTMLElement;
  //   // expect(elementDirective.style.backgroundColor).toBe(expectedColor);
  // });

  it('shoud change backgroud color based on directive param', ()=>{
    const expectColor = 'red';
    component.colorName = expectColor;

    fixture.detectChanges()

    const elementDirective =  fixture.debugElement.query(By.css('span')).nativeElement as HTMLElement;
    expect(elementDirective.style.backgroundColor).toBe(expectColor)
  });
});
