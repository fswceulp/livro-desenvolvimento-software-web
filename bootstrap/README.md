# Visão Geral

Bootstrap é um framework front-end (HTML, CSS e JavaScript). Provavelmente, é um dos mais populares. Dentre seus principais recursos estão o suporte para o desenvolvimento de web sites e aplicações web responsivas e adaptadas para dispositivos móveis.

Para utilizar o Bootstrap, o primeiro passo é fazer o  [download](https://github.com/twbs/bootstrap/releases/download/v3.3.5/bootstrap-3.3.5-dist.zip). Outras formas de utilização estão disponíveis, mas, por enquanto, vamos ter enfoque nesta (baixar os arquivos).

Após o download, descompacte o arquivo. Você verá uma estrutura de pastas semelhante ao seguinte:

<pre>
bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap-theme.css
│   ├── bootstrap-theme.css.map
│   └── bootstrap-theme.min.css
├── js/
│   ├── bootstrap.js
│   └── bootstrap.min.js
└── fonts/
    ├── glyphicons-halflings-regular.eot
    ├── glyphicons-halflings-regular.svg
    ├── glyphicons-halflings-regular.ttf
    ├── glyphicons-halflings-regular.woff
    └── glyphicons-halflings-regular.woff2
</pre>

Os arquivos principais são `bootstrap.css` (e sua versão compactada `bootstrap.min.css`) e `bootstrap.js` (e sua versão compactada `bootstrap.min.js`). Opcionalmente, você pode utilizar o arquivo de tema (por exemplo: `bootstrap-theme.min.css`). O Bootstrap também usa a biblioteca jQuery, necessária para o funcionamento de alguns componentes.

Os arquivos também pode ser utilizados online, sem necessidade de download, direto da CDN.

## Estrutura básica do HTML

O código a seguir apresenta a estrutura básica de um arquivo HTML com Bootstrap.

{%ace%}
!INCLUDE "intro/index.html"
{%endace%}

Veja o exemplo em funcionamento [aqui](http://embed.plnkr.co/kiNm1soFELpZfrnSHkhV/preview).

Importante notar a importação dos arquivos `boostrap.css`, `jquery.min.js` e `bootstrap.min.js`.
