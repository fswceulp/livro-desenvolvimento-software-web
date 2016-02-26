#Funções para `string`

Existem funções específicas para manipulação de string. Algumas delas são apresentadas nesta seção.

##Função `echo()`

A função `echo()` é utilizada para imprimir uma ou mais strings. `echo`, atualmente, não é considerada uma função, logo, não é obrigatório a utilização do parênteses “`()`”.

```php
<?php
echo "Esta é uma mensagem simples </br>";
echo ("esta é uma mensagem "."concatenada! </br>");
?>
```

##Função `print()`

A função `print()` é utilizada para imprimir uma ou mais strings, assim como a função `echo`. `print`, atualmente, não é considerada uma função, logo, não é obrigatório a utilização do parênteses “`()`”

```php
<?php
print ("Esta é uma mensagem simples </br>");
print "esta é uma mensagem "."concatenada! </br>";
?>
```

##Função `explode()`

A função `explode()` transforma uma `string` em um `array` de strings. Para isso, é necessário passar por parâmetro um *caracter delimitador*, em que que, sempre  que for identificado na *string base*, será gerada uma nova *posição no array*.   
