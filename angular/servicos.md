# Serviços

Conforme as recomendações do Angular, a utilização de serviços traz recursos como a separação de interesses. Como já informado, um service é basicamente uma classe, e não tem um tratamento diferenciado do Angular, como acontece com os componentes.

**Exemplo \(trecho do arquivo src\/app\/eventos.service.ts\):**

```typescript
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Evento } from './evento';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventosService {
 constructor(private http: Http) { }
 getEventos(filtro: string) : Observable<Evento[]> {

 return this.http.get(this.apiUrl + '?q=' + filtro)

 .map(this.extractData)

 .catch(this.handleError);

 }

 private extractData(res: Response) {

 let body = res.json();

 return body.data || {};

 }

 private handleError(error: any) {

 let errMsg = (error.message) ? error.message :

 error.status ? `${error.status} - ${error.statusText}` : 'Server error';

 console.error(errMsg);

 return Observable.throw(errMsg);

 }

 save(evento: Evento) : Observable<Evento> {

 let body = JSON.stringify(evento);

 let headers = new Headers({ 'Content-Type': 'application/json' });

 let options = new RequestOptions({ headers: headers });

 return this.http.post(this.apiUrl + evento.id, body, options)

 .map(this.extractData)

 .catch(this.handleError);

 }

 delete(evento: Evento) : Observable<number> {

 return this.http.delete(this.apiUrl + evento.id)

 .map(this.extractData)

 .catch(this.handleError);

 }

}

```



