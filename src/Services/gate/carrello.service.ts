import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ProdottiMagazzino} from "../../app/file ts/prodotti-magazzino";
import {HttpClient} from "@angular/common/http";
import {Carrello} from "../../app/file ts/carrello";

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  private cartURL='http://localhost:8080/warehouse/products';
  constructor(private http: HttpClient) { }
  getCarrello(): Observable<Carrello[]>{
    return this.http.get<Carrello[]>(this.cartURL);
  }
}
