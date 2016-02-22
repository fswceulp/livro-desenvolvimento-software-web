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




















