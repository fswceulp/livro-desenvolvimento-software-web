# TypeScript

Este capítulo sobre o TypeScript é baseado em documentos oficiais, que podem ser obtidos em [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs) e na [Especificação formal da linguagem](https://github.com/Microsoft/TypeScript/blob/master/doc/TypeScript%20Language%20Specification.pdf?raw=true).

## Iniciando

TypeScript compila código em JavaScript. Na verdade, como o browser entende apenas JavaScript, é exatamente isso que ele terá para executar. Então, você vai precisar do seguinte:

* Compilador TypeScript \(vamos usar o npm\)

* Editor TypeScript \(você pode usar qualquer editor de texto ou IDE, mas iremos usar o PHPStorm\)


## Instalação

A instalação do TypeScript é feita com o npm. Na prática, um programa será instalado globalmente, para poder ser usado de qualquer lugar. Execute no prompt:

```
npm install -g typescript
```

Isso vai instalar dois programas:

* **tsc**: o compilador do TypeScript

* **tsserver**: uma versão do compilador que também cria um servidor web

## IIFE

IIFE é a sigla para _Immediately Invoked Function Expression_ (algo como expressão de função invocada imediatamente). Esse é um recurso geralmente em concepções _avançadas_ de programação JavaScript.

```javascript
var a = (function(i) {
    return i * 2;
})(4);
console.log(a); // imprime 8 
```

IIFE, portanto, é um recurso utilizado para representar uma expressão que é declada e, imediatamente, chamada como uma função.

Acesse as seções deste capítulo:
* [Quickstart](quickstart.md)
* [Tipos de dados](tipos-de-dados.md)
* [Declaração de variáveis](declaracao-de-variaveis.md)
* [Funções](funcoes.md)
* [Classes](classes.md)