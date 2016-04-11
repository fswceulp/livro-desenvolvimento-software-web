#Acesso a Banco de dados via PDO (*PHP Data Objects*)

*PHP Data Object (PDO)* é uma extensão do PHP para acesso a banco de dados, isto é, dispõe de uma interface que simplifica a conexão com banco de dados e a realização de operações sobre ele. PDO está disponível a partir da versão 5 do PHP.

##Conexão via PDO

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

