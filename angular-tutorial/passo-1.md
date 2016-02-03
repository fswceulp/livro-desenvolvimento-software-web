# Passo 1 - Template Estático

Um *template* em um aplicativo Angular representa código HTML, responsável pela interface gráfica. Um *template estático* é o primeiro passo na criação de um aplicativo mais complexo, pois representa um nível inicial de abstração em que o conteúdo é definido diretamente no código. Isso quer dizer que em passos seguintes será possível apresentar conteúdo dinamicamente, carregando dados, por exemplo, de uma fonte de dados.

Por enquanto, é interessante progredir na construção do aplicativo utilizando um template estático porque torna o desenvolvimento mais simples, uma vez que agora o interesse é na formatação (construção visual, interface gráfica) do aplicativo.

A princípio, a página inicial do aplicativo deve apresentar uma lista de telefones. A forma mais simples e direta de fazer isso é utilizar um template estático com elementos do HTML que permitam esse tipo de construção. O trecho de código a seguir representa o template estático do aplicativo, no arquivo `index-0.html`. O arquivo `index-0.html` é baseado no arquivo `index.html` do **Passo 0**.

```html
<!doctype html>
<html lang="pt-br" ng-app>
...
<body>
<div class="container">
    <p>Lista de telefones</p>
    <ul>
        <li>
            <strong>Nexus S</strong>
            <p>Melhor desempenho com o Nexus S</p>
        </li>        
        <li>
            <strong>Motorola Xoom com Wi-Fi</strong>
            <p>O tablet da próxima geração</p>
        </li>
    </ul>
</div>
</body>
</html>
```

As partes omitidas não são diferentes do arquivo `index.html` do **Passo 0**.

O arquivo `index-0.html` apresenta a estrutura básica para a listagem dos telefones, apresentando o nome e uma descrição. Neste momento, são utilizados os elementos `ul` e `li`, principalmente, para gerar a lista de telefones.

Uma vez que o processo de geração do template estático representa, na prática, a criação de uma página com conteúdo HTML, poderíamos encerrar o **Passo 1** por aqui. Entretanto, para apresentar mais recursos do Bootstrap, a seção a seguir fornece uma interface gráfica mais elaborada.

## Melhorias no template estático

Ao invés de apresentar apenas o nome de uma descrição de cada telefone, pode ser mais interessante apresentar também a imagem. Utilizando recursos do Bootstrap e do CSS é possível projetar uma interface gráfica mais elaborada. O trecho de código a seguir apresenta parte do arquivo `index-1.html`:

```html
...
<head>
...
  <link rel="stylesheet" href="app.css">
...
</head>
<body>
<ul id="listaDeTelefones">
    <li>       
        <div class="panel panel-default">
            <div class="panel-body">
                <img class="img-responsive" src="http://placehold.it/300x250">
                <div class="caption text-center">
                    <h4 class="ng-binding">Dell Streak 7</h4>
                </div>
            </div>
            <div class="panel-footer text-center">
                <a class="btn btn-default" role="button" href="#">
                    <i class="glyphicon glyphicon-zoom-in"></i> Detalhes
                </a> 
            </div>
        </div>
    </li>
...
</ul>
...
```

O código utiliza CSS, elementos `ul` e `li`, bem como classes do Bootstrap. O elemento `ul` possui o atributo `id` com valor `listaDeTelefones`. Este recurso será importante posteriormente. Os detalhes serão vistos a seguir.

### CSS

O arquivo `index-1.html` faz referência ao arquivo `app.css` por meio do elemento `link`. O atributo `href` indica o caminho para o arquivo `app.css` (relativo ao local do arquivo `index-1.html`).

```html
<link rel="stylesheet" href="app.css">
```

O arquivo `app.css` contém as regras de formatação utilizadas para definir certas características da interface gráfica.

```css
#listaDeTelefones {
    padding: 0px;
    list-style: none;
}

#listaDeTelefones li {
    float: left;
    margin-right: 10px;
}
#listaDeTelefones li .panel-body {
    height: 250px;
}
#listaDeTelefones li .panel {
    width: 200px;
}
```

O elemento `ul` do arquivo `index-1.html` possui o atributo `id` com valor `listaDeTelefones`. Isso permite que sejam criadas regras no CSS que façam referência a este elemento especificamente. No arquivo `app.css` estão presentes **seletores** e **regras** (conjunto de propriedades). 

Um seletor CSS representa a maneira de encontrar elementos no documento HTML e pode ser feita das seguintes formas:
* **seletor de elemento**: encontra elementos pelo nome da tag
* **seletor de id**: encontra elementos com base no valor do atributo `id`
* **seletor de classe**: encontra elementos com base no valor  do atributo `class`
* **seletor de hierarquia**: encontra elementos com base em uma hierarquia
* **seletor de grupo**: permite a utilização de mais de um seletor ao mesmo tempo

O **seletor de elemento** é apenas o nome da tag. Exemplos:

```
body { ... }
p { ... }
```

A primeira regra aplica-se ao elemento `body` (que é único no documento HTML). Enquanto a segunda, a todos os elementos `p`.

O **seletor de id** é o símbolo `#` seguido do valor do atributo `id` do elemento ao qual se deseja aplicar a regra. Exemplos:

