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

O atributo `action` do formulário tem o valor `login.php`, que indica que os dados do presentes no formulário serão enviados para a referida página (mais informações sobre o assunto no capítulo sobre [Formulários](../formularios/README.md)). Na página `login.php`, coloque o código que segue:



No código apresentado anteriormente, inicialmente é realizada uma verificação se os dados fornecidos pelo usuário são usuario  e senhaacesso. Se sim, a sessão é iniciada, o nome de usuário e a data e hora de acesso são armazenados na sessão. O login de usuário é associado à chave user_name, já a hora de login é associada à chave login_time.  Depois o usuário é direcionado para uma nova página, profile.php, através da função header. Caso os dados fornecidos pelo usuário não são conforme os esperados, este é direcionado para a página de login (frmLogin.php) passando pela QueryString um parâmetro erroLogin com valor 1. Este parâmetro é importante para podermos verificar a sua existência e valor e podermos mostrar uma mensagem de erro ao usuário, informando que os dados fornecidos estão incorretos.