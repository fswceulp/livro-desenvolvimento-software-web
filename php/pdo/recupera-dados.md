#Seleção de dados

A seleção de dados também pode ser realizada a partir da linguagem SQL e PDO. A seguir é apresentado um exemplo de sintaxe que pode ser utilizado.

```php
$conn = //abrir conexão com o banco de dados
$sql = //definir a instrução SQL utilizando a cláusula SELECT
$objPDO = $conn->query($sql);
```

De maneira similar a inserção, inicialmente deve-se estabelecer uma conexão com o específico banco de dados, a posteriori deve ser definida a instrução SQL, e logo em seguida executar o método `query` que retorna um objeto `PDOStatement`.

Para ter acesso aos valores retornados no objeto `PDOStatement`, a seguinte sintaxe pode ser utilizada:

