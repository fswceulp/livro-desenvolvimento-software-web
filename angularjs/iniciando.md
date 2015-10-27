# Iniciando

Há várias formas de utilizar o AngularJS. Algumas delas são as seguintes:
- fazer [download](https://angularjs.org)
- usar uma CDN (como https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js)
- usar o [Plunker](plnkr.co/edit)

Independente da forma que você escolher, lembre-se que o angular estará disponível na forma de um arquivo JavaScript, portanto, basta incluí-lo na página HTML de forma apropriada.

## Estrutura do aplicativo

Um aplicativo que usa Angular está baseado no padrão arquitetural **MVC** (*Model-View-Controller*). Por causa disso, mesmo um aplicativo mais simples terá uma estrutura natural, baseada no MVC. O exemplo a seguir apresenta este aplicativo simples e a estrutura baseada no MVC. O aplicativo possui dois arquivos:
- `index.html` (view)
- `app.js` (controller)

### View

O arquivo `index.html` possui o seguinte conteúdo:

{%ace lang='html'%}
{%raw%}
!INCLUDE "app-iniciando/index.html"
{%endraw%}
{%endace%}

O arquivo `index.html` representa a **View**, ou seja, a parte visual do aplicativo. Na linha 2, a diretiva `ng-app` possui o valor `appsimples`, que é o nome do módulo que representa o aplicativo. Isso quer dizer que a lógica do aplicativo está em um módulo (um aplicativo pode possuir vários módulos e pode existir uma relação de dependência entre eles, o que será visto posteriormente).

Na linha 17, a diretiva `ng-controller` é utilizada para indicar que o elemento `body` em questão está no contexto do **Controller** chamado `HomeController`. Um **controller** é outro elemento do MVC, responsável por ligar a **view** ao **model** (e vice-versa) e representar a lógica de negócio. O restante do código HTML é responsável por apresentar uma mensagem na tela (linha 19) por meio de uma expressão.

### Controller

O arquivo `app.js` possui o seguinte conteúdo:

{%ace lang='javascript'%}
{%raw%}
!INCLUDE "app-iniciando/app.js"
{%endraw%}
{%endace%}

Pode-se perceber, na linha 3, a chamada da função `angular.module()` passando como parâmetro: o nome do aplicativo (`appsimples`) e a coleção de dependências (neste caso, nenhuma dependência necessária).

A função  `angular.module()` retorna um objeto do Angular, que possui função `controller()`. Esta função é chamada com dois parâmetros:
- o nome do controller (`HomeController`); e
- a função anônima que determina o controller.

A lista de parâmetros da função anônima define a lista de dependências do controller. Tanto para as dependências do módulo quanto para as dependências do controller, o Angular utiliza um recurso chamado **injeção de dependência**, que identifica as dependências e trata de instanciar os objetos, caso necessário.  

A função anônima que define o controller possui um parâmetro chamado `$scope`, que tem um papel especial no Angular. Na view, o que está contido no elemento no qual o controller está aplicado é gerenciado por meio do objeto `$scope`. Isso quer dizer que um model ou funções utilizadas no controller são definidos por meio deste objeto. Para exemplificar, na linha 5 é criado um elemento `nome` no model. O valor atribuído a `nome` é apresentado na view por meio de uma expressão (linha 19 do arquivo `index.html`).

Veja o aplicativo em funcionamento [aqui](http://embed.plnkr.co/pf7Spx9A6TVASWk6KGFu/preview).

Esta é a estrutura básica do aplicativo Angular baseado no MVC. Nas próximas seções, exploraremos mais dos recursos do Angular e aprenderemos sobre como incluir novos elementos nesta estrutura do aplicativo.
