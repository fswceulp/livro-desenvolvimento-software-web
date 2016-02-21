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

###Acrescentando um novo valor ao `array`
Se um `array`foi previamente definido, é possível modificá-lo acrescentando um novo elemento a ele, conforme exemplificado a seguir:

```php
<?php
$arr = array (3, 5, 7, 9);
$arr[4]=11;

// esta sintáxe também funcionaria.  
//$arr[]=11;
?>
```
Se o índice for omitido (conforme linha comentada no código acima), o PHP identifica automaticamente o último índice utilizado e associa o novo valor ao índice seguinte (no exemplo supracitado, seria o índice de valor **4** que receberia o valor **11**.

###Percorrendo todos os valores do `array`

A seguir é apresentado um exemplo em que o `array` é percorrido e todos os seus elementos são apresentados.

```php
<?php
$arr = array (3, 5, 7, 9);
for ($i=0;$i<4;$i++){
    echo $arr[$i];
    echo "</br>"; // quebra de linha
}
?>
```







