#Funções para manipulação de variáveis

Há um conjunto de funções pré-definidas para manipulação de variáveis. Algumas delas serão apresentadas neste capítulo. 

##Função `empty`

A função `empty()` verifica se uma determinada variável é ou não vazia. Se for vazia, retorna `True`, ´caso contrário retorna `False`.

Os seguintes valores são considerados vazios: 1.
1. `""` (uma string vazia)
2. `0` (um inteiro vazio)
3. `"0"` (uma string fazia)
4. `NULL` 
5. `FALSE` (um booleano vazio)
6. `array` (um array vazio)
7. `var $var;` (um variável delcarada, mas sem atribuição de valor)

```php
<?php
$varInteira = 0;
$varString = "0";
$varString="";
$varBooleana=False;
$varArray = array();
$varNula= NULL;

if (empty($varInteira) && empty($varString) && empty($varString)
            && empty($varBooleana) && empty($varArray) && empty($varNula)){
    echo "Todas as variáveis são vazias!";
}
?>
```

##Função `gettype()`

A função `gettype()` retorna o tipo de uma variável.

```php
<?php
$dados = array(1, 1., NULL, True, "texto");
for ($i=0; $i<count($dados); $i++){
    echo (gettype($dados[$i]))."</br>";
}
?>
```
##Função `is_array()`

A função `is_array()` verifica se uma variável é um array. Se for, retorna `True`, caso contrário, retorna `False`.

```php
<?php
$dados = array(1, 1., NULL, True, "texto");
if (is_array($dados)){
    echo 'a variável $dados é um array </br>';
}
if (!is_array($dados[0]))
    echo 'a variável $dados[0] não é um array';
?>
```
De maneira similar, existem funções para verificar outros tipos, dentre elas: `is_bool()`, `is_float()`, `is_int()`, `is_integer()`, `is_null()`. A relação completa pode ser encontrada na [documentação oficial do PHP](http://php.net). 

##Função `isset()`

A função `iset()` verifica se uma variável foi iniciada. Se sim, retorna `True`, caso contrário, `False`.

```php
<?php
$variavel=NULL;
if (!isset($variável)){
    echo "A não variável foi inciada </br>";
}
$variavel ="";
if (!isset($variável)){
    echo "Agora sim, a variável foi inciada";
}
?>
```

##Função `unset()`

A função `unset()` destrói uma variável especificada. 

```php
<?php
$variavel ="";
if (!isset($variável)){
    echo "A variável foi inciada </br>";
}
unset($variavel);
if (!isset($variável)){
    echo "A não variável não existe </br>";
}
?>
```

##Função `print_r()`

A função `print_r()` imprime informações de uma variável. Se a variável for do tipo `array`, então todos seus valores serão impressos, no formato de chave e valor.

```php
<?php
$arr= array (1, 2, 3, 4);
print_r($arr); // Saída: Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 )
?>
```
Esta função tem um segundo parâmetro, `return`, que se definido como `True`, retornará o resultado, ao invés de imprimi-lo.  