# Serviços

Conforme as recomendações do Angular, a utilização de serviços traz recursos como a separação de interesses. Como já informado, um service é basicamente uma classe, e não tem um tratamento diferenciado do Angular, como acontece com os componentes.

## Criando um serviço

Um serviço é uma classe marcada com a anotação @Injectable\(\), do pacote @angular/core. Por isso, para criar um serviço, basta anotar uma classe:

```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class EventosService { }
```

Assim, um serviço tem a estrutura padrão de uma classe, podendo conter atributos e métodos.

## Usando um serviço

Usar um serviço em um componente é uma tarefa que requer importar a classe do serviço, indicar que o componente depende dela e utilizá-la no construtor, utilizando o recurso de Injeção de Dependência:

```typescript
import { Component } from '@angular/core';
import { EventosService } from './eventos.service';
import { EstadosService } from './estados.service';
import { CidadesService } from './cidades.service';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html',
    providers: [ EventosService, EstadosService, CidadesService ]
})
export class EventoManagerComponent {
  eventos: Evento[];
  estados: any[];
  cidades: any[];

  constructor(private eventosService : EventosService, 
    private estadosService : EstadosService,
    private cidadesService : CidadesService ) {

    this.eventos = this.eventosService.all();
    this.estados = this.estadosService.all();
    this.cidades = this.cidadesService.all();

  }
  ...
}
```

O trecho de código acima demonstra como realizar as etapas informadas. Destaquemos as duas últimas.

### Injeção de Dependência

Injeção de Dependência \(DI, do inglês _Dependency Injection_\) é um recurso de projeto de software que faz com que um controlador do software identifique dependências e crie instâncias delas, de modo que não seja necessário fazer isso manualmente no código.

A dependência, nesse caso, é informada no `constructor()`:

```typescript
constructor(private eventosService : EventosService, 
    private estadosService : EstadosService,
    private cidadesService : CidadesService ) {
    ...
    }
```

A sintaxe `private eventosService : EventosService` indica que `eventosService` cumpre dois papeis: torna-se um atributo da classe \(privado\) e também é um parâmetro do construtor.

Como o Angular cria instâncias das dependências, é importante lembrar que o ciclo de vida de objetos é respeitado. Por exemplo, considere que o serviço `EventosService` tenha um atributo `eventos`, que é inicializado no seu construtor. Logicamente, a instância deste atributo está associada à instância do serviço criada pelo Angular.

Dessa forma, o Angular é informado de quais são as dependências do componente e trata de criar instâncias para que ele possa ser utilizado.

### Dependências do componente

Para utilizar Injeção de Dependência, no caso do código de exemplo, é preciso ir além. Na anotação `@Component()` é possível indicar as dependências do componente por meio do atributo `providers`:

```typescript
@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html',
    providers: [ EventosService, EstadosService, CidadesService ]
})
export class EventoManagerComponent {
...
}
```

Isso indica que o componente `EventoManagerComponent` depende de três classes \(serviços\): `EventosService`, `EstadosService` e `CidadesService`.

### Dependências do módulo

Se um serviço precisar estar disponível para todos os componentes de um módulo, ele pode ser registrado no nível do módulo. Para isso, basta registrá-lo como ilustra o código a seguir:

```typescript
import { NgModule } from '@angular/core';
import { EventosService } from './eventos.service';

@NgModule({
    ...
    providers: [ EventosService ],
    ...
})
export class AppModule { }
```

Assim não será necessário registrar o serviço `EventosService` como dependência em cada componente.

### Interagindo com o serviço

Considere o serviço `CidadesService`, apresentado a seguir:

```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class CidadesService {
    cidades : any[];

    constructor() {
        this.cidades = [
            {nome: 'Palmas', uf: 'TO'},
            {nome: 'Paraíso do Tocantins', uf: 'TO'},
            {nome: 'Gurupi', uf: 'TO'},
            {nome: 'Araguaína', uf: 'TO'},
            {nome: 'Porto Nacional', uf: 'TO'},
            {nome: 'Belo Horizonte', uf: 'MG'},
            {nome: 'Goiânia', uf: 'GO'},
            {nome: 'São Paulo', uf: 'SP'},
            {nome: 'Rio de Janeiro', uf: 'RJ'}
        ];
    }

    all() {
        return this.cidades;
    }

    allByUf(uf: string) {
        let lista: any[] = [];
        for(let i = 0; i < this.cidades.length; i++) {
        if (this.cidades[i].uf == uf) {
            lista.push(this.cidades[i]);
        }
        }
        return lista;
    }
}
```

Perceba que o serviço expõe dois métodos:

* `all()`: retorna todas as cidades
* `allByUf()`: retorna as cidades de uma UF \(informada como parâmetro\)

Para usar esses métodos, um componente usa Injeção de Dependência. O trecho de código a seguir é do `EventoManagerComponent`:

```typescript
import { Component } from '@angular/core';
import { EventosService } from './eventos.service';
import { EstadosService } from './estados.service';
import { CidadesService } from './cidades.service';
import { Evento } from './Evento';

@Component({
    selector: 'evento-manager',
    templateUrl: './evento-manager.component.html',
    providers: [ EventosService, EstadosService, CidadesService ]
})
export class EventoManagerComponent {
  eventos: Evento[];
  estados: any[];
  cidades: any[];
  ...

  constructor(private eventosService : EventosService, 
    private estadosService : EstadosService,
    private cidadesService : CidadesService ) {

    this.eventos = this.eventosService.all();
    this.estados = this.estadosService.all();
    this.cidades = this.cidadesService.all();

  }

  getCidades(uf: string) {
    return this.cidadesService.allByUf(uf);
  }

  onSubmit(form: any) : void {
    this.eventosService.save(this.evento);
    this.enviado = true;
    form.reset();
  }

  ...
}
```

Nesse caso, o `EventoManagerComponent` usa o serviço `CidadesService` em dois momentos:

* no construtor, chamando o método `all()`; e
* no método `getCidades()`, chamando o método `allByUf()`.

Além disso, usa `EventosService` em dois momentos:

* no construtor, chamando o método `all()`; e
* no método `onSubmit()`, chamando o método `save()`.

Perceba que a grande utilidade de serviços é separar código. Desta forma, o código do componente fica reduzido, mais fácil de manter e o serviço pode ser utilizado por outros componentes.

