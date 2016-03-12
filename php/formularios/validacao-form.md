#Validação de Formulários
Neste capítulo, é apresentado o exemplo de criação de um formulário que contém diferentes campos de entrada: *campos de texto* (`text`), *radio button* (`radio`), *caixa de texto para textos maiores* (`textarea`), *botão para envio dos dados* (`submit`), e um para *limpar o formulário* (`reset`). Os campos do formulário e as respectivas especificações são mostrados na tabela a seguir:

| Campo | Tipo | Requerido |
| -- | -- | -- |
| Nome | text | Sim |
| CPF | text | Sim |
| E-mail | text | Sim |
| Site | text | Não |
| Observações | textarea | Não |
| Sexo | radio | Sim |

##Campos de texto
Os campos *Nome, Cpf, E-mail, Site* são todos campos de texto definidos através do atributo `type` com valor `text` (`type="text"`). O campo *Observações* também é um campo de texto, porém é um `textarea`, que segue uma declaração diferente. O campo `textarea` permite múltiplas linhas e colunas. A seguir o código HTML para definição dos respectivos campos é apresentado.
```html
Nome: <input type="text" name="txtNome">
CPF:  <input tyé="text" name="txtCpf">
E-mail: <input type="text" name="txtEmail">
Site: <input type="text" name="txtSite">
Observações:<textarea name="textAreaObservacoes" rows="7" cols="40"> </textarea>
```
##Campo para seleção exclusiva (`radio`)
O campo para escolha do sexo oferece duas opções possíveis: *Masculino e Feminino*. Para isso, é utilizado um campo do tipo `radio`, conforme código apresentado a seguir:
```html
<input type="radio" name="radioSexo" value="Masculino"> Masculino
<input type="radio" name="radioSexo" value="Feminino"> Feminino
```
Se o usuário escolher a opção `Feminino`, a opção `Masculino` deverá estar desmarcada, e vice-versa. Para garantir esta escolha única, o nome de ambos os campos (Feminino e Masculino) devem ser o mesmo. Neste caso específico, o nome definido foi `radioSexo`.

##Botões para ações no formulário
A qualquer momento, o usuário pode limpar o formulário ou enviar os dados para serem processados. Para isso, existem específicos botões: `reset` (limpar) e `submit` (submete). A seguir é apresentado o código HTML que os define:
```html
<input type="submit" name="btnEnviar" value="Enviar">
<input type="reset" name="resetBtn" value="Limpar">
```
##Código PHP para validação
Para que os dados possam ser validados, inicialmente deve-se definir todos os elementos apresentados anteriormente como elementos de um formulário. O método de envio dos dados no formulário deve ser POST. Depois disso, podemos passar para a etapa de codificação do código PHP que receberá os dados para verificação. A verificação que será realizada é a obrigatoriedade dos campos: *Nome, Cpf, E-mail e Sexo*. A seguir é apresentado um exemplo de codificação: 
```php
<?php
$nomeError=$cpfError=$emailError= $sexoError="";
if ($_SERVER["REQUEST_METHOD"]=="POST"){
    if (empty($_POST["txtNome"])){
        $nomeError = "Nome é obrigatório!";
    }
    if (empty($_POST["txtCpf"]))
        $cpfError ="CPF é obrigatório!";
    if (empty($_POST["txtEmail"]))
        $emailError = "O e-mail é obrigatório1";
    if (empty($_POST["radioSexo"]))
        $sexoError = "O sexo é obrigatório1";
}    
```

