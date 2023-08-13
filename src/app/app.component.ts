import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicios';

  stringsArray:string[] = ['','', ''];


  calculaMedia (n1: number, n2: number, n3: number) : number {
    return (n1+n2+n3)/3;
  }


  // Escreva uma função num componente do angular que recebe uma string como parâmetro e ele deve adicionar esse item ao início de um array, ao adicionar retorne o array. Para testar essa função crie um módulo de teste no jasmine que receberá a descrição “deve adicionar ao início do array quando chamado“, valide se o item adicionado realmente está no início do array.


  adicionaAoArray (string : string) : string[]{
    this.stringsArray.unshift(string);
    return this.stringsArray;
  }


  // Para o próximo teste valide se a mesma função acima adiciona um item ao array, avaliando somente se o array aumentou de tamanho. Além disso, construa outra função que irá remover o item que deve ser passado como parâmetro, ao excluir retorne o array, nesse caso construa outro módulo de teste para validar se ao executar a função o tamanho diminuiu.

  removeDoArray(string: string ) : string[] {

    for(let item of this.stringsArray){
      if (string === item){
        let index = this.stringsArray.indexOf(item);
        this.stringsArray.splice(index, 1);
      }
    }
    return this.stringsArray;
  }

  // Com esse array criado no componente verifique em um módulo de teste a parte, com o ToContain, se o item “lasanha” existe, caso não exista, adicione, para o teste retornar sucesso. (Nesse exercício não precisará criar nada no componente, apenas adicione no array o item “lasanha”)


  // Construa no componente angular um método que irá validar se um item existe no array antes já utilizado (o método é bem parecido com o exercício anterior a diferença é que aqui o método precisa ser criado no componente) caso exista retorne a posição a qual o item se encontra caso não exista lance uma exceção (throw Error()). Agora, no módulo de teste, crie um teste que valide se esse método criado no componente lança uma exceção.

  validaItemNoArray(string: string) : number {
    for(let item of this.stringsArray){
      if (string === item){
        return this.stringsArray.indexOf(item);
      }
    }
    throw new Error("Item não encontrado no array")
  }

  // Usando o beforeEach adicione mais 10 a uma variável global no escopo de testes antes de cada módulo de teste e valide corretamente o valor dentro dele. Exemplo: se a cada teste eu adiciono mais 10 no valor do contador então no primeiro módulo eu devo ter que contador é 10, já no segundo módulo, o contador deve ser 20. E por ai vai…

}
