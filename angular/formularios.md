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

### Estado do controle de entrada de dados e validação

Quando o elemento `input` possui o atributo `required`, isso indica que é obrigatório fornecer um valor para este controle de entrada de dados. Isso é chamado de validação.

Utilizar `ngModel` em um controle de formulário faz mais do que o two way data binding, pois informa o estado do componente. O estado tem relação com a interação entre o usuário e o controle \(e seu valor\). O Angular atribui classes CSS ao controle de entrada conforme o estado dele, bem como fornece atributos para o objeto associado ao controle de entrada. A tabela a seguir mostra essa relação.

| Estado | Classe se true | Classe se false |
| :--- | :--- | :--- |
| O controle foi visitado | `ng-touched` | `ng-untouched` |
| O valor do controle mudou | `ng-dirty` | `ng-pristine` |
| O valor do controle é válido | `ng-valid` | `ng-invalid` |

Para mostrar as classes CSS do controle de entrada use algo como seguinte:

```html
<input type="text" ... #nome>
<div>
    {{nome.className}}
</div>
```

O trecho de código indica que a variável temporária `nome`, que referencia um controle de etrada \(`input`\), possui o atributo `className`, que mostra os nomes das classes associadas ao controle de entrada no momento.

Importante notar que a variável de template `nome` não possui um valor. Isso permite acessar o atributo `className`. Para utilizar validação, a variável temporária precisa ter o valor `ngModel`. Isso modifica o comportamento do objeto ao qual a variável de template faz referência e, por exemplo, não dá mais acesso ao atributo `className`.

A validação de formulários do Angular utiliza os recursos de validação do HTML. As seções a seguir demonstram como implementar diversas regras de validação.

#### Validação de campo requerido

Com base no estado e na regra de validação do controle é possível, por exemplo, interagir com o usuário, indicando que ele deve informar um valor para um controle de entrada que possua o atributo `required`. O trecho a seguir demonstra isso.

```html
<input type="text" ... required [(ngModel)="tarefa.nome" #nome="ngModel">
<div class="alert alert-danger" [hidden]="nome.valid || nome.pristine">
    Informe o nome da tarefa
</div>
```

O trecho de código indica que o `input`é referenciado pela variável temporária `nome`. Além disso, a variável temporária recebe o valor `ngModel`, o que indica que ela está vinculada ao controle por meio do two way data binding. A variável temporária possui os atributos `valid`e `pristine` indicando, respectivamente o estado do controle de entrada \(conforme a tabela dos estados de validação apresentada anteriormente\).

Utilizar um elemento `div` com a propriedade `hidden`e seu valor baseado em uma expressão lógica faz com que a mensagem de validação seja apresentada para o usuário apenas na situação apropriada.

## Recursos avançados

Este capítulo apresenta também alguns recursos avançados de formulários utilizando Angular.

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

```
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

Utilizar `select`em cascata é uma prática muito comum em aplicações web. Suponha que ao pedir que um usuário selecione o Estado para o endereço, o aplicativo apresente um `select` para que o usuário selecione a cidade. É muito útil, nesse caso, que as cidades apresentadas sejam aquelas do Estado selecionado. Isso é o que chamamos _select em cascata_ ou _select vinculado_.



Para conseguir isso, utilizamos, em conjunto, o recurso de criar as opções do select usando código \(seção anterior\) e

## Resumo

Para utilizar formulários em Angular:

1. Configurar o módulo para usar o `FormsModule`
2. Configurar o template do componente
3. Configurar a classe do componente



