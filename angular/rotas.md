# Rotas \(ou roteamento\)

Embora o Angular forneça ao desenvolvedor várias formas de gerenciar o conteúdo visível da página, um modelo utilizado pelo browser é muito comum: a navegação:

* O usuário informa uma URL na barra de endereço e o browser navega para a página correspondente
* O usuário clica em um link em uma página e o browser navega para uma nova página
* O usuário clica nos botões "Voltar" e "Avançar" e o browser navega para trás e para frente pelo histórico das páginas já acessadas

O Angular Router se baseia nesse mesmo modelo: interpreta uma URL como uma instrução para navegar para uma view. Pode-se passar parâmetros opcionais para o componente que está associado à view, de modo que ele possa decidir sobre um conteúdo específico que deve ser apresentado. Você pode vincular o router a links em uma página e ele vai negar para a view apropriada quando o usuário clicar em um link. Você pode navegar de forma imperativa \(programaticamente\) quando o usuário clica em botão, seleciona uma opção de um select ou em resposta a outro estímulo de qualquer fonte. Ainda, o router mantém um registro da atividade no histórico do browser para que os botões "Voltar" e "Avançar" funcionem.

Este capítulo apresenta vários conceitos sobre o Router e seu funcionamento.

## &lt;base href&gt;

O Router precisa saber como compor as URLs de navegação. Para isso, a aplicação precisa indicar onde ela está presente no servidor, ou seja, qual a URL raiz. Uma forma de fazer isso é utilizando o elemento `base`. Por exemplo, no arquivo `index.html`:

```
<head>
    <base href="/">
</head>
```

No trecho de código acima, o atributo `href` com valor `/` indica que o aplicativo está na raiz.

Há momentos em que a URL raiz não é conhecida a princípio \(em tempo de desenvolvimento\). Nesse caso, uma prática muito comum é utilizar um script para gerar a URL raiz:

```
<script>document.write('<base href="' + document.location + '" />');</script>
```

## Configuração do módulo

Uma aplicação usa apenas uma instância do Angular Router. Quando a URL do browser muda, ele procura por uma rota correspondente, a partir da qual determina qual componente apresentar.

A configuração depende do tipo de módulo: raiz \(root\) ou filho \(child\). A diferença é sutil e não interfere na maneira como cada tipo de módulo as integra. O trecho de código a seguir exemplifica como definir rotas para o módulo raiz.

```
const rotas : Routes = [
    { path : "eventos",     component : EventosHomeComponent },
    { path : "eventos/:id", component : EventoDetalhesComponent },
    { path : "about":       component : AboutComponent },
    { path : "sobre",       redirectTo: "/about", pathMatch: "full" },
    { path : "",            component: AppComponent },
    { path : "**",          component: PaginaNaoEncontradaComponent }
];

@NgModule({
    imports : [
        RouterModule.forRoot(rotas),
        // ...
    ],
    ...
})
export class AppModule { }
```

O exemplo demonstra como definir alguns tipos de rotas. Independentemente do tipo, mantém-se o seguinte:

* `rotas`, do tipo `Routes`, é um array que contém os objetos que determinam as rotas
* cada objeto contém propriedades:
  * `path`: determina o caminho correspondente à rota
  * `component`: determina o componente associado à rota
  * `redirectTo`: determina um caminho de redirecionamento
  * `pathMatch`: determina o modo de comparação do caminho com a URL

Por fim, as rotas são importadas no módulo: na chamada da anotação `@NgModule`, o atributo `imports` contém um item que representa a chamada à função `RouterModule.forRoot()`, recebendo como parâmetro a variável que contém as rotas \(`rotas`\).

Quando uma URL é interpretada pelo Router, ele verifica a lista de rotas, da primeira para a última, procurando a que combina com a URL. Por isso a ordem das rotas é importante.

A seguir, cada tipo de rota usado no exemplo de código a cima é apresentado com um pouco mais de detalhes

### Rota fixa

A rota fixa é representada por um caminho que não muda. No caso do exemplo, a rota `eventos` é uma das rotas fixas. O componente associado a ela, `EventosHomeComponent`, será usado pelo Angular Router para apresentar o conteúdo adequado a essa situação.

