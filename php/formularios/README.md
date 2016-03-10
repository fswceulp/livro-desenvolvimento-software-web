#Formulários HTML e PHP
A criação de um formulário é realizada através das definições (marcações) da linguagem HTML. A seguir é apresentado um exemplo de criação de um formulário em HTML. 
```html
<html>
<body>
    <form name="form1">
        <input name="textNome" type="text">
        <input name="btnEnviar" type="submit" value="Enviar">
    </form>
</body>
</html>
```

No código HTML apresentado anteriormente, foi criado um formulário com nome `form1`; uma caixa de texto `txtNome` e um botão para envio dos dados de nome `btnEnviar`. O atributo `type`  define o tipo do controle HTML que está sendo criado. Para a definição da caixa de texto, foi definido o valor `text` para o atributo `type`, enquanto que para um botão, responsável pelo envio dos dados, foi definido o valor `submit`.

 Para que os dados digitados nos formulários possam ser enviados para um script PHP, são utilizados os métodos (verbos) **GET** e **POST**. 
 
 [Método Get](metodo-get.md)





