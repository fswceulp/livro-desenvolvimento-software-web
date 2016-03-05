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

    public function mostrarDados(){
        echo "</br> Subclasse Funcionario </br> ";
        echo "Cpf: ".$this->Cpf;
        echo "</br>";
        echo "Cód. Funcionário:".$this->CodFuncionario;
    }
}
?>
```
Na classe `Funcionario` foram definidas duas propriedades, `CodFuncionario` e `Salario`, além de u método mostrarDados. O método `mostrarDados` mostra o *Cpf*, propriedade definida na classe base (superclasse `Pessoa`) e o *Código do Funcionário* que é uma propriedade da classe `Funcionario`. A instrução  `require_once ("Pessoa.php")` requer/importa as definições da classe `Pessoa`, que estão em um arquivo *“Pessoa.php”*  para que possam ser utilizadas. A instrução `require_once` só importa o arquivo solicitado se este já não tiver sido importado anteriormente.  