### Rota dinâmica

A rota dinâmica contém os chamados **parâmetros de rota**. Por meio de parâmetros de rota é possível comunicar-se com o componente associado à rota. No caso do exemplo, a rota `eventos/:id` contém o parâmetro `id`. A sintaxe para criar um parâmetro de rota é usar o sinal de dois pontos seguido do nome do parâmetro.

Esse tipo de rota é importante porque permite uma URL como: `eventos/10`, a qual indica que o parâmetro de rota `id` tem o valor `10`.

### Rota padrão

A rota padrão tem sempre um caminho fixo com valor `""`.

### Rota de redirecionamento

Uma rota de redirecionamento indica para o Angular Router procurar outra rota, por meio do atributo `redirectTo`. Por isso, não há um componente associado a essa rota. No caso do exemplo, a rota `sobre` redireciona para a rota `about`.

### Rota de fallback

Uma rota de fallback é usada quando nenhuma rota combinou com a URL. Para isso o caminho é fixo com valor `**`. No caso do exemplo, a rota `**` redireciona para o component `PaginaNaoEncontradaComponent`, o que é uma forma de criar uma "página de erro" que trata a situação em que o usuário solicita uma página não encontrada.

## Router outlet

Como já visto, a primeira etapa do funcionamento do Router é combinar URL e rotas para identificar qual componente apresentar. Entretanto, esse componente não é apresentado sozinho. Aqui o Router utiliza a diretiva `RouterOutlet`, cujo seletor é o elemento `router-outlet`. Primeiro, lembre-se que o módulo raiz indica qual componente é carregado:

```
@NgModule({
    ...
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Assim, o módulo raiz carrega o componente `AppComponent` por causa do atributo `bootstrap` do objeto passado como parâmetro para a decorator `@NgModule`.

A partir de então, o Router procura no template deste componente pelo elemento `router-outlet`:

```
<div class="container">
    <router-outlet></router-outlet>
</div>
```

A localização do elemento `router-outlet` no template é importante porque ela vai determinar, na prática, onde o Router deverá apresentar o componente em questão. Por causa disso, o Router chama o componente `AppComponent` de _shell_ \(concha\). De certa forma, o template fornece uma "casca" \(um conteúdo padrão e compartilhado\) para todos os componentes a serem carregados.

## Configuração dos componentes

Com exceção do componente raiz todos os demais componentes não precisam de um seletor. Exemplo:

```
@Component({
    templateUrl: 'eventos-lista.component.html'
})
export class EventosListaComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
```

Claramente, isso é possível apenas para os componentes que estarão vinculados a rotas, pois serão carregados pelo Router. Para os demais componentes, vale utilizar o seletor para que possam ser utilizados por outros componentes.

## Navegação

A navegação pode ser feita pelo usuário \(no clique de um link ou diretamente na barra de navegação, por exemplo\) ou programaticamente \(utilizando código\).

### Diretiva RouterLink

A diretiva `RouterLink` \(atributo `routerLink`\) permite definir a URL \(atributo `href`\) de um elemento `a` de forma que ele direcione corretamente uma rota. O exemplo a seguir demonstra como usar essa diretiva:

```
<ul class="navbar-nav">
    <li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
        <a class="nav-link" routerLink="/">Home</a>
    </li>
    <li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
        <a class="nav-link" routerLink="/eventos">Eventos</a>
    </li>
