# Classes

TypeScript fornece recursos completos do paradigma de Programação Orientada a Objetos. Um destes recursos é a utilização de classes, para detinição de tipos de dados, bem como a utilização de herança.

Exemplo:

```typescript
class Saudacao {
    mensagem: string;
    constructor(mensagem: string) {
        this.mensagem = mensagem;
    }
    saudar(pessoa: string): string {
        let m: string = this.mensagem;
        m = m.replace('{pessoa}', pessoa);
        return m;
    }
}

let s:Saudacao = new Saudacao('Olá, {pessoa}!'); // instância de Saudacao
s.saudar('José'); // retorna 'Olá, José!'
```

A sintaxe é similar à de outras linguagens orientadas a objeto, como C# e Java:
* A palavra `class` é utilizada para declarar a classe.
* A declaração de atributos da classe precede o construtor
* O construtor da classe é representado pela função `constructor()`
* Membros da classe são acessados por meio da palavra `this`
* Outras funções da classe são declaradas após o construtor
* A palavra `new` é utilizada para se criar uma instância da classe

## Herança

Um dos padrões de projeto mais comuns em programação orientada a objeto é a utilização de herança, permitindo a extensão de tipos para criar novos. TypeScript também fornece esse recurso. O diagrama de classes a seguir apresenta a relação entre quatro classes: Animal, Cavalo, Cobra e Ponto.

![Diagrama de classes](http://yuml.me/3e0c95b4)

A classe `Animal` usa a classe `Ponto` (por causa do atributo `posicao`). As classes `Cavalo` e `Cobra` herdam (ou estendem) a classe `Animal`. O código a seguir representa esse domínio em TypeScript.

```typescript
class Ponto {
    constructor(public x: number = 0, public y: number = 0) {
    }
}

class Animal {
    nome: string;
    posicao: Ponto;
    constructor(nome: string) { 
        this.nome = nome; 
        this.posicao = new Ponto();
    }
    mover(metros: number = 0): void {
        this.posicao.x += metros;
    }
}

class Cobra extends Animal {
    constructor(nome: string) { 
        super(nome); 
    }
    mover(metros = 5): void {
        console.log("Deslizando...");
        super.mover(metros);
    }
}

class Cavalo extends Animal {
    constructor(nome: string) { 
        super(nome); 
    }
    mover(metros = 45): void {
        console.log("Galopando...");
        super.mover(metros);
    }
}

let nagini = new Cobra("Nagini");
let ajax: Animal = new Cavalo("Ajax");

nagini.mover();
ajax.mover(50);
```

A palavra `extends` é utiliza para criar subclasses `Cavalo` e `Cobra`, que herdam de `Animal`. 

A palavra `super` é utilizada para acessar um membro da superclasse. Por exemplo, no construtor da classe `Cobra` há uma chamada ao construtor da classe `Animal` por meio de `super()`.

Importante destacar a diferença entre `this` e `super`. Enquanto `this` é usado para referência à classe em questão, `super` é utilizado para referência à superclasse. A diferença pode ser sutil (já que o mecanismo de herança realmente torna parte da subclasse tudo o que está definido na superclasse como `public` ou `protected`) e é fundamental para o recurso de _sobrescrita de métodos_.

O recurso de sobrescrita de métodos nas subclasses permite que uma subclasse modifique comportamento de um método herdado da superclasse. A classe `Cobra`, por exemplo, sobrescreve o método `mover()` da classe `Animal` adicionando funcionalidade e pode chamar o método de mesmo nome da superclasse por meio de `super.mover()`.

Um comportamento bastante interessante do código é que a variável `ajax` é declarada como sendo do tipo `Animal`, mas, por ser uma instância de `Cavalo`, é o método `mover()` de `Cavalo` que é chamado em tempo de execução, não de `Animal` -- obviamente, como já foi dito, o método na sublcasse chama o da superclasse por meio de `super`.

## Modificadores `public`, `private` e `protected`

### `public` por padrão

Em algumas linguagens de programação orientadas a objetos o padrão para declaração de membros da classe é que sejam `private`. No caso do TypeScript, o padrão é que os membros são `public`.

```typescript
class Animal {`
    public nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}
let garfield = new Animal('garfield');
console.log(garfield.nome); // imprime 'garfield'
```

O modificador `public` permite que o membro da classe seja acessível de fora dela.

Por ser o modificador padrão, ele não precisa ser utilizado explicitamente.

### Modificador `private`

Um membro marcado como `private` só pode ser acessado dentro da própria classe.

```typescript
class Animal {
    private nome: string;
    construtor(nome: string) {
        this.nome = nome;
    }
}
let garfield = new Animal('garfield');
console.log(garfield.nome); // ERRO! membro privado inacessível
```

Uma característica importante do TypeScript ao tratar o modificador `private` precisa ser destacada. No momento de verificar a equivalência entre tipos, o TypeScript considera os atributos que não estejam marcados como `private`. Exemplo:

```typescript
class Animal {
    private nome: string;
    constructor(nome: string) { 
        this.nome = nome; 
    }
}

class Cobra extends Animal {
    constructor(nome: string) { 
        super(nome); 
        console.log(this.nome); // ERRO! atributo privado na superclasse
        console.log(super.nome); // ERRO! atributo privado na superclasse
    }
}

class Pessoa {
    private nome: string;
    constructor(nome: string) { 
        this.nome = nome; 
    }    
}

let animal = new Animal('gato');
let cobra = new Cobra('cobra');
let pessoa = new Pessoa('pessoa');

