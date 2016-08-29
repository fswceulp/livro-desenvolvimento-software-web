# Estrutura do projeto

Este capítulo apresenta a estrutura do projeto de um software para organização de eventos, com funções de gerenciamento de eventos e de inscrições.

O projeto utilizado neste capítulo tem a seguinte estrutura:

```
-- /raiz-do-projeto
   +-- /config
       +-- helpers.js
       +-- webpack.common.js
       +-- webpack.dev.js
       +-- webpack.prod.js
   +-- /public
   +-- /src
       +-- /app
           +-- app.component.css
           +-- app.component.html
           +-- app.component.ts
           +-- app.module.ts
       +-- index.html
       +-- main.ts
       +-- polyfills.ts
       +-- vendor.ts
   +-- package.json
   +-- tsconfig.json
   +-- typings.json
   +-- webpack.config.js
```

Os três principais diretórios são:

* `config`: contém arquivos de configuração do Webpack
* `public`: contém arquivos comuns para todo o projeto \(ex.: imagens, arquivos CSS\)
* `src`: contém o "código-fonte" do aplicativo

## Dependências

O arquivo `package.json` contém as dependências do projeto. Há as dependências de desenvolvimento e as dependências de produção. Veja mais sobre isso no capítulo sobre o `npm`.

Algumas dependências são:

* De produção: angular, jquery, bootstrap
* De desenvolvimento: webpack, webpack-dev-server, file-loader, css-loader

## Webpack

A documentação do Angular utiliza **System.js** para compilação do código TypeScript em JavaScript. Entretanto, este capítulo utiliza **Webpack**.

O arquivo `webpack.config.js` contém o código:

```TypeScript
module.exports = require('./config/webpack.dev.js');
```

Os arquivos da pasta `config` contém três arquivos de configuração do Webpack:

* `config/webpack.common.js`: contém configurações comuns
* `config/webpack.dev.js`: contém configurações para o ambiente de desenvolvimento
* `config/webpack.prod.js`: contém configurações para o ambiente de produção

Veja mais informações sobre isso no capítulo do Webpack.

## Código-fonte do projeto

O diretório `src` contém o código-fonte do projeto. Há "arquivos de configuração" do aplicativo ou que criam uma estrutura padrão para receber o módulo `AppModule`:

* `src/index.html`
* `src/main.ts`
* `src/vendor.ts`

As seções seguintes apresentam estes arquivos em detalhes.

### Arquivo `index.html`

O arquivo `src/index.html` é o template principal do projeto; é o primeiro a ser carregado pelo browser. Seu conteúdo:

```html
<html lang="pt-br">
  <head>
    <title>Angular 2 QuickStart</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <my-app>Aguarde, carregando...</my-app>
  </body>
</html>
```

O template contém código HTML para carregar o restante do aplicativo. Importante notar que não há uso de elementos `script` ou `link`, para carregar arquivos JavaScript ou CSS, pois eles são embutidos automaticamente pelo Webpack.

A parte diferenciada do template é a utilização do elemento `my-app`. Este elemento representa o local onde o Angular irá inserir o componente `AppComponent` \(arquivo `src/app/app.component.ts`\).

### Arquivo `main.ts`

O arquivo `src/main.ts` contém o código TypeScript necessário para carregar o aplicativo \("carregar" no jargão do Angular é fazer o "bootstrap"\). Seu conteúdo:

```TypeScript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
```

Os usos da instrução `import` indicam os módulos ou bibliotecas sendo importados. O condicional baseado no valor de `process.env.ENV` é utilizado para habilitar o chamado "modo de produção do aplicativo" \(que adiciona certos comportamentos quando o aplicativo estiver em modo de produção\).

A última linha é que, efetivamente, faz o "bootstrap" do aplicativo, ao chamar o método `bootstrapModule()` do objeto criado pela chamada ao método `platformBrowserDynamic()`, informando como parâmetro o `AppModule` \(que represnta o módulo raiz do aplicativo\).

### Arquivo `vendor.ts`

O arquivo `src/vendor.ts` é responsável por importar módulos ou bibliotecas globalmente \(de forma que possam ser usadas por todos os módulos do aplicativo\). Seu conteúdo:

```TypeScript
// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

// RxJS
import 'rxjs';
```

As importações são, praticamente, direcionadas para carregar os módulos do Angular no aplicativo.

O diretório `app` contém a definição do módulo raiz, utilizado no aplicativo. O módulo possui quatro arquivos:

* `src/app/app.module.ts`
* `src/app/app.component.ts`
* `src/app/app.component.html`
* `src.app/app.component.css`

As seções a seguir apresentam os arquivos em detalhes.

### Arquivo `app.module.ts`

O arquivo `src/app/app.module.ts` contém a definição da classe `AppModule`, ou seja, o mótulo raiz do aplicativo. Seu conteúdo:

```TypeScript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

O arquivo começa importando alguns módulos \(como `@angular/core` e `@angular/forms`\) e importa a classe `AppComponent`. Utilizando a _anotator function_ `@NgModule()` os metadados da classe `AppModule` são definidos:

* atributo `import`: importa os módulos `BrowserModule` e `FormsModule`
* atributo `declarations`: fornece \(declara\) o módulo `AppComponent`
* atributo `bootstrap`: indica ao Angular que deve utilizar o módulo `AppComponent` durante o bootstrap

### Arquivo `app.component.ts`

O arquivo `src/app/app.component.ts` contém a declaração do componente `AppComponent`. Na prática, como o `AppModule` não possui visual, `AppComponent` representa o componente visual do aplicativo. Trecho do seu código:

```TypeScript
import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
...
}
```

O código importa a anotator function `Component`, definida em `@angular/core`. A função é utilizada para definir os metadados do componente:

* `selector`: indica o seletor usado para indicar ao Angular onde deve apresentar o componente
* `templateUrl`: indica o arquivo usado para o template do componente \(neste caso, o arquivo `src/app/app.component.html`\)
* `styleUrls`: um array que indica os arquivos CSS utilizados no componente \(neste caso, o arquivo `src/app/app.component.css`\)

O seletor `my-app` instrui o Angular que deve procurar o elemento `my-app` no template do aplicativo e, dentro dele, modificar o DOM para inserir o conteúdo. Como já visto, este elemento está no arquivo `src/index.html`.

A utilização da instrução `import` é bastante flexível. No caso de um arquivo `.css`, isso instrui o Webpack a inserir o arquivo em questão na lista de arquivos CSS que devem ser reunidos para gerar a versão de produção do aplicativo.

## Arquivo `app.component.html`

O arquivo `src/app/app.component.html` contém o template do módulo. Seu conteúdo:

```html
<h1>Eventos do mês de {{mes}}</h1>
<ul>
 <li *ngFor="let evento of eventos">{{evento}}</li>
</ul>
```

O template é informado nos metadados do componente \(trecho do arquivo `src/app/app.component.ts`\):

```TypeScript
import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
 selector: 'my-app',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
...
}
```

O template apresenta o valor do atributo `mes `e utiliz a diretiva `ngFor` para apresentar uma lista de valores \(definidos no atributo `evento`, que é um array\).

## Arquivo `app.component.css`

O arquivo `src/app/app.component.css` contém as definições de estilos CSS para o componente `AppComponent`. Um recurso importante do Angular é dar um contexto para o CSS: o próprio componente. Isso significa que o conceito de modularização também funciona para os estilos CSS.

O arquivo CSS é especificado nos metadados do componente (trecho do arquivo `src/app/app.component.ts`):

```TypeScript
import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
 selector: 'my-app',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
...
}
```
