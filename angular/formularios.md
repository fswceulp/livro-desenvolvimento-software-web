# Formulários

Formulários representam uma das formas mais utilizadas para receber dados do usuário. Há duas formas de utilizar formulários em Angular:

* formulários baseados em templates
* formulários baseados em models

Este capítulo trata da primeira das formas.

## Configuração do módulo

Formulários baseados em templates estão definidos no módulo `FormsModule`, disponível no pacote `@angular/forms`. Considere que um aplicativo tenha o arquivo `app.module.ts` no qual está definido o módulo raiz. O módulo raiz deve importar o módulo `FormsModule`.

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

A sintaxe `[(ngModel]="..."` permite o recurso de two-way data binding, o que faz com que o valor indicado como valor do atributo seja atualizado tanto no template quanto na classe do componente. Neste caso, `[(ngModel)]="tarefa.nome"` considera que a classe do componente possua um atributo `tarefa`, que tem um atributo `nome`. O potencial do two-way data binding é que o fato desta sintaxe estar aplicada a um elemento `input` faz com que a entrada de texto pelo usuário atualize o objeto em questão, e vice-versa.

### Variável temporária de template

Uma variável temporária de template é usada como uma referência ao controle de entrada. Essa referência pode ser usada diretamente no template ou, por exemplo, passada como parâmetro para uma função da classe do componente.

A sintaxe para a variável temporária é usar `#...`, como no código a seguir:

```html
<input type="text" class="form-control" id="nome" name="nome" required 
      [(ngModel)]="tarefa.nome" #nome>
```

Ao usar uma variável temporária, o `input` é referenciado por meio de `nome`:

```html
<input type="text" ... #nome>
{{nome.value}}
```

Isso vai fazer com que o valor \(atributo `value`\) do controle de entrada seja apresentado depois de uma alteração.

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

Com base no estado e na regra de validação do controle é possível, por exemplo, interagir com o usuário, indicando que ele deve informar um valor para um controle de entrada que esteja com o atributo `required`. O trecho a seguir demonstra isso.

```html
<input type="text" ... required [(ngModel)="tarefa.nome" #nome="ngModel">
<div class="alert alert-danger" [hidden]="nome.valid || nome.pristine">Informe o nome da tarefa</div>
```

O trecho de código indica que o `input `será referenciado pela variável temporária `nome`. Além disso, a variável temporária recebe o valor `ngModel`, o que indica que ela está vinculada ao controle por meio do two way data binding. A variável temporária possui os atributos `valid `e `pristine` indicando, respectivamente o estado do controle de entrada:

* `valid`: o valor do controle de entrada está válido conforme a regra de validação
* `pristine`: a tela foi carregada pela primeira vez

Utilizar um elemento com a propriedade `hidden `e seu valor baseado em uma expressão lógica faz com que a mensagem de validação seja apresentada para o usuário apenas na situação apropriada.

## Resumo

Para utilizar formulários em Angular:

1. Configurar o módulo para usar o `FormsModule`
2. 


