# Passo 7 - Melhorias no template

O **Passo 7** aplica melhorias ao template, apresentando mais informações na tela de detalhes do telefone. A animação a seguir ilustra o resultado final.

![](passo-7-resultado-final.gif)

A tela de detalhes do telefone apresenta informações adicionais:
* fotos do telefone
* especificações técnicas como detalhes da bateria e conectividade

## Template

Em relação ao **Passo 6** as principais mudanças do passo atual são na tela de detalhes do telefone. O arquivo `index.html` contém o trecho de código a seguir.

```html
<h1>
<a href="" class="btn btn-default pull-right" role="button" ng-click="mostrarLista()">
    <i class="glyphicon glyphicon-th-large"></i> Lista
</a>
{{telefone.name}}
</h1>
<div class="row">
    <div class="col-md-5">
        <img class="img-responsive" ng-src="{{telefone.imageUrl}}">
    </div>
    <div class="col-md-7">
        <p>{{telefone.description}}</p>
        <h3>Mais fotos do telefone (clique para ampliar)</h3>
        <div class="thumbs">
        ...
        </div>
    </div>
</div>
<div class="row">
    <h2>Detalhes e mais especificações técnicas</h2>
    <p>{{telefone.additionalFeatures}}</p>
    <div class="col-md-3">
        <h3>Disponibilidade e redes</h3>
        ...
    </div>
    <div class="col-md-3">
        <h3>Bateria</h3>
        ...
    </div>
    <div class="col-md-3">
        <h3>Armazenamento e memória</h3>
        ...
    </div>
    <div class="col-md-3">
        <h3>Conectividade</h3>
        ...
    </div>
</div>
```

### Fotos do telefone

A estrutura do código demonstra que a tela de detalhes contém seções que apresentam os dados do telefone em questão. A primeira seção é a que apresenta as fotos do telefone.

```html
<div class="row">
    <div class="col-md-5">
        <img class="img-responsive" ng-src="{{telefone.imageUrl}}">
    </div>
    <div class="col-md-7">
        <p>{{telefone.description}}</p>
        <h3>Mais fotos do telefone (clique para ampliar)</h3>
        <div class="thumbs">
            <ul class='listaDeMiniaturas'>
                <li ng-repeat="image in telefone.images">
                    <a href="#" ng-click="mostrarImagem(image)">
                        <img class="img-responsive" ng-src="{{image}}">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
```

A tela apresenta uma foto grande, à esquerda da descrição e miniaturas do telefone, abaixo da descrição.

A foto grande está vinculada à propriedade `telefone.imageUrl` do **model**.

Utilizando a diretiva `ng-repeat` sobre o `telefone.images` (um `array`) o template apresenta elementos `li` com conteúdo para apresentar as fotos do telefone. Importante notar que ao clicar em uma foto pequena ela se torna a foto grande, pois é chamada a função `mostrarImagem()`, definida no **controller**.

### Detalhes técnicos

Os detalhes técnicos do telefone são apresentados em quatro colunas. A primeira coluna apresenta *disponibilidade e redes* do telefone.

```html
<div class="col-md-3">
    <h3>Disponibilidade e redes</h3>
    <ul>
        <li ng-repeat="availability in telefone.availability">{{availability}}</li>
    </ul>
</div>
```

Como pode ser notado, a diretiva `ng-repeat` está vinculada a `telefone.availability`.

A segunda coluna apresenta informações da bateria do telefone.

```html
<div class="col-md-3">
    <h3>Bateria</h3>
    <ul>
        <li><strong>Standby</strong>: {{telefone.battery.standbyTime}}</li>
        <li><strong>Conversação</strong>: {{telefone.battery.talkTime}}</li>
        <li><strong>Tipo</strong>: {{telefone.battery.type}}</li>
    </ul>
</div>
```

Neste caso, não é necessário utilizar a diretiva `ng-repeat`. Os dados apresentados advêm das propriedades do objeto `telefone.battery`: `standbyTime`, `talkTime` e `type`.

A terceira coluna apresenta informações sobre armazenamento e memória.

```html
<div class="col-md-3">
    <h3>Armazenamento e memória</h3>
    <ul>
        <li><strong>RAM</strong>: {{telefone.storage.ram}}</li>
        <li><strong>Interna</strong>: {{telefone.storage.flash}}</li>
    </ul>
</div>
```

A exemplo da coluna *bateria*, aqui são utilizadas propriedades do objeto `telefone.storage`: `ram` e `flash`.

A quarta e última coluna apresenta informações sobre *conectividade*.

```html
<div class="col-md-3">
    <h3>Conectividade</h3>
    <ul>
        <li><strong>Bluetooth</strong>: {{telefone.connectivity.bluetooth}}</li>
        <li><strong>Rede</strong>: {{telefone.connectivity.cell}}</li>
        <li><strong>GPS</strong>: {{telefone.connectivity.gps}}</li>
        <li><strong>Infravermelho</strong>: {{telefone.connectivity.infrared}}</li>
        <li><strong>Wi-fi</strong>: {{telefone.connectivity.wifi}}</li>
    </ul>
</div>
```

O template apresenta os valores das propriedades do objeto `telefone.connectivity`: `bluetooth`, `cell`, `gps`, `infrared` e `wifi`.

## Controller

Em relação ao **controller** há poucas mudanças em relação ao **Passo 6**: 
* alteração na função `mostrarDetalhes()`
* inclusão da função `mostrarImagem()`

### Função `mostrarDetalhes()`

A função `mostrarDetalhes()` passa a ser definida como:

```javascript
$scope.mostrarDetalhes = function(telefone) {
    $scope.ui_estado = 'detalhes';
    $http.get('data/phones/' + telefone.id + '.json').then(
        function(response){
            $scope.telefone = response.data;
            $scope.telefone.imageUrl = $scope.telefone.images[0];
        });
};
```

Ou seja, a única alteração em relação ao **Passo 6** é a criação do atributo `imageUrl` no objeto `$scope.telefone`. Este atributo é utilizado para apresentar a foto maior e, por isso, recebe o endereço da primeira foto do array `$scope.telefone.images`.

### Função `mostrarImagem()`

A função `mostrarImagem()` é responsável por alternar a foto grande da página de detalhes do telefone. Seu código é:

```javascript
$scope.mostrarImagem = function(imagem) {
    $scope.telefone.imageUrl = imagem;
}
```

Como informado, o atributo `$scope.telefone.imageUrl` representa a imagem utilizada no momento como a foto grande do telefone. Assim, a função `mostrarImagem()` recebe como parâmetro o caminho da nova imagem que se tornará a foto grande.

## Conclusão

O **Passo 7** adicionou ao aplicativo **PhoneCat** a funcionalidade da apresentação de mais informações na tela de detalhes do telefone. Sendo o **Passo 6** o que mais causou modificações estruturais no aplicativo, até o momento, o passo atual apenas utilizou o conhecimento já fundamentado para chegar ao objetivo proposto.

> **Exercício**
> 
> O Bootstrap fornece um componente interessante para apresentar fotos (imagens) de uma forma diferente: o **Carousel** (ou **slider**). Modifique a tela de detalhes do telefone utilizando o componente **Carousel** para apresentar as fotos do telefone.