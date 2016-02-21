# Referências da linguagem: sintaxe básica e visão geral

Sempre que existirem códigos dentro das super-tags <?php e ?>,  então estes serão tratados como códigos PHP. A seguir é apresentado um exemplo simples em PHP, que imprime uma simples mensagem:

```php
<?php
    echo "Isso é um teste!";
?>
```

`echo `é uma definição que permite imprimir uma mensagem. `print` também pode ser usado, ao invés de `echo`.

Para comentar uma linha de um código PHP basta utilizar `//`. 

```php
// Esta linha é um comentário e não será interpretada pelo PHP
```

Caso deseje comentar múltiplas linhas, basta coloca-las entre os símbolos ```/*...*/```.

```php
/* 
Esta é a linha 1 comentada
Esta é a linha 2 comentada
Esta é a linha 3 comentada
...
*/
```

O símbolo `$` indica uma variável, por exemplo: 

```php
$variavel_exemplo ="teste variável";
```

No exemplo apresentado anteriormente, a variável `$variavel_teste` recebe a string `“teste variável”`.


### Estruturas de Controle 

Assim como em outras linguagens, na PHP, um script é desenvolvido por uma série de instruções. São vários os tipos de instruções, tais como, atribuições, uma condição, ou um laço de repetição. O fim de uma instrução é determinado por um ponto e vírgula (`;`). Estas instruções podem ser agrupadas em um grupo de comandos com o uso das chaves `{}`. Cada grupo de instruções também é denominado uma instrução. Estes grupos de comandos denominados, Estruturas de Controle, tem dois tipos de controle: de Seleção ou de Repetição. O propósito deste capítulo é apresentar os diferentes tipos de instruções disponíveis. 

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
