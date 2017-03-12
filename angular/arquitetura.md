# Arquitetura

Angular é um **framework** para o desenvolvimento de aplicativos em HTML utilizando JavaScript ou outra linguagem que compila para JavaScript. A documentação do Angular, bem como a maioria das referências, utiliza TypeScript como linguagem de programação.

A figura a seguir apresenta as interações entre os principais componentes da arquitetura do Angular.

![Arquitetura do Angular](https://angular.io/resources/images/devguide/architecture/overview2.png)

Os componentes dessa arquitetura são os seguintes e são detalhados nas seções em sequência:

* **Modules** \(módulos\)
* **Components **\(componentes\)
* **Templates **\(templates\)
* **Metadata **\(metadados\)
* **Data binding** \(vinculação de dados\)
* **Directives **\(diretivas\)
* **Services **\(serviços\)
* **Dependency Injection** \(injeção de dependência\)

Os nomes dos componentes da arquitetura serão mantidos no original, em inglês.

## Modules

Aplicativos Angular são modulares, seguindo um sistema chamado _Angular Modules_ ou _NgModules_.

Cada aplicativo Angular tem pelo menos um módulo, o _**módulo raiz**_. Geralmente, o _módulo raiz_ é um componente visual, que hospeda outros componentes visuais ou não. Independentemente de ser o módulo raiz, cada módulo é definido em uma classe marcada com `@NgModule` \(uma _decorator function_\).

> **Decorator Function**
>
> Decorators \(mantendo o termo em inglês\) são funções que modificam classes. Angular possui vários decorators que anexam metadados a classes de modo a identificar o que elas significam e o que deve ser feito com elas.

`NgModule` é uma _decorator function_ que recebe um objeto \(chamado _metadados_\) com os seguintes atributos:

* `declarations`: um array contendo a lista de _view classes_ que pertencem ao módulo
* `exports`: um subconjunto de `declarations` que estará visível e utilizável nos componentes _templates_ de outros módulos
* `imports`: dependências requeridas por _templates_ do módulo em questão
* `providers`: array com uma lista de serviços disponibilizados pelo módulo atual que se tornam disponíveis globalmente para todos os módulos do aplicativo
* `bootstrap`: array contendo **apenas **o _módulo raiz_.

Exemplo \(arquivo `app/app.module.ts`\):

```TypeScript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

O aplicativo é executado por meio do processo de _bootstrap_ do módulo raiz.

Exemplo \(arquivo `app/main.ts`\):

```TypeScript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().boostrapModule(AppModule);
```

### Bibliotecas

O Angular fornece vários módulos, cada um deles com nomes que começam com o prefixo `@angular`. Os módulos podem ser instalados utilizando `npm` e importados utilizando a instrução `import`. Exemplo:

```TypeScript
import { Component } from '@angular/core';
```

O código importa a decorator function `Component`, definida no módulo `@angular/core`.

As bibliotecas podem ser:

* Components \(componentes\)
* Directives \(diretivas\)
* Services \(serviços\)
* Values \(valores\)
* Functions \(funções\)

## Components

Um **component** controla parte do estado real da tela \(interface gráfica\) que é chamada de `view`. A lógica de um componente é definida em uma classe.

Exemplo \(arquivo `app/hero-list.component.ts`\):

```typescript
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }
}
```

O Angular cria, atualiza e destrói componentes conforme o usuário utiliza o aplicativo. O aplicativo executa ações a cada momento do ciclo de vida por meio dos **eventos do ciclo de vida**, como o método `ngOnInit()` utilizado no código anterior.

## Templates

A view de um componente é definida no **template**, que é uma espécie de HTML que indica ao Angular como apresentar visualmente o componente.

Exemplo \(arquivo `app/hero-list.component.html`\):

```html
<h2>Hero List</h2>
<p><i>Pick a hero from the list</i></p>
<ul>
  <li *ngFor="let hero of heroes" (click)="selectHero(hero)">
    {{hero.name}}
  </li>
