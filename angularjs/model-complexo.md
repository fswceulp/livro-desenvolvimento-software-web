# Model complexo

Os exemplos apresentados até o momento lidaram com estruturas mais básicas para o model. O Angular também permite trabalhar com model com uma estrutura mais complexa, como será visto nesta seção. Por "estrutura mais complexa" e por "model complexo" quero dizer que o aplicativo é um CRUD completo e que o model possui uma formulação com duas entidades relacionadas entre si.

## Estrutura do aplicativo

O aplicativo realiza o CRUD de cidades. As funcionalidades são:
- listar cidades (com filtro e ordenação)
- cadastrar cidade
- excluir cidade
- editar cidade

Há dois arquivos no aplicativo: `app.js` e `index.html`. O primeiro contém a definição do módulo e do controller, respectivamente: `cidades` e `CidadesController`. O `app.js` contém, ainda, a definição da estrutura de dados usada no model e o `CidadesController` contém a lógica para o CRUD e definir dados iniciais (estados e cidades).

O arquivo `index.html` fica com a responsabilidade de representar a view e o comportamento do aplicativo. Ele contém, essencialmente, código HTML e utiliza as diretivas do angular para que seja possível a comunicação com o módulo `cidades` e seu conteúdo.

## Model

Há duas entidades no modelo de dados: `Cidade` e `Estado`. A figura a seguir apresenta um diagrama de classes UML.

