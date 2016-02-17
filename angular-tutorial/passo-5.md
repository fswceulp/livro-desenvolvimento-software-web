# Passo 5 - Apresentando detalhes de um telefone

O **Passo 5** acrescenta a funcionalidade que permite ao usuário ver detalhes (os dados) de um telefone. Este passo também introduz o conceito de gerenciamento de estado do aplicativo para que seja possível alternar "telas".

## Template

O arquivo `index.html` possui o trecho de código a seguir.

```html
<!doctype html>
<html lang="pt-br" ng-app="phonecat">
...
<body>
<div class="container" ng-controller="Home">
    <div ng-show="ui_estado == 'lista'">
    ...
    </div>
    <div ng-show="ui_estado == 'detalhes'">
    ...
    </div>
</div> <!--/container-->
</body>
</html>
```

Neste **Passo 5** o aplicativo possui duas telas:
* Lista de telefones
* Detalhes de um telefone

O conceito de "tela" é utilizado aqui para não confundir com "página". O aplicativo em questão (até mesmo por não ser um "web site" convencional, mas um aplicativo) não possui páginas, mas telas. 

Assim sendo, é necessária uma maneira de mudar de telas. A primeira forma de resolver isso, a usada neste passo, é bem simples: mostrar uma tela e ocultar a outra. Para isso, é utilizada a diretiva `ngShow` (atributo `ng-show`).

## Diretiva `ng-show`

A [diretiva `ng-show`](../angularjs/ng-show-hide.md) 