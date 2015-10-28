# Serviço http

O serviço `http` é um componente do Angular que facilita a comunicação com serviços HTTP remotos utilizando o objeto XMLHttpRequest do browser. Este serviço fornece os seguintes métodos:
- `get()`
- `post()`
- `head()`
- `put()`
- `delete()`
- `jsonp()`
- `patch()`

## Aplicativo app-cidades-http

O método `$http.get()` recebe como parâmetro a URL de requisição. O aplicativo `app-cidades-http` é uma versão modificada do aplicativo `app-cidades-crud` que utiliza dois arquivos para representar os dados de Estados e Cidades.

O arquivo `dados/estados.json` contém a seguinte estrutura:

```javascript
[
    {
        "uf": "TO",
        "nome": "Tocantins"
    },
    ...
]
```

O arquivo `dados/cidades.json` contém a seguinte estrutura:

```javascript
[
    {
        "estado" : {"uf": "TO"},
        "nome": "Araguaína"
    },
    ...
]
```

Ambos representam, respectivamente, os dados de Estados e Cidades.

### Carregando os dados

O controller `CidadesController` usa o serviço `$http` para carregar os dados dos arquivos:

```javascript
$http.get('dados/estados.json').success(function(dados){
    $scope.estados = dados;
});

$http.get('dados/cidades.json').success(function(dados){
    $scope.cidades = dados;
});
```

Assim, o método `$http.get()` retorna uma **Premissa**, um objeto que permite definir funções *callback* para situações de sucesso ou falha. No caso do trecho de código anterior, a função `success()` define a *callback* utilizada quando os dados são carregados com sucesso (que é o esperado). Quando os dados são carregados com sucesso, eles são atribuídos aos elementos correspondentes do `$scope`.

Você pode ver o exemplo em funcionamento [aqui](http://jacksongomesbr.github.io/livro-web-codigo-fonte/angularjs/app-cidades-http/).
