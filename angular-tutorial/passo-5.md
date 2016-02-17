# Passo 5 - Apresentando detalhes de um telefone

O **Passo 5** acrescenta a funcionalidade que permite ao usuário ver detalhes (os dados) de um telefone. Este passo também introduz o conceito de gerenciamento de estado do aplicativo para que seja possível alternar "telas".

## Template

O arquivo `index.html` possui o trecho de código a seguir.

```html
<!doctype html>
<html lang="pt-br" ng-app="phonecat">
...
<body>
<div class="container" ng-controller="Home">
    <div ng-show="ui_estado == 'lista'">
    ...
    </div>
    <div ng-show="ui_estado == 'detalhes'">
    ...
    </div>
</div> <!--/container-->
</body>
</html>
```

Neste **Passo 5** o aplicativo possui duas telas:
* Lista de telefones
* Detalhes de um telefone

O conceito de "tela" é utilizado aqui para não confundir com "página". O aplicativo em questão (até mesmo por não ser um "web site" convencional, mas um aplicativo) não possui páginas, mas telas. 

Assim sendo, é necessária uma maneira de mudar de telas. A primeira forma de resolver isso, a usada neste passo, é bem simples: mostrar uma tela e ocultar a outra. Para isso, é utilizada a diretiva `ngShow` (atributo `ng-show`).

## Diretiva `ng-show`

A [diretiva `ng-show`](../angularjs/ng-show-hide.md) permite mostrar conteúdo com base em uma expressão. Neste caso, há uma expressão diferente para cada painel:
* Lista de telefones: expressão é `ui_estado == 'lista'`
* Detalhes de um telefone: expressão é `ui_estado == 'detalhes'`

Assim, cada diretiva (aplicada aos elementos `div` correspondentes) está associada à propriedade `ui_estado` do **model**. Se o seu valor for `lista`, então é apresentada a primeira tela. Se for `detalhes` é apresentada a segunda tela.

Com isso obtém-se o comportamento de "ocultar-e-mostrar" as telas, e o aplicativo fornece as funcionalidade esperadas.

## Diretiva `ng-click`

É necessária uma forma de mudar o valor da propriedade `ui_estado` do **model**. Uma maneira de fazer isso, respondendo a um comportamento do usuário, é permitir que o usuário clique em um botão e mostre os detalhes do telefone desejado. Este comportamento é conseguido por meio do uso da diretiva `ngClick` (atributo `ng-show`). O trecho de código a seguir apresenta a parte do arquivo `index.html` em que a diretiva `ng-click` está sendo utilizada.

```html
<ul id="listaDeTelefones">
    <li ng-repeat="...">
        <div class="panel panel-default">
            ...
            <div class="panel-footer text-center">
                <a href="#" class="btn btn-default" role="button"
                ng-click="mostrarDetalhes(telefone)">
                    <i class="glyphicon glyphicon-zoom-in"></i>
                    Detalhes
                </a> 
            </div>
        </div>
    </li>
</ul>  
```

O elemento `a` (para cada telefone) possui o atributo `ng-click`. Seu valor representa a chamada da função `mostrarDetalhes()` passando como parâmetro `telefone` (ou seja, o telefone em questão, na lista de telefones).

Isso significa que quando o usuário clicar no botão "Detalhes", será chamada uma função que está definida no controller
 (arquivo `app.js`):

```javascript
$scope.ui_estado = 'lista';
$scope.telefone = null;

$scope.mostrarDetalhes = function(telefone) {
    $scope.ui_estado = 'detalhes';
    $scope.telefone = telefone;
};
```

Desta forma, o código indica que o **model** possui três propriedades:
* `ui_estado`: é utilizada para controlar qual tela do aplicativo está visível (seu valor inicial indica que a primeira tela visível é a lista dos telefones)
* `telefone`: representa o "telefone atual" e é utilizada na tela de detalhes do telefone
* `mostrarDetalhes` é uma função que aceita como parâmetro um objeto que representa um telefone.

A função `mostrarDetalhes()` realiza duas operações:
* modifica o valor de `ui_estado` para `detalhes` (indicando que a tela de detalhes se tornará visível)
* modifica o telefone atual

## Tela de detalhes do telefone

O trecho de código a seguir apresenta a parte do arquivo `index.html` que está relacionada à tela de detalhes de um telefone.

```html
<div ng-show="ui_estado == 'detalhes'">
    <h1>
    <a href="" class="btn btn-default pull-right" role="button" ng-click="mostrarLista()">
        <i class="glyphicon glyphicon-th-large"></i> Lista
    </a>
    {{telefone.name}}
    </h1>
    <p>{{telefone.description}}</p>
</div>
```

A figura a seguir ilustra a tela de detalhes do telefone.

![](passo-5-detalhes.jpg)


