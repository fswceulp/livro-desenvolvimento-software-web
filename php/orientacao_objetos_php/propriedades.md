#Propriedades
Variáveis membros das classes são chamadas de propriedades. Elas podem ser definidas utilizando as palavras reservadas `public`. 

```php
<?php
class Pessoa
{
    public $Cpf;
    public $Nome;
}
?>
```
No código definido acima, foi definida a classe Pessoa coma s propriedades $Cpf e $Nome. Esta classe e respectivas propriedades podem ser utilizadas da seguinte forma:

```php
<?php
$p2 = new Pessoa2();
$p2->Nome="João";
echo $p2->Nome;
?>
```