```
#listaDeTarefas { ... }
#titulo { ... }
```

A primeira regra aplica-se ao elemento com atributo `id` com valor `listaDeTarefas`, enquanto a segunda àquele que tiver valor `titulo`.

De preferência, um documento HTML considera os valores dos atributos `id` como únicos. Se houver mais de um elemento com o mesmo valor para o atributo `id`, a regra CSS será aplicada ao primeiro elemento encontrado.

O **seletor de classe** é o símbolo `.` seguido do nome da classe. O conceito de *classe* refere-se ao valor do atributo `class`. Enquanto o atributo `id` tem apenas um único valor e deve ser único no documento HTML, o atributo `class` pode ter mais de um valor e não é considerado de forma exclusiva. Exemplos:

```
.paragrafo { ... } 
.texto { ... }
.externo { ... }
```

Cada regra é aplicada ao elemento que possuir, no atributo `class`, a classe correspondente. Exemplos:

```html
<p class="paragrafo">...</p>
<p class="paragrafo texto">...</p>
<p class="paragrafo texto externo">...</p>
```

O primeiro elemento `p` tem o atributo `class` com o valor `paragrafo`. Isso quer dizer que será aplicada a regra CSS `.paragrafo`. O segundo elemento `p` tem o atributo `class` com o valor `paragrafo texto`. Isso quer dizer que serão aplicadas as classes `paragrafo` e `texto`. Para o último elemento `p` serão aplicadas as classes `paragrafo`, `texto` e `externo`.

No arquivo `app.css` a primeira regra CSS utiliza o seletor `#listaDeTarefas`. Como há um elemento `ul` que se enquadra nesta situação, a regra será aplicada a ele, como esperado.

A regra possui uma lista de propriedades. As propriedades do CSS são como "chaves" para situações específicas (em termos de formatação e representação visual). A lista de propriedades está contida entre chaves e está separada por ponto-e-vírgula.

```css
padding: 0px;
list-style: none;
```

As propriedades utilizadas são:
* **padding**: controla o espaçamento interno do elemento. Neste caso, o valor `0px` indica que o espaçamento interno será de "zero pixels"
* **list-style**: determina como serão apresentados os marcadores para os elementos do `ul`. Neste caso, o valor "none" indica que não serão apresentados marcadores.

Há mais três regras e seus seletores são:
* `#listaDeTelefones li`: aplica-se aos elementos `li` filhos de `#listaDeTelefones`
* `#listaDeTelefones li .panel-body`: aplica-se aos elementos filhos de `li` (que são filhos de `#listaDeTelefones`) que possuem a classe `panel-body`
* `#listaDeTelefones li .panel`: aplica-se aos elementos filhos de `li` (que são filhos de `#listaDeTelefones`) que possuem a classe `panel`

> **Exercícios**
> 1. Quais são os outros valores para a propriedade `list-style`?
> 
> 2. O que significam as propriedades a seguir e seus valores?
> * float
> * margin-right
> * height
> * width

### Componente Panel, do Bootstrap

O **Panel** é um componente do Bootstrap que permite a criação de um painel. Geralmente, painéis são utilizados em interfaces que precisem organizar parte do conteúdo, contextualizando-o. Neste caso, cada telefone da lista de telefones é apresentado em um painel. 

Para utilizar um **Panel**, deve-se utilizar a classe `panel` e uma das classes auxiliares que determinam a cor do painel. Neste caso, está também sendo utilizada a classe `panel-default`.

```html
<div class="panel panel-default">
```

> **Experimento #1**
> Utilize outras classes de formatação do `panel`.

Um **Panel** possui três partes, duas das quais podem ser utilizadas opcionalmente:
* **Cabeçalho** (opcional): representada pela classe `panel-heading`
* **Corpo**: representado pela classe `panel-body`
* **Rodapé** (opcional): representado pela classe `panel-footer`

```html
<div class="panel panel-default">
    <div class="panel-body">
	...
    </div>
    <div class="panel-footer text-center">
	...
    </div>
</div>
```

No caso do arquivo `index-1.html`, o painel que apresenta as informações de cada telefone mostra: 
* No corpo: foto e nome do telefone
* No rodapé: botão para acessar mais detalhes do telefone

O rodapé utiliza componentes do Bootstrap e requer um pouco mais de atenção. 

```html
<div class="panel-footer text-center">
    <a class="btn btn-default" role="button" href="#">
        <i class="glyphicon glyphicon-zoom-in"></i> Detalhes
    </a> 
</div>
```

A classe `text-center`, do Bootstrap, alinha o conteúdo ao centro. 

Dentro do rodapé está um elemento `a`, que contém as classes `btn` e  `btn-default`, que é auxiliar da primeira para formatação do botão (aplica o visual padrão de um botão). 

> **Experimento #2**
> Utilize outras classes de formatação do `btn` (botão).

Dentro do elemento `a` está o elemento `i`, que tem as classes `glyphicon` e a auxiliar `glyphicon-zoom-in`. A segunda define o ícone a ser apresentado (o ícone de "zoom").

> **Experimento #3**
> 1. Utilize outros ícones do Bootstrap.
> 2. Abaixo do nome do telefone, apresente seu preço (em moeda corrente).

