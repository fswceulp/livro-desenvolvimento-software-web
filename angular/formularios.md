# Formulários

Formulários representam uma das formas mais utilizadas para receber dados do usuário. Há duas formas de utilizar formulários em Angular:

* formulários baseados em templates
* formulários baseados em models

Este capítulo trata da primeira das formas.

## Configuração do módulo

Formulários baseados em templates estão definidos no módulo `FormsModule`, disponível no pacote `@angular/forms`. Considere que um aplicativo tenha o arquivo `app.module.ts` no qual está definido o módulo raiz \(trecho dele é apresentado a seguir\). O módulo raiz deve importar o módulo `FormsModule`.

```TypeScript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports : [
        BrowserModule,
        FormsModule
    ],
    ...
})
export class AppModule { }
```

Isso permitirá que componentes desse módulo possam usar o `FormsModule`.

## Template do componente

Antes de lidar com detalhes do formulário em Angular, o código a seguir mostra um trecho de um código HTML referente a um formulário:

```html
<form>
  <div class="form-group">
    <label for="nome">Nome da tarefa</label>
    <input type="text" class="form-control" id="nome" name="nome" required>
  </div>
  <button type="submit" class="btn btn-success">Salvar</button>
  <button type="button" class="btn btn-default">Limpar</button>
</form>
```

O código utiliza os elementos `form`, `label`, `input` e `button`, que são responsáveis por gerar o formulário, em si. As classes `form-group`, `form-control`, `btn`, `btn-success` e `btn-default` pertencem ao framework Bootstrap.

Para transformar este código em template do Angular, é necessário utilizar diretivas e data binding.

### Data binding

O primeiro passo é utilizar data binding no elemento `input`:

```html
<input type="text" class="form-control" id="nome" name="nome" required 
      [(ngModel)]="tarefa.nome" #nome="ngModel">
```

O Angular requer que o controle de entrada \(o `input`\) tenha o atributo `name`. Neste caso, o atributo tem o valor `nome`.

A sintaxe `[(ngModel]="..."` permite o recurso de two-way data binding, o que faz com que o valor indicado como valor do atributo seja atualizado tanto no template quanto na classe do componente. Neste caso, `[(ngModel)]="tarefa.nome"` considera que a classe do componente possui um atributo `tarefa`, um objeto que tem um atributo `nome`.

```typescript
@Component({...})
export class TarefaComponent {
    tarefa : Tarefa;
}
```

O potencial do two-way data binding é que o fato de esta sintaxe estar aplicada a um elemento `input` fazer com que a entrada de texto pelo usuário atualize o objeto vinculado, e vice-versa: o valor do `input` é o mesmo valor de `tarefa.nome`.

### Variável temporária de template

Uma variável temporária de template é usada como uma referência ao controle de entrada. Essa referência pode ser usada diretamente no template ou, por exemplo, passada como parâmetro para uma função da classe do componente.

A sintaxe para a variável temporária é usar `#nomedavariavel`, como no código a seguir:

```html
<input type="text" class="form-control" id="nome" name="nome" required 
      [(ngModel)]="tarefa.nome" #nome>
```

Ao usar uma variável temporária, o `input` é referenciado por meio de `nome`:

```html
<input type="text" ... #nome>
{{nome.value}}
```

Isso faz com que o valor \(atributo `value`\) do controle de entrada seja apresentado depois de uma alteração. É possível ter mais de uma variável de template referenciando o controle de entrada.

Sobretudo, uma variável temporária pode ser aplicada a qualquer elemento como uma forma de referenciá-lo. No contexto de formulários, podemos usar uma variável temporária no elemento `form` como maneira de fazer referência ao formulário:

```html
<form (ngSubmit)="onSubmit()" #formCadastro="ngForm">
...
</form>
```

A variável de template `formCadastro` recebe `ngForm`, indicando que há também um nível de data binding além dos controles do formulário, ou seja, para o próprio formulário, em si.

## Envio dos dados \(submit\)

O envio dos dados, ou submit, é a última etapa de uma sequência que tem:

