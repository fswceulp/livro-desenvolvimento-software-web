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
