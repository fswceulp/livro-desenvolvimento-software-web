# Validação de formulários

A tarefa de validar uma entrada de dados do usuário é uma das mais frequentes no desenvolvimento de software. No caso de software web a situação não é diferente. Ao utilizar formulários baseados em template a validação funciona de forma integrada à do HTML, por isso, utiliza praticamente todos os seus recursos.

## Estado do controle de entrada de dados e validação

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

## Validação de campo requerido

Com base no estado e na regra de validação do controle é possível, por exemplo, interagir com o usuário, indicando que ele deve informar um valor para um controle de entrada que possua o atributo `required`. O trecho a seguir demonstra isso.

```html
<input type="text" ... required [(ngModel)="tarefa.nome" #nome="ngModel">
<div class="alert alert-danger" [hidden]="nome.valid || nome.pristine">
    Informe o nome da tarefa
</div>
```

O trecho de código indica que o `input`é referenciado pela variável temporária `nome`. Além disso, a variável temporária recebe o valor `ngModel`, o que indica que ela está vinculada ao controle por meio do two way data binding. A variável temporária possui os atributos `valid`e `pristine` indicando, respectivamente o estado do controle de entrada \(conforme a tabela dos estados de validação apresentada anteriormente\).

Utilizar um elemento `div` com a propriedade `hidden`e seu valor baseado em uma expressão lógica faz com que a mensagem de validação seja apresentada para o usuário apenas na situação apropriada.

## Mais de uma regra de validação no campo



Como a validação de formulários baseados em template utiliza os recursos do HTML, o capítulo atual pode ser estendido por qualquer referência de validação em HTML. Recomendamos essas duas:

* W3Schools: HTML Input Types: https://www.w3schools.com/html/html\_form\_input\_types.asp
* W3Schools: HTML Input Attributes: https://www.w3schools.com/html/html\_form\_attributes.asp

Resumidamente, a validação pode ser estendida para usar tipos de controle de entrada do HTML:

* password
* radio
* checkbox
* color
* date
* datetime-local
* email
* month
* number
* range
* search
* tel
* time
* url
* week

Além disso, os atributos a seguir complementam os recursos de validação:

| Atributo | Descrição |
| :--- | :--- |
| `max` | Define o valor máximo para um controle de entrada |
| `maxlength` | Define o comprimento máximo para um controle de entrada |
| `min` | Define o valor mínimo para um controle de entrada |
| `pattern` | Define uma expressão regular para validar um controle de entrada |

Os atributos a seguir também pode ser úteis e podem ser usados como propriedades do Angular:

* `disabled`: desabilita um controle de entrada
* `readonly`: determina que um controle de entrada está no modo somente leitura





