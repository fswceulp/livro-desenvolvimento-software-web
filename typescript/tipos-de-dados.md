# Tipos de Dados

Os tipos de dados em TypeScript são:
* Boolean
* Number
* String
* Array
* Tuple
* Enum
* Any
* Void

Os três primeiros, Boolean, Number e String, são chamados "tipos primitivos". Os demais possuem especificações de tipos mais detalhadas, como será visto a seguir.

## Boolean

Tipos de dados `boolean` podem conter valores `true` ou `false`.

```typescript
let completo: boolean = false;
```

## Number

Todos os números em TypeScript são valores em ponto flutuante. O tipo `number` representa qualquer valor numérico, inclusive em outros sistemas de numeração.

```typescript
let d: number = 6;
let f: number = 6.1;
let h: number = 0xf00d; // 0x... número hexadecimal
let b: number = 0b1010; // 0b... um número binário
let o: number = 0o744;  // 0o... número octal
```

O tipo `string` representa literais (conjuntos de caracteres). Podem ser usadas aspas simples ou duplas.

```typescript
let cor: string = 'azul';
cor = 'preto';
```

TypeScript fornece o recurso de **template strings**, que podem conter várias linhas e incluir expressões. Esta representação de string usa o acento grave (\`) e as expressões são representadas com a sintaxe `${ expr }`.

```typescript
let nome: string = `João`;
let idade: number = 37;
let mensagem: string = `Olá, meu nome é ${ nome }.

Completarei ${ idade + 1 } anos de idade no próximo mês.`;
```

Isso seria o equivalente a declarar uma `string` como:

```typescript
let mensagem: string = 'Olá, meu nome é ' + nome + '.\n\n' + 
'Completarei ' + (idade + 1) + ' anos de idade no próximo mês.';
```

## Array

Tipos de dados array podem ser declarados de duas formas. A primeira delas usa o tipo dos elementos do array seguido de `[]`. 

```typescript
let numeros: number[] = [1, 2, 3, 4, 5];
```

A outra forma utiliza a classe `Array` e o conceito de **generics** (veremos mais adiante).

```typescript
let numeros: Array<number> = [1, 2, 3, 4, 5];
```

Nas duas formas, o código determina o tipo de dados dos elementos do array. Assim, a regra é que todos os elementos do array tenham o tipo usado na sua declaração. 

O tipo `Array` é uma exceção aos outros tipos. Number, Boolean e String, pois é um tipo de instância. Na prática, `Array` é do tipo `object` (herda da classe `Object` como todo tipo de instância).

## Tuple

O tipo **tuple** (tupla) parece com uma especialização de um array, contendo um número finito de elementos. 

```typescript
// declara uma variável do tipo tupla com dois elementos
let x: [number, number];
// atribui valor para a variável
x = [10, 10];

// declara uma variável do tipo tupla com três elementos e a inicializa
let indice: [number, string, number] = [1, 'José', 40];
```

Para acessar os elementos de uma variável do tipo tupla utiliza-se a mesma sintaxe para acessar elementos de um array.

```typescript
console.log(x[0]);
```

Ao acessar um índice fora dos limites da declaração da variável, o TypeScript emprega o conceito de **union types** (isso será visto mais adiante).

```typescript
x[4] = 1; // ok, os elementos podem ser dos tipos number ou string
x[5] = false; // erro, boolean não pode ser atribuído a 'number | string'
```

Na prática, uma tupla é do tipo `Array`.

## Enum

O tipo `enum` representa uma maneira de dar nomes mais amigáveis para um conjunto de valores.

```typescript
enum Cor { Vermelho, Verde, Azul};
let c: Cor = Cor.Vermelho;
let c: Cor = 0; // é a mesma coisa que a linha de cima
```

Por padrão, os elementos de um `enum` começam com `0`, mas isso pode ser modificado manualmente.

```typescript
enum Cor { Vermelho = 1, Verde = 3, Azul = 5};
let c: Cor = Cor.Vermelho;
```

Também é possível acessar um `enum` pelo índice e ter acesso ao nome do elemento.

```typescript
enum Cor { Vermelho, Verde, Azul };
let v: string = Cor[0];
console.log(v); // imprime 'Vermelho'
```

Na prática, Enum é do tipo `number`.

## Any

Quando não for possível conhecer um tipo de dados ou quando for necessário abrir mão da checagem de tipo em tempo de compilação, pode-se utilizar o tipo `any`.

```typescript
let n: any = 4;
n = 'uma string';
n = false;
```

O tipo `any` também pode ser útil para declarar um variável do tipo `array` cujos tipos de dados dos elementos devem ser diferentes -- ou não são conhecidos.

```typescript
let lista: any[] = [1, true, 'uma string'];
```

## Void

O tipo `void` é o oposto de `any`: significa a ausência de um tipo. É mais comum utilizar esse tipo de dados em funções que não retornam um valor.

```typescript
function log(mensagem: string): void {
    console.log(mensagem);
}
```

Além disso, uma variável do tipo `void` pode receber apenas os valores `undefined` ou `null`.

```typescript
let n: void = undefined;
n = null;
```

Na prática, o valor `undefined` é do tipo `undefined` e o valor `null` é do tipo `object`.

## Asserção de tipos

O recurso de asserção de tipos é utilizado para afirmar, no código, qual o tipo de dados que se deseja utilizar. Isso também é conhecido como **cast**. A sintaxe é utilizar o tipo de dados que se deseja entre `<>` antes do valor ou da variável.

```typescript
let valor: any = 'uma string';
let tamanho: number = (<string>valor).length;
```

Outra sintaxe disponível é utilizar o operador `as`.

```typescript
let valor: any = 'uma string';
let tamanho: number = (valor as string).length;
```

Para identificar o tipo de dados de uma variável ou de um valor podem ser utilizados os operadores:
* `typeof`: para tipos primitivos
* `instanceof`: para tipos de instância (objetos)