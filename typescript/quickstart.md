# Quickstart

Este capítulo permite um início rápido à utilização do TypeScript e a configuração do PHPStorm como IDE de programação. As seções a seguir apresentam a criação de três projetos que demonstram os recursos do TypeScript de forma simples e objetiva.

## Projeto Hello World!

Um projeto básico, do tipo ‘hello world’, pode ser criado no PHPStorm seguindo os seguintes passos.

### Criar o projeto

Por meio do menu _File -&gt; New Project_ crie um novo projeto. Na janela _New Project_ escolha o tipo de projeto \_PHP Empty Project \_e informe onde os arquivos serão armazenados.

![](/typescript/phpstorm-new-project.png)

### **Configurar o suporte para o TypeScript**

Por meio do menu _File -&gt; Default Settings_ \(para configurar apenas o projeto atual use apenas _Settings_\) na página _Languages & Frameworks -&gt; TypeScript_ informe a localização do NodeJS e marque as opções _Enable TypeScript Compiler_ e _Track changes_. Por fim, escolha a opção _Use tsconfig.json_.

![](/typescript/phpstorm-default-settings.png)

Após fazer essa configuração para o modo padrão \(_Default settings_\) você não precisará fazer isso novamente para **novos** projetos.

### Hora do código

Crie o arquivo _index.ts_ com o conteúdo a seguir.

```
function mensagem(nome) {
    return "Olá, " + nome + "! Seja bem-vindo(a)!";
}
var pessoa = "José";
console.log(mensagem(pessoa));
```

Se você já conhece JavaScript certamente está pensando: mas... isso é JavaScript! E é isso mesmo. Veremos mais sobre isso daqui a pouco.

### Execute o código

Por meio do PHPStorm é possível executar código TypeScript usando o NodeJS. Você também pode usar o formato padrão de incorporar o código em uma página HTML e executá-lo no browser. Entretanto, um procedimento anterior precisa ser feito. O NodeJS e o browser não entendem TypeScript. Assim, será necessário usar o processo conhecido como “transpiling” \(algo como “transpilar”\) para converter o código TypeScript para JavaScript.

Antes de escolher um modo de execução, é necessário configurar o PHPStorm.

Crie o arquivo _tsconfig.json_. O PHPStorm já tem um template padrão. Basta usar o menu _File -&gt; New_ e escolher o template _tsconfig.js File_. O conteúdo desse arquivo será algo como o seguinte.

```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "sourceMap": true
  },
  "exclude": [
    "node_modules"
  ]
}
```

Não vou explicar o significado disso agora. Veremos isso mais adiante. Por enquanto, entenda que esse arquivo é parte do processo.

Depois disso, o painel do TypeScript mostrará erros de compilação em tempo-real. Por enquanto, com o código contendo, na verdade, conteúdo JavaScript, não será possível notar o poder desta ferramenta. Mas, para vê-la em ação, modifique o código, gerando um erro de sintaxe, por exemplo. A figura a seguir exemplifica esse processo.

![](/typescript/phpstorm-typescript-compilador-erros.png)

A figura mostra que o painel TypeScript indicou vários erros no arquivo. Isso é de grande ajuda. Esse processo de “compilação” ocorrerá automaticamente, após cada mudança no arquivo _index.ts_.

Também como resultado do processo de “compilação”, foram gerados dois arquivos: _index.js_ e _index.js.map_. O primeiro deles é um arquivo JavaScript, que tem o mesmo conteúdo do arquivo _index.ts_, como seria de se esperar. O segundo é um arquivo utilizado pelo PHPStorm, para identificar pontos de transformações entre os arquivos TypeScript e JavaScript.

![](/typescript/phpstorm-typescript-transpiling.png)

#### Executando no NodeJS

Abra o arquivo _index.js_ e, por meio do menu _Run -&gt; Run_, execute o arquivo. No menu flutuante escolha _index.js_. O painel Run apresentará o resultado da execução.

![](/typescript/phpstorm-typescript-nodejs-run.png)

Efetivamente, o arquivo _index.js \_está sendo executado pelo NodeJS, não o arquivo \_index.ts_. Não se perca aqui. A configuração do PHPStorm indica que sempre que houver uma modificação no arquivo _index.ts_ então ele será compilado, gerando o arquivo \_index.js. \_Por isso não há um problema com essa forma de trabalho. Se você quiser garantir adicionalmente \(manualmente\) a compilação do arquivo TypeScript pode seguir o passo seguinte.

Use o menu _Run -&gt; Edit configurations_ para abrir a janela _Run\/Debug Configurations_. A figura a seguir ilustra a janela no momento.

![](/typescript/phpstorm-run-configurations.png)

Clique no sinal "+" e escolha _Node.js_. Na opção _JavaScript file_ informe _index.js_. Na seção _Before launch: Activate tool window_ clique no sinal "+" e escolha _Compile TypeScript_.

![](/typescript/phpstorm-run-configurations-2.png)

#### Executando no browser

Crie o arquivo _index.html_, com o conteúdo a seguir.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="index.js"></script>
</head>
<body>

</body>
</html>
```

Clique sobre o arquivo com o botão direito do mouse e escolha _Run index.html_. Isso vai abrir uma janela do browser.

![](/typescript/phpstorm-typescript-browser-run.png)

A página está em branco \(sem conteúdo\). Por isso, para ver a saída, ative o painel de desenvolvedor e escolha a aba _Console_. Um fluxo de trabalho interessante é não fechar a janela do browser. Mantenha-a aberta e, após alterações no TypeScript, atualize-a utilizando a tecla _F5_.

Esses modos de execução não são certamente úteis em qualquer tipo de trabalho. Para o momento inicial, entretanto, funcionam muito bem. Escolha um deles e bom trabalho!

## Hello World, TypeScript!

Como já disse, o projeto Hello World não apresenta diferenças entre o TypeScript e o JavaScript. Então, vamos começar a fazer algumas modificações no código: adicionar tipos.

O TypeScript permite a definição de tipos de dados para variáveis. Com isso, o código do arquivo *index.ts* é modificado para o seguinte.

```
function mensagem(nome: string) {
    return "Olá, " + nome + "! Seja bem-vindo(a)!";
}
var pessoa:string = "Maria";
console.log(mensagem(pessoa));
```
O código adiciona duas modificações importantes:

1. A variável `pessoa` é do tipo `string`. A sintaxe `nome:tipo` é típica do TypeScript para indicar esse tipo de informação.
2. Na função `mensagem()` o parâmetro `nome` é do tipo `string`.

Verifique a comparação com o arquivo _index.js_.

<table>
<tr>
<td>*index.ts*</td>
<td>*index.js*</td>
</tr>
<tr>
<td>
<pre lang="typescript">
function mensagem(nome: string) {
 return "Olá, " + nome + "! Seja bem-vindo(a)!";
}
 var pessoa:string = "Maria";
 console.log(mensagem(pessoa));
</pre>
</td>
<td>
<pre lang="javascript">
function mensagem(nome) {
 return "Olá, " + nome + "! Seja bem-vindo(a)!";
}
var pessoa = "Maria";
console.log(mensagem(pessoa));
</pre>
</td>
</tr>
</table>




