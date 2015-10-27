# Diretiva ng-click

A diretiva `ng-click` é utilizada para representar um comportamento de clique do mouse em um elemento, por exemplo um botão. O conteúdo da diretiva (o atributo) é um código JavaScript. O exemplo a seguir demonstra a utilização desta diretiva.

{%ace lang='html'%}
{%raw%}
!INCLUDE "app-click/index.html"
{%endraw%}
{%endace%}

{%ace lang='javascript'%}
{%raw%}
!INCLUDE "app-click/app.js"
{%endraw%}
{%endace%}

Você pode ver o exemplo em funcionamento [aqui](http://embed.plnkr.co/b3R5JbdIintYmk8HUkcx/preview).

No controller, no arquivo `app.js`, na linha 6 é definida a função `salvar()`, que aceita como parâmetro o nome da cidade a ser inserida no vetor `cidades`.

Na view, no arquivo `index.html`, na linha 42 está presente o elemento `button` e nele é aplicada a diretiva `ng-click`. Neste caso, a diretiva indica que será chamada a função `salvar()` passando como parâmetro o model `nova_cidade` (vinculado ao `input` da linha 40) e, posteriormente, o valor do model será uma string vazia.

> **Info** *Exercício*

> O exemplo anterior implementa parte das funcionalidades de um CRUD. Neste caso, está implementando a consulta (listagem dos dados) e o cadastro. Implemente a funcionalidade de excluir uma cidade.
