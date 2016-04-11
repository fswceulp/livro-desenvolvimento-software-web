#Inserção de dados

Uma vez que o banco de dados tenha sido criado, é possível fazer operações sobre ele. A primeira operação que será apresentada aqui é a de inserção. Existem diferentes alternativas para realizar tal procedimento via PDO. Serão mostradas aqui apenas duas alternativas possíveis:

##Inserindo Dados: Alternativa I

Uma das maneiras de realizar as operações no banco de dados é diretamente através de instruções *SQL (Structured Query Language)*. Assim, define-se uma string contendo a instrução SQL com os respectivos parâmetros e logo em seguida executa-se esta instrução. 

Para realizar inserção via PDO com instrução SQL, a seguinte sintaxe pode ser utilizada:

```php
$conn = //abrir conexão com o banco de dados
$sql = //definir a instrução SQL utilizando a cláusula INSERT
$conn->exec($sql);
```

De acordo com o código apresentado anteriormente, primeiramente estabelece-se uma conexão com o banco de dados, logo em seguida pode ser definida uma instrução SQL que irá inserir um conjunto de dados em uma específica tabela e, por fim, basta executar a referida consulta a partir do método `exec`. O método `exec` retorna o número de linhas afetadas com a instrução SQL. Com o método `exec` é possível também executar instruções de **UPDATE** e **DELETE**, mas **não SELECT**(recuperação de dados - seção [Seleção de dados](recupera-dados.md)). 

##Inserindo Dados: Alternativa II

Outra alternativa para realizar operações de inserções é utilizar uma instância de `PDOStatement`,  que permite a criação de sentenças que possibilita a mesma (ou uma similar) instrução SQL ser executada várias vezes. 

Com o uso de um objeto `PDOStatement`, uma instrução SQL pode ter zero ou mais parâmetros que podem ser definidos de duas maneira distintas: através do seu próprio nome `“:nome_do_parâmetro”` ou através do caracter `“?”`. Os valores reais dos parâmetros são substituídos quando a instrução SQL é executada. 
