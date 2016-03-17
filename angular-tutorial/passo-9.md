# REST e Serviços

Este passo apresenta uma abordagem diferente para usar o objeto XHR (e o recurso de AJAX) introduzido no **passo 8**. De outro ponto de vista, a abordagem está mais adequadamente relacionada com a forma como dados de APIs podem ser consultados utilizando o recurso REST.

## Dependências

O módulo `angular-resource` fornece os serviços necessários para consultar serviços no formato REST. A dependência pode ser adicionada ao projeto usando `npm`:

```
npm install angular-resource --save
```

## Estrutura de arquivos

A estrutura de arquivos do projeto continua semelhante à do **passo 8**. A principal diferença é a presença do arquivo `/telefones/servico.js`. Em relação ao conteúdo dos arquivos, apenas são modificados os arquivos `index.html` e `/telefones/modulo.js`.

## Template

O arquivo `index.html` é modificado apenas para incluir os arquivos do módulo `angular-resource` e  `telefones/servico.js`:

```html
<!doctype html>
<html lang="pt-br" ng-app="phonecat">
<head>
...
  <script src="node_modules/angular/angular.min.js"></script>
  <script src="node_modules/angular-route/angular-route.min.js"></script>
  <script src="node_modules/angular-resource/angular-resource.min.js"></script>
  <script src="telefones/servico.js"></script>
  <script src="telefones/modulo.js"></script>
  <script src="app.js"></script>
...
</head>
<body>
...
</body>
</html>
```

## Módulo Telefones

O módulo **Telefones** é modificado para implementar o conceito de serviço e para alterar os controllers deste módulo para usarem o serviço criado.

### Serviço

Um **serviço** é outro mecanismo de modularização do Angular, sendo fornecido por um módulo. Assim, primeiro tem-se um módulo e, então, os serviços que ele fornece.

O arquivo `telefones/servico.js` define o módulo `phonecatServices` e o serviço `Telefones`:

```javascript
'use strict';

angular.module('phonecatServices', ['ngResource'])
    .factory('Telefones', function($resource) {
        return $resource('data/phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: { phoneId: 'phones' },
                isArray:true
            }
        });
    });
```

O módulo `phonecatServices` depende do módulo `ngResource` (`angular-resource`).

A função `factory()` representa o conceito **factory** do Angular, e recebe dois parâmetros:
1. O nome do serviço (`Telefones`, neste caso)
2. A função que define o serviço. Neste caso, é injetado o objeto `$resource` (fornecido pelo módulo `angular-resource`).

O objeto `$resource` é utilizado como uma função para a qual são passadas três parâmetros:
1. Uma rota na qual o serviço é baseado
2. Um objeto sem definição/vazio
3. Um objeto que fornece ações para o serviço REST

O objeto vazio permite definir valores-padrões para os parâmetros da rota. 

#### Rota do serviço

A rota do serviço é `data/phones/:phoneId.json`. Como já visto no **passo 8** uma rota pode possuir parâmetros. Desta forma, a rota possui o parâmetro `phoneId`.

#### Ações

As ações para os serviços REST remetem aos verbos do HTTP. As ações-padrões incluem GET, SAVE e DELETE.

Além das ações-padrões é possível fornecer ações personalizadas, o que é feito por meio do terceiro parâmetro para `$resource()`.

```javascript
{
  query: {
    method: 'GET',
    params: { phoneId: 'phones' },
    isArray:true
  }
}
```

O objeto possui o atributo `query` (que se torna o nome da ação personalizada). O conteúdo do atributo é um objeto que possui:
* atributo `method`, com valor `GET`, indicando que esta ação é uma ação que usa o verbo GET do HTTP
* atributo `params`, com valor `{phoneId:'phones'}`, indicando que o valor padrão para o parâmetro de rota `phoneId` é `phones`
* atributo `isArray`, com valor `true`, indicando que o retorno da requisição HTTP deve ser tratado como array (lista).

