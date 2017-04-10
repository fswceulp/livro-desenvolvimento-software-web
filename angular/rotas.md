# Rotas \(ou roteamento\)

Embora o Angular forneça ao desenvolvedor várias formas de gerenciar o conteúdo visível da página, um modelo utilizado pelo browser é muito comum: a navegação:

* O usuário informa uma URL na barra de endereço e o browser navega para a página correspondente
* O usuário clica em um link em uma página e o browser navega para uma nova página
* O usuário clica nos botões "Voltar" e "Avançar" e o browser navega para trás e para frente pelo histórico das páginas já acessadas

O Angular Router se baseia nesse mesmo modelo: interpreta uma URL como uma instrução para navegar para uma view. Pode-se passar parâmetros opcionais para o componente que está associado à view, de modo que ele possa decidir sobre um conteúdo específico que deve ser apresentado. Você pode vincular o router a links em uma página e ele vai negar para a view apropriada quando o usuário clicar em um link. Você pode navegar de forma imperativa \(programaticamente\) quando o usuário clica em botão, seleciona uma opção de um select ou em resposta a outro estímulo de qualquer fonte. Ainda, o router mantém um registro da atividade no histórico do browser para que os botões "Voltar" e "Avançar" funcionem. 

Este capítulo apresenta vários conceitos sobre o Router e seu funcionamento.

## &lt;base href&gt;

O Router precisa saber como compor as URLs de navegação. Para isso, a aplicação precisa indicar onde ela está presente no servidor, ou seja, qual a URL raiz. Uma forma de fazer isso é utilizando o elemento `base`. Por exemplo, no arquivo `index.html`:

```
<head>
    <base href="/">
</head>
```

No trecho de código acima, o atributo `href` com valor `/` indica que o aplicativo está na raiz.

Há momentos em que a URL raiz não é bem definida em tempo de desenvolvimento. Nesse caso, uma prática muito comum é utilizar um script para gerar a URL raiz:

```
<script>document.write('<base href="' + document.location.href + "
```