</ul>
```

Há dois elementos `a`. No primeiro, a diretiva `RouterLink`contém o valor `/`, o que quer dizer que o link direciona para essa rota. No segundo, contém o valor `/eventos`, indicando que, igualmente, o link direciona para outra rota.

Não há problema em utilizar o atributo `href` diretamente. Entretanto, usar essa abordagem levará em conta a necessidade de tratar particularidades da URL do aplicativo web \(por exemplo, quando o aplicativo não está na raiz\).

### Diretiva RouterLinkActive

A diretiva `RouterLinkActive` \(atributo `routerLinkActive`\) permite atribuir uma ou mais classes CSS ao atributo ao qual é aplicada quando a rota ativa corresponder à informada na diretiva `RouterLink`. Isso é muito útil em navegação, quando se deseja destacar um item de um menu em relação aos demais. No caso do exemplo, a classe CSS `active` é atribuída ao elemento `li`.

Interessante notar que a diretiva `RouterLink` não está presente no elemento `li`, em si, mas no elemento `a`, contido nele. Essa é uma situação tratada corretamente pelo Angular Router.

É importante considerar, por fim, que o tratamento de rotas é um processo que requer certos cuidados. Para a URL `http://dominio.com/eventos`, por exemplo, a diretiva `RouterLinkActive` aplica um procedimento em cascata, considerando que as duas rotas `/` e `/eventos` estão ativas. Assim, para que ela trate a rota `/eventos` como ativa, é necessário informar que a comparação é de rota exata. Isso é feito por meio da propriedade `routerLinkActiveOptions`, com o valor `{exact:true}`, como usado no exemplo de código acima.

### Router como um serviço

Considere uma situação em que o aplicativo não fornece navegação para uma página por meio de links, mas de eventos. Nesse caso, é necessário tratar o evento de forma imperativa, programática. Por isso, o componente em questão precisa realizar alguns procedimentos. O primeiro deles é importar o `Router` e injetá-lo no construtor \(como mostra o trecho de código a seguir\).

```
...
import { Router } from '@angular/router';
...

@Component({
...
})
export class EventosListaComponent implements OnInit {
...
    constructor(private eventosService: EventosService,
        private router: Router) { }
...
}
```

Posteriormente, o método que trata um evento chamda o método `navigate()` do `Router:`

```
mostrarDetalhes(evento: Evento) {
    this.router.navigate(['/eventos', evento.id]);
}
```

O método `navigate()` aceita um vetor como parâmetro, que tem a seguinte estrutura: o primeiro elemento representa a ronta para onde se deseja que seja feita a negação \(neste caso, a rota é `/eventos/:id`\); os demais elementos do vetor representam os valores para os parâmetros de rota. Como a rota em questão possui apenas um parâmetro \(`id`\)  o segundo elemento do vetor define seu valor \(`evento.id`\).

Essa mesma sintaxe pode ser utilizada para definir o valor da diretiva `RouterLink` no template.

### Obtendo informações da rota e seus parâmetros

O serviço `ActivatedRoute` fornece várias informações sobre a rota, como apresenta a tabela a seguir:

| Atributo | Descrição |
| :--- | :--- |
| `url` | Um `Observable` do caminho da rota, representado como um array de strings para cada parte do caminho |
| `data` | Um `Observable` que contém o objeto data fornecido para a rota |
| `params` | Um `Observable` que contém os parâmetros de rota |
| `queryParams` | Um `Observable` que contém os parâmetros de URL |
| `parent` | Um `ActivatedRoute` que contém informações sobre a rota pai \(quando são usadas rotas filhas\) |
| `children` | Contém as rotas filhas ativadas sob a rota atual |

No caso do exemplo a seguir, a rota é `eventos/:id`, ou seja, há o parâmetro de rota `id`. O trecho de código apresenta as importações e injeções de serviços necessárias para obter o valor deste parâmetro de rota.

```
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
...
import 'rxjs/add/operator/switchMap';

@Component({
...
})
export class EventoDetalhesComponent implements OnInit {
    evento: Evento;

    constructor(
        private eventosService: EventosService,
        private route: ActivatedRoute) { }

}
```

Como visto no código, é importado e injetado o serviço `ActivatedRoute`. Note também a importação do operador `switchMap` \(do pacote `rxjs`\). O trecho de código a seguir demonstra como obter o valor do parâmetro de rota.

```
ngOnInit() {
    this.route.params
        .switchMap(params => {
            let id: number = Number.parseInt(params['id']);
            return this.eventosService.find(id);
        })
        .subscribe(evento => this.evento = evento );
}
```

