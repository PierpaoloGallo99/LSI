import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductExposed } from 'src/app/file ts/ProductExposed';
import { Prodotto } from 'src/app/file ts/prodotti';
import { ProductCreated } from 'src/app/file ts/productCreated';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  private prodottiURL='http://localhost:8080/products';


  constructor(private http: HttpClient) { }

  getAllProductExposed(): Observable<ProductExposed[]>{
    return this.http.get<ProductExposed[]>(this.prodottiURL+"/get-products-exposed");
  }

  getAllProductSold(): Observable<ProductCreated[]>{
    return this.http.get<ProductCreated[]>(this.prodottiURL+"/get-products-sold");
  }

  getAllProductCreated(): Observable<ProductCreated[]>{
    return this.http.get<ProductCreated[]>(this.prodottiURL+"/get-products-created");
  }

  registerCreatedProduct(list: any){
    return this.http.post(this.prodottiURL+"/register-new-quantity-products", list);
  }

  registerNewProductToBeCreated(list: any){
    return this.http.post(this.prodottiURL+"/register-new-product-tocreate", list);
  }

  registerProductExistToBeCreated(list: any){
    return this.http.post(this.prodottiURL+"/register-exist-product", list);
  }

  setFlagProduct(prodotto: ProductExposed){
    return this.http.post(this.prodottiURL+"/set-flag-product",prodotto);
  }

  registerNewProductSold(list: any){
    return this.http.post(this.prodottiURL+"/register-product-sold", list);
  }

  

}
