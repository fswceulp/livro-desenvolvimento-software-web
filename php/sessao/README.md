#Sessão
Sessão permite que dados sejam armazenados em variáveis que possam ser usadas em múltiplas páginas. Assim, é possível armazenar informações dos perfis dos usuários que podem ser utilizadas em diferentes páginas (e.g.  username, hora do login, cor favorita, etc).

Para iniciar uma seção, basta usar a função `session_start()`. Uma vez iniciada a sessão, é possível adicionar variáveis ao array global `$_SESSION`. Este *array* que contém todas as variáveis definidas na sessão de um usuário. 

Para exemplificar a utilização da sessão, desenvolveremos um projeto simples para exemplificar uma situação de login em um sistema. Por isso, inicialmente será criada uma página `frmLogin.php`, que conterá um formulário com campos para que o usuário informe o login e senha, de acordo com trecho de código mostrado a seguir:

```html
<form name="frmLogin" method="POST" action="login.php">
    <input type="tex]" name="textLogin"> </br>
    <input type="password" name="txtSenha" value=""> </br>
    <input type="submit" name="btnLogin" value="Login" >
</form>
```

O atributo `action` do formulário tem o valor `login.php`, que indica que os dados do presentes no formulário serão enviados para a referida página (mais informações sobre o assunto no capítulo sobre [Formulários](../formularios/README.md)). Na página `login.php`, coloque o código que segue:

```php
<?php
if ($_POST["textLogin"]=="usuario" && $_POST["textSenha"]="senhaacesso" ){
    session_start();
    date_default_timezone_set("America/Sao_Paulo");
    $_SESSION["user_name"]= $_POST["textLogin"];
    $_SESSION["login_time"] = date("d-m-Y h:i:sa");
    header("Location: profile.php");
}else{
    header('Location: frmLogin.php?erroLogin=1');
}
?>
```

No código apresentado anteriormente, inicialmente é realizada uma verificação se os dados de autenticação fornecidos pelo usuário são `usuario`  e `senhaacesso`. Se sim, a sessão é iniciada e o nome de usuário e a data e hora de acesso são armazenados na sessão. O *login de usuário* é associado à chave `user_name`, já a *hora de login* é associada à chave `login_time`.  Depois o usuário é direcionado para uma nova página, `profile.php`, através da função `header`. Caso os dados fornecidos pelo usuário não sejam conforme os esperados, este é direcionado para a página de login (`frmLogin.php`) passando pela QueryString um parâmetro `erroLogin` com valor `1`. Este parâmetro é importante para podermos verificar a podermos mostrar uma mensagem de erro ao usuário informando que os dados fornecidos estão incorretos.

Na página `profile.php` os dados previamente definidos na sessão são acessados e mostrados no browser, conforme código apresentado a seguir:

```php
<?php
session_start();

$username = $_SESSION   ["user_name"];
$hora_login = $_SESSION["login_time"];

echo "Hora login:".$hora_login."</br>";
echo "Username: ".$username."</br>";

echo "</br> </br> <a href='frmLogin.php'> Página de Login </a>"
?>
```

A cada nova página que se deseja acessar ou definir uma variável na sessão, inicialmente é necessário iniciá-la, através da função `session_start()`. A última linha do código supracitado redireciona o usuário para a página do formulário de login. 