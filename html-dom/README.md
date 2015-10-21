# HTML DOM

O DOM (Document Object Model) é um padrão da W3C especificado na forma de uma interface para manipulação de documentos cujo conteúdo é representado por objetos. O HTML DOM é uma interface voltada para manipulação de documentos HTML.

A figura a seguir apresenta uma árvore DOM.

![](http://www.w3schools.com/js/pic_htmltree.gif)

A árvore DOM é uma representação de um documento na forma de árvore, representando relações entre elementos (ou objetos). Na árvore de exemplo acima, o nó raiz "Document" tem como filho o nó "html" (que é raiz do documento HTML) que, por sua vez, possui dois filhos: os nós "head" e "body".

Os nós podem ser de quatro tipos:
* `Document`
* `Element`
* `Atributte`
* `Text`

Destes tipos, apenas o tipo **Documento** pode ter apenas uma instância na árvore DOM.

Ao representar o documento HTML na forma de objetos, também são representadas outras características além da relação entre elementos, como propriedades, métodos e eventos.

## Manipulação da árvore DOM

Por meio da interface de programação do DOM é possível manipular o documento, o que quer dizer que você pode, usando JavaScript, por exemplo, criar nós, mover nós, adicionar ou modificar propriedades etc.

O exemplo a seguir demonstra o funcionamento básico do DOM.

<iframe src="http://embed.plnkr.co/A8JOWp4A85IzNE4NBzNW/preview" width="100%" height="400"></iframe>

No exemplo, o trecho de código a seguir merece destaque:

```html
<div id="conteudo"></div>

<script>
var conteudo = document.getElementById("conteudo");
conteudo.innerHTML = "Hello World!";
</script>
```

O elemento `div` possui `id` "conteudo". O atributo `id` representa uma das maneiras de se acessar o elemento por meio de uma consulta à árvore DOM.

No código JavaScript, o objeto `document`, que representa o nó raiz da árvore DOM, fornece o método `getElementById()`, que consulta a árvore DOM, em busca de um nó que tenha como identificador o fornecido por parâmetro.

O nó do tipo `Element` possui a propriedade `innerHTML`, que dá acesso ao conteúdo do nó. Este conteúdo é, na verdade, HTML.

> **Exercício** Modifique o código para que o conteúdo HTML do elemento `div` apresente um texto como uma página de uma notícia, com título, resumo, imagem e texto.  

## Métodos para encontrar elementos

Além do método `getElementById()` o objeto `document` fornece os seguintes métodos:
* `getElementsByTagName(tag)`: retorna um array de elementos, cujas tags na árvore DOM sejam conforme o nome da tag informada como parâmetro;
* `getElementsByClassName(classe)`: retorna um array de elementos cujas classes (atributo `class`) contenham a classe informada como parâmetro;
* `querySelectorAll(seletor)`: retorna um array de elementos com base no seletor. Um seletor utiliza a sintaxe de seletores do CSS.

## Modificando elementos

Além da propriedade `innerHTML` o objeto `Element` possui:
* `setAttribute(atributo, valor)`: modifica o valor de um atributo;
* `removeChild(elemento)`: remove um elemento filho
* `appendChild(elemento)`: adiciona um elemento filho

Para criar elementos, o objeto `document` fornece o método `createElement(tag)`, que cria um novo elemento, para ser adicionado à árvore DOM.

O exemplo a seguir apresenta uma situação em que vários métodos do DOM são chamados para manipular o documento.

<iframe src="http://embed.plnkr.co/X37GpqvFnKFvzaU85z9U/preview" width="100%" height="400"></iframe>
