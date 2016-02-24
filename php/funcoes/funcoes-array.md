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
