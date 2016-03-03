# Passo 8 - Roteamento e múltiplas Views

Nos passos anteriores, foi utilizado o conceito de "tela", que permite uma troca de contexto da interface gráfica. Entretanto, a abordagem utilizada (mostrar e ocultar conteúdo) não é a maneira mais adequada de realizar este procedimento, principalmente com o aumento da quantidade de funcionalidades (e de telas) do aplicativo.

Um aplicativo de única página (SPA) (do inglês *Single Page Appplication*) é um recurso de programação front-end que faz com que o aplicativo web não utilize o formato tradicional de troca de página, ou seja, há apenas uma única página e ocorrem trocas de telas. Esse conceito foi utilizado até o **passo 7** e continuará sendo utilizado no restante deste tutorial do Angular.

> Para saber mais

> Se quiser saber mais sobre o conceito de SPA, pode começar lendo esse artigo da wikipedia (em inglês): https://en.wikipedia.org/wiki/Single-page_application.

Até o passo 7, quando o usuário clica no botão "Detalhes", a tela de lista de telefones é ocultada e é apresentada a tela de detalhes do telefone. O Pass 8 utiliza o módulo `angular-route` para fornecer uma alternativa mais adequada.

## Módulo `angular-route`

O módulo `angular-route` fornece serviços necessários para que o aplicativo utilize o conceito de múltiplas views. 

O arquivo `package.json` precisa incluir o módulo `angular-route` nas suas dependências.

## Múltiplas views, Rotas e Template de Layout

Uma "**rota**" é um recurso que permite ao navegador mudar o endereço (a URL) atual sem, efetivamente, mudar de página. A princípio, isso pode soar estranho, mas é um recurso amplamente utilizado em desenvolvimento web moderno. O módulo `angular-route` fornece o serviço `$route`, que permite relacionar controllers, views e a URL atual do navegador.

Uma rota é **padrão**, e é representada no navegador por uma URL, por exemplo:

```
http://localhost:8080/#/telefones
```

Importante observar a presenta do caractere `#` (chamado de **hash**) na URL. Uma rota, portanto, é apresentada na URL a partir de `#`.

Um "**template de layout**" é responsável por definir um template que é comum à todas as views do aplicativo. As views são chamadas de "**templates parciais**" porque incluem somente a parte do template que é necessária para cada tela.

## Estrutura do aplicativo

A partir de então, o aplicativo será organizado por "módulos". A estrutura de arquivos é a seguinte:

```
passo-8
│   app.css
│   app.js
│   index.html
│   package.json
│
├───data
│   └───phones
│           dell-streak-7.json
|           ...
│
├───img
│   └───phones
│           dell-streak-7.0.jpg
|           ...
│
├───node_modules
|   ...
│
└───telefones
        detalhes.html
        lista.html
        modulo.js

```

O diretório `telefones` representa o módulo **Telefones**, que apresenta a lista e os detalhes de telefones. A ideia de separar o aplicativo em módulos representa uma proposta de arquitetura para o software que pretende isolar ou separar partes do software em módulos, isto é, se consegue, com isso, modularização.

## Template de layout

O arquivo `index.html`, utilizado como **template de layout** é bastante modificado em relação ao **Passo 7**, como mostra o trecho de código a seguir:

```
<!doctype html>
<html lang="pt-br" ng-app="phonecat">
<head>
  ...
  <title ng-bind="pageTitle"></title>
  ...
  <script src="node_modules/angular/angular.min.js"></script>
  <script src="node_modules/angular-route/angular-route.min.js"></script>
  <script src="telefones/modulo.js"></script>
  <script src="app.js"></script>
  ...
</head>
<body>
<div class="container">
    <div ng-view></div>
</div>
</body>
</html>
```

A diretiva `ng-bind` está sendo aplicada ao elemento `title` para que o título da janela seja definido dinamicamente, no controller. O valor do atributo representa uma propriedade do model. Neste caso, a propriedade é `pageTitle`. Os passos anteriores apresentaram como interagir com o escopo de um controller. Como será visto posteriormente, o **Passo 8** demonstra como interagir com o escopo raiz do aplicativo.

Na seção de arquivos JavaScript importados no arquivo `index.html` estão os arquivos:
* `node_modules/angular-route/angular-route.min.js` (do módulo `angular-route`)
* `telefones/modulo.js` (que implementa o módulo telefone)

A ordem de inclusão dos arquivos JavaScript é importante, uma vez que o arquivo `app.js` depende do módulo telefone.

### Diretiva `ng-view`

O módulo `angular-route` fornece a diretiva `ng-view`. Por meio dessa diretiva os **templates parciais** são dinamicamente embutidos neste local (dentro de `<div class="container">`).

A figura a seguir ajuda a ilustrar este conceito.

![](passo-8-template-de-layout.JPG)

A figura demonstra que os **templates parciais** são incluídos de modo exclusivo dentro da `div` que está com a diretiva `ng-view`.

