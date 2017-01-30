# Objetos

Por ser uma linguagem multi-paradigma, o JavaScript também suporta o Paradigma Orientado a Objetos \(POO\), da mesma forma que outras linguagens como Python, C++, Java e C\#. As diferenças principais para outras linguagens e as características principais de POO com JavaScript são apresentadas nesta seção.

## Definição do objeto

Na seção sobre tipos de dados vimos que o JavaScript possui uma sintaxe que permite definir um objeto diretamente no código-fonte. Cada um dos atributos do objeto podem ser acessados diretamente, como por exemplo:

```javascript
var pessoa = {nome: 'Jose', idade: 30};
pessoa.idade = 40; // modifica a idade
pessoa.idade++; // modifica a idade
alert(pessoa.nome); // apresenta o nome em um alert
```

Conforme esta maneira de acessar os atributos, algumas pessoas os chamam de **propriedades**. Para efeito de clareza e objetividade, continuaremos usando o termo **atributo** para nos referirmos aos membros de um objeto que representam características dele.

Também podemos definir métodos diretamente na declaração de um objeto. Por exemplo:

```javascript
var pessoa = {
    nome: 'Jose',
    nascer: function() { // define o método
        alert('Pessoa nascendo!');
    }
};
pessoa.nascer(); // chama o método
```

O trecho de código ilustra a definição do método `nascer()` para o objeto `pessoa`. Perceba que a sintaxe é similar à de um atributo, com a diferença que o valor atribuído não é um número ou um literal, mas uma função. Na prática, o tipo deste valor \(ao utilizar `typeof`\) é `function`. Ainda em outro sentido, JavaScript permite que funções sejam atribuídas a variáveis, como um recurso de "ponteiro para função" em C++. Exemplo:

```javascript
function somar(a, b) {
   return a + b;
}

var s = somar; // s recebe a função somar()

var c = s(1, 2); // chama a função somar() como s()
```

No trecho de código, a função `somar()` é atribuída à variável `s`. Neste sentido, a variável torna-se um "atalho" para a função. Assim, pode-se chamar a função como `somar()` ou `s()`.

A utilização de métodos em objetos também permite acessar seus atributos. Isso é feito por meio da palavra `this`. Por exemplo:

```javascript
var pessoa = {
    nome: 'Jose',
    nascer: function() { // define o método
        this.idade = 0;
    }
};
pessoa.nascer(); // chama o método
```

No trecho de código, o método `nascer()` do objeto `pessoa` modifica \(e cria\) o atributo `idade`. Perceba que a utilização de `this` representa uma referência ao objeto em questão, ou seja, `pessoa`. Se não for utilizada a palavra `this` o código executará, mas considerando que `idade` seria apenas uma variável interna ao método.

## Definição de tipo \(classe\)

A definição de objeto diretamente no código permite um recurso de programação interessante. Entretanto, seguindo o formato anterior, um objeto é uma variável, apenas. Se for necessário criar outro objeto, será necessário reproduzir a mesma estrutura de declaração. Para padronizar e estruturar os dados de forma adequada, como um tipo, ou, se preferir, uma **classe**, JavaScript permite uma instrução similar à de construtores em outras linguagens POO. Por exemplo:

```javascript
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.nascer = function() {
        this.idade = 0;
    }
}
```

O trecho de código ilustra a declaração da estrutura do tipo `Pessoa` na forma de uma função. Os parâmetros da função `Pessoa()`, `nome` e `idade` são utilizados para **inicializar** um objeto \(daí a utilização deste recurso como construtor\). Perceba que o código, que é uma função, contém atribuições dos parâmetros para atributos \(utilizando a palavra `this`\) e a declaração do método `nascer()`. O processo de instanciação ocorre como mostram os seguintes exemplos:

```javascript
var jose = new Pessoa('Jose', 30);
var maria = new Pessoa('Maria');
maria.nascer();
```

O trecho de código ilustra a instanciação \(criação de objetos\) por meio da palavra `new` -- de forma similar ao que é feito em outras linguagens POO. No momento da instanciação, são informados os parâmetros do construtor do tipo \(neste caso, o tipo `Pessoa`\). É importante destacar que JavaScript não requer que todos os parâmetros esperados sejam informados no momento de chamar uma função \(o que vale também para o construtor\), ficando a cargo do programador lidar com esta situação \(identificar quando um parâmetro não é informado\). Veja outro exemplo:

```javascript
var pessoas = [new Pessoa('Jose'), new Pessoa('Maria')];
for (var p in pessoas) {
    pessoas[p].nascer();
}
```

No trecho de código, a variável `pessoas` recebe um array de objetos. Perceba que a construção `new Pessoa()` é válida. Neste caso, cada índice do array possui \(referencia\) um objeto.

> **Exercício**
>
> Considere que, no contexto de uma escola:
>
> * A escola é identificada por um código e possui nome e alunos; e
> * Os alunos possuem nome, disciplinas e notas \(uma nota para cada disciplina\).
>
> Represente este contexto na forma orientada a objeto, criando tipos de dados \(classes\).
>
> A classe que representa o aluno deve possuir um método que calcula e retorna a média geral do aluno, ou seja, a média das suas notas nas disciplinas.
>
> Além disso, a classe que representa a escola deve possui um método que retorna o nome do aluno com maior média geral.



