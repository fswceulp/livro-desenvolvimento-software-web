#Sessão
Sessão permite que dados sejam armazenados em variáveis que possam ser usadas em múltiplas páginas. Assim, é possível armazenar informações dos perfis dos usuários que podem ser utilizadas em diferentes páginas (e.g.  username, hora do login, cor favorita, etc).

Para iniciar uma seção, basta usar a função `session_start()`. Uma vez iniciada a sessão, é possível adicionar variáveis ao array global `$_SESSION`. Este *array* que contém todas as variáveis definidas na sessão de um usuário. 

