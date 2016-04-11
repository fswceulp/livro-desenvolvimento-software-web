#Inserção de dados

Uma vez que o banco de dados tenha sido criado, é possível fazer operações sobre ele. A primeira operação que será apresentada aqui é a de inserção. Existem diferentes alternativas para realizar tal procedimento via PDO. Serão mostradas aqui apenas duas alternativas possíveis:

##Inserindo Dados: Alternativa I

Uma das maneiras de realizar as operações no banco de dados é diretamente através de instruções *SQL (Structured Query Language)*. Assim, define-se uma string contendo a instrução SQL com os respectivos parâmetros e logo em seguida executa-se esta instrução. 

Para realizar inserção via PDO com instrução SQL, a seguinte sintaxe pode ser utilizada: