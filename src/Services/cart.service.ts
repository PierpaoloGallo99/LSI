import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/file ts/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartURL='http://localhost:8080/cart';

  constructor(private http: HttpClient) { }

  getAllProductInCart(): Observable<Cart[]>{
    return this.http.get<Cart[]>(this.cartURL+"/get_all_product_in_cart");
  }

  addProductInCart(list: any){
    return this.http.post(this.cartURL+"/add_product_in_cart", list);
  }

  deleteAllProductInCart(){
    return this.http.delete(this.cartURL+"/remove_all_product");
  }
}
