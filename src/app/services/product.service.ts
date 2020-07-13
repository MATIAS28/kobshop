import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import { Global } from './global';

@Injectable()

export class ProductService{
  public url: string;

  constructor(
    private _http: HttpClient
  ){
    this.url = Global.url;
  }

  testService(){
    return "probando servicio de Angular";
  }


  saveProduct(product: Product):Observable<any>{
    let params = JSON.stringify(product);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'save-product', params, {headers: headers});
  }

  getProducts(name):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url+'products/'+name, {headers:headers});
  }

  getProduct(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url+'product/'+id, {headers: headers});
  }

  deleteProduct(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url+'product/'+id, {headers:headers});
  }

  updateProduct(product):Observable<any>{
    let params = JSON.stringify(product);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url+'product/'+product._id, params, {headers: headers});
  }
}
