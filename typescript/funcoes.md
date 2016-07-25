# Funções

Funções podem ser criadas como funções nomeadas e funções anônimas.

```typescript
// funcao nomeada
function adicionar(x, y) {
    return x + y;
}

// funcao anonima
let add = function(x, y) { return adicionar(x, y); }
```

## Funções com tipos

TypeScript permite a definição de tipos em parâmetros de funções e no tipo de retorno da função.

```typescript
function adicionar(x: number, y: number): number {
    return x + y;
}
```

A sintaxe para definição de tipos de variáveis continua válida aqui para a definição de tipos de parâmetros: `nome: tipo`. Além disso, a sintaxe permite a definição do tipo do retorno da função: `function nome(): tipo {}`.

O tipo de retorno da função pode ser além de um tipo primitivo.

```typescript
function somar(p1: {x: number, y: number}, p2: {x: number, y: number}) : {x: number, y: number} {
    let p = {x: p1.x + p2.x, y: p1.y + p2.y};
    return p;
}

let ponto1 = {x: 1, y: 5};
let ponto2 = {x: 10, y: 20};

let ponto3 = somar(ponto1, ponto2); // retorna {x: 11, y: 25}
```

Neste exemplo, a função `somar()` aceita dois parâmetros (`p1` e `p2`) que compartilham a mesma estrutura (possuem os atributos `x` e `y`, ambos do tipo `number`) que também é a mesma do tipo de retorno da função.

## Parâmetros opcionais e padrões

No TypeScript, cada parâmetro de função é obrigatório (diferente do JavaScript, que considera os parâmetros como opcionais). Para definir um parâmetro como opcional, adiciona-se o símbolo `?` logo após seu nome.

```typescript
function nome(primeiro: string, ultimo?: string): string {
    if (ultimo) {
        return `${primeiro} ${ultimo}`;
    } else {
        return primeiro;
    }
}

nome('José', 'Silva'); // retorna 'José Silva'
nome('José'); // retorna 'José'
```

Como acontece em linguagens que fornecem o recurso de parâmetros opcionais, eles devem estar presentes na lista de parâmetros após os parâmetros obrigatórios.

Há também o recurso de valores padrões para parâmetros.

```typescript
function inicializar(valor: number = 0) : number {
    return valor;
}

inicializar(); // retorna 0
inicializar(10); // retorna 10
```

A utilização de valores padrões para parâmetros também torna opcional a passagem de valor na chamada da função.

## Parâmetros rest

> Não confundir com REST, recurso para definição de serviços sobre HTTP

JavaScript fornece a variável `arguments` para funções. TypeScript, por outro lado, como trata parâmetros de funções de uma maneira mais estrita, fornece o recurso de "parâmetros rest", que cria um array com argumentos passados para a função.

```typescript
function concatenar(primeiro: string, ...ultimos: string[]): string {
    return primeiro + ' ' + ultimos.join(' ');
}

concatenar('a', 'b', 'c', 'd', 'e'); // retorna 'a b c d e';
```

A sintaxe é `...nome: tipo`. No caso do exemplo anterior, o parâmetro rest é `ultimos`, do tipo `string[]`.

## Sobrecarga

O recurso de sobrecarga de métodos (ou funções) está presente no TypeScript. 

```typescript
let pessoas = ['josé', 'maria', 'pedro', 'joana'];

function consultar(nome: string): number;
function consultar(indice: number): string;
function consultar(p: any): any {
    if (typeof p == 'string') {
        let idx: any = undefined;
        let achou: boolean = false;
        for(let i: number = 0; i < pessoas.length && !achou; i++) {
            if (pessoas[i] == p) {
                achou = false;
                idx = i;
            }
        }
        return idx;
    }
    if (typeof p == 'number') {
        return pessoas[p];
    }
}

consultar(1); // retorna 'maria'
consultar(-1); // retorna undefined
consultar('maria'); // retorna 1
consultar('mariana'); // retorna undefined
```

Neste exemplo, a função `consultar()` possui três "versões":
* a primeira, `consultar(nome: string): number` recebe uma `string` como parâmetro (o nome da pessoa) e retorna o índice dela no array `pessoas`; _não há implementação (código)_;
* a segunda, `consultar(indice: number): string` recebe um `number` como parâmetro (o índice da pessoa no array) e retorna o nome da pessoa; _não há implementação (código)_;
* a terceira, `consultar(p: any): any`, é que realmente fornece alguma implementação (código para a função)

O operador `typeof` é utilizado para distinguir os tipos dos parâmetros e, assim, utilizar a lógica necessária.

A utilidade de utilizar sobrecarga de funções é adicionar recurso de validação de tipos para se certificar que a função aceite apenas `string` ou `number` como valor para seu parâmetro.

Outro exemplo:

```typescript
function somar(p1: number[], p2x: number[]) : number[];
function somar(p1: {x: number, y: number}, p2: {x: number, y: number}) : {x: number, y: number};
function somar(p1: any, p2: any): any {
    if (p1 instanceof Array) {
        return [p1[0] + p2[0], p1[1] + p2[1]];
    } else {
        return {x: p1.x + p2.x, y: p1.y + p2.y};    
    }
}

let ponto1 = {x: 1, y: 5};
let ponto2 = {x: 10, y: 20};

somar(ponto1, ponto2); // retorna {x: 11, y: 25}
somar([1, 1], [2, 2]); // retorna [3, 3]
```

Neste caso, o operador `typeof` não será útil pois `typeof [1, 2]` retorna `object`, da mesma forma que `typeof {x: 1, y: 2}`, assim, não seria possível distinguir os tipos dos parâmetros. O operador `instanceof`, por outro lado, identifica o tipo específico do objeto, assim, `p1 instanceof Array` permite checar se o parâmetro `p1` é do tipo (ou, uma instância de) `Array`. 

Portanto, a regra é:
* para tipos primitivos (tipos de valor), usar `typeof`
* para tipos de instância, usar `instanceof`