#Exclusão de dados
A sintaxe para exclusão de dados é similar as outras operações. A diferença está no uso da cláusula **DELETE** da linguagem SQL. 

```php
$conn = //abrir conexão com o banco de dados
$sql = //definir a instrução SQL utilizando DELETE
$conn->exec($sql)
```