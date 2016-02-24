#Array
Um `array` permite representar um conjunto de dados em uma única variável. Para criar um `array` em PHP é necessário utilizar a função `array()`. São três os tipos de arrays disponíveis no PHP, são eles:

- **Arrays indexados:** arrays com índices numéricos;
- **Arrays associativos:** arrays onde cada índice é referenciado por uma chave;
- **Arrays multidimensionais:** são matrizes, isto é, arrays que contém um ou mais arrays.

##Arrays Indexados
Quando o array é indexado por índices. No código apresentado a seguir, é criado um array $arr  que contém 4 elementos (3, 5, 7 e 9).

```php
<?php
$arr = array (3, 5, 7, 9);
}
?>
```
A atribuição também pode ser feita maneira manual, índice por índice: 

```php
<?php
$arr[0]=3;
$arr[1]=5;
$arr[2]=7;
$arr[3]=9;
?>
```

###Acrescentando um novo valor ao `array`
Se um `array`foi previamente definido, é possível modificá-lo acrescentando um novo elemento a ele, conforme exemplificado a seguir:

```php
<?php
$arr = array (3, 5, 7, 9);
$arr[4]=11;

// esta sintáxe também funcionaria.  
//$arr[]=11;
?>
```
Se o índice for omitido (conforme linha comentada no código acima), o PHP identifica automaticamente o último índice utilizado e associa o novo valor ao índice seguinte (no exemplo supracitado, seria o índice de valor **4** que receberia o valor **11**.

###Percorrendo todos os valores do `array`

A seguir é apresentado um exemplo em que o `array` é percorrido e todos os seus elementos são apresentados.

```php
<?php
$arr = array (3, 5, 7, 9);
for ($i=0;$i<4;$i++){
    echo $arr[$i];
    echo "</br>"; // quebra de linha
}
?>
```

##Arrays associativos

Os **arrays associativos** são mapas que permitem relacionar valores às chaves.  Assim, para cada valor representado no `array` há uma chave equivalente que permite acessá-lo. A estrutura básica de um array associativos é:

```php
array(  chave =>  valor
     , ...
     )
// chave pode ser tanto string ou um integer
// valor pode ser qualquer coisa
```

Um `array` associativo pode ser criado conforme código apresentado a seguir:

```php
<?php
$arr = array("salvador" => "Jesus Cristo", 10 => true);
?>
```
Os arrays associativos permitem a criação de chaves e valores heterogêneos (tipos diferentes). No exemplo apresentado anteriormente, existem dois tipos de chave, uma `string (“salvador”)`, com uma `string` como valor (“Jesus Cristo”); e outra chave do tipo `inteiro (10)` com um valor `booleano (true)`.

Da mesma forma que o **array indexado**, os elementos de um **array associativo** também podem ser criados um a um. 

```php
<?php
$arr["salvador"] ="Jesus Cristo";
$arr [10]=true;
?>
```
Um exemplo que mostra como é realizada a impressão dos elementos de um **array associativo** é mostrado a seguir:

```php
<?php
$arr = array("salvador" => "Jesus Cristo", 10 => true);
echo $arr["salvador"]; // saída: Jesus Cristo
echo "</br>"; // quebra de linha em HTML
echo $arr[10]; // saída: 1
//echo $arr[12];   #dará erro porque não existe esta chave
?>
```

O acesso a uma chave que não tenha sido previamente definida gerará uma **exceção** *(tire o comentário da linha que tenta imprimir o array co a chave **12** para testar)*. 

###Acrescentando um novo valor ao array

É possível adicionar novo par de **chave-valor** a um `array` previamente definido.

```php
<?php
$arr = array("num1"=>2, "num2"=>4);
$arr["num3"]=8;
echo $arr["num3"];
?>
```
Neste exemplo anterior, foi acrescentada a **chave** `num3` associando ao **valor** `8`.

###Percorrendo todos os valores do array

Para percorrer todos os elementos pode ser utilizada a estrutura de controle `foreach`, da seguinte forma:

```php
<?php
$arr = array("num1"=>2, "num2"=>4);
$arr["num3"]=8;
echo "Imprimindo os valores do array";
foreach ($arr as $i=>$valor)
{
    echo "</br>";
    echo ($arr[$i]);
}
?>
```

##Arrays Multidimensionais

Um **array multidimensional** é um `array` com várias dimensões, que pode conter um ou mais arrays. 

Para exemplificação de um **array multidimensional** utilizaremos a tabela apresentada a seguir:

| Nome |Sexo | Idade|
| -- | -- | -- |
| João | Masculino | 18 |
| Paula | Feminino | 19 |
| Francisca | Masculino | 20 |


Para representar os dados da tabela anterior em um **array multidimensional**, o seguinte código poderia ser utilizado:

```php
<?php
$dados = array
    (
    array("João", "Masculino", 18),
    array("Paula", "Feminino", 19),
    array("Francisco", "Masculino", 20),
    );
?>
```

Para que cada elemento deste `array` possa ser acessado, é necessário fazer referência a dois índices, a linha e a coluna. Por exemplo:

```php
<?php
echo "Nome: ".$dados[0]{0}.", Sexo: ".$dados[0][1].", Idade: ".$dados[0]{2}."</br>";
echo "Nome: ".$dados[1]{0}.", Sexo: ".$dados[1][1].", Idade: ".$dados[1]{2}."</br>";
echo "Nome: ".$dados[2]{0}.", Sexo: ".$dados[2][1].", Idade: ".$dados[2]{2};
?>
```

###Acrescentando um novo valor ao array

Conforme sintaxes previamente apresentadas, é possível acrescentar novos valores a um `array` previamente definido. A seguir é apresentado um exemplo de código com várias formas possíveis de fazer esta modificação.

```php
<?php
$dados = array
(
    array("João", "Masculino", 18),
    array("Paula", "Feminino", 19),
    array("Francisco", "Masculino", 20),
);

$dados[3] = array ("Maria", "Feminino",21);

// OU

//$dados[] = array ("Maria", "Feminino",21);

// OU

/*
$dados[3][0]="Maria";
$dados[3][1]="Feminino";
$dados[3][2]=21;
*/

// OU

/*
$dados[3][]="Maria";
$dados[3][]="Feminino";
$dados[3][]=21;
*/
?>
```


Para testar as demais alternativas, basta **retirar os comentários** das outras abordagens e comentar as demais.

###Percorrendo todos os valores do `array`

Também é possível percorrer todos os elementos do `array` através de uma **estrutura de repetição**. O código a seguir exemplifica o uso de um laço de repetição:

```php
<?php
for ($linha=0; $linha<3; $linha++){
    echo "linha n.º $linha";
    echo "<ul";
    for ($coluna=0; $coluna<3; $coluna++){
       // echo "<li>. $dados[$linha][$coluna].</li>";
        echo "<li> {$dados[$linha][$coluna]}</li>";
    }
    echo "</ul>";
}
?>
```

> **Exercícios**

>**Exercício 1**: Utilizando *array indexado*, faça um script PHP que armazene uma lista de pessoas, em que cada uma é identificada por um código. Deve ser armazenado somente o nome de cada pessoa. O código que identifica cada pessoa é o próprio índice do vetor. Apresente os dados das pessoas (nome e código) em uma tabela formatada em HTML.

>**Exercício 2**:Utilizando *array multidimensional*, altere o exercício anterior acrescentando mais dados para cada pessoa, que são Sobrenome e RG.

>**Exercício 3**: Agora, utilizando *array associativo*, incremente os exercícios anteriores, acrescentando *Endereço* para cada pessoa. O Endereço deve ser representado em outro array e deve conter: Logradouro, Bairro, número e CEP.  Os nomes das chaves devem estar coerentes com a sua representação, por exemplo, para identificar o nome de uma pessoa, utilize a chave nome.  






















