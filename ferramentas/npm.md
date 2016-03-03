# npm

O **npm** é o gerenciador de pacotes para JavaScript mais utilizado em desenvolvimento web moderno para front-end e back-end (ao utilizar o NodeJS). Para utilizá-lo, basta instalar o [NodeJS](https://nodejs.org/). 

## Inicializando um projeto

Além de permitir o gerenciamento de pacotes, que inclui funções de instalar e remover pacotes disponíveis em um repositório remoto chamado [npmjs](https://www.npmjs.com/), o **npm** permite o gerenciamento de um projeto local. Na verdade, um projeto local é entendido como um pacote.

Para inicializar um projeto, em um prompt no diretório escolhido execute:

```
npm init
```

A interface baseada em texto apresentará algumas perguntas, as quais, depois de respondidas, levarão à criação do arquivo `package.json`. Este arquivo contém informações sobre o pacote (projeto atual) e sobre as suas dependências, tanto de desenvolvimento quanto de produção.

Um atalho, que cria um arquivo `package.json` padrão, é utilizar a opção `--yes`:

````
npm init --yes
```

As dependências de desenvolvimento são aquelas que não serão disponibilizadas no servidor de produção. Em outras palavras, represemtam ferramentas, por exemplo, que executarão apenas localmente, durante o tempo de desenvolvimento (como o **Webpack**).

As dependências de produção, ao contrário das dependências de desenvolvimento, serão implantadas no servidor de produção. Exemplo deste tipo de dependência são o Bootstrap e o Angular.

## Instalar dependência (pacote)

A instalação de dependências permite que o projeto atual reutilize pacotes que fornecem as mais variadas funcionalidades. Por exemplo, um projeto que utiliza Angular e Boostrap depende deles.

Para instalar uma dependência é executado o comando `npm install`:

```
npm install angular bootstrap
```

O comando anterior instala os pacotes localmente e os salva no diretório `node_modules` (cada pacote também está armazenado localmente de forma individual, no seu próprio diretório).

Como dito anteriormente, as dependências do projeto local estão no arquivo `package.json`. O comando `npm install` possui duas opções que editam o arquivo `package.json`:
* `--save`: para dependências de produção
* `--save-dev`: para dependências de desenvolvimento

Exemplos:

```
npm install angular bootstrap --save
npm install http-server --save-dev
```

## Scripts

O arquivo `package.json` de um projeto pode conter scripts, que permitem simplificar o processo de execução de códigos no prompt de comando. Exemplo:

```javascript
{
  "name": "app",
  "version": "1.0.0",
  "scripts": {
    "clear": "rmdir /S /Q node_modules"
  }
}
```

O trecho de código anterior, que demonstra um arquivo `package.json`, o atributo `scripts` permite definir scripts que podem ser executados via npm. Neste caso, há um script `clear`, que executa a linha de comando `rmdir /S /Q node_modules`. Para executar o script, deve-se utilizar:

```
npm run clear
```

O script do exemplo é útil para limpar o projeto em questão, apagando o diretório `node_modules`.