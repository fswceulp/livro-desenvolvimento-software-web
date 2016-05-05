# Formulários

O Bootstrap fornece classes para lidar com formulários. As classes CSS mais utilizadas neste processo são `form-control` (aplicadas a campos e elementos de formulário) e `form-group`, para melhor espaçamento dos elementos do formulário.

As seções a seguir demonstram a utilização dos principais elementos e configurações de formulário. Veja um exemplo completo em funcionamento [aqui](http://embed.plnkr.co/lsqlyDyrECTmTNkuaC2g/preview).

## Configurações do formulário

A princípio, não é necessário utilizar uma classe específica para que haja uma correta utilização de um formulário, apenas o elemento `form`. Entretanto, há duas aplicações que podem ser úteis em situações específicas:
* **formulários em linha (in-line)**: utilizar a classe `form-inline` faz com que o formulário fique na mesma linha
* **formulários horizontais**: utilizar a classe `form-horizontal` faz com que os rótulos dos campos do formulário fiquem à esquerda, enquanto os campos ficam à direita, na mesma linha

## Grupos de elementos

Os grupos de elementos representam um conceito que permite agrupar os elementos necessários para formar uma linha ou um grupo de elementos do formulário. A classe `form-group` é aplicada a um elemento `div` que contém pelo menos dois outros elementos:
* o elemento `label`, que representa o rótulo do campo do formulário
* o campo do formulário, em si

Exemplo:

```html
<form>
  <div class="form-group">
    <label for="nome">Nome</label>
    <input type="text" class="form-control" id="nome" placeholder="Informe seu nome">
  </div>
</form>
```

## Elemento `input`

O elemento `input` representa o tipo de entrada mais básica do formulário. A classe `form-control` deve ser aplicada ao elemento `input`. O código a seguir demonstra sua utilização.

```html
<form>
  <div class="form-group">
    <label for="nome">Nome</label>
    <input type="text" class="form-control" id="nome" placeholder="Informe seu nome">
  </div>
</form>
```

Além de receberem texto (atributo `type` com valor `text`) o HTML5 permite que o elemento `input` valide a entrada, conforme o tipo:
* `password`: campo para entrada de senha
* `datetime`: campo para entrada de data e hora
* `date`: campo para entrada de data
* `month`: campo para entrada de mês
* `time`: campo para entrada de hora
* `number`: campo para entrada de número
* `email`: campo para entrada de endereço de e-mail
* `url`: campo para entrada de endereço de internet (URL)
* `tel`: campo para entrada de telefone
* `color`: campo para entrada de cor

Cada um destes tipos de campos pode ser tratado de uma forma diferente pelo browser, que pode utilizar uma interface específica para facilitar a entrada do usuário.

## Elemento `textarea`

O elemento `textarea` permite uma entrada de texto de múltiplas linhas. Exemplo:

```html
<form>
  <div class="form-group">
    <label for="endereco">Endereço</label>
    <textarea class="form-control" id="endereco" placeholder="Informe seu endereço completo" rows="5"></textarea>
  </div>
</form>
```

O atributo `rows` define a quantidade de linhas.

## Elemento `input` do tipo `radio` e `checkbox`

O elemento `input` pode ter dois tipos que fazem com que o comportamento da entrada seja bem diferente de uma entrada textual:
* `radio`: faz com que a entrada seja um "botão rádio", que é útil para entradas com opções mutuamente exclusivas
* `checkbox`: faz com que a entrada seja um "botão de marcar", que é útil para entradas com múltiplas opções

Além disso, para lidar com `radio` e `checkbox` é necessário utilizar as classes `radio` e `checkbox`, respectivamente. Exemplo:

```html
<form>
  <div class="form-group">
    <label>Termos do contrato</label>
    <div class="checkbox">
      <label>
        <input type="checkbox" name="termos" value="aceito">Aceito os termos
      </label>
    </div>
  </div>

  <div class="form-group">
    <label>Sexo</label>
    <div class="radio">
      <label><input type="radio" name="sexo" value="m">M</label>
      <label><input type="radio" name="sexo" value="f">F</label>
    </div>
  </div>
</form>
```

## Elemento `select`

O elemento `select` permite uma entrada em que o usuário precisa escolher uma opção dentre um grupo [de opções]. O grupo de opções é representado por um ou mais elementos `option`. Exemplo:

```html
<form>
  <div class="form-group">
    <label for="estado">Estado</label>
    <select id="estado" class="form-control">
      <option>Tocantins</option>
      <option>Goiás</option>
    </select>
  </div>
</form>
```

O elemento `option` pode possuir o atributo `value`, que determina o valor da opção. Neste caso, o conteúdo do elemento `option` é o que o usuário vê, enquanto o atributo `value` representa o que é realmente o valor selecionado pelo usuário.

## Controle estático

Um control estático é um conceito do Bootstrap para representar uma situação em que um elemento do formulário não recebe entrada. A classe a ser aplicada ao elemento que se tornará estático (que pode ser qualquer elemento do HTML) é `form-control-static`. Exemplo:

```html
<form>
  <div class="form-group">
    <label>Identificador</label>
    <p class="form-control-static">001</p>
  </div>
</form>
```

## Configurações específicas dos campos do formulário

Os campos do formulário também podem assumir situações específicas, conforme apresentado a seguir:
* **Campo desabilitado**: não recebe entrada do usuário (funciona também como campo para leitura). Deve-se utilizar o atributo `disabled` (sem valor)
* **Campo somente leitura**: não recebe entrada para o usuário. Deve-se utilizar o atributo `readonly` (sem valor)
* **Campo requerido**: requer uma entrada do usuário. Deve-se utilizar o atributo `required` (sem valor)

## Texto de ajuda

A classe `help-block` pode ser utilizada para fornecer ajuda para entrada em um campo. Exemplo:

```html
<form>
  <div class="form-group">
    <label>Nome</label>
    <input type="text" class="form-control">
    <span class="help-block">Informe seu nome completo, sem abreviações</span>
  </div>
</form>
```

## Tamanho dos controles

O tamanho dos controles pode ser definido por meio das classes `input-lg` (maior tamanho), `input-sm` (menor tamanho). O tamanho normal não necessita de uma classe.
