# Passo 6 - Carregando dados via AJAX

O **Passo 6** adiciona a funcionalidade de carregar dados dos telefones via AJAX (requisições assíncronas ou XHR), ao invés de manter os dados deles em um `array` diretamente no código.

Antes de continuar neste passo, é necessário que o projeto utilize um servidor web. Como sugestão, em tempo de desenvolvimento, pode ser utilizado o [**http-server**](https://www.npmjs.com/package/http-server).

## npm e dependências 

Na prática, o projeto referente a este passo que é disponibilizado no repositório do código-fonte do livro já está devidamente configurado para funcionar com esta e outras dependências. Na sua cópia local do repositório, no diretório referente ao **Passo 6**, no prompt de comando, digite:

```
npm install
```

Este comando instala as dependências:
* de **produção**
    * `jquery`
    * `bootstrap`
    * `angular`
* de **desenvolvimento**
    * `http-server`

Se você iniciar o projeto, então terá que adicionar as dependências. Para isso, é necessário utilizar o **npm**. Você pode acompanhar uma breve referência do **npm** [aqui mesmo neste livro](../ferramentas/npm.md).

## Dados dos telefones

Até o **Passo 5** os dados dos telefones eram definidos diretamente no código do **controller**. Embora isso não esteja necessariamente incorreto, é interessante utilizar uma abordagem mais adequada. Neste caso, uma abordagem favorável ao projeto é armazenar os dados dos telefones em arquivos `json`. No diretório `data\phones` estão vários arquivos `.json`. Um deles, em especial o arquivo `phones.json`, contém um `array` de objetos que representam os telefones. O código a seguir apresenta um trecho desse arquivo.

```javascript
[
    {
        "age": 0, 
        "id": "motorola-xoom-with-wi-fi", 
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
        "name": "Motorola XOOM\u2122 with Wi-Fi", 
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    },
    ...
]
```

Os atributos do objeto que representa um telefone são: `age`, `id`, `imageUrl`, `name` e `snippet`. Dentre estes atributos, o atributo `id` é particularmente interessante, pois serve como **chave** e também é utilizado para acessar o arquivo de dados do telefone, que terá o mesmo nome do atributo `id` para o telefone em questão. Por exemplo, o arquivo `motorola-xoom-with-wi-fi.json` corresponde ao telefone descrito no trecho de código acima.


## Template

Por causa da estrutura dos dados, há uma pequena modificação no template: o código para apresentar a imagem do telefone é alterado para:

```html
<img class="img-responsive" ng-src="{{telefone.imageUrl}}">
```

## Carregando dados via XHR (AJAX)

