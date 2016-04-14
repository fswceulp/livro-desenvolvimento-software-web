#Acesso a Banco de dados via PDO (*PHP Data Objects*)

*PHP Data Object (PDO)* é uma extensão do PHP para acesso a banco de dados, isto é, dispõe de uma interface que simplifica a conexão com banco de dados e a realização de operações sobre ele. PDO está disponível a partir da versão 5 do PHP.

* [Conexão com o banco de dados](conexao.md)
* [Inserção de dados](insere-dados.md)
* [Seleção de dados](recupera-dados.md)
* [Alteração de dados](altera-dados.md)
* [Exclusão de dados](exclui-dados.md)

##Exemplos de projetos com PDO
Esta seção trará alguns exemplos de projetos com o PDO, tais como, projetos que mostra na prática a conexão com um respectivo banco de dados, operações de inserção, consulta, exclusão e alteração. 

###Projeto 1: Conexão com um banco de dados

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

###Projeto 2: operações DAO (`Data Access Object`) com 1 tabela
No banco `db-facul`, crie a tabela `Aluno`, conforme figura apresentada a seguir:

![](https://github.com/jacksongomesbr/livro-web-codigo-fonte/blob/master/php/pdo/projetos/projeto2-DAO/db-facul-MoldeloER.png)






