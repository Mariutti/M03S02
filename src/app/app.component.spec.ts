import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'exercicios'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('exercicios');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('exercicios app is running!');
  });


  it( 'Deve validar se a função caculaMedia faz o calculo correto quando chamada', ()=>{

    let media = component.calculaMedia(3, 4, 5);

    expect(media).toEqual(4)

  })


  it( 'Deve adicionar ao início do array quando chamado', ()=>{

    let valor :string = "valor";

    expect(component.adicionaAoArray(valor)[0]).toEqual(valor);

  })


  it( 'Deve avaliar se o array aumenta de tamanho quando chamado', ()=>{
    let tamanhoArray:number = component.stringsArray.length;
    let valor :string = "valor";

    expect(component.adicionaAoArray(valor).length).toBeGreaterThan(tamanhoArray);

  })


  it( 'Deve avaliar se o array reduz de tamanho quando chamado', ()=>{
    component.stringsArray = ["n1", "n2", "n3"];
    let array = component.stringsArray;
    let tamanhoArray:number = array.length;
    let valor :string = "n1";

    expect(component.removeDoArray(valor).length).toBeLessThan(tamanhoArray);

  })


  it( 'Deve verificar se o item "lasanha" existe quando chamado', ()=>{

    expect(component.adicionaAoArray("lasanha")).toContain("lasanha");

  })


  it( 'Deve lançar erro se falhar na verificação se item existe quando chamado', ()=>{

    let value = "teste"

    expect(function(){component.validaItemNoArray(value)}).toThrow(new Error("Item não encontrado no array"));

  })

 


});
