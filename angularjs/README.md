# AngularJS

> **Referências**

> O material desta seção é construído com base na documentação oficial do AngularJS (https://docs.angularjs.org/guide/introduction), no tutorial oficial do AngularJS (https://docs.angularjs.org/tutorial), no curso de Angular do W3Schools (https://docs.angularjs.org/tutorial) e no curso de Angular do Codeschool (http://www.w3schools.com/angular/default.asp).

## O que é o Angular?

AngularJS é um framework estrutural para aplicações web. Diferentemente de uma **biblioteca**, que fornece um conjunto de funções reutilizáveis (como o jQuery) e de **frameworks** que implementam aplicações web de formas particulares, o Angular procura um meio termo, minimizando a distância entre uma abordagem orientada ao documento HTML e novas funcionalidades e construções necessárias pela aplicação web. De qualquer forma, nos referimos ao Angular como um **framework JavaScript**.

Um dos principais recursos do Angular são as **diretivas**, que estendem o HTML de diversas formas, como veremos neste material. A tabela a seguir apresenta estes conceitos e recursos.

|Conceito|Descrição|
|--------|---------|
|Template|Fornece marcação adicional ao HTML|
|Diretivas|Estendem o HTML com atributos e elementos|
|Model|O dado apresentado para o usuário na view e com o qual o usuário interage|
|Escopo|Contexto no qual o **model** é armazenado para que controllers, diretivas e expressões possam acessá-lo|
|Expressões|Acessa variáveis e funções do escopo|
|Compilador|Analisa o template e instancia diretivas e expressões|
|Filtro|Formata o valor de uma expressão para apresentar ao usuário|
|View|O que o usuário vê (o DOM)|
|Data binding|Sincroniza dado entre o model e a view|
|Controller|A lógica de negócio entre views|
|Injector|Container de injeção de dependência|
|Módulo|Um container para diferentes partes de um aplicativo, incluindo controllers, serviços, filtros, diretivas que configuram o injetor|
|Serviço|Lógica de negócio reutilizável, independente de views|

## Primeiro exemplo

O exemplo a seguir ilustra alguns dos conceitos, que serão destacados posteriormente.

{%ace lang="html"%}
{%raw%}
!INCLUDE "app-intro/index.html"
{%endraw%}
{%endace%}

Você pode ver o exemplo em funcionamento [aqui](http://embed.plnkr.co/Q2DapCZkodDahG1k21AT/preview).

## Conceitos iniciais

A diretiva mais importante de um aplicativo angular é a `ng-app`. Ela deve estar presente no HTML, no elemento de mais alto nível, que conterá os demais elementos do aplicativo. Diretivas são aplicadas no HTML de diversas formas. No primeiro exemplo, a diretiva `ng-app` foi aplicada a um elemento `div`, na linha 9, como um atributo. Se preferir utilizar um elemento de mais alto nível ainda, pode aplicar a diretiva `ng-app` no elemento `html`.

A diretiva `ng-init`, no elemento `div` da linha 9, permite utilizar código para inicializar elementos do model. Neste caso, dois elementos do model, chamados `quantidade` e `custo`, são inicializados com valores `1` e `2`, respectivamente. O conteúdo da diretiva, neste caso, é código JavaScript de atribuição de valores a variáveis.

Nas linhas 12 e 15, respectivamente, estão as diretivas `ng-model` que indicam para o Angular que os campos de texto estão vinculados a elementos do model. O valor da diretiva é o nome do model ao qual está associado o elemento `input`. O processo de vinculação de dados (*data binding*) é um dos elementos-chave do Angular. Por meio deste recurso, qualquer atualização no model será automaticamente visualizada pelo usuário e qualquer atualização no `input` gerá uma atualização do model (isso é chamado de *two-way data binding*).

Na linha 18 há uma expressão baseada no model e um filtro. Expressões estão presentes entre chaves duplas. Neste caso, a primeira parte da expressão (`quantidade * custo`) corresponde à multiplicação entre dois elementos do model: `quantidade` e `custo`. Posteriormente, após o símbolo `|` está o filtro `currency`. Filtros formatam valores. Neste caso, o filtro `currency` formata um valor para apresentação em formato de moeda.
