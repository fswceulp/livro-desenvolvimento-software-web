# Declaração de variáveis

## Declarações usando `var`

A palavra `var` é a maneira mais comum para declaração de uma variável. Há algumas questões ao utilizar `var` em JavaScript. Por exemplo:

```javascript
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}
var g = f();
g(); // retorna 11;
```

Nesse caso, a função `g()`, declarada dentro de `f()` tem acesso à variável `a`. Assim, entende-se que a declaração de `a` tem escopo de função (está visível dentro da função `f()` também para sub-funções declaradas dentro dela, como é o caso da função `g()`).

Outro exemplo.

```javascript
function f(inicializar: boolean) {
    if (inicializar) {
        var x = 10;
    }

    return x;
}

f(true);  // retorna 10
f(false); // retorna undefined
```

A variável `x` foi declarada dentro do `if`, entretanto, está sendo acessada ao final da função `f()`.

## Declarações usando `let`

Declarações `let` são similares a declarações `var`, com a diferença que utilizam escopo mais restrito. Por exemplo:

```typescript
function f(inicializar: boolean) {
    if (inicializar) {
        let x = 10;
    }
    return x; // erro variável não acessível
}
```

Nesse caso, a variável `x` foi declarada dentro do `if` utilizando `let`. Assim, ela só pode ser acessada dentro desse escopo.

O mesmo acontece em laços de repetição.

```typescript
for(let i = 0; i < 10; i++) {
    console.log(i);
}
```

No caso de laços de repetição, é criado um escopo novo e exclusivo para cada passo da execução.

## Declarações `const`

Declarações `const` são como `let`, mas o valor da variável não pode ser modificado depois da atribuição.

```typescript
const ladosDoTriangulo: number = 3;
```

É importante diferenciar o conceito de `const` de variáveis _imutáveis_. 

```typescript
const pessoa = {
    id : 1,
    nome : 'José'
};

pessoa.id = 10;
pessoa.nome = 'Maria';
```

Neste caso, não se pode atribuir novo valor para a variável `pessoa`, declara com `const`, mas, como é um objeto, é possível modificar os valores dos seus atributos.

## Desconstrução

### Desconstrução de `Array`

A desconstrução de `array` permite "expandir" os valores dos elementos de um array, atribuindo-os a variáveis independentes.

```typescript
let ponto: number[] = [1, 5];
let [x, y] = ponto;
console.log(x); // imprime 1
console.log(y); // imprime 5
```

Esse recurso também é interessante para trocar os valores entre duas variáveis.

```typescript
let [x, y] = [y, x];
```

Outro recurso de desconstrução de array é acessar os elementos restantes por meio da sintaxe `...nome`.

```typescript
let [primeiro, segundo, ...outros] = [1, 2, 3, 4, 5];
console.log(primeiro); // imprime 1
console.log(segundo);  // imprime 2
console.log(outros);   // imprime [3, 4, 5]
```

### Desconstrução de `Object`

Também é possível desconstruir objetos.

```typescript
let o = {
    a: 'foo',
    b: 12,
    c: false
};
let {a, b} = o;
console.log(a); // imprime foo
console.log(b); // imprime 12
```

Neste caso, é feita uma correspondência entre os nomes das variáveis e os nomes dos atributos do objeto. O código a seguir teria, portanto, um erro.

```typescript
let o = {
    a: 'foo',
    b: 12,
    c: false
};
let {x, y} = o; // erro: objeto o não possui atributos x e y
```

O código a seguir também é válido e usa o mesmo princípio.

```typescript
let {x, y} = {x: 1, y: 5};
```

A definição de tipos associada a esse recurso torna o código um pouco difícil de entender, na verdade.

```typescript
let {x, y}: {x: number, y: number} = {x: 1, y: 5};
```