title: Condicionais
---
As instruções condicionais em JavaScript utilizam as palavras `if`, `else`, e `switch`.

## A instrução if

A instrução `if` permite definir um condicional que executa um código apenas se o condicional for verdadeiro. A sintaxe é a seguinte:

```javascript
if (condicao) {
    código a ser executado se condicao for true
}
```

Exemplo:

```javascript
var x = 5;
if (x == 5) {
    mensagem = "x é igual a cinco";
}
```

Neste exemplo, a variável `x` possui valor `5`. Como o condicional da instrução `if` é baseado no valor de `x`, executando o código apenas se `x` for igual a `5`, a execução executa o código interior, pois o condicional é verdadeiro.

## A instrução else

A instrução `else` não deve ser utilizada desacompanhada da instrução `if`. Na verdade, a instrução `else` complementa a instrução `if`, executando um bloco de código quando o condicional do `if` não for verdadeiro. A sintaxe é a seguinte:

```javascript
if (condicao) {
    código a ser executado se condicao for true
} else {
    código a ser executado se o condicao for false
}
```

Exemplo:

```javascript
var x = 1;
if (x == 5) {
    mensagem = "x é igual a cinco";
} else {
    mensagem = "x é diferente de cinco";
}
```

Neste exemplo, a variável `x` possui valor `1`. A execução do código fará com que o bloco do `else` seja executado, pois o condicional `x == 5` é falso.

## A instrução else if

De forma similar às instruções anteriores, a instrução `else if` executa um código se uma condição for verdadeira. A sintaxe é a seguinte:

```javascript
if (condicao1) {
    código a ser executado se condicao1 for true
} else if (condicao2) {
    código a ser executado se condicao2 for true e condicao1 for false
} else {
    código a ser executado se condicao1 e condicao2 forem false
}
```

Exemplo:

```javascript
var x = 5;
if (x > 10) {
    mensagem = "x é maior que 10";
} else if (x > 5 && x < 10) {
    mensagem = "x é maior que cinco e menor que 10";
} else {
    mensagem = "x é menor que cinco";
}
```

## A instrução switch

A instrução `switch` permite executar código com base em diferentes condições. De certo modo, é similar ao uso da estrutura `if...else if...else`. A sintaxe é:

```javascript
switch (expressao) {
    case n1:
        código a ser executado se expressão for igual a n1
        break;
    case n2:
        código a ser executado se expressão for igual a n2
        break;
    defatul:
        código a ser executado se expressão for diferente dos casos anteriores  
}
```

Exemplo:

```javascript
var dia = 0;
switch (dia) {
    case 0:
        mensagem = "hoje é domingo";
        break;
    case 1:
        mensagem = "hoje é segunda-feira";
        break;
    case 2:
        mensagem = "hoje é terça-feira";
        break;
    case 3:
        mensagem = "hoje é quarta-feira";
        break;
    case 4:
        mensagem = "hoje é quinta-feira";
        break;
    case 5:
        mensagem = "hoje é sexta-feira";
        break;
    case 6:
        mensagem = "hoje é sábado";
        break;
}
```

No exemplo, a variável `dia` possui valor `0`. Assim, apenas o caso que corresponde ao valor `0` será executado (o primeiro).

Outro exemplo:

```javascript
var dia = 0;
switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        mensagem = "hora de trabalhar!";
        break;
    default:
        mensagem = "hora de descansar!";
}
```

No exemplo, a variável `dia` possui o valor `0`. Como nenhum dos casos equivale ao valor da variável, o bloco `default` será executado.

A utilização de `switch` é adequada apenas nos casos em que é possível enumerar os valores da expressão. Em outros casos, melhor utilizar a instrução `if`.