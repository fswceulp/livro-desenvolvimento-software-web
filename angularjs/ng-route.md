# Módulo ngRoute

O `ngRoute` é um módulo do Angular utilizado para fornecer o serviço de rota para aplicativos baseados no Angular. Uma rota é um recurso que permite interpretar a URL conforme certos padrões. Detalhes sobre isso serão vistos nesta seção.

Para utilizar o `ngRoute` é necessários instalá-lo, já que ele não é distribuído, por padrão, com o Angular. Para isso, esta seção introduz a utilização do `npm`, gerenciador de pacotes do NodeJS. Acesse a pasta do aplicativo via prompt (linha de comando) e execute o comando:

```
npm init -y
```

Isso fará com o que o projeto seja iniciado e esteja inicialmente configurado para utilizar o `npm` e os componentes do Angular.

Instale o Angular:

```
npm install angular --save
```

Instale o "Angular route", que fornece o módulo `ngRoute`:

```
npm install angular-route --save
```

A partir de agora, ao invés de utilizar o Angular de uma CDN (bem como outros componentes) utilize o que está na pasta `node_modules`.

## Estrutura do aplicativo

O aplicativo `app-cidades-route` usa o `app-cidades-http` com base. As principais diferenças estão na arquitetura da solução e quanto aos recursos do Angular utilizados.

Em relação à arquitetura o aplicativo tem a seguinte estrutura de arquivos:

```
+ app-cidades-route
+--- dados
|   +--- cidades.json
|   +--- estados.json
+--- views
|   +--- cidades
|       +--- editor.html
|       +--- lista.html
+--- app.js
+--- index.html
```

A pasta `dados` contém os arquivos de dados do aplicativo (`cidades.json` e `estados.json`). A pasta `views` contém as views do aplicativo. Neste caso, o aplicativo está organizado por contexto, de modo que a pasta `cidades` contém os arquivos `editor.html` e `lista.html` que representam, respectivamente, o formulário de cadastro e a lista de cidades. Os demais arquivos são similares ao utilizado anteriormente (`app.js` e `index.html`).

Além da organização dos arquivos, o aplicativo, representado pelo módulo `cidades`, utiliza o módulo `ngRoute` como dependência.

## Configurando as rotas

A configuração das rotas é feita na função `config()` do módulo:

```javascript
angular.module('cidades', ['ngRoute'])
.config(
    function($routeProvider){
        $routeProvider
            .when('/cidades', {
                templateUrl: 'views/cidades/lista.html',
                controller: 'CidadesListaController'
            })
            .when('/cidades/editor', {
                templateUrl: 'views/cidades/editor.html',
                controller: 'CidadesEditorController'
            })
            .when('/cidades/:id/editor', {
                templateUrl: 'views/cidades/editor.html',
                controller: 'CidadesEditorController'
            })
            .otherwise({
                redirectTo: '/cidades'
            });
    }
);
```

O parâmetro da função `config()`, `$routeProvider`, representa o objeto que dá acesso às configurações de rotas. Uma rota é configurada na chamada do método `when()`, que recebe como parâmetros:
- a rota (representada por uma string); e
- um objeto que indica qual template será utilizado (atributo `templateUrl`) e qual controller (atributo `controller`).

Neste caso, o aplicativo trata três rotas:
- `/cidades`: tratada pelo controller `CidadesListaController` e pela view `/views/cidades/lista.html`;
- `/cidades/editor`: tratada pelo controller `CidadesEditorController` e pela view `/views/cidades/editor.html`;
- `/cidades/:id/editor`: tratada da mesma forma que a rota anterior, com a diferença que esta rota possui um **parâmetro** chamado `id`.

Além disso, se nenhuma destas rotas for atendida, a função `otherwise()` indica o que tem que ser feito. Neste caso, ela indica que será feito um redirecionamento para `/cidades`.

## CidadesListaController

O controller `CidadesListaController` é responsável por listar as cidades e dar acesso às funções de exclusão e edição:

```javascript
angular.module('cidades').controller('CidadesListaController',
function($scope, $http, $location){
    $http.get('dados/cidades.json').success(function(dados){
        $scope.cidades = dados;
    });

    $scope.excluir = function(index) {
        if (confirm('Tem certeza que deseja excluir esta cidade?')) {
            $scope.cidades.splice(index, 1);
        }
    };

    $scope.editar = function(index) {
        $location.path('/cidades/' + index + '/editor');
    }
});
```

Neste caso, na lista de dependências do controller, além do serviço `$http`, está sendo utilizado o serviço `$location`. `$location` é o serviço que permite manipular a barra de endereços do navegador. O código é praticamente o mesmo do que já foi visto no aplicativo `app-cidades-http`, com a diferença de que a função `editar()` usa o serviço `$location` para navegar para o editor de cidades. Isso é feito com a chamada da função `path()`, que recebe como parâmetro uma string que representa a nova rota. Neste caso, a nova rota será `/cidades/<id>/editor` (onde `<id>` representa o parâmetro `index` -- o índice da cidade na lista de cidades).

## CidadesEditorController

O controller `CidadesEditorController` realiza a função de cadastro (nova cidade e editar cidade). Como os dados estão sendo armazenados em um arquivo estático (`/dados/cidades.json`) o aplicativo não insere, altera ou exclui dados, específicamente (não que isso não seja possível):

```javascript
angular.module('cidades').controller('CidadesEditorController',
function($scope, $http, $routeParams, $location){
    $http.get('dados/estados.json').success(function(dados){
        $scope.estados = dados;
    });

    $http.get('dados/cidades.json').success(function(dados){
        $scope.cidades = dados;

        if ($routeParams.id) {
            $scope.cidade = $scope.cidades[$routeParams.id];
        }

    });

    $scope.salvar = function(cidade) {
        $location.path('/cidades');
    };

    $scope.cancelar = function() {
        $location.path('/cidades');
    };
});
```

Na lista de dependências estão: `$scope`, o serviço `$http`, o serviço `$routeParams` (que dá acesso aos parâmetros da rota) e `$location`. Como o parâmetro da rota em questão chama-se `id`, o mesmo é acessado por meio de `$routeParams.id`. Neste caso, no momento em que os dados do arquivo `/dados/cidades.json` são carregados, a cidade atual recebe a cidade cujo índice do vetor de cidades corresponde ao `id`.

As funções `salvar()` e `cancelar()` modificam a rota para que o aplicativo apresenta a lista de cidades novamente, por meio da função `$location.path()`.

Para executar o aplicativo de exemplo que acompanha este material (`app-cidaes-route`) clone o [repositório de códigos-fonte de exemplo](https://github.com/jacksongomesbr/livro-web-codigo-fonte) (branch `gh-pages`) e, no diretório `/angularjs/app-cidades-route`, execute o comando:

```
npm install
```

Isso fará com que os módulos necessários para o funcionamento do aplicativo sejam devidamente instalados.

Posteriormente, acesse o aplicativo via servidor HTTP local.