![Diagrama UML das classes Cidade e Estado](http://yuml.me/32cb4654)

A classe `Estado` possui `uf` e `nome`, enquanto a classe `Cidade` possui `estado` e `nome`. Assim, há um relacionamento entre as duas entidades. Estas entidades estão definidas no arquivo `app.js`.

```javascript
function Cidade(estado, nome) {
    this.estado = estado;
    this.nome = nome;
}

function Estado(uf, nome) {
    this.uf = uf;
    this.nome = nome;
}
```

Entretanto, é bem verdade que o JavaScript não requer que estas entidades estejam definidas como "classes", portanto, este tipo de procedimento não é estritamente necessário.

## Lógica de negócio (CRUD)

Como já disse, o CRUD está definido no `CidadesController` (arquivo `app.js`) no qual está definida a lógica de negócio para a manipulação do model e a comunicação com a view. As seções a seguir fazem referência ao `CidadesController` e explicam seu funcionamento.

### Definição dos dados

O aplicativo começa com alguns dados pré-definidos. Esta etapa poderia ser substituída por uma comunicação com um banco de dados (se estiver disponível).

```javascript
$scope.estados = [
    new Estado('TO', 'Tocantins'),
    new Estado('SP', 'São Paulo'),
    new Estado('MG', 'Minas Gerais')
];

$scope.cidades = [
    new Cidade(encontrarEstado('TO'), 'Araguaína'),
    new Cidade(encontrarEstado('TO'), 'Gurupi'),
    new Cidade(encontrarEstado('TO'), 'Palmas'),
    new Cidade(encontrarEstado('TO'), 'Porto Nacional'),
    new Cidade(encontrarEstado('TO'), 'Paraíso do Tocantins'),
    new Cidade(encontrarEstado('SP'), 'São Paulo'),
    new Cidade(encontrarEstado('MG'), 'Belo Horizonte')
];
```

Em resumo, o código cria dois elementos no `$scope`: `estados`, que representa um vetor de Estados, e `cidades`, que representa um vetor de Cidades. A função `encontrarEstado()` recebe como parâmetro uma UF, pesquisa a lista de Estados e retorna o objeto (Estado) correspondente. Importante lembrar que é necessário fazer com que estes objetos estejam no `$scope` para que a view consiga acessar estes dados.

Uma parte importante do código que não está explícita é que o controller também trata de uma "cidade atual", que representa a cidade que está sendo cadastrada ou editada no momento. Isso ficará mais visível a seguir.

### Excluir

A funcionalidade de exclusão é representada pela função `$scope.excluir()`:

```javascript
$scope.excluir = function(index) {
    $scope.cidades.splice(index, 1);
};
```

A função recebe como parâmetro o índice da cidade a ser excluída e usa a função `splice()` para remover um elemento do vetor `$scope.cidades`.

### Salvar

A funcionalidade de salvar dados representa dois aspectos: o cadastro de uma [nova] cidade e a atualização (edição) dos dados de uma cidade. Esta funcionalidade é representada pela função `$scope.salvar()`:

```javascript
$scope.salvar = function(cidade) {
    if (!$scope.cidade.edit) {
        var c = angular.copy(cidade);
        $scope.cidades.push(c);
        cidade.nome = "";
        cidade.estado = null;
    } else {
        $scope.cidade = null;
    }
};
```

A função recebe como parâmetro um objeto `Cidade` e, como já disse, realiza duas tarefas. O código verifica se o objeto `$scope.cidade` (a cidade atual -- e seria o mesmo que usar o parâmetro `cidade`) não possui um atributo `edit`. Se for este o caso, o modo é o de *cadastro*. Neste caso, é feita uma cópia do objeto, a qual é inserida no vetor `$scope.cidades` por meio da função `push()`. Na sequência, os dados do objeto são limpos, para garantir que o formulário de cadastro apresente os valores padrões. O segundo caso (se o `$scope.cidade` possuir o atributo `edit`) é o de *edição*. Neste caso, o código não realiza uma tarefa mais específica, senão redefinir a referência de `$scope.cidade`. Por que isso acontece?

O controller `CidadesController` expõe para a view a função `$scope.editar()`:

```javascript
$scope.editar = function(cidade) {
    $scope.cidade = cidade;
    $scope.cidade.edit = true;
}
```

Esta função recebe um objeto `Cidade` como parâmetro e o atribui a `$scope.cidade` (a cidade atual). Neste caso, o código faz com que a cidade atual fique em *modo de edição*, por assim dizer. Como já visto, a função `$scope.salvar()` leva em consideração a existência de um atributo `edit` no objeto que representa a cidade que está sendo salva. Assim, a última linha da função `$scope.editar()` cria o atributo `edit` no objeto `cidade` atual e define seu valor como `true`.

Uma vez definida a lógica de negócio do aplicativo, a seção a seguir apresenta a definição da view.

## View

A view, representada pelo arquivo `index.html`, contém a interface gráfica (o visual e o comportamento) do aplicativo. A estrutura da interface gráfica é representada por duas seções:
- à esquerda, a lista de cidades, com opção de filtro; e
- à direita, o formulário de cadastro e edição.

Para estruturar a interface desta maneira (em colunas) foram utilizados recursos do Bootstrap.

### Lista de cidades

Para a lista de cidades, a parte principal está no trecho de código a seguir:

```html {%raw%}
<tr ng-repeat="cidade in cidades | filter:q | orderBy:estado.uf">
    <td>{{$index}}</td>
    <td>{{cidade.estado.uf}}</td>
    <td>{{cidade.nome}}</td>
    <td>
        <button type="button" class="btn btn-danger btn-xs" ng-click="excluir($index)">
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </button>
        <button type="button" class="btn btn-default btn-xs" ng-click="editar(cidade)">
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
        </button>
    </td>
</tr>
{%endraw%}
```

O trecho de código em questão representa a criação das linhas da tabela que apresenta a lista de cidades. Primeiro, perceba a utilização da diretiva `ng-repeat`. Seu valor indica que o elemento `tr` será repetido conforme o vetor `cidades` (definido no `CidadesController`), que cada elemento do vetor será representado, na repetição, por um objeto chamado `cidade`, que o vetor é filtrado pelo elemento `q` (vinculado a um elemento `input`) e ordenado por `estado.uf`. Perceba que a ordenação leva em consideração a estrutura do conteúdo do vetor, ou seja, cada elemento é do tipo `Cidade`, que possui um atributo `estado`, que é do tipo `Estado`, que possui um atributo `uf`.

A primeira coluna apresenta o índice da lista (por meio de `$index`, uma das propriedades automáticas da diretiva `ng-repeat`). A segunda coluna apresenta a UF do Estado da Cidade (`cidade.estado.uf`) e a terceira coluna apresenta o nome da cidade (`cidade.nome`).

A última coluna apresenta dois botões de ação: excluir e editar. O clique no botão excluir chama a função `excluir()` (definda no `CidadesController`) passando como parâmetro o índice atual da iteração (`$index`). O clique no botão editar chama a função `editar()` (também definida no `CidadesController`) passando como parâmetro a cidade atual da iteração (o objeto, em si). Perceba que, no caso do botão editar, o comportamento esperado é o que acontece, ou seja, os dados da cidade em questão são apresentados no formulário, para edição. Além disso, quando você editar os dados (nome e estado) a lista de cidades já será atualizada, demonstrando a edição.

### Formulário de cadastro e edição

O formulário à direita realiza a função de cadastrar e editar os dados de uma cidade. O trecho de código a seguir apresenta a parte principal desta seção do aplicativo:

```html {%raw%}
<form class="form">
    <div class="form-group">
        <label for="nomeDaCidade">Nome
        </label>
        <input type="text" id="nomeDaCidade" class="form-control"
            ng-model="cidade.nome" placeholder="Nome da cidade" required>
    </div>
    <div class="form-group">
        <label for="estado">Estado</label>
        <select class="form-control" ng-model="cidade.estado.uf">
            <option ng-repeat="estado in estados" value="{{estado.uf}}">
                {{estado.nome}}
            </option>
        </select>
    </div>
    <div>
        <button class="btn btn-default" type="button"
            ng-click="salvar(cidade)">Salvar</button>
    </div>
</form>
{%endraw%}
```

Utilizando Bootstrap, o formulário possui dois campos: nome da cidade e Estado. O primeiro campo é representado por um elemento `input`, vinculado a `cidade.nome`. O segundo campo é um elemento `select`, vinculado a `cidade.estado.uf`. Importante notar que os elementos `option` do `select` são criados por meio da diretiva `ng-repeat`, com base no vetor de Estados definido no `CidadesController`. Ainda, o atributo `value` de cada elemento `option` está vinculado a `estado.uf`.

A última parte do formulário é o botão "Salvar". No clique do botão salvar, é chamada a função `salvar()`, definida no `CidadesController`.

Você pode ver o exemplo em funcionamento [aqui](http://jacksongomesbr.github.io/livro-web-codigo-fonte/angularjs/app-cidades-crud/).
