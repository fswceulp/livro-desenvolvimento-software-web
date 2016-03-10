#Método POST
Similar ao método *GET*, o ***método POST*** também cria um array de chaves e valores (exemplo, chave1=>valor1, chave2=>valor2, ..., chaven=>valorn), em que as chaves correspondem aos nomes dos controles dos formulários e os valores correspondem aos dados de entradas fornecidos pelo usuário. 

O atributo `method` define o método de envio dos dados do formulário, conforme exemplificação a seguir:

```html
<html>
<body>
    <form name="form1" method="POST">
        <input name="textNome" type="text">
        <input name="btnEnviar" type="submit" value="Enviar">
    </form>
</body>
</html>
```