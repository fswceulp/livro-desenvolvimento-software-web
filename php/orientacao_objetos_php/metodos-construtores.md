#Construtor
Os *métodos construtores* são aqueles métodos que são invocados sempre que uma instância de uma classe (um objeto) é criada. Um *método construtor* pode ser construído conforme a sintaxe mostrada abaixo:

```php
<?php
class Pessoa
{
    public $Cpf;
    public $Nome;

    public function __construct()
    {
        echo "Chamndo o construtor de Pessoa...";
    }
}
?>
```
O uso da palavra reservada `__construct` diz que se trata de um *método construtor* . Outra forma de definir um *método construtor* é criá-lo com o mesmo nome da classe, conforme segue exemplificação a seguir: 
```php
<?php
class Pessoa
{
    public $Cpf;
    public $Nome;

    public function Pessoa()
    {
        echo "Chamndo o construtor de Pessoa...";
    }
}
?>
```