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

Há momentos em que a URL raiz não é conhecida a princípio \(em tempo de desenvolvimento\). Nesse caso, uma prática muito comum é utilizar um script para gerar a URL raiz:

```
<script>document.write('<base href="' + document.location + '" />');</script>
```

## Configuração do módulo

Uma aplicação usa apenas uma instância do Angular Router. Quando a URL do browser muda, ele procura por uma rota correspondente, a partir da qual determina qual componente apresentar. 

A configuração depende do tipo de módulo: raiz \(root\) ou filho \(child\). A diferença é sutil e não interfere na maneira como cada tipo de módulo as integra. O trecho de código a seguir exemplifica como definir rotas para o módulo raiz.

```
const rotas : Routes = [
    { path : "eventos",     component : EventosHomeComponent },
    { path : "eventos/:id", component : EventoDetalhesComponent },
    { path : "about":       component : AboutComponent },
    { path : "sobre",       redirectTo: "/about", pathMatch: "full" },
    { path : "",            component: AppComponent },
    { path : "**",          component: PaginaNaoEncontradaComponent }
];

@NgModule({
    imports : [
        RouterModule.forRoot(rotas),
        // ...
    ],
    ...
})
export class AppModule { }
```

O exemplo demonstra como definir alguns tipos de rotas. Independentemente do tipo, mantém-se o seguinte:

* `rotas`, do tipo `Routes`, é um array que contém os objetos que determinam as rotas
* cada objeto contém propriedades:
  * `path`: determina o caminho correspondente à rota
  * `component`: determina o componente associado à rota
  * `redirectTo`: determina um caminho de redirecionamento
  * `pathMatch`: determina o modo de comparação do caminho com a URL

Por fim, as rotas são importadas no módulo: na chamada da anotação `@NgModule`, o atributo `imports` contém um item que representa a chamada à função `RouterModule.forRoot()`, recebendo como parâmetro a variável que contém as rotas \(`rotas`\).

Quando uma URL é interpretada pelo Router, ele verifica a lista de rotas, da primeira para a última, procurando a que combina com a URL. Por isso a ordem das rotas é importante.

A seguir, cada tipo de rota usado no exemplo de código a cima é apresentado com um pouco mais de detalhes

### Rota fixa

A rota fixa é representada por um caminho que não muda. No caso do exemplo, a rota `eventos` é uma das rotas fixas. O componente associado a ela, `EventosHomeComponent`, será usado pelo Angular Router para apresentar o conteúdo adequado a essa situação.

### Rota dinâmica

A rota dinâmica contém os chamados **parâmetros de rota**. Por meio de parâmetros de rota é possível comunicar-se com o componente associado à rota. No caso do exemplo, a rota `eventos/:id` contém o parâmetro `id`. A sintaxe para criar um parâmetro de rota é usar o sinal de dois pontos seguido do nome do parâmetro. 

Esse tipo de rota é importante porque permite uma URL como: `eventos/10`, a qual indica que o parâmetro de rota `id` tem o valor `10`.

### Rota padrão

A rota padrão tem sempre um caminho fixo com valor `""`.

### Rota de redirecionamento

Uma rota de redirecionamento indica para o Angular Router procurar outra rota, por meio do atributo `redirectTo`. Por isso, não há um componente associado a essa rota. No caso do exemplo, a rota `sobre` redireciona para a rota `about`.

### Rota de fallback

Uma rota de fallback é usada quando nenhuma rota combinou com a URL. Para isso o caminho é fixo com valor `**`. No caso do exemplo, a rota `**` redireciona para o component `PaginaNaoEncontradaComponent`, o que é uma forma de criar uma "página de erro" que trata a situação em que o usuário solicita uma página não encontrada. 



