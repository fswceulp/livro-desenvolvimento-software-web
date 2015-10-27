# Formulários

O Bootstrap fornece classes para lidar com formulários. As classes CSS mais utilizadas neste processo são `form-control` (aplicadas a campos e elementos de fomrulário) e `form-group`, para melhor espaçamento dos elementos do formulário.

O código a seguir ilustra um formulário.

{%ace%}
!INCLUDE "formulario/index.html"
{%endace%}

Veja o exemplo em funcionamento [aqui](http://embed.plnkr.co/lsqlyDyrECTmTNkuaC2g/preview).

Para lidar com `radiobutton` e `checkbox` é necessário utilizar as classes `radio` e `checkbox`, respectivamente. Exemplo:

```html
<div class="checkbox">
  <label>
    <input type="checkbox">Aceito os termos
  </label>
</div>

<div class="radio">
  <label><input type="radio">M</label> <label><input type="radio">F</label>
</div>
```

Se preferir manter os controles em uma linha, utilize as classes `radio-inline` e `checkbox-inline`.

## Tamanho dos controles

O tamanho dos controles pode ser definido por meio das classes `input-lg` (maior tamanho), `input-sm` (menor tamanho). O tamanho normal não necessita de uma classe.
