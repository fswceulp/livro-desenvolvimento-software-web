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

### Diretiva `ng-show`

A [diretiva `ng-show`](../angularjs/ng-show-hide.md) permite mostrar conteúdo com base em uma expressão. Neste caso, há uma expressão diferente para cada painel:
* Lista de telefones: expressão é `ui_estado == 'lista'`
* Detalhes de um telefone: expressão é `ui_estado == 'detalhes'`

Assim, cada diretiva (aplicada aos elementos `div` correspondentes) está associada à propriedade `ui_estado` do **model**. Se o seu valor for `lista`, então é apresentada a primeira tela. Se for `detalhes` é apresentada a segunda tela.

Com isso obtém-se o comportamento de "ocultar-e-mostrar" as telas, e o aplicativo fornece as funcionalidade esperadas.

### Diretiva `ng-click`

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

Isso significa que quando o usuário clicar no botão "Detalhes", será chamada uma função que está definida no **controller**
 (arquivo `app.js`).

### Tela de detalhes do telefone

A figura a seguir ilustra a tela de detalhes do telefone.

![](passo-5-detalhes.jpg)

A tela apresenta o nome do telefone, a descrição completa e um botão que permite retornar à lista de telefones.

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

O código indica que o elemento `a` possui a diretiva `ng-click` com valor `mostrarLista()`. Isso demonstra que deve existir uma função com este nome no **controller**. Além disso, o conteúdo também indica que está vinculado à propriedade `telefone` do **model**. É importante lembrar do conceito de *escopo* para entender que `telefone` não é o mesmo objeto da lista de telefones (da diretiva `ng-repeat`). 

## Controller

O **controller**, ou seja, o arquivo `app.js`, é modificado para incluir o trecho a seguir.

```javascript
$scope.ui_estado = 'lista';
$scope.telefone = null;

$scope.mostrarDetalhes = function(telefone) {
    $scope.ui_estado = 'detalhes';
    $scope.telefone = telefone;
};

$scope.mostrarLista = function() {
    $scope.ui_estado = 'lista';
};
```

O código indica que o **model** possui quatro propriedades:
* `ui_estado`: é utilizada para controlar qual tela do aplicativo está visível (seu valor inicial indica que a primeira tela visível é a lista dos telefones)
* `telefone`: representa o "telefone atual" e é utilizada na tela de detalhes do telefone
* `mostrarDetalhes`: é uma função que aceita como parâmetro um objeto que representa um telefone e será utilizada para mostrar a tela de detalhes de um telefone
* `mostrarLista`: é uma função que será utilizada para mostrar a tela de lista de telefones

### Função `mostrarDetalhes()`

A função `mostrarDetalhes()` realiza duas operações:
* modifica o valor da propriedade `ui_estado` para `"detalhes"` (indicando que a tela de detalhes se tornará visível)
* modifica o valor da propriedade `telefone` para que seja possível apresentar informações do telefone em questão (o passado como parâmetro) 

### Função mostrarLista()

A função lista realiza apenas uma operação: modifica o valor da propriedade `ui_estado` para `"lista"`, indicando que a tela de lista de telefones se tornará visível.

O **Passo 5** adicionou funcionalidades importantes ao aplicativo e aumentou, certamente, a necessidade de atenção aos detalhes do código que tornam viáveis essas funcionalidades:
* Apresenta a lista de telefones (como nos passos anteriores)
* Apresenta detalhes de um telefone a partir do clique em um botão de "detalhes" na lista de telefones
* Permite retornar à tela de lista de telefones a partir da tela de detalhes de um telefone
* Apresenta a noção de "tela" como forma de representar "navegação" no aplicativo. Em web sites convencionais, essa mudança seria entendida como "mudança de página" ou "navegação de página".

Os passos seguintes apresentarão melhorias no aplicativo, principalmente em relação ao carregamento dos dados dos telefones e à navegação.