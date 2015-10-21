title: Funções
---
Funções em JavaScript permitem a organização eficiente de código para realizar uma determinada tarefa. Uma função é **definida** e, posteriormente, pode ser **chamada** (ou **invocada**).

Sintaxe:

```javascript
function nome(parametros) {
    código da função
}
```

Exemplo:

```javascript
function soma(a, b) {
    return a + b; 
}

// utilização da função
var x = 1;
var y = 2;
var z = soma(x, y);
```

Neste exemplo, a palavra `return` é utilizada para retornar um valor, ou seja, a função pode ser utilizada em uma expressão. A variável `z` recebe o valor da chamada da função `soma()` passando as variáveis `x` e `y` como parâmetros.

{% note info Exercício %}

**Exercício 1**: Crie uma função que aceita um array de números como parâmetro e retorna a média dos números.

**Exercício 2**: Crie uma função que aceita um array de números como parâmetro e retorna um array contendo: o menor valor, o maior valor, a média dos valores.

**Exercício 3**: Crie uma função que aceita uma quantidade não definida de parâmetros e retorna a soma deles. A função deve ser chamada mais ou menos assim:

`var s = soma(1, 2, 3, 4, 5);`    

{% endnote %}