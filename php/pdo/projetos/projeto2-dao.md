#PROJETO 2: operações DAO (`Data Access Object`) com 1 tabela
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

**Passo 4:** na pasta `classes`, crie a classe `AlunoDAO`. Esta classe conterá todas as operações de acesso a dados, as operações ***CRUD (Create-Retrieve-Update-Delete)***

**Passo 5:**  agora, considerando os conceitos que foram apresentados na seção [Acesso a Banco de dados via PDO](../README.md) , pode ser realizada a implementação do método **add**(*Create*), que recebe por parâmetro um objeto Aluno e o adiciona no banco de dados.

**Exemplo 1 para o método `add`**
```php
public static function add($aluno){
    $conn = Connection::Open();
    $sql = "INSERT INTO `alunos`(`turma`, `nome`,`nota1`,
              `nota2`, `situacao`,`media`, `frequencia`)
           VALUES ('$aluno->Turma', '$aluno->Nome',
                   $aluno->Nota1,$aluno->Nota2,  '$aluno->Situacao',
                   $aluno->Media, $aluno->Frequencia)";
    $conn->exec($sql);
   return $conn->lastInsertId();
}
```

**Exemplo 2 para o método `add`**
```php
public static function add2($aluno){
        $conn = Connection::Open();
        $sql = "INSERT INTO `alunos`(`turma`, `nome`,`nota1`,
                          `nota2`, `situacao`,`media`, `frequencia`)
                    VALUES (:turma, :nome, :nota1,
                          :nota2, :situacao, :media, :frequencia)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":turma",$aluno->Turma);
        $stmt->bindParam(":nome",$aluno->Nome);
        $stmt->bindParam(":nota1",$aluno->Nota1);
        $stmt->bindParam(":nota2",$aluno->Nota2);
        $stmt->bindParam(":situacao",$aluno->Situacao);
        $stmt->bindParam(":media",$aluno->Media);
        $stmt->bindParam(":frequencia",$aluno->Frequencia);
        $stmt->execute();
    }
```

**Passo 6:** 


