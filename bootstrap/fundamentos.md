# Fundamentos

## Contêineres

Bootstrap requer um elemento contêiner, que conterá outros elementos da página e o sistema de grid. Há dois contêineres, representados por classes CSS: `container` e `container-fluid`. A diferença entre os dois é que o primeiro tem largura fixa, enquanto o segundo tem largura dependente da janela de visualização (do browser). Exemplo:

```html
<div class="container">
    conteudo...
</div>
```

Podem existir vários elementos contêineres na mesma página. Além disso, eles podem estar aninhados (o que é assunto para outro momento).

## Sistema de Grid

O Bootstrap inclui um sistema de grid que é fluido e responsivo, baseado em 12 colunas. Há um conjunto de classes que facilitam a criação de grid para vários contextos. No geral, os elementos do grid devem estar contidos em um elemento que tenha a classe `row`. Os nomes das classes do grid seguem um padrão: `col-<dispositivo>-<tamanho>`. Dispositivo é definido conforme a tabela a seguir.

|Dispositivo|classe|
|-----------|------|
|Dispositivos com telas bem pequenas (<768px)|xs|
|Dispositivos com telas pequenas (>=768px)|sm|
|Dispositivos com telas médias (>=992px)|md|
|Dispositivos com telas grandes (>=1200px)|lg|

O tamanho varia entre 1 e 12.

Por exemplo, para criar um grid com uma linha e duas colunas, uma com tamanho 8 e outra com tamanho 4, poderia ser utilizado o trecho de código a seguir:

```html
<div class="container">
    <div class="row">
        <div class="col-md-8">
            Conteúdo do primeiro elemento do grid.
        </div>
        <div class="col-md-4">
            Conteúdo do segundo elemento do grid.
        </div>
    </div>
</div>
```

A classe `col-md-8` define uma coluna com tamanho 8, enquanto a classe `col-md-4` define uma coluna com tamanho 4. O importante é que a soma dos tamanhos das colunas em uma linha não seja superior a 12.

O Bootstrap (via CSS) calcula automaticamente o tamanho real da coluna conforme a tela do dispositivo de visualização. Por exemplo, conforme a tela do dispositivo, um grid com uma linha e duas colunas pode ser apresentado como uma coluna apenas. Um recurso interessante é utilizar várias classes no mesmo elemento, com enfoque em telas de tamanhos diferentes.

O exemplo a seguir demonstra a utilização do grid.

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="container">
        <div class="row">
            <div class="col-xs-8 col-md-8">
                Conteúdo do primeiro elemento do grid.
            </div>
            <div class="col-xs-4 col-md-4">
                Conteúdo do segundo elemento do grid.
            </div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>
```

Veja o exemplo em funcionamento [aqui](http://embed.plnkr.co/Svg75ZcVd7J0WiprAGGN/preview).

Se você abrir o exemplo em telas de tamanho diferente (por exemplo, redimensionando a janela do browser) perceberá como o Bootstrap trata o grid