animal = cobra; // OK! estrutura de tipos equivalente
animal = pessoa; // ERRO! estrutura de tipos não equivalente
```

O código anterior declara as classes `Animal`, `Cobra` (subclasse de `Animal`) e `Pessoa`. A classe `Animal` possui o atributo `nome`, que está marcado como `private`, o que também acontece de forma similar com a classe `Pessoa`.

O primeiro erro é tentar acessar o atributo `nome` na classe `Cobra`. Como ele foi declarado como `private`, somente a classe em que foi declarado possui acesso a ele -- não importa se acessando como `this` ou `super`.

O outro erro é menos claro e depende do entendimento do mecanismo de equivalência de tipos (ou estrutura) do TypeScript. Antes, na verdade, é importante lembrar do mecanismo de tipos. Uma variável declarada sem um tipo explícito continua tendo um tipo (mesmo que `undefined`, se não tiver sido iniciada). Isso quer dizer que as variáveis no código têm seus tipos:
* `animal` é do tipo `Animal`
* `cobra` é do tipo `Cobra`
* `pessoa` é dod tipo `Pessoa`

A atribuição `animal = cobra` funciona porque as estruturas (os tipos) destas duas variáveis são equivalentes (neste caso, por causa do mecanismo de herança).

A atribuição `animal = pessoa` não funciona porque as suas estruturas não são equivalentes. Embora ambas possuam um atributo `nome: string`, o fato de serem marcados como `private` implica na conclusão de que são, estruturalmente, diferentes. Por isso, o código falha nesse ponto.

### Modificador `protected`

Membroos de classe delarados como `protected` podem ser acessados apenas pela classe e por suas subclasses, continuam inacessíveis de fora da classe.

```typescript
class Animal {
    protected nome: string;
    constructor(nome: string) { 
        this.nome = nome; 
    }
}

class Cobra extends Animal {
    constructor(nome: string) { 
        super(nome); 
        console.log(this.nome); // ok 
    }
}

let gato = new Animal('gato');
console.log(gato.nome); // ERRO! atributo não acessível
```

## Popriedades parâmetros

O TypeScript fornece o recurso de propriedades parâmetros, que fornecem um atalho para a declaração de atributos.

```typescript
class Animal {
    constructor(public nome: string) { 
    }
}

let animal = new Animal('gato');
console.log(animal.nome);
```

A diferença é que os parêmtros do construtor podem vir acompanhados de um modificador de acesso. No caso do código anterior, o parâmetro `nome` é marcado com `public`, o que torna este parâmetro um atributo da classe. Assim, pode-se acessá-lo posteriormente e não é necessário atribuir valores de parâmetros do construtor para atributos da classe.

## Acessores (`get` e `set`)

TypeScript fornece o recurso de "acessores", também conhecido como get/set.

```typescript
class Animal {
    constructor(private nome?: string) { }
    get Nome(): string {
        return this.nome;
    }
    set Nome(nome: string) {
        if (nome.length > 5) {
            this.nome = nome;
        } else {
            console.log('Valor inválido para o atributo `nome`');
        }
    }
}

let animal = new Animal();
animal.Nome = 'gato';
```

O acessor `get` permite retornar o valor de um atributo marcado como `private`, enquanto o `set` permite definir o valor. A maior utilidade de acessores é na garantia de certas regras de negócio. No exemplo anterior, a regra é que a `string` a ser atribuída para o atributo `nome` precisa ter mais de cinco caracteres.

## Membros `static`

O recurso de membros `static` permite acessar conteúdo de uma classe diretamente, sem a necessidade de uma instância.

```typescript
class Animal {
    private static instancias: Animal[] = [];
    constructor(public nome?: string) { 
        Animal.instancias.push(this);
    }
    static get Instancias(): Animal[] {
        return Animal.instancias;
    }
}

let gato = new Animal('gato');
let cachorro = new Animal('cachorro');
console.log(Animal.Instancias);
```

Algumas linguagens de programação fornecem a palavra `self`, que dá acesso a membros estáticos. No caso do TypeScript, usa-se diretamente o nome da classe. No código anterior, há o atributo `instancias`, marcado como `private` e `static`. Dentro da classe, o atributo deve ser acessado como `Animal.instancias`, ou seja, usa-se o nome da própria classe (ao invés de `self`). 

O segundo membro marcado como `static` é o acessor `get`. Nesse caso, a classe fornece uma espécie de _acesso apenas de leitura_ para o atributo `instancias`, já que não disponibiliza o acessor `set`. 

## Classes abstratas

O recurso de classes abstratas permite definir a regra de uma classe não poder ser instanciada. Além disso, permite que métodos sejam definidos sem código, situação na qual subclasses são origadas a fornecer implementações para tais métodos.

```typescript
abstract class Animal {
    abstract emitirSom(): void;
    mover(metros: number = 5): void {
        console.log(`Movendo-se por ${metros}m`);
    }
}

class Cobra extends Animal {
    emitirSom(): void {
        console.log('Barulho de cobra...');
    }
}

let cobra = new Cobra();
cobra.emitirSom();
cobra.mover();
cobra.emitirSom();

let gato = new Animal(); // ERRO! não pode instanciar classe abstrata
```

A palavra `abstract` é utilizada para marcar a classe como abstrata e um método como não contendo código. No código anterior, a classe `Animal` é abstrata e contém o método `emitirSom()`, que também é abstrato. Como regra, se a classe possui um método abstrato, ela também precisa ser abstrata.