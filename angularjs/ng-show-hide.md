# Diretivas ng-show e ng-hide

As diretivas `ng-show` e `ng-hide` são utilizadas, respectivamente, para mostrar e ocultar conteúdo. Veja o aplicativo a seguir.

<iframe src="https://embed.plnkr.co/Z6jWxn9ew4lRca7TUoc2/preview" width="100%" height="300"></iframe>

No arquivo `index.html`, nas linhas 15 e 16, são criados elementos `input` para representar opções para uma pergunta. Cada elemento está vinculado ao model `tipo` (por meio da diretiva `ng-model`) e cada uma possui o atributo `value`, indicando o valor de `tipo` quando cada opção estiver selecionada.

Nas linhas 18 e 19 há dois elementos `p` (representando frases dos filmes "Star Wars") nos quais está aplicada a diretiva `ng-show`. O conteúdo da diretiva é uma expressão que deve ser avaliada como `true` ou `false`. Quando a expressão resultar em `true`, o conteúdo ao quela está aplicada a diretiva `ng-show` será apresentado. Caso contrário, será oculto. No caso do aplicativo em questão, o primeiro elemento `p` (linha 18) será apresentado se a primeira opção ("Sith") for selecionada. O mesmo acontece com o segundo elemento `p` (linha 19), que será apresentado se a segunda opção ("Jedi") for selecionada.

A diretiva `ng-hide` tem o comportamento complementar da diretiva `ng-show`, ou seja, oculta um conteúdo quando o valor da expressão for `true`.
