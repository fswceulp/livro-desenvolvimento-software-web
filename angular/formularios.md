# Formulários

Formulários representam uma das formas mais utilizadas para receber dados do usuário. Há duas formas de utilizar formulários em Angular:

* formulários baseados em templates
* formulários baseados em models

Este capítulo trata da primeira das formas.

## Configuração do módulo

Formulários baseados em templates estão definidos no módulo `FormsModule`, disponível no pacote `@angular/forms`. Considere que um aplicativo tenha o arquivo `app.module.ts` no qual está definido o módulo raiz. O módulo raiz deve importar o módulo `FormsModule`.

```
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports : [
        BrowserModule,
        FormsModule
    ],
    ...
})
export class AppModule { }
```

Isso permitirá que componentes desse módulo possam usar o `FormsModule`.

## Template do componente

## Resumo

Para utilizar formulários em Angular:

1. Configurar o módulo para usar o `FormsModule`
2. 


