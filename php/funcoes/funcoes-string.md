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

```php
</br> explode </br>
<?php
$str = "Esta é uma explicação sobre a função explode()";
$arr = explode(" ", $str);

for ($i=0; $i<count($arr); $i++){
    echo ($arr[$i])."</br>";
}
?>
```
A aplicação da função `explode()` no código mostrado, gera um array `$arr` com *8 posições*, uma vez que o caracter delimitador é o *espaço em branco* (`“ “`). 


##Função `implode()`

A função `implode()` forma uma string única a partir dos elemento de um determinado *array*. Para isso, é necessário informar o caracter que irá separar um elemento do outro. 

```php
<?php
$arr = array("Esta","é","uma","explicação","sobre","a","função","implode()");
$str = implode(" ",$arr);
echo $str;
?>
```
Conforme código apresentado anteriormente, a função `implode()` utiliza os elementos do array `$arr` e os une em uma só string com o caracter delimitador espaço em branco `“ “`, formando uma só frase, que foi atribuída à variável `$str`.

##Função `trim()`
A função `trim()` retirar os espaços em branco de uma string tanto do final quanto do início. 

```php
<?php
$str = " exemplo da função trim ";
if ($str = "exemplo da função trim")
    echo 'As strings NÃO são iguais iguais!';
$str = trim($str);
echo "</br>"; // imprime quebra de linha em HTML
if ($str = "exemplo da função trim")
    echo 'As strings agora são iguais';
?>
```