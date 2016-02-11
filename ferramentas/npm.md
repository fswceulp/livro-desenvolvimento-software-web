# npm

O **npm** é o gerenciador de pacotes para JavaScript mais utilizado em desenvolvimento web moderno para front-end e back-end (ao utilizar o NodeJS). Para utilizá-lo, basta instalar o [NodeJS](https://nodejs.org/). 

## Inicializando um projeto

Além de permitir o gerenciamento de pacotes, que inclui funções de instalar e remover pacotes disponíveis em um repositório remoto chamado [npmjs](https://www.npmjs.com/), o **npm** permite o gerenciamento de um projeto local. Na verdade, um projeto local é entendido como um pacote.

Para inicializar um projeto, em um prompt no diretório escolhido execute:

```
npm init
```

A interface baseada em texto apresentará algumas perguntas, as quais, depois de respondidas, levarão à criação do arquivo `package.json`. Este arquivo contém informações sobre o pacote (projeto atual) e sobre as suas dependências, tanto de desenvolvimento quanto de produção.

As dependências de desenvolvimento são aquelas que não serão disponibilizadas no servidor de produção. Em outras palavras, represemtam ferramentas, por exemplo, que executarão apenas localmente, durante o tempo de desenvolvimento (como o **Webpack**).

As dependências de produção, ao contrário das dependências de desenvolvimento, serão implantadas no servidor de produção. Exemplo deste tipo de dependência são o Bootstrap e o Angular.

