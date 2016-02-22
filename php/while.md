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

> **Exercícios**

>**Exercício 1**: Desenvolva um código PHP que crie automaticamente uma tabela em HTML como mostrado a seguir. O número **N** de linha e o **M** de colunas devem ser ajustáveis, ou seja, devem existir variáveis que controlam suas respectivas quantidades. 

| Cabeçalho | Cabeçalho | Cabeçalho | Cabeçalho |
| -- | -- | -- | -- |
| Linha 1, Coluna 1 | Linha 1, Coluna 2 | Linha 1, Coluna 3 | Linha 1, Coluna 4 |
| Linha 2, Coluna 1 | Linha 2, Coluna 2 | Linha 2, Coluna 3 | Linha 2, Coluna 4 |
| Linha 3, Coluna 1 | Linha 3, Coluna 2 | Linha 3, Coluna 3 | Linha 3, Coluna 4 |