O módulo `angular-route` permite a utilização de apenas uma diretiva `ng-view` no **template de layout**.

## Código JavaScript do aplicativo

O código JavaScript do aplicativo PhoneCat muda bastante em relação ao **Passo 7**.

O arquivo `app.js` passa a ter o seguinte conteúdo:

```JavaScript
'use strict';

angular.module('phonecat', ['ngRoute', 'moduloTelefone'])
    .config(function($routeProvider){
        $routeProvider
            .when('/telefones', {
                templateUrl: 'telefones/lista.html',
                controller: 'TelefonesListaController'
            })
            .when('/telefones/:id', {
                templateUrl: 'telefones/detalhes.html',
                controller: 'TelefonesDetalhesController'
            })
            .otherwise({
                redirectTo: '/telefones'
            });
    });
```

### Dependências

A primeira novidade está em relação às dependências (segundo parâmetro da função `module()`):

```JavaScript
angular.module('phonecat', ['ngRoute', 'moduloTelefone'])
```

Anteriormente, o aplicativo não possuía dependências, agora, são duas:
* `ngRoute`(pacote/módulo `angular-route`)
* `moduloTelefone` (definido no arquivo `telefones/modulo.js`)

### Função `config()` e rotas

O objeto criado pela função `angular.module()` possui a função `config()`, que é utilizada para realizar tarefas de configuração do módulo, que executam no momento em que o módulo é carregado. Neste caso, é injetado na função `config()` o objeto `$routeProvider`, que representa uma API de acesso ao módulo `angular-route` para, principalmente, definir **rotas**.

No código da função `config()` o objeto `$routeProvider` é utilizado para criar rotas. Há duas rotas:
* `/telefones`
* `/telefones/:id`

Como já informado, uma rota é um padrão. Assim, quando o padrão definido por uma rota estiver presente na URL, o módulo `angular-route` entrará em ação para definir o que acontecerá. Por exemplo, a URL:

```
http://localhost/#/telefones
```

atende a rota `/telefones`. De forma semelhante, a URL:

```
http://localhost/#/telefones/galaxy
```

atende a rota `/telefones/:id`.

Por definição, isso é semelhante a um **evento de troca da URL**, ou seja, . Por isso o objeto `$routeProvider` fornece a função `when()` que recebe dois parâmetros:
1. o padrão da rota na URL
2. um objeto que configura a vinculação entre a rota, template parcial e controller

A rota `/telefones` é definida por:

```javascript
.when('/telefones', {
    templateUrl: 'telefones/lista.html',
    controller: 'TelefonesListaController'
})
```

O segundo parâmetro da função `when()` indica que, quando a rota atual for `/telefones`, será utilizado o template parcial definido no arquivo `telefones/lista.html` e o controller `TelefonesListaController`.

A rota `/telefones/:id` é definida por:

```javascript
when('/telefones/:id', {
    templateUrl: 'telefones/detalhes.html',
    controller: 'TelefonesDetalhesController'
})
```

A rota `/telefones/:id` inclui um **parâmetro de rota**. Um parâmetro de rota representa uma parte da rota que pode ser substituída por um valor, o qual poderá ser tratado posteriormente no controller. O template parcial está definido no arquivo `telefones/detalhes.html` e o controller é `TelefonesDetalhesController`.

Por fim, o objeto `$routeProvider` fornece a função `otherwise()`:

```javascript
otherwise({
    redirectTo: '/telefones'
})
```

A função `otherwise()` recebe como parâmetro um objeto que determina o que acontece quando nenhuma rota for encontrada. Neste caso, o módulo `angular-route` redirecionará para a rota `/telefones`.

Importante relembrar que esses templates parciais e controllers estão definidos no módulo **Telefones**, que será apresentado a seguir.


## Módulo **Telefones**

O módulo Telefones é definido no arquivo `/telefones/modulo.js` e seu código é apresentado a seguir.

```javascript
'use strict';

angular.module('moduloTelefone', [])
    .controller('TelefonesListaController', 
      function($rootScope, $scope, $http, $location){
        $rootScope.pageTitle = 'Telefones - PhoneCat';
        $http.get('data/phones/phones.json').then(function(response){
            $scope.telefones = response.data;
        });
    })
    .controller('TelefonesDetalhesController', 
      function($rootScope, $scope, $http, $routeParams){
        $http.get('data/phones/' + $routeParams.id + '.json').then(
            function(response){
                $scope.telefone = response.data;
                $scope.telefone.imageUrl = $scope.telefone.images[0];
                $rootScope.pageTitle = $scope.telefone.name + ' - Phonecat';
            });
        $scope.mostrarImagem = function(imagem) {
            $scope.telefone.imageUrl = imagem;
        };
    });
```

