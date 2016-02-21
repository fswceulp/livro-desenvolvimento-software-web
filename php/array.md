#Array
Um `array` permite representar um conjunto de dados em uma única variável. Para criar um `array` em PHP é necessário utilizar a função `array()`. São três os tipos de arrays disponíveis no PHP, são eles:

- **Arrays indexados:** arrays com índices numéricos;
- **Arrays associativos:** arrays onde cada índice é referenciado por uma chave;
- **Arrays multidimensionais:** são matrizes, isto é, arrays que contém um ou mais arrays.

##Arrays Indexados
Quando o array é indexado por índices. No código apresentado a seguir, é criado um array $arr  que contém 4 elementos (3, 5, 7 e 9).

```php
<?php
$arr = array (3, 5, 7, 9);
}
?>
```
A atribuição também pode ser feita maneira manual, índice por índice: 

```php
<?php
$arr[0]=3;
$arr[1]=5;
$arr[2]=7;
$arr[3]=9;
?>```
