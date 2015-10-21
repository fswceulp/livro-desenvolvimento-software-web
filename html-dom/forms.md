# Formulários

Embora seja possível, por meio da árvore DOM, manipular qualquer tipo de documento HTML, algumas facilidades são fornecidas. Uma delas é a maneira de lidar com formulários. O objeto `document` possui a propriedade `forms`, um array que representa os formulários presentes na página. Este array pode ser acessado por índice numérico ou string (correspondendo ao nome do formulário).

## Entrada básica

O exemplo a seguir ilustra a utilização do HTML DOM para acessar dados do formulário.

<iframe src="https://embed.plnkr.co/g79uKYMF2h5EfgmJdpfK/preview" width="100%" height="400"></iframe>

No HTML, é importante destacar o trecho referente ao formulário:

```html
<form onsubmit="return false;">
    <div>
        <label for="primeiro_nome">Primeiro nome:</label>
        <input type="text" name="primeiro_nome" id="primeiro_nome"
        placeholder="Informe seu primeiro nome">
    </div>
    <div>
        <label for="segundo_nome">Segundo nome:</label>
        <input type="text" name="segundo_nome" id="segundo_nome"
        placeholder="Informe seu segundo nome">
    </div>
    <button type="submit" onclick="enviarDados()">Enviar dados</button>
</form>

<p>Seu nome completo é:</p>
<div id="mensagem"></div>
```

No elemento `form` está sendo utilizado o evento `onsubmit`, que é disparado quando o formulário está enviando seus dados. O envio dos dados do formulário é causado pelo clique em um botão ou pelo pressionar da tecla `ENTER` em um campo de texto. O valor do atributo `onsubmit` é `return false;` e representa o código necessário para cancelar o envio de dados do formulário. Isto é necessário para que a página não faça um "refresh".

Os elementos `input` representam os campos de entrada de texto e possuem o atributo `name`, que indica o nome do campo e que será usado, posteriormente, para ter acesso ao valor informado pelo usuário.   

O elemento `button`, que permite o envio dos dados, possui o atributo `onclick` com valor `enviarDados()`, ou seja, ao detectar o clique no botão, a página HTML chamará a função `enviarDados()`.

O código JavaScript da função `enviarDados()`:

```javascript
function enviarDados() {
    var form = document.forms[0];
    var primeiro_nome = form["primeiro_nome"].value;
    var segundo_nome = form["segundo_nome"].value;
    var mensagem = document.getElementById('mensagem');
    mensagem.innerHTML = primeiro_nome + ' ' + segundo_nome;
}
```

Na função `enviarDados()` o destaque vai para o seguinte:
* o objeto `document` fornece o objeto `forms`, que é um vetor representando os formulários da página. Como só há um formulário, então acessa-se o índice `0`;
* a variável `form`, que representa o formulário, permite acessar cada campo pelo seu nome, como se a variável fosse uma espécie de array. A variável `primeiro_nome` recebe o valor do campo "primeiro_nome" por meio de `form["primeiro_nome"].value`. A propriedade `value` retorna o valor do campo. Um processo semelhante é feito para a variável `segundo_nome`;
* por fim, uma string é apresentada na tela, concatenando o primeiro e o segundo nomes.

Outra forma de acessar os campos do formulário é por meio da propriedade `elements` do objeto que representa o formulário. Por exemplo, o código a seguir seria similar ao código anterior:

```javascript
var form = document.forms[0];
var primeiro_nome = form.elements[0].value;
var segundo_nome = form.elements[1].value;
```

Da mesma forma, o resultado seria o mesmo para o código a seguir, que utiliza os nomes dos campos ao invés do índice do array `elements`:

```javascript
var form = document.forms[0];
var primeiro_nome = form.elements['primeiro_nome'].value;
var segundo_nome = form.elements['segundo_nome'].value;
```

## Tipos de campos de formulário

O elemento `input` com o atributo `type` com valor `text` representa um campo de texto. Outros valores para o atributo `type` permitem representar outras formas de entrada de dados:
* `checkbox`
* `radio`
* `password`
* `color`
* `date`
* `datetime`
* `datetime-local`
* `email`
* `month`
* `number`
* `range`
* `search`
* `tel`
* `time`
* `url`
* `week`

Além do elemento `input` o formulário pode conter os seguintes elementos representando maneiras diferentes de entrada de dados:
* `select`: representa uma caixa de seleção (um "drop-down"). Contém elementos `option`, que representam as opções do `select`.
* `textarea`: representa uma caixa de texto com várias linhas;
* `datalist`: representa valores iniciais para um campo `text`;
* `keygen`: gera um par de chaves pública e privada para que seja utilizado um processo de criptografia assimétrica.

## Restrições em campos de formulário

A lista a seguir apresenta as restrições mais comuns em campos de formulário:
* `disabled`: o campo torna-se desabilitado;
* `max`: define o valor máximo para um campo (ex: em campo `number`);
* `maxlength`: define a quantidade máxima de caracteres em um campo (ex: campo `text`);
* `min`: define o valor mínimo para um campo (ex: em campo `number`);
* `pattern`: define uma expressão regular para validar a entrada de dados;
* `readonly`: o campo torna-se apenas para leitura;
* `required`: o campo é de preenchimento obrigatório;
* `size`: define a quantidade de caracteres do campo;
* `step`: define o intervalo, passo de incremento (ex: em campo `number`);
* `value`: define o valor do campo.

O exemplo a seguir ilustra a utilização de vários campos de formulários e restrições sobre eles.

<iframe src="https://embed.plnkr.co/5GezzqU2yd5cuwpeOCVE/preview" width="100%" height="400"></iframe>

> **Exercícios**

> **Exercício 1**: Crie um aplicativo web que permite cadastrar dados de pessoas: nome, idade e sexo. Quando os dados do formulário forem salvos eles devem ser armazenados para uso posterior e o formulário deve ser limpo (campos recebem o valor padrão). Um botão deve permitir que o usuário veja a lista de dados cadastrados. Um botão deve permitir que o usuário veja o nome da pessoa mais nova e mais velha para cada sexo.

> **Exercício 2**: Incremente as funcionalidades do aplicativo desenvolvido na parte 1:
* a lista de pessoas deve ser apresentada automaticamente, após cada novo cadastro;
* deve ser possível excluir uma pessoa da lista.

> **Exercício 3**: Incremente as funcionalidades do aplicativo desenvolvido na parte 2:
* deve ser possível editar os dados de uma pessoa da lista;
* apresente os dados na forma de uma tabela.

> **Exercício 4**: Incremente as funcionalidades do aplicativo desenvolvido na parte 3:
* na tabela que apresenta os dados, as linhas que representam as pessoas mais velhas e mais novas devem ser apresentadas de forma diferente. Por exemplo, as pessoas mais velhas são apresentadas em linhas com fundo amarelo, enquanto as pessoas mais novas são apresentadas em linhas com fundo verde claro.
* a funcionalide anterior deve ser apresentada sempre que uma pessoa for adicionada ou removida da lista, ou quando seus dados tiverem sido alterados.   
