# Backend

O **Backend** representa outro componente importante do modelo de desenvolvimento para web que está sendo adotado neste livro. Como já informado, a comunicação ocorre entre **Frontend** e **Backend**. O primeiro, utilizando tecnologias como HTML, CSS, JavaScript e AngularJS. O segundo, utilizando tecnologias como PHP e Silex.

Esta seção apresenta o conteúdo sobre backend necessário para a criação da lógica do lado do servidor, utilizando um modelo de **API REST**. Para isso, será utilizada uma combinação de PHP+Silex.

## API REST

## Silex

O conteúdo desta seção é baseado na [documentação oficial do Silex](http://silex.sensiolabs.org/).

**Silex** é um microframework para PHP. É construído com base em Symfony2 e Pimple, além de ser inspirado pelo Sinatra.

A instalação do Silex pode ser feita utilizando Composer, bastando executar o comando a seguir no prompt de comando, estando na pasta do projeto PHP em questão:

```
composer require silex/silex
```

## Estrutura básica

A estrutura básica de um programa com Silex é a seguinte:

```php
require_once 'vendor/autoload.php';
$app = new Silex\Application();
$app->run();
```

O código importa o arquivo `vendor/autoload.php` (do composer), cria uma instância de `Silex\Application` e executa o método `run()`. Esta é a estrutura padrão. Entre a instanciação de `Silex\Application` e a chamada do método `run()` são definidas as rotas e os controllers que representam a primeira forma de tratar requisições e representar lógica de negócio.

Em desenvolvimento, pode ser interessante visualizar mensagens de erro de processamento do Silex de forma mais detalhada. Para isso, utilize o seguinte:

```
$app['debug'] = true;
```

## Roteamento

Silex, como um framework REST, é baseado em rotas. Por meio de uma rota, pode-se definir o controller que será chamado quando a rota for encontrada. Em alto nível, a sintaxe é a seguinte:

```
$app-><metodo>(<rota>, <controller>);
```

Onde:
- `<metodo>`: representa o método HTTP associado à rota;
- `<rota>`: representa o padrão da rota em questão (uma string);
- `<controller>`: representa a função que trata a rota, o que é chamado de *controller*.

Exemplo:

```php
$app->get('/home', function() {
    return '<h1>Página inicial</h1>';
});
```

O código define:
- a rota utiliza o verbo **GET** do HTTP;
- a rota é baseada no padrão `/home` e informa o controller (a função anônima, neste caso), que trata a rota.

O Silex trata as rotas registradadas no momento em que recebe uma requisição. Para ver o resultado da rota definida no exemplo anterior, é necessário acessar, no browser, a URL `/home` (exemplo: `http://localhost/home`).

# Configuração do servidor web

Por padrão, o Silex trata rotas a partir do arquivo `index.php`. Por exemplo, uma requisição para `http://localhost/index.php/produtos/1` é tratada pela rota `/produtos/{id}`.

Entretanto, pode ser interessante fazer com que as URLs sejam melhor apresentáveis e limpas. Por exemplo, ao invés de a URL ser `http://localhost/index.php/produtos/1` poderia ser `http://localhost/produtos/1`.

Para fazer isso, considerando o servidor web **Apache**, pode ser utilizado o `mod_rewrite`. Crie o arquivo `.htaccess` no diretório raiz do aplicativo e informe o seguinte conteúdo:

```xml
<IfModule mod_rewrite.c>
    Options -MultiViews

    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [QSA,L]
</IfModule>
```

Se o aplicativo não estiver no diretório raiz do servidor web, adicione a linha a seguir logo após `Options ...`:

```
RewriteBase /caminho/para/o/aplicativo
```

Por exemplo, se o diretório raiz do servidor web for `c:\xampp\htdocs` e o diretório raiz do aplicativo for `c:\xampp\htdocs\aplicativo` então a linha que usa `RewriteBase` deve ser:

```
RewriteBase /aplicativo
```