</ul>
<hero-detail *ngIf="selectedHero" [hero]="selectedHero"></hero-detail>
```

O template utiliza elementos HTML em conjunto com a **sintaxe de template** do Angular.

O último elemento do código, `<hero-detail>`, é uma tag especial, criada pelo componente `HeroDetailComponent`.

## Metadata

Os metadados dizem ao Angular como processar uma classe. Uma classe, na verdade, só se torna um componente do Angular ao utilizar metadados. No TypeScript é utilizada uma _decorator function_ para informar metadados para o Angular.

Exemplo \(arquivo `app/hero-list.component.ts`\):

```TypeScript
@Component({
  selector:    'hero-list',
  templateUrl: 'app/hero-list.component.html',
  providers:   [ HeroService ]
})
export class HeroListComponent implements OnInit {
/* ... */
}
```

O decorator `@Component` identifica uma classe como um componente. O parâmetro é um objeto que contém atributos como:

* `selector`: o seletor CSS que diz ao Angular como criar e inserir uma instância deste componente. No caso do exemplo, o seletor `hero-list` indica ao Angular que deve procurar por um elemento \(está usando um seletor de elemento\)
* `templateUrl`: o caminho para o arquivo do template
* `directives`: array de componentes ou diretivas que este componente requer
* `providers`: array de serviços que o componente requer. No exemplo, o componente `HeroListComponent` depende do componente `HeroService`, que é um serviço.

O metadado `@Component` indica para o Angular onde procurar os principais blocos de construção do componente. **Nesse sentido, é importante notar que template, metadata e component, juntos, descrevem uma view.**

Outros `decorators` são `@Injectable`, `@Input` e `@Output`.

## Data binding

Sem um framework, o desenvolvedor é responsável por inserir valores \[de dados\] no HTML e tratar a interação com o usuário para atualizar esses valores. O código para isso requer conhecimento avançado \(e muitas vezes tedioso\) de programação do HTML DOM.

![](https://angular.io/resources/images/devguide/architecture/databinding.png)

O mecanismo de **data binding** é usado pelo Angular para coordenar a sincronia entre partes do template e partes de um componente. Como o diagrama da figura anterior mostra, há quatro formas de utilizar a sintaxe de data binding:

* `{% raw %}{{value}}{% endraw %}`
* `[property]="value"`
* `(event)="handler"`
* `[(ng-model)]="property"`

Exemplo \(arquivo `app/hero-list.component.html`\):

```html
<li>{{hero.name}}</li>
<hero-detail [hero]="selectedHero"></hero-detail>
<li (click)="selectHero(hero)"></li>
```

Esse código é interpretado da seguinte forma:

* O código entre `\{\{...\}\}` usa o recurso chamado de **interpolação** e faz com que o valor de `hero.name` \(um tipo de expressão TypeScript\) seja apresentado dentro do elemento `li`
* A **property binding** expressada por `[hero]="selectedHero"` passa o valor de `selectedHero` \(um atributo do componente `HeroListComponent`\) para a propriedade `hero` do componente filho `HeroDetailComponent` \(representado pelo elemento `hero-detail`\)
* O **event binding** expressado por `(click)="selectHero(hero)"` chama o método `selectHero()` quando o usuário clicar no elemento `li`.

Um tipo especial de **data binding** chamado **two-way data binding** combina **property binding** e **event binding**, usando a diretiva `ngModel`. Exemplo:

```html
<input [(ngModel)]="hero.name">
```

Usando **two-way data binding** o valor de uma propriedade \(`hero.name`\) passa do componente atual para o elemento `input`. Quando o valor do `input` é modificado, ele é atribuído de volta para a propriedade.

O Angular processa o data binding de uma vez no ciclo de vida, a partir do componente raiz até todos os componentes filhos. 

Data binding tem um papel importante na comunicação entre template e componente, da mesma forma que na comunicação entre componentes pais e filhos.

![](https://angular.io/resources/images/devguide/architecture/component-databinding.png)

![](https://angular.io/resources/images/devguide/architecture/parent-child-binding.png)

## Directives

Os templates do Angular são dinâmicos e são modificados quando o Angular transforma o DOM de acordo com as instruções dadas pelas **directives**.

Uma **directive** é uma classe com metadados de diretiva. No TypeScript é utilizada a _decorator function_  `@Directive` para adicionar metadados a uma classe.

**Directives** podem ser de dois tipos: **de estruturas** ou **de atributos**.

As **diretivas de estrutura** alteram o DOM adicionando, removendo ou substituindo elementos. Exemplo:

```html
<li *ngFor="let hero of heroes"></li>
<hero-detail *ngIf="selectedHero"></hero-detail>
```

São usadas duas diretivas:

* `*ngFor` indica ao Angular que deve repetir o elemento `li` para cada item do array `heroes`
* `*ngIf` indica ao Angular que só deve incluir o componente `HeroDetailComponent` se o valor de `selectedHero` estiver definido ou for verdadeiro \(considerando a avaliação de uma expressão lógica\).

**Diretivas de atributo** alteram a aparência ou o comportamento de um elemento já existente no DOM. A diretiva `ngModel` modifica o comportamento de um elemento existente \(como um `input`\) definindo seu valor e respondendo ao evento de alteração do seu valor. Exemplo:

```html
<input [(ngModel)]="hero.name">
```

Outras diretivas são `ngSwitch` \(de estrutura\), `ngStyle` e `ngClass` \(de atributo\).

## Services

Um **service** é, tipicamente, uma classe com um propósito muito específico. Na verdade, não há uma definição especial do Angular para um **service**, pois ele é, basicamente, uma classe.

Exemplo \(arquivo `app/logger.service.ts`\):

```typescript
export class Logger {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }
}
```

O serviço `Logger` faz log de mensagens no console do browser.

Outro exemplo \(arquivo `app/hero.service.ts`\):

```typescript
export class HeroService {
  private heroes: Hero[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  getHeroes() {
    this.backend.getAll(Hero).then( (heroes: Hero[]) => {
      this.logger.log(`Fetched ${heroes.length} heroes.`);
      this.heroes.push(...heroes); // fill cache
    });
    return this.heroes;
  }
}
```

Neste exemplo, o serviço `HeroService` consulta dados e depende dos serviços `BackendService` e `Logger`.

No formato de arquitetura do Angular, é preferível que as classes de componentes não façam tarefas como buscar dados de um servidor, validar entradas do usuário ou fazer log diretamente no console do browser. Essas tarefas são delegadas para serviços. A tarefa de um componente é lidar com a experiência \(interação\) com o usuário, e nada mais. O componente intermedia a interação entre a view e a lógica do aplicativo. Um bom componente apresenta propriedades e métodos para data binding. Por fim, delega tudo não trivial para serviços.

## Dependency Injection

**Dependency Injection** \(DI\) é uma forma de suprir uma nova instância de uma classe com as dependências que ela requer. Exemplo do construtor do componente `HeroListComponent` \(arquivo `app/hero-list.component.ts`\):

```typescript
constructor(private service: HeroService) { }
```

Quando o Angular cria um componente, primeiro consulta o **injector** sobre serviços requeridos pelo componente. O injetor mantém uma lista de instâncias de serviços criada anteriormente. Se uma instância de serviço não estiver na lista, o injetor cria uma instância e adiciona na lista antes de retorna o serviço ao Angular. Por fim, o Angular chama o construtor do componente informando os serviços como argumentos. Esse processo é chamado **injeção de dependência**.

O injetor identifica os serviços necessários por meio dos metadados do módulo ou do componente. Geralmente, isso é feito no módulo raiz. Por exemplo \(trecho do arquivo `app/app.module.ts`\):

```typescript
@NgModule({
  ...
  providers:    [ BackendService, HeroService, Logger ],
  ...
})
export class AppModule { }
```

Por meio da _decorator_ `@NgModule` a lista de **providers** indica as dependências de serviços do `AppModule`. Desta forma, ao registrar os serviços como dependência do módulo raiz, elas ficam disponíveis em todo o aplicativo.

Uma alternativa é registrar as dependências de serviços em um componente. Exemplo \(trecho do arquivo `app/hero-list.component.ts`\):

```typescript
@Component({
  selector:    'hero-list',
  templateUrl: 'app/hero-list.component.html',
  providers:   [ HeroService ]
})
```

Registrar uma dependência de serviço no nível do componente significa que será criada uma instância do serviço para cada instância do componente em questão.

## Resumo

Estes são os principais blocos de construção \(elementos\) da arquitetura do Angular:

* Modules
* Components
* Templates
* Metadata
* Data binding
* Directives
* Services
* Dependency Injection

Estes elementos formam a base tudo em um aplicativo Angular. Além deles, há recursos como animação, detecção de mudanças, eventos, formulários, XHR \(ajax\), elementos do ciclo de vida e roteamento.

