# Passo 8 - Roteamento e múltiplas Views

Nos passos anteriores, foi utilizado o conceito de "tela", que permite uma troca de contexto da interface gráfica. Entretanto, a abordagem utilizada (mostrar e ocultar conteúdo) não é a maneira mais adequada de realizar este procedimento, principalmente com o aumento da quantidade de funcionalidades (e de telas) do aplicativo.

Um aplicativo de única página (SPA) (do inglês *Single Page Appplication*) é um recurso de programação front-end que faz com que o aplicativo web não utilize o formato tradicional de troca de página, ou seja, há apenas uma única página e ocorrem trocas de telas. Esse conceito foi utilizado até o **passo 7** e continuará sendo utilizado no restante deste tutorial do Angular.

> Para saber mais

> Se quiser saber mais sobre o conceito de SPA, pode começar lendo esse artigo da wikipedia (em inglês): https://en.wikipedia.org/wiki/Single-page_application.

Até o passo 7, quando o usuário clica no botão "Detalhes", a tela de lista de telefones é ocultada e é apresentada a tela de detalhes do telefone. O Pass 8 utiliza o módulo `angular-route` para fornecer uma alternativa mais adequada.

## Dependências

O módulo `angular-route` fornece serviços necessários para que o aplicativo utilize o conceito de múltiplas views. 

O arquivo `package.json` precisa incluir o módulo `angular-route` nas suas dependências.

## Múltiplas views

