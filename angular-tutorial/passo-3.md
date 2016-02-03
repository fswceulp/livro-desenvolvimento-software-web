# Passo 3 - Filtrando Repeaters

Enquanto o **Passo 2** tratou de definir a base do aplicativo, é hora de adicionar novas funcionalidades para facilitar a vida do usuário. O resultado do **Passo 3** é ilustrado pela figura a seguir.

![](http://i.imgur.com/WwZLuxL.jpg)

Desta vez o aplicativo fornece, à esquerda da lista de telefones, uma entrada de texto que permite ao aplicativo filtrar a lista de telefones. 

O **controller** deste passo é idêntico ao anterior, por isso não serão apresentados mudanças ou detalhes.

O que muda mesmo é no template.

## Template

O código a seguir destaca as alterações no template.

```html
...
<div class="container" ng-controller="Home">
    <h1>Telefones</h1>
    <div class="row">
        <div class="col-md-3">
            <h3>Pesquisar</h3>
            <input type="text" ng-model="query" placeholder="Pesquisar...">
        </div>
        <div class="col-md-9">
            <ul id="listaDeTelefones">
                <li ng-repeat="telefone in telefones | filter:query">
				...
                </li>
            </ul>  
        </div>
    </div> <!--/row-->
</div> <!--/container-->
```

Os detalhes do código serão apresentados a seguir.

### Grid do Bootstrap

Um "grid" permite uma interface estilo matriz (linhas e colunas). O Bootstrap fornece classes para realizar esta tarefa em interfaces de aplicativos web. 

A classe `row` é aplicada ao elemento (geralmente `div`) que servirá como uma linha do grid.

Para representar as colunas, existem diversas classes. Neste caso, estão sendo utilizadas duas delas:
* `col-md-3`: indica que a coluna tem tamanho 3
* `col-md-9`: indica que a coluna tem tamanho 9

Assim, o template possui duas colunas, uma com tamanho 3 e outra com tamanho 9. 

A noção de tamanho de uma coluna é abstrata. Seu tamanho exato (em pixels) é proporcional ao tamanho da janela de visualização e é tratado pelo Bootstrap. O tamanho máximo de uma coluna é 12. O importante é que a soma dos tamanhos das colunas de uma linha não pode ser superior a 12. Além disso, é importante também a percepção proporcional, já que não se está trabalhando com pixels. Neste caso, como as duas colunas possuem tamanho 3 e 9, respectivamente, a proporção utilizada é 3/12 e 9/12 ou seja, 25% e 75% do tamanho da janela.

Uma característica também importante do grid do Bootstrap é que ele é, por padrão, **responsivo**. Isso significa que a interface do aplicativo será ajustada pelo Bootstrap ao tamanho da tela de visualização. Com a popularização de dispositivos móveis e seus diversos modelos, esse recurso é bastante útil. A imagem a seguir ilustra a visualização do aplicativo em telas com diferentes tamanhos.

![](http://i.imgur.com/KJzX23E.png)

O Bootstrap ajusta a largura das colunas conforme a resolução disponível no dispositivo de visualização. Na resolução menor, a coluna tem largura proporcional a 100% da tela, não importa qual classe do grid está sendo utilizada. Isso varia conforme a dimensão da tela.

> **Exercício #1**
> 1. Qual a diferença entre as classes `col-xs-3`, `col-sm-3`, `col-md-3` e `col-lg-3`?
> 2. O que acontece se um elemento tiver como valor do atributo `class` as classes `col-xs-12` e `col-sm-6` e `col-lg-3`? Como o Bootstrap trata essas diferenças de tamanhos de colunas em relação ao tamanho da tela?
> 3. Qual recurso do Boostrap permite ocultar ou mostrar um elemento com base no tamanho da tela?

### Vinculando o `input` ao `Model`

O elemento `input` está vinculado ao `model`.

```html
<input type="text" ng-model="query" placeholder="Pesquisar...">
```

A "vinculação" é feita por meio do atributo `ng-model`. O valor deste atributo indica qual propriedade (ou elemento) do **model** está sendo vinculada. No caso do elemento `input` isso significa que o que o usuário digitar será atributo a `query`. Por causa do *two-way data-binding*, o **controller** tem à disposição `$scope.query` e qualquer alteração no controller estará visível no template.

### Filtro `filter`

O Angular disponibiliza vários "filtros", aplicados ao `ng-repeat`. Um deles é o `filter`. Desconsiderando a redundância, o filtro `filter` realiza a filtragem de uma lista com base em uma condição. Neste caso, ele está vinculado a `query`.

```html
<li ng-repeat="telefone in telefones | filter:query">
```

Isso significa que qualquer alteração em `query` fará com que o `ng-repeat` seja atualizado, mostrando apenas os objetos que "casem" com o filtro. O "casamento" (a busca, se preferir) é realizada, neste caso, com base em todos os atributos do objeto, ou seja, o Angular realiza uma busca em todos os objetos de `telefones`; aqueles que tiverem qualquer propriedade cujo valor contenha o valor de `query` são retornados.

O resultado é imediato: a lista de telefones é filtrada com base na entrada do usuário. A sensação é de que está ocorrendo uma busca com resultados em tempo real.

> Exercício #2
> 1. Apresente, no título da página, uma indicação de que o conteúdo está sendo filtrado com base no valor do `input`.
> 2. O que são as diretivas `ngBind` e `ngBindTemplate`? Para que são utilizadas?