O módulo declara dois controllers: 
* `TelefonesListaController`: implementa a funcionalidade de apresentar a lista de telefones; e
* `TelefonesDetalhesController`: implementa a funcionalidade de apresentar os detalhes de um telefone.

Estes módulos e os templates parciais associados serão apresentados a seguir.

### Lista de telefones

#### Template parcial da lista de telefones

O template parcial da lista de telefones está definido no arquivo `telefones/lista.html`. Seu código é exatamente o mesmo de parte do template principal do **Passo 7** (arquivo `index.html`) que representava a "tela" de lista de telefones. Por este motivo, o código não será apresentado novamente aqui.

#### Controller `TelefonesListaController`

O controller `TelefonesListaController` é definido da seguinte forma:

```javascript
.controller('TelefonesListaController', 
  function($rootScope, $scope, $http){
    $rootScope.pageTitle = 'Telefones - PhoneCat';
    $http.get('data/phones/phones.json').then(function(response){
        $scope.telefones = response.data;
    });
})
```

Na função que define o controller são injetados três objetos:
* `$rootScope`
* `$scope`
* `$http`

Dentre estes, os objetos `$scope` e `$http` já são conhecidos. O objeto `$rootScope` permite acessar o escopo raiz do aplicativo. Na prática, é semelhante ao `$scope` (ou seja, permite acessar o model) tendo o escopo como única diferença. Neste caso, `$rootScope` é utilizado para alterar o título da página, modificando a propriedade `pageTitle` do model:

```javascript
$rootScope.pageTitle = 'Telefones - PhoneCat';
```

O restante do controller é idêntico ao definido no **Passo 7** e não será detalhado aqui.

### Detalhes de um telefone

#### Template parcial dos detalhes de um telefone

O template parcial dos detalhes de um telefone está definido no arquivo `telefones/detalhes.html`. Seu código é exatamente o mesmo de parte do template principal do **Passo 7** (arquivo `index.html`) que representava a "tela" de detalhes de um telefone. Por este motivo, o código não será apresentado novamente aqui.

#### Controller `TelefoneDetalhesController`

O controller `TelefonesDetalhesController` é definido da seguinte forma:

```javascript
.controller('TelefonesDetalhesController', 
  function($rootScope, $scope, $http, $routeParams){
    $http.get('data/phones/' + $routeParams.id + '.json').then(
        function(response){
            $scope.telefone = response.data;
            $scope.telefone.imageUrl = $scope.telefone.images[0];
            $rootScope.pageTitle = $scope.telefone.name + ' - Phonecat';
        });
    $scope.mostrarImagem = function(imagem) {
        $scope.telefone.imageUrl = imagem;
    };
});
```

Na função que define o controller são injetados quatro objetos:
* `$rootScope`
* `$scope`
* `$http`
* `$routeParams`

Dentre estes objetos, o que precisa de destaque é `$routeParams`, que é fornecido pelo módulo `angular-route`.

Como já informado, uma rota pode possuir um parâmetro de rota, que é definido seguindo a sintaxe: sinal de dois pontos seguido pelo nome do parâmetro. Assim, a rota `/telefones/:id` possui um parâmetro chamado `id`. Para ter acesso ao parâmetro de rota, é utilizado o objeto `$routeParams`. O controller `TelefonesDetalhesController` o utiliza para esssa função:

```javascript
$http.get('data/phones/' + $routeParams.id + '.json')
```

O objeto `$rootScope` é utilizado novamente para definir o valor da propriedade `pageTitle`. Desta vez, o objetivo é fazer com o que o título da janela apresente o nome do telefone. Isso está presente na função callback da função `$http.get()`:

```javascript
$http.get('data/phones/' + $routeParams.id + '.json').then(
    function(response){
        $scope.telefone = response.data;
        $scope.telefone.imageUrl = $scope.telefone.images[0];
        $rootScope.pageTitle = $scope.telefone.name + ' - Phonecat';
    });
```

O restante do controller é semelhante ao já apresentado, por isso os detalhes do código, bem como sua reprodução, serão omitidos.

## Conclusões

O **Passo 8** implementa várias mudanças no aplicativo. Primeiro, a arquitetura do software foi modificada por meio da modularização, a qual impacta também a organização dos arquivos do projeto. Segundo, o recurso de rotas permitiu uma nova visão sobre como mudar "telas" do aplicativo.

> **Note** **Exercício**

Estenda o **Passo 8**, criando funcionalidades que, implementando o módulo **Fabricantes**, permitam ao usuário:
* Ver a lista de fabricantes de telefones celulares (ex: rota `/fabricantes`)
* Ver os detalhes de um fabricante (tela de detalhes do fabricante) com nome, descrição e lista de telefones [do fabricante em questão]
* Filtrar a lista de telefones por fabricante (módulo **Telefones**)

Utilize arquivos .json para representar os dados dos fabricantes. Pode ser necessário alterar arquivos .json dos telefones para representar o "relacionamento" entre fabricante e telefone.