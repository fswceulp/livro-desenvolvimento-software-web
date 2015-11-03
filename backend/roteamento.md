# Roteamento

Esta seção apresenta mais conteúdo sobre a maneira de tratar rotas e definir controllers.

### Roteamento dinâmicro

O roteamento dinâmico é um recurso que permite definir *parâmetros de rota*. O exemplo a seguir demonstra como criar uma rota para acessar um post de um blog com base no seu identificador:

```php
$app->get('/home/{id}', function($id) use ($app) {
    if (!existePost($id)) {
        $app->abort(404, 'Post não encontrado');
    }
    $post = consultarPost($id);
    return '<h1>' . $post['titulo'] . '</h1>';
});
```

O parâmetro de rota é definido entre chaves. Neste caso a rota é `/home/{id}` e o parâmetor é `id`, o que significa que a URL deve ser chamada como `/home/1`. Perceba que o parâmetro da rota torna-se disponível como parâmetro do controller, em outras palavras, o Silex *injeta* o parâmtro de rota `id` no controller.

A utilização de parâmetros de rota é a primeira forma de passar informações para um controller.

### Convertendo Parâmetros de Rota

Pode ser necessário tratar o valor de um parâmetro de rota antes de injetá-lo no controller. Para fazer isso, utilize o método `convert()`. Exemplo:

```php
$app->get('/usuarios/{id}', function($id) {
    // ... procurar o usuário pelo id
})->convert('id', function($id) {
    return (int) $id;
});
```

O primeiro parâmetro do método `convert()` é o nome do parâmetro de rota, neste caso, `id`. O segundo parâmetro é uma função que aceita como parâmetro o `$id`. Neste caso, a função anônima recebe o parâmetro `id` e retorna seu valor representado como número inteiro.

### Restrições

Outra forma de tratar valores de parâmetros de rota é por meio de restrições. Para isso, é utilizado o método `assert()`. Exemplo:

```php
$app->get('/usuarios/{id}', function($id) {
    // ... procurar o usuário pelo id
})->assert('id', '\d+');
```

A restrição representada por `assert('id', '\d+')` indica que o parâmetro `id` precisa combinar com a expressão regular `\d+`, ou seja, precisa ser um número de um ou mais dígitos.
