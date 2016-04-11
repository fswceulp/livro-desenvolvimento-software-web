#Alteração de dados

A sintaxe para alteração de dados é similar as outras operações. A diferença está no uso da cláusula **UPDATE** da linguagem SQL. 

```php
$conn = //abrir conexão com o banco de dados
$sql = //definir a instrução SQL utilizando UPDATE
$conn->exec($sql)
```