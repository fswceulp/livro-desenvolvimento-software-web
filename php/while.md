#`while`

O `while`é uma estrutura de controle que permite a repetição de blocos de códigos (sequências de comandos). A estrutura básica de uma estrutura `while` é dada da seguinte forma:

```php
<?php
while (expressao==true)
{
    comando1;
    comando2;
    ...
}
?>
```

Um exemplo de utilização da **estrutura de iteração** `while` é apresentado a seguir:

```php
<?php
$i=0;
while ($i<10)
{
    echo "i: ".$i;
    echo "<br>"; // inserindo uma quebra de linha em HTML
    $i++; // é a mesma coisa que $i = $i+1
}
?>
```

Um exemplo de utilização da **estrutura de iteração** `while` alternativa é apresentado a seguir:

```php
<?php
// estrutura alternativa para o While
$i=0;
while ($i<10):
    echo "i: ".$i;
    echo "<br>"; // inserindo uma quebra de linha em HTML
    $i++; // é a mesma coisa que $i = $i+1
endwhile
?>
```
Da mesma forma como na **estrutura condicional** que possui uma sintaxe alternativa para o seu uso, assim também funciona a estrutura `while`.



