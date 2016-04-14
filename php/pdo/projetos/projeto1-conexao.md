#Projeto 1: Conexão com um banco de dados

Para que possa ser possível realizar a conexão com um determinado banco de dados, inicialmente faz-se necessária a sua criação. Portanto, **crie um banco de dados** intitulados `“db-facul”`, logo em seguida, c**rie uma classe** `Connection`, com um método `Open`, que terá a implementação do código que realiza a conexão com o respectivo banco. O código é mostrado a seguir:

```php
<?php
define("SERVERNAME", "localhost");
define ("DATABASE_NAME","db-facul");
define ("USERNAME", "root");
define ("PASSWORD","");

class Connection
{
    public static function Open(){
        try {
            $conn = new PDO("mysql:host=".SERVERNAME.";dbname=".DATABASE_NAME, USERNAME, PASSWORD);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }
        catch(PDOException $e)
        {
            throw new Exception($e->getMessage());
        }
    }
}
```

Com a definição desta classe em seu projeto, sempre que necessário é possível utilizá-la para estabelecer conexão com banco de dados. 

A implementação deste projeto, inclusive, com o projeto de banco de dados desenvolvimento na ferramenta MYSQL WorkBench pode ser encontrado [aqui](https://github.com/jacksongomesbr/livro-web-codigo-fonte/tree/master/php/pdo/projetos/conexao-db). 

