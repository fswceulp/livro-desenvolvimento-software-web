# HTML

[HTML (HyperText Markup Language)](http://www.w3.org/TR/html5/) é, basicamente, a linguagem base e universal para conteúdo na internet. A versão atual é chamada HTML5 e utilizar seus recursos não é, na verdade, uma obrigação. Entretanto, aprender os elementos principais permite que o conteúdo da página seja melhor organizado semanticamente.

## Estrutura padrão

O código a seguir demonstra a estrutura de um documento HTML5.


``` html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Título do documento</title>
</head>

<body>
Conteúdo do documento......
</body>

</html>
```

Na linha 1, a instrução de processamento `DOCTYPE` indica que o conteúdo do arquivo é HTML5.

Na linha 2, o elemento `html` possui o atributo `lang="pt-BR"`, indicando que o idioma usado no documento é Português do Brasil.

Na linha 4, o elemento `meta` possui o atributo `charset="UFT-8"`, indicando que o texto está codificado no padrão UTF-8.

## Elementos

Os elementos mais importantes do HTML5 são:

- **Semânticos**: `header`, `footer`, `article` e `section`
- **Controles de Formulário**: tipos numéricos, data e hora, calendário e intervalo
- **Gráficos**: `svg` e `canvas`
- **Multimídia**: `audio` e `video`

## Recursos da API de programação

Além de elementos, o HTML5 disponibiliza novos recursos para o desenvolvedor:
- Geolocalização
- Arrastar e soltar
- Armazenamento local
- Cache da aplicação
- Web workers
- Notificações Enviadas pelo Servidor

Para saber mais sobre o HTML5, veja o [curso de HTML do W3Schools](http://www.w3schools.com/html/default.asp).
