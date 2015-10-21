# Diretiva ng-repeat

A diretiva `ng-repeat` é utilizada para repetir uma parte da view (template) conforme uma expressão de repetição baseada no model. O exemplo a seguir demonstra a utilização desta diretiva.

<iframe src="http://embed.plnkr.co/ka72CqW9bXGmtLhzfUvU/preview" width="100%" height="300"></iframe>

No arquivo `index.html` (a view), na linha 22, a diretiva `ng-repeat` é aplicada ao elemento `li`. Neste caso, o uso da diretiva, baseada na expressão `cidade in cidades`, faz com que o elemento (e seu conteúdo) seja repetido conforme a quantidade de elementos em `cidades` (esperando-se que seja um vetor). No conteúdo do `li` está uma expressão que apresenta o nome de cada cidade da iteração.

No arquivo `app.js`, no controller `HomeController`, na linha 5, temos a definição do array `cidades` (com os elementos que são apresentados na view).

## Filtrando o ng-repeat

Uma funcionalidade bastante interessante dos filtros em Angular é percebida ao serem aplicados à diretiva `ng-repeat`. O exemplo a seguir demonstra isso.

<iframe src="http://embed.plnkr.co/snWUn1Wy4aLlumphX2KE/preview" width="100%" height="300"></iframe>

Na view, na linha 22, o conteúdo da diretiva `ng-repeat` foi modificado de modo a incluir o filtro `filter`. Neste caso, o array `cidades` está sendo filtrado, de forma que apenas serão apresentadas as cidades que têm "Ara" como parte do nome.

O exemplo a seguir é mais funcional: filtra os elementos do vetor `cidades` com base em uma entrada do usuário.

<iframe src="http://embed.plnkr.co/C5PF8Ls94f0ghf4P4EAx/preview" width="100%" height="300"></iframe>

Na view, na linha 23, o elemento `input` está vinculado ao elemento do model `q`. Desta forma, na linha 28, o filtro é baseado neste elemento do model, não em um valor definido diretamente no código.

## Propriedades

Propriedades especiais são expostas com a utilização da diretiva `ng-repeat`:

|Propriedade|Tipo|Descrição|
|-----------|----|---------|
|`$index`|número|Índice da iteração|
|`$first`|booleano|Indica se a iteração é a primeira|
|`$middle`|booleano|Indica se a iteração não é a primeira e nem a última|
|`$last`|booleano|Indica se a iteração é a última|
|`$even`|booleano|Indica se o índice da iteração é par|
|`$odd`|booleano|Indica se o índice da iteração é ímpar|
