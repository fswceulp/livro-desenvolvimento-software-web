title: Sintaxe
---
As instruções de programa em JavaScript são dispostas em linhas, terminadas, opcionalmente, em ";" (ponto-e-vírgula). Exemplo:

```javascript
var x = 5;
var nome = "José da Silva";
if (x == 5) {
    alert(x);
}
```

## Variáveis

JavaScript, por ser uma linguagem interpretada, consegue fazer alocação dinâmica e automática de variáveis. Isso quer dizer que não é necessário, obrigatoriamente, declarar uma variável para utilizá-la. Entretanto, é uma boa prática de programação fazê-lo. Para declarar uma variável é utilizada a palavra `var`. Exemplo:

```javascript
var x;
```

A atribuição de valor a uma variável ocorre por meio do **operador de atribuição**, o sinal `=`. Exemplo:

```javascript
var x = 5;
x = 6;
```

## Operadores

Os operadores aritméticos estão disponíveis:

|Operador|Descrição|
|--------|--------|
|`/`|Divisão|
|`*`|Multiplicação|
|`+`|Adição|
|`-`|Subtração|
|`%`|Módulo|
|`++`|Incremento|
|`--`|Decremento|

O operador `+` pode ter comportamento diferente conforme o tipo de dados. Se o dado for numérico, será realizada uma soma, se for literal (string) será realizada uma concatenação.

Precedência dos operadores aritméticos:

Operador|Precedência
-|-
`()`|Agrupamento de expressões
`++` e `--`|Incremento e Decremento
`*`, `/` e `%`|Multiplicação, divisão e módulo
`+` e `-`|Adição e subtração

Operadores de comparação e lógicos:

Operador|Descrição
-|-
`==`|Igual
`===`|Igual (valor e tipo iguais)
`!=`|Diferente
`!==`|Diferente (valor e tipo diferentes)
`>`|Maior que
`<`|Menor que
`>=`|Maior ou igual que
`<=`|Menor ou igual que

## Comentários

Comentários podem ser feitos:

- por linha
- por múltiplas linhas

Comentários por linha são feitos por meio de `//`. Exemplo:

```javascript
var x = 5; // declara variavel x
// comentario de inicio de linha
```

Comentários de múltiplas linhas podem ser feitos iniciando-se com `/*` e concluindo com `*/`. Exemplo:

```javascript
/* este é
um comentário
de múltiplas
linhas */
```

## Identificadores

Identificadores (nomes de variáveis ou funções) seguem as seguintes regras:

- o primeiro caracter precisa ser: uma letra, um `_` ou um `$`
- caracteres subsequentes podem ser letras, dígitos, `_` ou `$`

## Case Sensitive

JavaScript é uma linguagem "case sensitive", isto é, letras maiúsculas e minúsculas em identificadores são tratadas diferentemente. Por exemplo, as duas variáveis a seguir são diferentes:

```javascript
var primeiroNome = 'Jose';
var primeironome = 'Jose';
```