O objeto `route` \(um `ActivatedRoute`\) fornece o atributo `params` \(do tipo `Params` fornecido pelo pacote `@angular/router`\). Como ele é um `Observable`, o código usa o operador `switchMap` para mapear seu valor atual \(os parâmetros de rota\) para um novo `Observable`. Nesse processo, o parâmetro `id` é acessado de forma nomeada: `params['id']`. Como ele é representado como um `string`, seu valor é convertido para number usando `Number.parseInt()`.

O resultado de `EventosService.find()` é então retornado. Na prática, esse é o procedimento padrão para tratar mudanças em valores de parâmetros de rota.

Na sequência, o código usa `subscribe()` para tratar o `Observable` retornado pelo operador `switchMap`.

## Módulo de rotas

Uma boa prática para a arquitetura do aplicativo é usar outro módulo para representar as rotas \(o módulo de rotas\). Para fazer isso, o módulo de rotas é criado e importado no módulo do aplicativo \(como o módulo raiz\). O código a seguir aprenta o arquivo `app-routing.module.ts`, que contém a definição do módulo `AppRoutingModule`, um módulo de rotas.

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { EventosListaComponent } from './eventos-lista.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { EventoDetalhesComponent } from './evento-detalhes.component';

const rotas: Routes = [
    { path: 'eventos/:id', component: EventoDetalhesComponent },
    { path: 'eventos', component: EventosListaComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
```

A diferença para o que estava sendo feito anteriormente, com as rotas no mesmo módulo raiz, é que o `AppRoutingModule` exporta o `RouterModule` para que as rotas possam ser usadas em outro módulo.

Posteriormente, o módulo raiz \(`AppModule`\) importa o módulo de rotas:

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
...
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
...
})
export class AppModule { }
```

Embora esse procedimento não seja obrigatório, é uma boa prática de programação e, preferencialmente, deve ser usado.

## Arquitetura do software em módulos

Os recursos apresentados até aqui permitem o desenvolvimento de aplicativos pequenos. Entretanto, para aplicativos maiores, são necessários outros níveis de abstração. Na prática, o conteúdo dessa seção demonstra como organizar o aplicativo em módulos e incorporá-los no módulo raiz, tornando o software mais fácil de se manter e mais organizado.

Considere que um software possui a seguinte estrutura de arquivos \(na pasta `src`\):

```
+ src/
  + app/
    - app-routing.module.ts
    - app.component.html
    - app.component.ts
    - app.module.ts
    - evento-detalhes.component.html
    - evento-detalhes.component.ts
    - Evento.ts
    - eventos-lista.component.html
    - eventos-lista.component.ts
    - eventos.service.ts
    - home.component.html
    - home.component.ts
    - pagina-nao-encontrada.component.html
    - pagina-nao-encontrada.component.ts
```

Pode-se perceber, pelos nomes dos arquivos, que não há uma organização nos componentes. Estão todos juntos. Para organizá-los, o desenvolvedor cria uma pasta chamada `eventos` e coloca nela apenas os componentes desse contexto. Assim, a organização dos arquivos fica da seguinte forma:

```
+ src/  
  + app/
    + eventos/
      - evento-detalhes.component.html
      - evento-detalhes.component.ts
      - Evento.ts
      - eventos-lista.component.html
      - eventos-lista.component.ts
      - eventos.service.ts          
    - app-routing.module.ts
    - app.component.html
    - app.component.ts
    - app.module.ts
    - home.component.html
    - home.component.ts
    - pagina-nao-encontrada.component.html
    - pagina-nao-encontrada.component.ts
```

Depois da organização dos arquivos seguem-se outros procedimentos, criando um módulo específico para as funcionalidades referentes a "eventos". O padrão de desenvolvimento do Angular chama esses módulos menores de _feature modules_. Este formato de desenvolvimento também permite introduzir o conceito de _child routes_ \(rotas filhas\).

### Arquitetura modular



### Componente padrão do módulo



### Módulo de rotas

Segundo o formato de desenvolvimento visto na seção anterior, o desenvolvimento do módulo "eventos" começa pelo módulo de rotas `EventosRoutingModule`:

```

```





