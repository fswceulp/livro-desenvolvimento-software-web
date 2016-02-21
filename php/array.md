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
?>
```

###Acrescentando um novo valor ao array
Se um `array`foi previamente definido, é possível modificá-lo acrescentando um novo elemento a ele, conforme exemplificado a seguir:

```php
<?php
$arr = array (3, 5, 7, 9);
$arr[4]=11;

// esta sintáxe também funcionaria.  
//$arr[]=11;
?>
```
Se o índice for omitido (conforme linha comentada acima), o PHP identifica automaticamente o último índice utilizado associa o novo valor ao índice seguinte (no caso anterior, seria o índice 4 que receberia o valor 11.








