# Passo 0 - Iniciando

Ao abrir o arquivo `index.html` do **Passo 0** no browser, você irá verá a mensagem "Nada aqui ainda". O que você verá nesta seção do tutorial representa o básico da criação de um aplicativo com Angular e o código associado.

O código a seguir é o conteúdo do arquivo `index.html`:

```html
<!doctype html>
<html lang="pt-br" ng-app>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Angular Tutorial</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
  <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>
<body>
<div class="container">
    <p>Nada aqui {{'ainda' + '!'}}</p>
</div>
</body>
</html>
```

Este código é bastante padrão para qualquer aplicativo Angular que você criar daqui para a frente (inclusive os demais passos). Perceba o código utiliza alguns componentes:
* **Bootstrap** (inclui arquivos CSS e JavaScript a partir da CDN do Bootstrap)
* **jQuery** (inclui o arquivo JavaScript a partir da CDN do Google)
* **Angular** (inclui o arquivo JavaScript a partir da CDN do Google)

Até este momento, os arquivos necessários para o funcionamento destes componentes são carregados diretamente de fontes que estão disponíveis na internet, as chamadas CDN (*Content Delivery Network*). Também é possível baixar os arquivos para serem carregados localmente.

## O que o código está fazendo?

### Diretiva `ng-app`

A tag `html` possui o atributo `ng-app`:

```html
<html lang="pt-br" ng-app>
```

O atributo `ng-app` representa uma **diretiva** do Angular chamada **ngApp**. Esta diretiva é usada para indicar ao Angular que deve usar a tag `html` como elemento raiz do aplicativo. Isso dá liberdade para os desenvolvedores indicarem ao Angular tratar como aplicativo o arquivo HTML inteiro ou apenas uma parte dele.

### Tag `script`

O arquivo `index.html` possui uma tag `script` que carrega o arquivo JavaScript do Angular:

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
```

Novamente, neste caso, o arquivo está sendo carregando da CDN do Google.

Após carregar este arquivo JavaScript, o Angular entra em ação, procurando uma tag do código HTML que tenha a diretiva `ngApp`. Ao encontrar a diretiva, o Angular vai iniciar o aplicativo considerando a tag em questão como raiz do aplicativo.

### A classe `container`

O Bootstrap fornece a classe `container`. O arquivo `index.html`, está sendo aplicada ao elemento `div`:

```html
<div class="container">
...
</div>
```

 Ao ser aplicada a um elemento (atributo `class`) isso faz com que o conteúdo seja formatado e esteja preparado para receber a estrutura de *grid*, com colunas e linhas. 

### Chaves duplas vinculadas a uma expressão

O conteúdo do elemento `body` é bastante simples, mas demonstra recursos interessantes do Angular:

```html
<p>Nada aqui {{'ainda' + '!'}}</p>
```

A linha, conteúdo do elemento `p` demonstra duas características principais dos recursos de template do Angular:
* Uma vinculação (*binding*), entre por chaves duplas ({{ e }})
* Uma expressão é usada na vinculação: `'ainda' + '!'`.

A vinculação diz ao Angular que deve avaliar uma expressão e inserir o resultado no DOM, no local da vinculação. Um recurso muito interessante é que atualizações na expressão implicam em atualizações automáticas do DOM.

Uma *expressão Angular* é um trecho de código JavaScript que é avaliado pelo Angular no contexto do *escopo de modelo* atual, ao invés do *escopo global* (*window*).

Como esperado, uma vez que o código é processado pelo Angular, a página HTML, contém o texto: "Nada aqui ainda!".

## Carregando Aplicativos Angular

Há três coisas importantes acontecendo durante o momento de início de um aplicativo Angular:
* O *injetor*, que será usado para injeção de dependência, é criado;
* O injetor irá, então, criar o *escopo raiz* que se tornará o contexto do *model* do aplicativo;
* O Angular irá, então, "compilar" o DOM, iniciando com o elemento raiz que contém a diretiva **ngApp** e processando as demais diretivas e vinculações restantes.

Assim que o aplicativo é iniciado, ele irá aguardar por entrada de eventos do browser (como clique de mouse, pressionar de teclas ou respostas HTTP) que causem mudanças no *model*. Uma vez que um evento ocorre, o Angular detecta se ele causou mudanças no *model* e, se encontrar, atualizará as vinculações existentes.

A figura a seguir ilustra este processo.

![](http://i.imgur.com/AVVkoWq.png)

A estrutura do aplicativo é atualmente muito simples. O *template* contém apenas uma diretiva e uma *vinculação estática*. Além disso, o *model* está vazio. Isso mudará em breve! :)

## Experimentos

Tente adicionar expressões matemáticas ao template e ver o resultado. Por exemplo, adicione o seguinte ao elemento `body`:

```html
<p>1 + 2 = {{1 + 2}}</p>
```

O que acontece se você inserir no template uma expressão Angular com erro?

## Resumo

Este passo do tutorial apresentou:
* Qual a estrutura básica de um aplicativo Angular e quais arquivos são necessários para funcionar com os componentes Bootstrap e jQuery, além do próprio Angular
* A diretiva **ngApp** e a sua importância para o início de um aplicativo Angular
* Os conceitos de *vinculação* e *expressão Angular* e a sua importância na criação de templates.

O **Passo 1** acrescentará mais detalhes ao aplicativo. 

## Carregando arquivos localmente

Se você preferir utilizar arquivos do Bootstrap, jQuery e do Angular localmente, pode fazer isso utilizando maneiras disponíveis nos sites destes componentes. O conteúdo das seções seguintes é bem resumido para que você não tenha a tendência de utilizar esta abordagem, pois é a menos indicada.

### Bootstrap

Acesse a [página de download do Bootstrap](http://getbootstrap.com/getting-started/#download), baixe os arquivos e descompacte na pasta do aplicativo.

### jQuery

Acesse a [página de download do jQuery](https://jquery.com/download/) e baixe os arquivos o arquivo da [versão "compactada"](http://code.jquery.com/jquery-2.2.0.min.js). 

### Angular

Acesse a [página inicial do Angular](https://angularjs.org/) e clique no botão "download". Siga as instruções na tela para baixar os arquivos necessários localmente.

Depois de baixar os arquivos, corrija as partes do código do arquivo `index.html` que os importam na página para que o aplicativo funcione normalmente, carregando os arquivos localmente.