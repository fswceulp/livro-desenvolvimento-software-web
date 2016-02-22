#String
A maneira mais simples para especificar uma string é coloca-la entre apóstrofos (caracter '). 

```php
<?php
echo 'forma mais simples de especificar uma string';
echo 'é possível imprimir "aspas" assim';
?>
```
Com o uso das aspas simples, o valor `{$valor}` contido na string será interpretado como texto (`string`), diferente do uso das aspas duplas (`“` ).

```php
<?php
$valor=5;
echo "utilizando as aspas {$valor} duplas";
echo "</br>";
echo 'utilizando as aspas {$valor} simples';
?>
```
