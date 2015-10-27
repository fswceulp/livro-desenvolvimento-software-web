# CSS

[**CSS (Cascading Style Sheets)**](http://www.w3.org/Style/CSS/Overview.en.html) é a linguagem utilizada para formatação de conteúdo na internet. Enquanto o HTML define o conteúdo, em si, CSS é utilizado para estilizar ou apresentar o conteúdo. Desta forma, o objetivo de um documento CSS é definir regras de formatação para um conteúdo.

## Sintaxe

Uma regra CSS consiste de um **seletor** e de um **bloco de declaração**:

![](http://www.w3schools.com/css/selector.gif)

### Seletores

O seletor, como o nome indica, permite selecionar o elemento ou o conjunto de elementos do HTML que serão afetados pelas regras de formatação presentes no bloco de declaração. O seletor pode ser:
- **seletor de elemento**: exemplo: `h1` aplica-se ao elemento `h1`
- **seletor de id**: exemplo: `#pagina` aplica-se ao elemento com `id="pagina"`
- **seletor de classe**: exemplo: `.paragrafo` aplica-se a todos os elementos que tiverem `paragrafo` como uma de suas classes (atributo `class`).

Independentemente do seletor, ele também pode ser combinado, aplicando a regra a vários elementos. Para isso, basta separar os seletores por vírgula. Exemplo: `h1, .paragrafo, #pagina { ... }` aplica-se ao elemento `h1`, a todos os elementos que tiverem a classe `paragrafo` e ao elemento com id `pagina`.

O `id` é geralmente único no documento. A classe pode ser aplicada a mais de um elemento e um elemento pode ter mais de uma classe. Exemplo:

```html
<p class="paragrafo destaque">...</p>
```

O elemento `p` possui as classes `paragrafo` e `destaque`.

### Bloco de declaração

O bloco de declaração contém as declarações, separadas por ponto-e-vírgula. Cada declaração é composta por **propriedade** e **valor**. Parte da chave, bem como da dificuldade, em aprender CSS está em saber as propriedades disponíveis (que podem variar conforme o browser), seus valores possíveis e como eles afetam a apresentação do conteúdo.

Para saber mais sobre o CSS, consulte o [curso de CSS da W3Schools](http://www.w3schools.com/css/default.asp).
