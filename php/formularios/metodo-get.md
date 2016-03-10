#Método GET
O método GET cria um **array** de chaves e valores *(exemplo, chave1=>valor1, chave2=>valor2, ..., chaven=>valorn)*, em que as chaves correspondem aos nomes dos controles dos formulários e os valores correspondem aos dados de entradas fornecidos pelo usuário. 

O atributo `method` define o método de envio dos dados do formulário, conforme exemplificação a seguir:

```html
<html>
<body>
    <form name="form1" method="GET">
        <input name="textNome" type="text">
        <input name="btnEnviar" type="submit" value="Enviar">
    </form>
</body>
</html>
```

Uma vez que o usuário informar algum valor no campo de texto do formulário e clicar no botão **Enviar**, um array de **chave=>valor** será criado e passado via URL. Este array é também chamado de **Query String**. 

Supondo que o usuário digite **John** no campo de texto e clique no botão **Enviar**, o seguinte array será criado e enviado pela URL: 
**?textNome=John&btnEnviar=Enviar**. O caracter **?** separa a URL base do array com os valores. Cada par *chave=>valor* é separado pelo caráter **&**. Por exemplo, se página carregada fosse *index.php*, e estivesse dentro da pasta exemplo, então a URL base poderia ser * http://localhost/exemplo/index.php* . 
