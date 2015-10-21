# Diretiva ng-click

A diretiva `ng-click` é utilizada para representar um comportamento de clique do mouse em um elemento, por exemplo um botão. O conteúdo da diretiva (o atributo) é um código JavaScript. O exemplo a seguir demonstra a utilização desta diretiva.

<iframe src="https://embed.plnkr.co/b3R5JbdIintYmk8HUkcx/preview" width="100%" height="300"></iframe>

No controller, no arquivo `app.js`, na linha 6 é definida a função `salvar()`, que aceita como parâmetro o nome da cidade a ser inserida no vetor `cidades`.

Na view, no arquivo `index.html`, na linha 42 está presente o elemento `button` e nele é aplicada a diretiva `ng-click`. Neste caso, a diretiva indica que será chamada a função `salvar()` passando como parâmetro o model `nova_cidade` (vinculado ao `input` da linha 40) e, posteriormente, o valor do model será uma string vazia.

> **Info** *Exercício*

> O exemplo anterior implementa parte das funcionalidades de um CRUD. Neste caso, está implementando a consulta (listagem dos dados) e o cadastro. Implemente a funcionalidade de excluir uma cidade.
