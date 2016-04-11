#Conexão via PDO

Para estabelecer uma conexão com um banco de dados utilizando PDO é necessário definir a string de conexão e passá-la para uma instância PDO, conforme exemplificação a seguir:

```php
<?php
$servername = "localhost";
$username = "usuario";
$password = "senha";
$db = "nome-do-banco";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
    // set o modo de erro do PDO para gerar exceções
set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexão realizada com sucesso!";
}
catch(PDOException $e)
{
    echo "Conexão falhou!: " . $e->getMessage();
}
?>
```

Na definição da string de conexão com o referido banco de dados, deve-se definir inicialmente o tipo do banco (neste caso, MySQL), os dados para autenticação no banco de dados (usuário e senha), além do banco de dados ao qual deseja-se estabelecer conexão (neste caso “nome-do-banco”). No script apresentado anteriormente, também foi definido o modo de erro do PDO para gerações de exceções sempre que quaisquer erros ocorrerem com as execuções das consultas no banco de dados. 

Sempre que um script for finalizado, a conexão é automaticamente finalizada. Caso necessite finalizar a conexão antes, basta utilizar a seguinte instrução:

```php
$conn = null;
```