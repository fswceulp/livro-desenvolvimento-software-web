title: Laços de Repetição
---
Laços de repetição podem ser: `for`, `for in`, `while` e `do while`.

## Instrução for

A instrução `for` representa um laço de repetição. A sintaxe é a seguinte:

```javascript
for (instrucao 1; instrucao 2; instrucao 3) {
    código a ser executado
}
```

A `instrucao 1` executa antes do laço de repetição. A `instrucao 2` define uma condição para a execução do laço de repetição. A `instrucao 3` é executada a cada passo do laço de repetição.

Exemplo:

```javascript
var mensagem = "";
for (i = 0; i < 10; i++) {
    mensagem += "Numero: " + i + "\n";
}
```

O uso do laço de repetição no código de exemplo faz com que o código da linha 3 seja executado enquanto a condição `i < 10` for verdadeira. Neste caso, como `i = 0`, o código executa 10 vezes.

## Instrução for...in

A instrução `for...in` permite iterar pelos atributos de um objeto. A sintaxe é similar à da instrução `for`:

```javascript
for (identificador in expressao) {
    código a ser executado
}
```

Exemplo:

```javascript
var pessoa = {id : 1, nome : "José", idade : 18 };

var mensagem = "";
for (var a in pessoa) {
    mensagem += a + " - " + pessoa[a];
}
```

Neste caso, a sintaxe permite acessar um atributo do objeto semelhante ao acesso de um índice em um array.

A instrução `for...in` também pode ser utilizada para iterar pelos elementos de um array. Exemplo:

```javascript
var n = [1, 2, 3, 4, 5];
var s = 0;
for (var i in n) {
    s += n[i]; 
}
```

Neste exemplo, o laço de repetição itera pelos elementos do array e calcula a soma dos seus números.

## Instrução while

A instrução `while` executa um código enquanto uma condição for satisfeita. A sintaxe é a seguinte:

```javascript
while (condicao) {
    código a ser executado
}
```

Exemplo:

```javascript
var i = 0;
while (i < 10) {
    mensagem += "Número é " + i;
    i++;
}
```

## Instrução do...while

A instrução `do...while` é uma variação da `while`. A diferença é que enquanto o `while` executa um código 0 ou mais vezes, `do...while` executa um código pelo menos 1 vez (1 ou mais vezes). A sintaxe é:

```javascript
do {
    código a ser executado
} while (condicao);
```

Exemplo:

```javascript
var i = 0;
do {
    mensagem += "Número é " + i;
    i++;
} while (i < 10);
```

{% note info Exercícios %}

**Exercício 1**: Calcule a média de um array de números. Utilize as instruções `for`, `for...in`, `while` e `do...while ` (fazendo um código separado para cada instrução).

**Exercício 2**: Considere que um conjunto de dados armazena os seguintes dados: nome, idade e sexo de um grupo de pessoas. Crie um programa JavaScript que encontre e apresente:

- o nome e a idade da pessoa mais idosa;
- a média das idades dos homens; e
- a média das idades das mulheres.

**Exercício 2A**: Na implementação do **exercício 2** (alterando-a diretamente ou em uma versão alternativa), utilize objetos para representar os dados das pessoas. 

{% endnote %}