* preenchimento dos dados \(pelo usuário\)
* validação \(pelo sistema\)
* envio dos dados \(pelo sistema\)

Ainda não vamos lidar com as etapas que acontecem na interação com o _back-end_.

Como no HTML, o submit de um formulário é disparado por um clique em um botão:

```html
<form (ngSubmit)="onSubmit()" #formCadastro="ngForm">
    ...
    <button type="submit" class="btn btn-success" 
        [disabled]="!formCadastro.form.valid">
        Salvar
    </button>
</form>
```

O elemento `button` tem o atributo `type="submit"` e a propriedade `disabled` baseada no valor `!formCadastro.form.valid`. A validação do formulário não faz parte desse capítulo, mas isso quer dizer que o botão estará desabilitado enquanto o formulário, referenciado pela variável de template `formCadastro`, não estiver válido.

Voltando para o elemento `form`, há o evento `ngSubmit`. Este é um evento específico de formulário, que é disparado quando começa o processo de submit \(envio dos dados\). O valor do evento é um código TypeScript que, nesse caso, é a chamada da função `onSubmit()`, definida na classe do componente:

```typescript
@Component({...})
export class EventoManagerComponent {
  eventos: Evento[] = [];
  evento: Evento = new Evento(0, '', '');
  enviado: boolean = false;

  onSubmit() : void {
    this.eventos.push(this.evento);
  }
}
```

A classe `EventoManagerComponent` declara o método `onSubmit()` que é chamado no evento `ngSubmit` do formulário e, no contexto do exemplo, insere os dados do formulário \(representados pelo atributo `evento`\) em uma lista de eventos \(representada pelo atributo `eventos`\).

## Recursos avançados

Este capítulo apresenta também alguns recursos avançados de formulários utilizando Angular:

* criar opções em um `select` utilizando código
* usar selects em cascata

### Criando opções em um select

O Angular permite um gerenciamento do documento HTML e isso também significa que é possível modificar o conteúdo de um formulário, em específico um controle `select`.

As opções \(elemento `option`\) de um `select` podem ser definidas manualmente no documento HTML, mas fazer isso usando programação pode ser bastante útil em algumas situações.

Comecemos pela classe do componente:

```typescript
@Component({...})
export class EditorComponent {
    estados: any[];

    constructor() {
        this.estados = [
          {uf: 'TO', nome: 'Tocantins'},
          {uf: 'GO', nome: 'Goiás'},
          {uf: 'MG', nome: 'Minas Gerais'},
          {uf: 'SP', nome: 'São Paulo'},
          {uf: 'RJ', nome: 'Rio de Janeiro'}
        ];        
    }
}
```

A classe possui o atributo `estados`, que é um array \(`any[]`\). Os elementos do array são criados no `constructor()`. Cada elemento é um objeto que possui os atributos `uf` e `nome`.

Agora, o template:

```html
<div class="form-group">
    <label for="estado">Estado</label>
    <select id="estado" name="estado" class="form-control" 
        [(ngModel)]="evento.estado" required>
        <option value="">Selecione um Estado</option>
        <option *ngFor="let estado of estados" [value]="estado.uf">
            {{estado.nome}}
        </option>
    </select>
</div>
```

O `select`permite ao usuário escolher um Estado \(no contexto de um formulário que solicita ao usuário um Estado no cadastro de um endereço, por exemplo\). O template utiliza data biding e cria elementos `option`de duas formas:

1. Opção padrão: por padrão, a opção selecionada é "Selecione um Estado" que, na prática, é uma opção inválida. Isso é usado como estratégia para exigir que o usuário escolha uma das opções "válidas"
2. Opções que representam os Estados

Para o segundo caso, é utilizada a diretiva `ngFor`com o valor `let estado of estados`. Importante notar que `estados` é um array definido na classe do componente, como já visto. A propriedade `value` de cada `option` criado pelo `ngFor` é `estado.uf`, o que indica que o valor do `select` será o atributo `uf` de um objeto `estado`. O rótulo, o que o usuário vê na tela, é o valor de `estado.nome`.

Essa estratégia é útil quando se deseja definir as opções de um `select` usando código.

