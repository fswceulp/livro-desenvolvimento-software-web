# Passo 2 - Templates do Angular

Uma vez que o **Passo 1** definiu a estrutura da interface gráfica, o *template estático*, o objetivo do **Passo 2** é utilizar os recursos de template do Angular para que o aplicativo se torne dinâmico, carregando dados dos telefones de uma fonte de dados.

O resultado final deste passo é ilustrado pela figura a seguir.

![](http://i.imgur.com/PX4XpD4.jpg)

O aplicativo apresenta uma lista de telefones, com foto, nome e um botão para visualizar detalhes de cada telefone (que ainda não está funcionando).

Uma das maneiras preferidas de criar aplicativos Angular é utilizar o padrão de projeto arquitetural [**MVC (Model-View-Controller)**](https://pt.wikipedia.org/wiki/MVC). Ao utilizar este padrão, a estrutura do aplicativo permitirá separar código e responsabilidades, trazendo maior organização e facilidade de manutenção. Em resumo, cada um dos componentes é assim definido:
* **Controller**: representa a lógica de negócio (onde ficará o código JavaScript)
* **Model**: é uma abstração dos dados (a lista de telefones, por exemplo)
* **View**: é a interface gráfica; sob domínio do **controller**, apresenta o **model** (os dados) e efetua a interação com o usuário.

## View e Template

No Angular, uma **view** é uma projeção do **model** por meio do template HTML, ou seja, é a apresentação dos dados. Na verdade, além de apresentar os dados, a **view** serve como receptora da interação com o usuário e repassa dados dessa interação para o **controller**. Quando o **model** for alterado, por exemplo, o Angular irá procurar pelas vinculações que usam o **model** e fará as atualizações necessárias.

No **Passo 1**, o arquivo `index-1.html` apresenta a lista de telefones utilizando um template estático. Entretanto, não é interessante que o aplicativo seja criado desta forma, pois quaisquer alterações nos dados implicariam em alterações manuais na página (no template estático). A melhor abordagem, portanto, é separar conteúdo (dados) da apresentação (interface gráfica).

O código a seguir apresenta parte do arquivo `index.html`:

```html
<!doctype html>
<html lang="pt-br" ng-app="phonecat">
<head>
...
  <link rel="stylesheet" href="app.css">
...
  <script src="app.js"></script>
</head>
<body>
<div class="container" ng-controller="Home">
    <h1>Telefones</h1>
    <ul id="listaDeTelefones">
        <li ng-repeat="telefone in telefones">
            <div class="panel panel-default">
                <div class="panel-body">
                        <img class="img-responsive" ng-src="{{telefone.images[0]}}">
                        <div class="caption text-center">
                            <h4>{{telefone.name}}</h4>
                        </div>
                </div>
                <div class="panel-footer text-center">
                    <a href="#" class="btn btn-default" role="button">
                        <i class="glyphicon glyphicon-zoom-in"></i> Detalhes
                    </a> 
                </div>
            </div>
        </li>
    </ul>  
</div> <!--/container-->
</body>
</html>
```

Há várias coisas interessantes acontecendo aqui. As seções a seguir apresentam detalhes.

### Identificando a raiz do aplicativo com a diretiva `ngApp`

Anteriormente, o código indicava que o elemento `html` era marcado com a diretiva `ngApp` (atributo `ng-app`). Entretanto, não identificava qual *módulo do Angular* era responsável por servir como ponto de partida do aplicativo. Um *módulo* é uma das formas principais de organização de código no Angular. Além disso, é também uma das maneiras de modularização de código, permitindo que usuários criem seus próprios módulos e os distribuam.

O código, agora, indica que o módulo se chama `phonecat`:

```html
<html lang="pt-br" ng-app="phonecat">
```

### Arquivo JavaScript do aplicativo

Parte importante do aplicativo está separada no arquivo `app.js`. O conteúdo deste arquivo será visto posteriormente, mas importante é considerar que ele contém a lógica de negócio da definição do módulo `phonecat`.

### Diretiva `ngRepeat`

O elemento `li` do arquivo `index.html` tem o atributo `ng-repeat`. Este atributo representa a diretiva `ngRepeater`, que faz com que o elemento seja repetido conforme uma determinada situação. 

O valor do atributo `ng-repeat` é `telefone in telefones`. Assim, a diretiva `ngRepeater` indica ao Angular para criar um elemento `li` para cada `telefone` da lista `telefones` utilizando o conteúdo do `li` como um template. Assim, as expressões contidas no `li` serão devidamente interpretadas pelo Angular, como em:

```html
<h4>{{telefone.name}}</h4>
```

Neste caso, a expressão indica que será substituída pelo valor do atributo `name` de `telefone` (sim, valem todos os princípios da Programação Orientada a Objetos aqui também).

### Diretiva `ngController`

O elemento `body` tem o atributo `ng-controller`, que representa a diretiva `ngController`. Seu valor é `Home`, o que indica que o Angular irá procurar, no módulo `phonecat`, um **controller** com este nome. O conteúdo do elemento `body` serve como `template` para o **controller** `Home`. 

A diretiva `ng-repeat` está utilizando um objeto `telefones` (um `array`) que está definido no **controller** `Home`. A imagem a seguir ajuda a ilustrar esse comportamento.

![](http://i.imgur.com/82Ri1T3.png)

O **escopo raiz** é criado para o aplicativo. O **escopo de "Home"** pertence ao **controller** `Home`, que herda do **escopo raiz**. No `ng-repeat` são criados **escopos locais**, que herdam do **escopo de "Home"**. A herança de escopo é um conceito que permite a um escopo "filho" acessar elementos (como objetos e funções) do escopo "pai".

### Diretiva `ngSrc`

O código do template para apresentar a foto do produto é:

```html
<img class="img-responsive" ng-src="{{telefone.images[0]}}">
```

No elemento `img` é utilizado o atributo `ng-src`, que representa a diretiva `ngSrc`. Esta diretiva é utilizada como substituta da diretiva `src`. O motivo de utilizá-la é que utilizar simplesmente `src` não fará com o que o Angular interprete o valor da expressão. Neste caso, o valor `{{telefone.images[0]}}` é interpretado pelo Angular como o primeiro elemento de `telefone.images` (um `array`).

## Módulo `phonecat`, Model e Controller

O módulo `phonecat` está definido no arquivo `app.js`.

```javascript
'use strict';

angular.module('phonecat', []);
```

Na função `angular.module()` o primeiro parâmetro é o nome do módulo, enquanto o segundo é a lista de dependências do módulo (mais sobre isso depois).

> Exercício #1
> Qual a finalidade de utilizar `'use strict';` na primeira linha do arquivo JavaScript?

A partir da definição do módulo, são criados os **controllers**. Na prática, a função `angular.module()` retorna um objeto que pode ser atribuído a uma variável.

```javascript
var phonecat = angular.module('phonecat', []);
```

O objeto fornece a função `controller()` que aceita dois parâmetros:
* o nome do **controller**
* uma função que define o código do **controller**

O trecho de código:

```javascript
angular.module('phonecat', []).
	controller('Home', function() { 
	... 
	});
```

é similar a este:

```javascript
var phonecat = angular.module('phonecat', []);

phonecat.controller('Home', function() { 
... 
});
```

Fica a critério do programador a maneira preferida.

Os argumentos da função (anônima ou não) que é passada como segundo argumento da função `controller()` são tratados pelo **injetor de dependência** do Angular. O trabalho do **injetor de dependência** é instanciar classes de modo que o código do **controller** funcione adequadamente.

```javascript
angular.module('phonecat', [])
	.controller('Home', function($scope) { 
	... 
	});
```

Neste caso, a função do **controller** possui um parâmetro `$scope`. 

> **Importante:** Certos objetos cujos nomes começam com `$` são particulares do Angular. Por isso, não use `$` nos nomes de suas variáveis ou seus objetos. 

O **injetor de dependência** identifica o parâmetro `$scope` e trata de instanciá-lo para que ele esteja disponível para uso. 

### Objeto `$scope`

O objeto `$scope` é utilizado para fornecer acesso ao **escopo do controller**. Voltando à figura anterior, por meio de `$scope` é que acontecerá uma interação entre os três componentes do modelo **MVC**. Esta interação é chamada *two-way data-binding* (ou vinculação de via dupla). Isso significa que uma alteração no **model** realizada na **view** será sincronizada no **controller**, e vice-versa. Além disso, o objeto `$scope` também pode conter funções. Por exemplo:

```javascript
angular.module('phonecat', []).
	controller('Home', function($scope) { 
		$scope.detalhes = function(telefone) {
		...
		};
	});
```

Esta função poderá ser chamada na **view**, por exemplo, no clique de um botão. Mais sobre isso será visto posteriormente.

O modelo de dados (**model**) utilizado no aplicativo contém um `array` de objetos (telefones). Sua definição ocorre no `$scope` do **controller** `Home` e é isso que permite que `telefones` esteja disponível na **view** (*template dinâmico*, como visto antes).

```javascript
angular.module('phonecat', []).
	controller('Home', function($scope) { 
		$scope.telefones = [
			...
		];
	});
```

O conteúdo do `array` `$scope.telefones` é composto de objetos que representam dados de telefones. Por enquanto, a **view** precisa (espera) cada um destes objetos tenha os atributos:
* `name`: o nome do telefone
* `images`: um `array` de imagens (`array` de `string` cujos elementos representam nomes de arquivos de fotos do telefone)

O trecho de código a seguir ilustra a definição de `$scope.telefones`.

```javascript
'use strict';

angular.module('phonecat', [])
    .controller('Home', function($scope) {
        $scope.telefones = [
			{
			    "id": "dell-streak-7", 
			    "images": [
			        "img/phones/dell-streak-7.0.jpg", 
			        "img/phones/dell-streak-7.1.jpg", 
			        "img/phones/dell-streak-7.2.jpg", 
			        "img/phones/dell-streak-7.3.jpg", 
			        "img/phones/dell-streak-7.4.jpg"
			    ], 
			    "name": "Dell Streak 7"
			}
        ];
    });
```

> **Experimento #1**
> 1. Apresente a quantidade total de telefones na **view**.
> 2. Adicione a propriedade `brand` (marca) nos telefones e apresente-a na **view** abaixo do nome do telefone