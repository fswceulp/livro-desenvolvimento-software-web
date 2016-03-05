#Herança
A Herança em Orientação a Objetos permita que uma determinada classe herde definições de outras classes. Para utilizar este conceito em PHP, deve ser utilizada a palavra reservada `extends`. A Herança Múltipla, que permite que uma classe herde definições de mais de uma classe, não é disponibilizada no PHP. 

A seguir é apresentado um exemplo de uma classe `Funcionario` que herda as definições da classe `Pessoa`. 

```php
<?php
require_once ("Pessoa.php");

class Funcionario extends Pessoa
{
    public $CodFuncionario;
    public $Salario;

    function Funcionario(){
        parent::Pessoa();
        echo "Chamando o método construtor de Funcionario..";
    }

    public function mostrarDados(){
        echo "</br> Subclasse Funcionario </br> ";
        echo "Cpf: ".$this->Cpf;
        echo "</br>";
        echo "Cód. Funcionário: ".$this->CodFuncionario;
    }
}
?>
```
Na classe `Funcionario` foram definidas duas propriedades, `CodFuncionario` e `Salario`, além do método `mostrarDados` e o método construtor (`Funcionario`). O método `mostrarDados` imprime o *Cpf* , propriedade definida na classe base (superclasse) e o *Código do Funcionário*, que é uma propriedade da classe `Funcionario`. No método construtor é usada a instrução `parent::`, que é utilizada para acessar definições (por exemplo, métodos e propriedades) da classe base (superclasse).  Neste exemplo específico, a instrução `parent::Pessoa()` invoca o método construtor da classe `Pessoa`,

Agora, é mostrado um script PHP que faz uso das definições anteriores da classe `Pessoa` e `Funcionario`.

```php
<?php

$f1 = new Funcionario();
$f1->Cpf = "000-000-000-00";
$f1->CodFuncionario="010101";
x$f1->mostrarDados();
?>
```
No código mostrado, foi instanciado um objeto da classe `Funcionário`, logo em seguida foi definido um valor para propriedade *Cpf*, que pode ser acessada porque a classe `Funcionario` herda todas as definições de `Pessoa` e, por fim, foi invocado o método `mostrarDados`, definido na classe `Funcionario`.  

