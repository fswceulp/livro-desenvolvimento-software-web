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
