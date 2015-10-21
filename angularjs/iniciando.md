# Iniciando

Há várias formas de utilizar o AngularJS. Algumas delas são as seguintes:
- fazer [download](https://angularjs.org)
- usar uma CDN (como https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js)
- usar o [Plunker](plnkr.co/edit)

Independente da forma que você escolher, lembre-se que o angular estará disponível na forma de um arquivo JavaScript, portanto, basta incluí-lo na página HTML de forma apropriada.

## Estrutura do aplicativo

Um aplicativo que usa Angular está baseado no padrão arquitetural **MVC** (*Model-View-Controller*). Por causa disso, mesmo um aplicativo mais simples terá uma estrutura natural, baseada no MVC. O exemplo a seguir apresenta este aplicativo simples e a estrutura baseada no MVC.

<iframe src="https://embed.plnkr.co/pf7Spx9A6TVASWk6KGFu/preview" width="100%" height="300"></iframe>

O aplicativo possui dois arquivos principais: `index.html` e `app.js`. O arquivo `index.html` representa a **View**, ou seja, a parte visual do aplicativo. Na linha 2, a diretiva `ng-app` possui o valor `appsimples`, que é o nome do módulo que representa o aplicativo. Isso quer dizer que a lógica do aplicativo está em um módulo (um aplicativo pode possuir vários módulos e pode existir uma relação de dependência entre eles, o que será visto posteriormente).

Na linha 17, a diretiva `ng-controller` é utilizada para indicar que o elemento `body` em questão está no contexto do **Controller** chamado `HomeController`. Um **controller** é outro elemento do MVC, responsável por ligar a **view** ao **model** (e vice-versa) e representar a lógica de negócio. O restante do código HTML é responsável por apresentar uma mensagem na tela (linha 19) por meio de uma expressão.

No arquivo `app.js` está definido o módulo `appsimples`, o que é feito por meio da chamada à função `angular.module()`. Os parâmetros desta função são, respectivamente:
- o nome do módulo (neste caso, `appsimples`). O nome do módulo deve ser único (uma espécie de chave)
- a lista de dependências do módulo (falaremos sobre isso depois)

A função `angular.module()` retorna ou cria um objeto do Angular que representa o módulo (com base no nome) desta forma, na sequência o código chama a função `controller()` cujos parâmetros são:
- o nome do controller (neste caso `HomeController`)
- a função que define o controller (neste caso, uma função anônima)

A lista de parâmetros da função que define a lista de dependências do controller. Tanto para as dependências do módulo quanto para as dependências do controller, o Angular utiliza um recurso chamado **injeção de dependência**, que identifica as dependências e trata de instanciar os objetos, caso necessário.  

A função que define o controller possui um parâmetro chamado `$scope`, que tem um papel especial no Angular. Na view, o que está contido no elemento no qual o controller está aplicado é gerenciado por meio do objeto `$scope`. Isso quer dizer que um model ou funções utilizadas no controller são definidos por meio deste objeto. Para exemplificar, na linha 5 é criado um elemento `nome` no model. O valor atribuído a `nome` é apresentado na view por meio de uma expressão (linha 19 do arquivo `index.html`).

Esta é a estrutura básica do aplicativo Angular baseado no MVC. Nas próximas seções, exploraremos mais dos recursos do Angular e aprenderemos sobre como incluir novos elementos nesta estrutura do aplicativo.
