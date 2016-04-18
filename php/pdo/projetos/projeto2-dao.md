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

##Operações *Create*

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
##Operações *Retrieve*

**Passo 6:** para exemplificar as operações *Retrieve*, na classe `AlunoDAO` devem ser implementados **dois** métodos: o `getById`, que recebe um `id` por parâmetro e retorna um objeto do tipo `Aluno`; e o `getAll`, que retorna todos os alunos cadastros (um `array` de alunos). 

**Exemplo 1 para o método `getById`**
```php
public static function getById($idAluno){
    $conn = Connection::Open();
    $sql = "SELECT *FROM Alunos Where id=".$idAluno;
    $objPDOStatement = $conn->query($sql);        
    return AlunoDAO::retorno($objPDOStatement)[0];
}
```
Após executar a consulta SQL, através do método `query`, é retornado um objeto `PDOStatement`. O objeto `PDOStatement` deve ser **mapeado** para um objeto `Aluno` . Este mapeamento é realizado através do método estático e privado nomeado `retorno`. A implementação deste método é mostrada a seguir:

```php
private  function retorno($objResult){
    $alunos = array();
    if ($objResult instanceof PDOStatement)
    {
        if ($objResult->rowCount()==0)
            return null;
        else{
            foreach ($objResult as $linha) {
                $aluno = AlunoDAO::fillObject($linha);
                array_push($alunos, $aluno);
              }
         }
    }else
        if (is_array($objResult)){
            for ($i=0; $i< count($objResult); $i++){
                $aluno = AlunoDAO::fillObject($objResult[0]);
                array_push($alunos, $aluno);
            }
        }
    return $alunos;
}
```

O método `retorno` está preparado também para o caso do parâmetro passado para ela ser um `array`, que deverá ser percorrido e **mapeado para um array de objetos** `Aluno`. 

**Exemplo 2 para o método getById**

```php
  public static function getById($idAluno){
      $conn = Connection::Open();
      $sql = "SELECT *FROM Alunos Where id= ?";
      $stmt= $conn->prepare($sql);
      $stmt->bindParam(1, $idAluno);
      $stmt->execute();
      $result = $stmt->fetchAll();
      return AlunoDAO::retorno($result)[0];
}
```
**Exemplo 3 para o método getById**

O uso desta sintáxe permite que o mapeamento do retorno para um objeto de uma determinada classe possa ser realizado a partir do método `fetchAll`, através `PDO::FETCH_CLASS`. O uso deste argumento para o método `fetchAll` mapeia o resultado para um *array* de instâncias de uma classe, nomeando cada uma das propriedades da classe de acordo com os nomes das colunas do resultado (nomes das colunas da tabela definida no banco de dados). O uso desta sintaxe evitaria o uso do método retorno mostrado anteriormente. 

```php
  public static function getById2($idAluno){
      $conn = Connection::Open();
      $sql = "SELECT *FROM Alunos Where id= ?";
      $stmt= $conn->prepare($sql);
      $stmt->bindParam(1, $idAluno);
      $stmt->execute();
      $retorno = $stmt->fetchAll(PDO::FETCH_CLASS, "Aluno");
      return $retorno[0];
}
`` 

De acordo com o código acima, a constante `PDO::FETCH_CLASS` e o nome da classe `Aluno` foram passados por parâmetro para o método `fetchAll`, assim o resultado após a execução da instrução SQL será mapeado para um objeto `Aluno`. 

##Operações *Update*

**Passo 7:**  para exemplificar a operação de *Update*, na classe `AlunoDAO` deve ser implementado um método `update`, que recebe um *objeto aluno* por parâmetro, localiza-o no banco a partir do seu identificador (`id`), e só então é realizada a operação de alteração.  
```php
public static function update ($aluno){
    $conn = Connection::Open();
    $sql = "UPDATE `alunos` SET `nome`='$aluno->Nome',`turma`='$aluno->Turma',
          `nota1`=$aluno->Nota1,`nota2`=$aluno->Nota2,`situacao`='$aluno->Situacao',
          `media`=$aluno->Media,`frequencia`=$aluno->Frequencia WHERE `id`=$aluno->Id";
    return $conn->exec($sql);
}
`` 


