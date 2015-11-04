# Modelo de Arquitetura API - Cliente

Com base no que já foi visto até o momento, pode-se evoluir em sentido de arquitetura do software. Esta seção apresenta informações sobre a arquitetura de uma solução baseada em API REST e o consumo da mesma por um cliente. Para demonstrar o software criado sobre esta arquitetura, o contexto do software é um gerenciador de dados de cidades (com CRUD para Estados e Cidades).

## Arquitetura da solução

A figura a seguir apresenta a arquitetura da solução proposta nesta seção do livro.

![](arquitetura-aplicativo-api-cliente.jpg)

Os componentes da arquitetura são:

|Componente         |Descrição                      |
|-------------------|-------------------------------|
|Backend            |Visão geral do lado servidor. Acessado pelo Frontend|
|API REST           |Software construído sobre PHP e Silex. Contém: Controllers, Acesso a Dados e o Banco de dados|
|Cliente            |Software construído sobre HTML e Angular. Contém: Controllers, Lógica de Negócio, Comunicação com a API REST e Views|

A figura também apresenta os fluxos de comunicação entre os componentes:
- O usuário acessa o **Aplicativo**, que acessa mais diretamente o **Frontend**
- O usuário acessa mais diretamente o **Frontend** (**Views**), que comunica-se com o **Backend** por meio da **Comunicação com a API REST** (componente utilizado pela **Lógica de Negócio** - **Controllers**)
- O **Backend**, construído sobre PHP e Silex, contém os **Controllers**, que contêm a **Lógica de negócio** e acessam o **Banco de Dados** por meio do **Acesso a Dados**

A seguir, as seções seguintes apresentam cada componente de forma detalhada.

## Backend

O Backend representa o *lado servidor*. Utilizando Silex, o Backend fornece uma API REST que acessa o Banco de Dados para realizar as operações CRUD.

### Banco de Dados

O Banco de Dados armazena dados de cidades e Estados. A figura a seguir ilustra a estrutura do banco de dados.

![](modelo-er-cidades.jpg)

### API REST

A API REST, desenvolvida sobre Silex, atende as seguintes rotas:

|Rota|Método|Descrição|
|----|------|---------|
|`/estados`|GET|Retorna a lista de Estados. Um `array` cujos elementos são objetos com três atributos: `id`, `nome` e `uf`|
|`/estados`|POST|Salva um Estado no banco de dados|
|`/estados/{id}`|DELETE|Exclui o Estado com identificador igual ao parâmetro `id`|

## Frontend

O Frontend representa o *lado cliente*. Utilizando Angular, o Frontend possui uma estrutura que permite o gerenciamento dos dados. As telas são gerenciadas por meio do módulo `ngRoute`. Os controllers utilizam o serviço `$http` para criar requisições HTTP à API. O trecho de código a seguir apresenta um trecho de código com o `EstadosListaController`, um controller que gerencia a tela de lista de Estados.

```php
.controller('EstadosListaController', function($scope, $http){
    $http.get(API_BASE + '/estados')
    .then(function(response){
        $scope.estados = response.data;
    });

    $scope.excluir = function(estado, index) {
        if (confirm('Tem certeza que deseja excluir o Estado ' + estado.nome + '?')) {
            $http.delete(API_BASE + '/estados/' + estado.id)
            .then(function(response){
                $scope.estados.splice(index, 1);
            });
        }
    };
});
```

No início do controller, é feita uma requisição GET para a API, rota `/estados`. Quando o resultado for retornado, o `array` de Estados, ele é atribuído a `$scope.estados`, que está vinculado à view para apresentação da lista de Estados.

A função `excluir()` realiza uma requisição DELETE para a API, rota `/estados/{id}`, informando o identificador do Estado a ser excluído. Neste caso, quando a requisição for atendida com sucesso, o objeto `$scope.estados`, que está vinculado à view que lista os Estados, é modificado, excluindo o índice do Estado na lista. Uma alternativa seria realizar uma nova requisição GET para a API, retornando a lista de Estados.
