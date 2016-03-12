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

