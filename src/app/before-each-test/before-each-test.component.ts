import { Component } from '@angular/core';

@Component({
  selector: 'app-before-each-test',
  templateUrl: './before-each-test.component.html',
  styleUrls: ['./before-each-test.component.css'],
})
export class BeforeEachTestComponent {
  // Usando o beforeEach adicione mais 10 a uma variável global no escopo de testes antes de cada módulo de teste e valide corretamente o valor dentro dele. Exemplo: se a cada teste eu adiciono mais 10 no valor do contador então no primeiro módulo eu devo ter que contador é 10, já no segundo módulo, o contador deve ser 20. E por ai vai…

  retornarN(n: number) : number{
    return n
  }
}
