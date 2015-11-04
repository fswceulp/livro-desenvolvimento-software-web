# Banco de Dados

Um banco de dados, representado por meio de um SGBD-R (Servidor de Bancos de Dados Relacional), permite o armazenamento persistente de dados. Em aplicativos web, armazenar os dados de forma persistente é uma tarefa bastante comum.

Em termos de SGBD, o contexto open-source apoia-se sobre opções como *MySQL* e *PostgreSQL*. Esta seção utilizará como base o SGBD *Microsoft SQL Server*, que possui uma versão gratuita, a *Microsoft SQL Server Express* -- e assume que o mesmo estará disponível para utilização.

## Configurando o ambiente

Por padrão, o PHP não se comunica com o SQL Server diretamente (embora possa fazer isso em "baixo nível", utilizando a ODBC). Entretanto, a maneira mais prática de acessar bancos de dados com PHP é via *PDO*, uma API de acesso a dados que permite um nível mais alto de comunicação, convertendo valores e estruturas do banco de dados para representações em PHP. Por exemplo, um registro de uma tabela é convertido para um objeto ou um array.

Para configurar o ambiente de modo que o PHP possa comunicar-se com um SGBD SQL Server é necessário instalar os [*drivers* do SQL Server para PHP](https://www.microsoft.com/en-us/download/details.aspx?id=20098). Os drivers estão distribuídos conforme versões do PHP e características do servidor web, como mostra a tabela a seguir.

|Versão(ões) do PHP|Versão do driver|
|-------------|----------------|
|5.4 a 5.6    |3.2|
|5.4 e 5.5    |3.1|
|5.4          |3.0|

Após baixar a versão desejada, conforme a versão do PHP, execute o instalador (que, na verdade, apenas irá descompactar os arquivos em uma pasta escolhida por você). Por padrão, o PHP armazena módulos de extensão (como este da Microsoft) no diretório `ext` (no diretório de instalação do PHP. Ex: `c:\xampp\php`).

No diretório de instalação do PHP há o arquivo `php.ini`, que contém configurações padrões do PHP. Edite o arquivo e adicione as linhas a seguir:

```
extension=php_sqlsrv_55_ts.dll
extension=php_pdo_sqlsrv_55_ts.dll
```

Neste caso, o arquivo indica que está sendo utilizado para a versão 5.5 do PHP (que é a utilizada como base de código no momento). Os arquivos possuem, no nome, a parte `ts`, que indica que são os arquivos usados para o servidor web *Apache*. No caso de estar utilizando outro servidor, verifique na documentação da Microsoft como fazer a configuração de forma correta.

Depois de editar o arquivo reinicie o servidor web.

O acesso ao banco de dados SQL Server pode ser feito, a partir de então, via PDO ou outra biblioteca. Este livro está utilizando Silex e, portanto, utilizará outras bibliotecas complementares para acessar o banco de dados.

Embora o Silex não seja dependente de um framework de acesso a dados específico, é interessante, por causa do Symfony, utilizar o [Doctrine](http://www.doctrine-project.org/index.html). Doctrine fornece duas maneiras básicas de acesso a dados:
- DBAL; e
- ORM.

As seções seguintes mostram como utilizar estes componentes.
