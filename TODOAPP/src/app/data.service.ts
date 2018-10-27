import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 constructor( private httpOb: HttpClient) { }
 url = '/read';
 delete = '/delete';
 addData = '/create';


 getbooks(): Observable<any> {
 const req = new  HttpRequest('GET', this.url, {reportProgress: true});
 return this.httpOb.request(req);
 }
 deleteItem(id): Observable<any> {
  return this.httpOb.delete(this.delete + '/' + id);
  }
  getItem(id): Observable<any> {
    return this.httpOb.get(this.url + '/' + id);
    }

  addproduct(product: any): Observable<any> {

    const book = JSON.stringify(product);
    console.log(book);

    return this.httpOb.post(this.addData, product);

    }
   }
