#### `if...else`
O `if` habilita o uso de uma seleção (expressão condicional). A sintáxe básica utilizada é:

```php
if (expressao==true){
    comando1;
    comando2;
}else{
    comando3;
    comando4;
}
```

A seguir é apresentado um exemplo simples de utilização da sintaxe da expressão condicional:

```php
<?php
$media=7;
if ($media>6)
{
    echo "aprovado";
}
else
{
    echo "reprovado";
}
?>
```

Conforme já apresentado anteriormente, para determinar blocos de códigos (instruções), são utilizadas `{}`. 

Um **condicional** também pode ser representado de uma **maneira alterantiva**, através de uma sintáxe que não faz uso das chaves `{}`, conforme apresentado a seguir:

```php
<?php
if (expressao == true):
    comando 1;
    comando 2;
else:
    comando 3;
    comando 4;
endif;
?>
