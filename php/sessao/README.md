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
`` 
