# Observables

Cada método da classe `Http` \(módulo `@angular/http`\) retorna um `Observable` de objetos `Response`.

Um "observable" representa uma cadeia de eventos que podem ser processados como operadores de arrays. O Angular core tem suporte básico para observables, mas outros podem ser obtidos do pacote `rxjs`. Nesse contexto, um "observable" fornece uma maneira assíncrona para o processamento de dados retornados por HTTP.

## Utilizando `Http.get()`

O código a seguir \(trecho do arquivo `src/app/eventos.service.ts`\) utiliza o método `Http.get()`:

```typescript
getEventos(filtro: string) : Observable<Evento[]> {
    return this.http.get(this.apiUrl + '?q=' + filtro)
        .map(this.extractData)
        .catch(this.handleError);
}
```

Neste trecho de código, o atributo `apiUrl` é uma string que representa o endereço de um serviço Http \(API\).

O método `http.get()` retorna um `Observable` e os encadeamentos que se seguem, usando `map()` e `catch()`, são funções que tratam o `Observable` de maneiras específicas:

* `map()`: nesse contexto, é usada para converter o objeto `Response` para o formato Json
* `catch()`: nesse contexto, é usada para tratamento de erros.

Cada uma destas funções recebe uma função como parâmetro. A função `extractData()`:

```typescript
private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
}
```

Nesse contexto, a API HTTP que está sendo utilizada adota o padrão de "encapsular" os dados de retorno em um atributo `data` \(um array ou um objeto\). Se ele não estiver presente, o método retorna `{}` \(um objeto "vazio"\).

A função `handleError()`:

```typescript
private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); 
    return Observable.throw(errMsg);
}
```

## Utilizando um `Observable`

O `Observable` é encapsulado em um Service \(no caso, `EventosService`\). Para ser utilizado em um componente, o retorno de `getEventos()` é tratado com a função `subscribe()`.

_Exemplo \(trecho do arquivo _`src/app/eventos-list.component.ts`_\):_

```typescript
getEventos() {
    this.eventosService.getEventos(this.filtro)
        .subscribe(
        eventos => this.eventos = eventos,
        error => this.errorMessage = <any>error);
}
```

A função `subscribe()` recebe dois parâmetros, seguindo o encadeamento definido no código de `EventosService.getEventos()`:

* o primeiro parâmetro é uma função que recebe o parâmetro `eventos`, do tipo `Evento[]` \(relacionada com a função `map()`\)
* o segundo parâmetro é uma função que recebe o parâmetro `error`, que representa uma indicação de erro da comunicação Http \(relacionada com a função `catch()`\)



