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


