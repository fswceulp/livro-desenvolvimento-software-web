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

Uma vez que o usuário informar algum valor no campo de texto do formulário e clicar no botão *Enviar*, um *array* de pares chave=>valor será criado e passado via método *HTTP POST*. Diferentemente do método *GET*, o *array* não fica visível na URL.
##Acessando os dados do formulário em PHP
Quando os valores são enviados via método *POST*, automaticamente é criada um *array* chamado `$_POST` que contém todos os valores preenchidos no formulário e que agora poderão ser acessados via código PHP. O *array* definido em `$_POST` é global para o script (página) corrente e pode ser acessado a qualquer momento, independente do escopo (e.g. em uma função ou em uma classe), sem necessidade de nenhum tratamento especial. 

Vamos usar o código HTML definido anteriormente para acrescentar um script PHP que acessa os dados enviados via método *POST* e mostra-los no *browser*. 
```php
<html>
<body>
    <?php
        $nome = $_POST["textNome"];
        echo "Nome: ".$nome;
    ?>
    <form name="form1" method="POST">
        <input name="textNome" type="text">
        <input name="btnEnviar" type="submit" value="Enviar">
    </form>
</body>
</html>
```

Na primeira vez que a página acima for carregada, um erro será gerado porque o array `$_POST` e seus valores ainda não existem. Uma vez que o formulário for preenchido pelo usuário e o botão *Enviar* for acionado, o *array* será criado, o nome informado será mostrado no *browser* e o erro deixará de existir.

Para resolvermos o problema do erro gerado no primeiro acesso, pode ser realizada uma verificação com o intuito de identificarmos se os valores de `$_POST` não estão nulos. A seguir é apresentado o código PHP com esta verificação, que deve substituir o código PHP mostrado anteriormente:

```php
<?php
    if (isset($_POST["textNome"])){
        $nome = $_POST["textNome"];
        echo "Nome: ".$nome;
    }
?>
```
No código mostrado anteriormente foi realizada uma verificação com o auxílio da função `isset` para identificarmos se a chave `textNome` existe. Mais informações sobre a função `isset` estão disponíveis no capítulo de [Funções](../funcoes/README.md). 

As exemplificações mostradas anteriormente sempre enviam os dados para a página PHP corrente. Caso necessite enviar os dados para outra página (outro script PHP), pode ser utilizado o atributo `action` do formulário. Assim, deve ser atribuído ao atributo `action` o nome da página destino, por exemplo, `action="pagina_destino.php"`. A seguir você pode fazer [download](https://github.com/jacksongomesbr/livro-web-codigo-fonte/tree/master/php/formularios/metodo-post/projeto-1) de um projeto PHP que mostra, na prática a utilização do envio de dados para uma página diferente.  



