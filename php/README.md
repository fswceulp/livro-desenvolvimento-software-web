# PHP - Hypertext Preprocessor

PHP é uma linguagem de programação de script, interpretada e multiplataforma para o desenvolvimento de aplicações Web. O site oficial do PHP é http://php.net/ - lá você ter acesso às definições do PHP e sua documentação (acesso online ou download).  
Para que o desenvolvimento de scripts PHP possa ser iniciado, antes de mais nada, é necessário ter um Servidor Web Apache e um interpretador de PHP instalado na máquina. Depois que estiver um servidor devidamente instalado e configurado, pronto, já podemos começar a desenvolver scripts PHP. 

## 2.	História do PHP

Tim Berners-Lee, em 1990, foi o idealizador da World Wide Web, que tornava possível o funcionamento de página HTML através do protocolo HTTP. O protocolo HTTP permite que páginas disponibilizadas em um determinado servidor sejam enviadas requisitadas/enviadas para os clientes que requererem. 

Em 1994, Rasmus Lerdorf, teve curiosidade em saber quantas pessoas estavam visitando o seu site pessoal. Isso o motivou a desenvolver um mecanismo um mecanismo que permitisse esta contagem, que à época foi intitulada como Personal Home Pages Tools, através da linguagem Perl. Naquele momento, o PHP ainda não era considerado uma linguagem, pois se tratava apenas de uma interface que permitia as pessoas verificarem quantos clientes estavam acessando um determinado site em um instante de tempo qualquer. 

Dado o sucesso que esta funcionalidade trouxe à época, Rasmus se inspirou a desenvolver a segunda versão do Personal Home Page Tools, em que adicionou novas funcionalidades, por exemplo, a possibilidade dos visitantes deixarem mensagens para os proprietários dos sites através de formulários. A possibilidade desta intepretação de formulários motivou Rasmus a renomear o seu projeto para Personal Home Page Forms Interpreter (PHP/FI). Mesmo com as alterações realizadas, o PHP ainda não era considerado uma linguagem de programação, ainda era considerado uma CGI (interface) que auxiliava na criação de funcionalidades para páginas pessoais. 

Depois da segunda versão, Rasmus liberou o acesso ao código fonte do PHP/FI a outros programadores, que desenvolveram uma série de outras funcionalidades, como por exemplo, o acesso a banco de dados. Esta estratégia popularizou ainda mais o PHP/FI. A popularização foi tão grande que em 1997 já existiam em torno de 60.000 páginas utilizando PHP/FI. Após este marco de 1997, em 1998, dois programadores israelitas se juntaram e reescreveram o PHP: Andi Gutmans e Zeev Suraski, e neste momento, na versão 3.0, o PHP passou a ser chamada de PHP Hypertext Preprocessor e considerado uma linguagem de programação. A linguagem se popularizou tanto que já em 1999 estimava-se que aproximadamente 10% dos sites já utilizavam o PHP. 
Do seu surgimento até hoje, várias versões surgiram, com o acréscimo de diversas funcionalidades com o propósito de torna-la uma linguagem mais robusta e que atenda com maior eficácia as necessidades dos usuários. Atualmente já está versão 5.6.

## Referências da linguagem: sintaxe básica e visão geral

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

#### if...else
O if habilita o uso de uma seleção (expressão condicional). A sintáxe básica utilizada é:

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
```

A seguir é apresentado um exemplo de utilização desta sintáxe alternativa para o **condicional** (`if`).

```php
<?php
$b=5;
if ($b == 5):
    echo "entrou no if";
else:
    echo "entrou no else";
endif;
?>

```









