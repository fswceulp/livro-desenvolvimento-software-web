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


## [Estruturas de Controle](estruturas-de-controle.md)
* [if...else](if-else.md)
* [while](while.md)





