#Acesso a Banco de dados via PDO (*PHP Data Objects*)

*PHP Data Object (PDO)* é uma extensão do PHP para acesso a banco de dados, isto é, dispõe de uma interface que simplifica a conexão com banco de dados e a realização de operações sobre ele. PDO está disponível a partir da versão 5 do PHP.

* [Conexão com o banco de dados](conexao.md)
* [Inserção de dados](insere-dados.md)
* [Seleção de dados](recupera-dados.md)
* [Alteração de dados](altera-dados.md)
* [Exclusão de dados](exclui-dados.md)

##Exemplos de projetos com PDO
Esta seção trará alguns exemplos de projetos com o PDO, tais como, projetos que mostra na prática a conexão com um respectivo banco de dados, operações de inserção, consulta, exclusão e alteração. 


###Projeto 2: operações DAO (`Data Access Object`) com 1 tabela
**Passo 1: **No banco `db-facul`, crie a tabela `Aluno`, conforme figura apresentada a seguir:

![Tabela `Alunos`](https://github.com/jacksongomesbr/livro-web-codigo-fonte/blob/master/php/pdo/projetos/projeto2-DAO/db-facul-MoldeloER.png?raw=true)

**Passo 2:** agora crie uma pasta `classes` e dentro dela uma classe `Connection`, com um método estático `Open`, que retorna a conexão com o banco **db-facul** (idem ao **Projeto 1** mostrado anteriormente).

**Passo 3:** Crie uma classe `Aluno`, dentro da pasta `classes`, e defina todas as **propriedades** de aluno, conforme a tabela **Alunos** previamente definida. Além disso, defina também um **construtor** para a classe.

```php
<?php

class Aluno
{
    public $Id;
    public $Nome;
    public $Turma;
    public $Nota1;
    public $Nota2;
    public $Media;
    public $Frequencia;
    public $Situacao;
    
    // faça também o construtor
?>
```










