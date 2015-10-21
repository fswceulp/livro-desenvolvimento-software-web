title: Tipos de dados
---
Por ser uma linguagem interpretada, JavaScript não é fortemente tipada. Isso significa que as variáveis não possuem tipos ao serem declaradas e seu tipo é definido conforme seu valor. Os tipos considerados pelo JavaScript são: números, strings,  booleanos e objetos. Exemplos:

```javascript
var idade = 18; // numero
var temperatura = 37.5; // numero
var x = 10e2; // numero
var y = 10e-5; // numero
var nome = 'Jose'; // string
var v = true; // booleano
var f = false; // booleano
var carros = ['fusca', 'ferrari', 'gol']; // objeto (array)
var pessoa = { idade : 18, nome : 'Jose' }; // objeto
```

Além disso, o código a seguir também é aceito:

```javascript
var x = 15;
x = 'Nome';
x = 1.8;
x = [1, 2, 3];
```

Em relação a strings, elas podem ser representadas utilizando aspas simples ou duplas. Exemplos:

```javascript
var nome = 'Jose da Silva';
var local = "Arraial d'Ajuda";
local = "Arrail d\'Ajuda";
var mensagem = "\"José\" é o meu nome";
```

Os exemplos acima ilustram representações de strings, utilizando aspas simples e duplas e demonstram a utilização da `\` como forma de representar caracteres especiais dentro de strings.

> **Exercício** Qual o valor da expressão `10 + 8 + 'Anos';`?


## Arrays

Arrays (listas de valores) são representados em JavaScript por meio dos caracteres `[` e `]`, com valores separados por `,`. Exemplo:

```javascript
var n = [1, 2, 3, 4, 5];
var balaio = ["gato", 1, {id:1}, false];
```

No último exemplo do código acima, vemos que um array pode conter valores com tipos diferentes.

A indexação de arrays inicia-se em 0, e a forma de acessar um índice é informando o índice entre `[]`. Exemplo:

```javascript
var n = [1, 2, 3];
n[0] = 0;
```

## Objetos

Objetos são representados com pares nome:valor, separados por vírgula, entre `{}`. Exemplo:

```javascript
var pessoa = {id: 1, nome: 'José'};
pessoa.id = 2; // alterando valor do atributo do objeto
pessoa.idade = 18; // atribuir valor para atributo não declarado não gera erro e criará o atributo no objeto
```

## Operador `typeof`

Em se tratando de valores, um operador bastante útil é o `typeof`, pois permite saber o tipo de um valor. Exemplo:

```javascript
typeof "José" // retorna string
typeof 3.14 // retorna number
typeof true // retorna boolean
typeof [1, 2, 3] // retorna object
typeof {nome : "José" } // retorna object
```

## Valores especiais

Em Javascript uma variável declarada sem valor possui, por padrão, o valor `undefined` (do tipo `undefined`). Exemplo:

```javascript
var nome;
```

Ao atribuir um valor `undefined` a uma variável, o procedimento equivale a "limpar" a variável.

Outro valor especial é o `null`, que significa algo que não existe. Na verdade, por mais estranho que possa parecer, em JavaScript, o valor `null` é do tipo `object`. Desta forma, o valor `null` é utilizado quando se tratam de objetos. Exemplo:

```javascript
var pessoa = { id : 1 };
pessoa = null;
```

Na prática, `null` e `unfefined` são iguais em valor, mas diferentes em tipo.

> **Exercício** : Como identificar se uma variável é array?

## Funções para conversões de tipos

As funções `parseInt()` e `parseFloat()`, respectivamente, convertem strings em números inteiros e reais. Para converter um valor para string, utiliza-se a função `toString()`. Exemplos:

```javascript
var n = '1';
n = parseInt(n); // converte para numero
var m = '1.5';
m = parseFloat(m); // converte para numero

var s = n.toString(); // converte para string
```

> **Exercício**: Crie um objeto que represente a seguinte situação: um aluno é identificado pelo número acadêmico e possui nome, e-mail, data de nascimento, endereço e uma lista de turmas; cada turma é identificada por um número e possui nome da disciplina, ano e semestre; para cada turma, o aluno possui quatro notas.
