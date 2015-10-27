# Model complexo

Os exemplos apresentados até o momento lidaram com estruturas mais básicas para o model. O Angular também permite trabalhar com model com uma estrutura mais complexa, como será visto nesta seção. Primeiro, utilize o aplicativo a seguir.

O arquivo `index.html`:

{%ace lang='html'%}
{%raw%}
!INCLUDE "app-model-complexo/index.html"
{%endraw%}
{%endace%}

O arquivo `app.js`:

{%ace lang='javascript'%}
{%raw%}
!INCLUDE "app-model-complexo/app.js"
{%endraw%}
{%endace%}

Você pode ver o exemplo em funcionamento [aqui](http://embed.plnkr.co/elrnz2OTGP0zrXruwIbp/preview).

Há duas entidades no modelo de dados: `Cidade` e `Estado`. A figura a seguir apresenta um diagrama de classes UML.

![Diagrama UML das classes Cidade e Estado](http://yuml.me/32cb4654)

A classe `Estado` possui `uf` e `nome`, enquanto a classe `Cidade` possui `estado` e `nome`. Assim, há um relacionamento entre as duas entidades. Estas entidades estão definidas no arquivo `app.js`, entre as linhas 3 e 11.

Ainda no arquivo `app.js`, entre as linhas 25 e 29 é definido um vetor de estados (`$scope.estados`). Já entre as linhas 31 e 38, um vetor de cidades (`$scope.cidades`). A função `salvar()`, linha 40, acrescenta uma cidade no vetor.

No arquivo `index.html`, no front-end, há duas seções principais: a primeira apresenta a lista de cidades, com opção de filtro; a segunda contém o formulário de cadastro da cidade. Para a lista de cidades, entre as linhas 42 e 46 são criadas as linhas da tabela que apresenta a lista. Importante notar que, na linha 44, há o código <code>{%raw%}<td>{{cidade.estado.nome}}</td>{%endraw%}</code>. Perceba que está sendo utilizado `cidade.estado.nome` ou seja, o nome do estado da cidade.

Para o cadastro da cidade, os elementos do fomrulário estão vinculados ao model da seguinte forma:
- o `input` representa o nome da cidade e está vinculado a `cidade.nome` (linha 57);
- o `select` representa o Estado e está vinculado a `cidade.estado.uf` (linha 61).

Perceba que, no último caso, as opções do select são formadas pelo uso da diretiva `ng-repeat` (linha 62).

Importante notar que a vinculação dos elementos do formulário funcionam de maneira a simplificar a utilização do model, uma vez que é possível utilizar algo como `cidade.estado.uf` para indicar que o item selecionado indica a UF do Estado para a cidade que está sendo cadastrada.
