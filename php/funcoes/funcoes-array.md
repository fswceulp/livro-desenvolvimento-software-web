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