### Usando select em cascata

Utilizar `select`em cascata é uma prática muito comum em aplicações web. Suponha que ao pedir que um usuário selecione o Estado para o endereço, o aplicativo apresente um `select` para que o usuário selecione a cidade. É muito útil, nesse caso, que as cidades apresentadas sejam aquelas do Estado selecionado. Isso é o que chamamos _select em cascata_ ou _select vinculado_. A animação a seguir ilustra esse procedimento.

![](http://g.recordit.co/Q7zwxP4Kde.gif)

Para conseguir isso, utilizamos o recurso de criar as opções do select usando código \(seção anterior\) e outros recursos do Angular. Primeiro, o código da classe do componente:

```typescript
@Component({...})
export class EventoManagerComponent {
  estados: any[];
  cidades: any[];
  constructor() {
    this.estados = [
      {uf: 'TO', nome: 'Tocantins'},
      {uf: 'GO', nome: 'Goiás'},
      {uf: 'MG', nome: 'Minas Gerais'},
      {uf: 'SP', nome: 'São Paulo'},
      {uf: 'RJ', nome: 'Rio de Janeiro'}
    ];
    this.cidades = [
      {nome: 'Palmas', uf: 'TO'},
      {nome: 'Paraíso do Tocantins', uf: 'TO'},
      {nome: 'Gurupi', uf: 'TO'},
      {nome: 'Araguaína', uf: 'TO'},
      {nome: 'Porto Nacional', uf: 'TO'},
      {nome: 'Belo Horizonte', uf: 'MG'},
      {nome: 'Goiânia', uf: 'GO'},
      {nome: 'São Paulo', uf: 'SP'},
      {nome: 'Rio de Janeiro', uf: 'RJ'}
    ];  
  }

  getCidades(uf: string) {
    let lista: any[] = [];
    for(let i = 0; i < this.cidades.length; i++) {
      if (this.cidades[i].uf == uf) {
        lista.push(this.cidades[i]);
      }
    }
    return lista;
  }  
}
```

A classe EventoManagerComponent possui os atributos `estados` e `cidades`, ambos do tipo `any[]`. No constructor\(\) esses atributos são inicializados. Cada elemento de `cidades` é um objeto que possui os atributos `nome` e `uf`. O método `getCidades()` recebe o parâmetro `uf`, que representa o identificador de um Estado, e retorna as cidades que pertencem ao mesmo.

Agora, o template:

```html
<div class="form-group">
    <label for="cidade">Cidade</label>
    <select id="cidade" [disabled]="!evento.estado" name="cidade" 
        class="form-control" [(ngModel)]="evento.cidade" 
        #cidade="ngModel" required>
        <option value="">Selecione uma cidade</option>
        <option *ngFor="let cidade of getCidades(estado.value)" [value]="cidade.nome">
            {{cidade.nome}}
        </option>
    </select>
    <div class="alert alert-danger" [hidden]="cidade.valid || cidade.pristine">
        Você deve informar uma cidade para o endereço do evento
    </div>            
</div>
```

O código do template indica que um `select`é usado para apresentar as opções de cidades para o usuário. De início, a propriedade `disabled` possui o valor `!evento.estado`. Isso indica que o `select`estará desabilitado \(entrada proibida\) enquanto o usuário não selecionar um valor para o Estado.

O valor de cada opção, a propriedade `value`, recebe `cidade.nome`.

Outra parte importante é que a diretiva `ngFor` é utilizada para criar as opções de cidades para o usuário selecionar. A diferença é que as opções não são criadas com base no atributo `cidades` da classe do componente, mas em uma chamada do método `getCidades()`. Como o método recebe a UF do Estado, faz sentido passar como parâmetro `estado.value`, ou seja, o valor do `select` que representa o Estado. Assim, o valor da diretiva `ngFor` é `let cidade of getCidades(estado.value)`.

Com isso conseguimos implementar o recurso de select em cascata.

## Resumo

Para utilizar formulários em Angular:

1. Configurar o módulo para usar o `FormsModule`
2. Configurar o template do componente
3. Configurar a classe do componente



