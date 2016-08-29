# Múltiplos componentes

Um recurso muito importante em desenvolvimento de software é o princípio da responsabilidade única. Basicamente, o princípio indica que cada parte do software (por exemplo, um componente) deve ter um ciclo de vida próprio e deve estar direcionado para uma tarefa específica. Por exemplo, poderia ser interessante ter um componente para apresentar a lista de eventos, outro para permitir a edição/cadastro de eventos e ainda outro para apresentar os detalhes de um evento. Este capítulo apresenta como utilizar o princípio da responsabilidade única no Angular.

## Componente Detalhes do Evento

O componente Detalhes do evento está definido no arquivo `src/app/eventos-detalhes.component.ts` cujo trecho é apresentado a seguir:

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { EventosService } from './eventos.service';

import './rxjs-operators';
import { Evento } from './evento';

@Component({
    selector: 'eventos-detalhes',
    templateUrl: './eventos-detalhes.component.html',
    styleUrls: [],
    providers: [EventosService]
})
export class EventosDetalhesComponent {
...
}
```

A figura a seguir ilustra o component em formato UML.

![Eventos Detalhes](uml-eventos-detalhes.png)

### Metadados

A classe `EventosDetalhesComponent` é decorada com `Component`, o que indica que é tratada pelo Angular como um componente:
* `selector` indica que o componente usa o elemento `eventos-detalhes`
* `templateUrl` indica que o arquivo `eventos-detalhes.component.html` é usado como templateUrl
* `providers` indica que `EventosService` é requerido pelo component

O início do código importa as funções `Component`, `Input`, `Output` e `EventEmitter`, do pacote `@angular/core`. Importa também `FormsModule`, do pacote `@angular/forms` e `EventosService`, definida no arquivo `src/app/eventos.service.ts`.

### Dependência do serviço `EventosService`

O construtor da classe indica que é utilizada injeção de dependência para incluir o serviço `EventosService` como dependência do módulo:

```typescript
constructor(private eventosService: EventosService) { }
```

## Comunicação entre componentes

O Angular fornece o recurso de comunicação entre componentes por meio de **entradas** (decorator `Input()`) e **saídas** (decorator `Output()`).

As entradas pemitem que um "componente hospedeiro" (o componente `AppComponent` hospeda o `EventosDetalhesComponent`) envie informações para o componente hospedado.

O componente `EventosDetalhesComponent` declara que o atributo `evento: Evento` (decorado com `Input()`) é um dado de entrada. Em outras palavras, como o componente mostra detalhes de um evento, ele precisa receber o evento (objeto do tipo `Evento`) [como entrada]. A comunicação entre hospedeiro e hospedado é feita no template (o trecho a seguir é do arquivo `app.component.html`):

```typescript
<eventos-detalhes *ngIf="modo == 'detalhar'" #detalhes [evento]='eventoSelecionado' (onFechar)="onFechar()"></eventos-detalhes>
```

O elemento `eventos-detalhes` tem como atributo `[evento]="eventoSelecionado"`, isso faz com que o atributo `evento` de `EventosDetalhesComponent` receba `eventoSelecionado` (um atributo de `AppComponent`, o hospedeiro).

O componente só apresenta dados se estiver recebendo um evento como entrada. Por isso, há uma verificação no template (arquivo `src/app/eventos-detalhes.component.html`):

```html
<div *ngIf="evento">
    <h2>{{evento.nome}}</h2>
    <p>Local: {{evento.cidade}} - {{evento.estado}}</p>
    <button (click)="fechar()" class="btn btn-default">Fechar</button>
</div>
```

As saídas permitem que um componente hospedeiro seja informado de um "evento" ocorrido no componente hospedado. No caso, o componente `EventosDetalhesComponent` informa seu hospedeiro quando o botão "Fechar" for clicado. O atributo `onFechar : EventEmitter` é decorado com `Output()`, ou seja, declara um evento. 

O evento é disparado na função `fechar()`, chamada no clique do botão "Fechar":

```
fechar() {
	this.evento = null;
	this.onFechar.emit();
}
```

O tipo `EventEmitter` fornece o método `emit()`, que representa o "disparo" do evento. Em outras palavras, ao ser executada a função `fechar()`, o hospedeiro é informado disso. Isso é feito no template do hospedeiro:

```html
<eventos-detalhes *ngIf="modo == 'detalhar'" #detalhes [evento]='eventoSelecionado' (onFechar)="onFechar()"></eventos-detalhes>
```

O elemento `eventos-detalhes` tem como atributo `(onFechar)="onFechar()"`, isso faz com que a função `onFechar()` (de `AppComponent`) seja chamada quando ocorrer o evento `onFechar` de `EventosDetalhesComponent`.