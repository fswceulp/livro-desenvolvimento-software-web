#Funções para `array`

Existe um conjunto de funções que permitem a manipulação de `arrays`. Aqui será apresentada apenas algumas. Para ter acesso a todas, procure na  documentação oficial do PHP. 

##`count()`

A função `count` retorna a quantidade de elementos de um vetor. 

```php
<?php
$arr = array (2, 4, 6, 8);
$quant_itens = count($arr);
echo $quant_itens;
?>
```

##`array_push()`

A função `array_push()` permite adicionar um ou vários elementos no final de um array. 

```php
<?php
$arr = array (2, 4, 6, 8);
array_push($arr, 10);
for ($i=0; $i<count($arr);$i++){
    echo $arr[$i]."</br>";
}
?>
```

##`array_pop()`

A função `array_pop()` retorna o último elemento de um array, removendo-o do array passado por parâmetro. 

```php
<?php
$arr = array (2, 4, 6, 8);
$ultimo_elemento = array_pop($arr);
echo "Ùltimo elemento:".($ultimo_elemento);
echo "</br> Novo Array: </br>" ;
for ($i=0; $i<count($arr);$i++){
    echo $arr[$i]."</br>";
}
?>
```

##`array_shift()`

A função `array_shift()` retorna o primeiro elemento de um array, removendo-o do array passado por parâmetro.

```php
<?php
$arr = array (2, 4, 6, 8);
$primeiro_elemento = array_shift($arr);
echo "Primeiro elemento:".($primeiro_elemento);
echo "</br> Novo Array: </br>" ;
for ($i=0; $i<count($arr);$i++){
    echo $arr[$i]."</br>";
}
?>
```

##`array_unshift()`

A função `array_unshift()` adiciona um elemento na primeira posição de um array.

```php
<?php
$arr = array (2, 4, 6, 8);
array_unshift($arr,1);
echo "</br> Novo Array: </br>" ;
for ($i=0; $i<count($arr);$i++){
    echo $arr[$i]."</br>";
}
?>
```

##`array_pad()`

A função `array_pad()` permite expandir (aumentar) o tamanho de um array para um tamanho *N* e inserir um determinado valor em cada uma das novas posições do array. 

No exemplo seguinte, a função `array_pad` recebe por parâmetro: um array `$arr` com 4 elementos; o limite de expansão do novo array que será gerado; e o elemento que será inserido em cada nova posição do novo array. Assim, o novo arrat passará a ter 7 elementos, com mais 3 elementos de valor 10.

```php
<?php
$arr = array (2, 4, 6, 8);
$arr = array_pad($arr, 7, 10);
echo "</br> Novo Array: </br>" ;
for ($i=0; $i<count($arr);$i++){
    echo $arr[$i]."</br>";
}
?>
```
O array só será expandido se o tamanho *N* for maior que o tamanho atual do array. No exemplo anterior, se o novo tamanho `N` passado por parâmetro for 2, então nada acontecerá, porque o tamanho atual do array é 4. 

O tamanho `N` pode ser negativo. Neste caso, os novos elementos serão inseridos nas posições inicias do novo array.

```php
<?php
$arr = array (2, 4, 6, 8);
$arr = array_pad($arr, -7, -10);
echo "</br> Novo Array: </br>" ;
for ($i=0; $i<count($arr);$i++){
    echo $arr[$i]."</br>";
}
?>
```

##`reverse()`

A função `reverse()` inverte a ordem dos elementos de um array passado por parâmetro. 

```php
<?php
$arr = array (2, 4, 6, 8);
$arr = array_reverse($arr);
echo "</br> Novo Array: </br>" ;
for ($i=0; $i<count($arr);$i++){
    echo $arr[$i]."</br>";
}
?>
```



