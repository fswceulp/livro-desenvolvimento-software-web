# Doctrine DBAL - Database Abstraction Layer

Para instalar a DBAL utilize composer:

```
composer require doctrine/dbal
```

## Criando uma conexão

Uma conexão com o banco de dados é criada por meio da classe `\Doctrine\DBAL\DriverManager`.

```php
$config = new \Doctrine\DBAL\Configuration();
$connectionParams = array(
    'dbname' => 'cidades',
    'user' => 'sa',
    'password' => 'sa',
    'host' => 'localhost',
    'driver' => 'pdo_sqlsrv',
    'charset' => 'utf-8'
);
$db = \Doctrine\DBAL\DriverManager::getConnection($connectionParams, $config);
```

No trecho de código acima, o método `getConnection()` retorna uma conexão com o banco de dados, conforme os parâmetros da conexão (`$connectionParams`). Nos parâmetros da conexão, as chaves do array são importantes.

|Chave  |Descrição                                      |
|-------|-----------------------------------------------|
|`dbname`|O nome do banco de dados                      |
|`user` |O nome do usuário da conexão                   |
|`password`|A senha do usuário da conexão               |
|`host` |O nome do host do banco de dados               |
|`driver`|O nome do driver da conexão                   |
|`charset`|(opcional) A codificação dos dados           |

No caso do trecho de código:
- O banco de dados chama-se `cidades`
- O nome do usuário e sua senha são `sa` e `sa`, respectivamente
- O nome do host é `localhost`
- O nome do driver é `pdo_sqlsrv`
- A codificação de caracteres é `utf-8`

Se você encontrar problemas utilizando o driver `pdo_sqlsrv`, utilize o driver `sqlsrv`.

## Recuperação e manipulação de dados

### Consulta (SELECT)

Uma consulta SQL pode ser executada por meio de uma conexão e do método `query()`:

```php
$sql = "SELECT * FROM Cidades";
$query = $db->executeQuery($sql);
$cidades = $query->fetchAll();
```

A consulta SQL é representada pela variável `$sql` (uma `string`). O método `executeQuery()` cria uma instância de `Doctrine\DBAL\Statement`.

O método `fetchAll()` retorna todos os registros encontrados, na forma de um `array`. Se for necessário iterar pelos resultados, ou se a consulta fornecer apenas um resultado, você pode utilizar o método `fetch()`:

```php
$sql = "SELECT * FROM Cidades";
$query = $db->executeQuery($sql);
while ($linha = $query->fetch()) {
    echo $linha['nome'];
}
```

#### Parâmetros

Embora a consulta SQL seja represenada por uma string, por questões de segurança, não é interessante concatenar valores informados pelo usuário, por exemplo, para filtrar um conjunto de resultados com base em um critério. Assim, deve ser usado o método `executeQuery()` de `Doctrine\DBAL\Connection` para criar um `Statement`:

```php
$sql = "SELECT * FROM Cidades WHERE id = ?";
$query = $db->executeQuery($sql, array(1));
$cidade = $query->fetch();
```

A instrução SQL possui o símbolo `?` para indicar que deve se recuperado o registro cuja coluna `id` corresponde a um valor (ainda não informado).

O método `executeQuery()` aceita como parâmetros a instrução SQL e um `array`, que contém os valores para os parâmetros da instrução SQL.

### Inserindo valores (UPDATE, DELETE, INSERT)

Enquanto o método `Connection->executeQuery()` é útil para instruções SELECT, o método `Connection->executeUpdate()`, que funciona de maneira idêntica, é indicado para instruções UPDATE, DELETE e INSERT. O método `executeUpdate()` retorna a quantidade de linhas afetadas pela execução da instrução.

```php
$sql = "INSERT INTO Estados(nome, uf) VALUES(?, ?)";
$r = $db->executeUpdate($sql, array("Tocantins", "TO"));
```

A instrução SQL é um INSERT. A variável `$r` contém a quantidade de linhas afetadas pela execução da instrução SQL. No caso de uma instrução INSERT isso quer dizer que se `$r > 0`, então os dados foram inseridos. Caso contrário, `$r == 0`.
