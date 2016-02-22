#Funções

Uma função pode ser definida a partir da utilização da seguinte estrutura:

```php
function nome_da_funcao ()
{
    $valor_retorno="Exemplo de função retornando este valor.";
    return $valor_retorno;
}
```

Uma função pode ou não ter parâmetros. A seguir é apresentada uma  função com 1 parâmetro. Caso queira passar mais parâmetros para uma função, basta inserí-los e separá-los por vírgula (`,`).

```php
function primeira_funcao_param ($arg_1)
{
    return $arg_1;
}
```

>**Exercícios**

>**Exercício 1**: Faça um programa que gere como saída as tabuadas de adição, subtração, multiplicação e divisão dos números 1, 2, 3, 4, 5, 6, 7, 8, 9 e 10. A saída deve ser em HTML e cada linha da tabuada deve ser gerada automaticamente (através do uso do laço de repetição). 

>| **Multiplicação: Tabuada do 1** | **Multiplicação: Tabuada do 2** |
| --    |-- |
| 1x1=1  | 2x1=2 |               
| 2x1=2  | 2x2=4 |
| 3x1=3  | 3x2=6 |
| 4x1=4  | 4x2=8 |
| 5x1=5  | 5x2=10 |
| 6x1=6  | 6x2=12 |
| 7x1=7  | 7x2=14 |
| 8x1=8  | 8x2=16 |
| 8x1=8  | 9x2=18 |
| 10x1=10  | 10x2=20 |
