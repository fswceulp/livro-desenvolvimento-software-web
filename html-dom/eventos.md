# Eventos

A programação orientada a eventos é um conceito importante da Ciência da Computação. Em termos simples, um evento representa uma interação com o usuário, ou um comportamento. Por exemplo, um botão (um elemento de interface) possui o evento que trata o comportamento de "clique" e permite executar um código quando tal situação ocorre.

No documento HTML, os eventos são representados por meio de atributos.

O exemplo a seguir utiliza o conceito de eventos para que, no clique de um botão, uma mensagem seja apresentada para o usuário.  

{%ace%}
!INCLUDE "eventos/index.html"
{%endace%}

Veja o exemplo em funcionamento [aqui](http://embed.plnkr.co/cAJndSK2AbfuPuKLH9qL/preview).

O código JavaScript declara a função `mostrarMensagem()`:

```javascript
function mostrarMensagem() {
    var mensagem = document.getElementById('mensagem');
    mensagem.style.display = 'block';
}
```

A função `mostrarMensagem()` encontra o elemento com id "mensagem" e modifica a propriedade `display` do CSS para `block`, tornando o elemento visível.

No código HTML, é importante ressaltar a maneira de disparar o evento de clique:

```html
<button onclick="mostrarMensagem()">Clique-me!</button>
```

O atributo `onclick` representa a maneira de tratar o evento de clique. Ele não é exclusivo de botões. O conteúdo do atributo `onclick` é código JavaScript. Neste caso, o código representa a chamada da função `mostrarMensagem()`.

Outros eventos interessantes são:
* `onload`: aplicável apenas ao elemento `body`. Disparado no momento em que a página termina de carregar;
* `onchange`: aplicável a elementos de entrada de dados (`input` e `select`, por exemplo). Disparado no momento em que o valor do elemento é modificado;
* `onmouseover` e `onmouseout`: disparados quando o mouse está sobre o elemento e quando sai, respectivamente;
* `onmousedown` e `onmouseup`: disparados quando o mouse é pressionado e quando é liberado;
* `onfocus`: aplicável a elementos de entrada de dados (`input`, por exemplo). Disparado no momento em que o elemento ganha foco.
