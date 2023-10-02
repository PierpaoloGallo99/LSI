import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BoxMagazzino } from 'src/app/file ts/box-magazzino';
import { ProdottiMagazzino } from 'src/app/file ts/prodotti-magazzino';

@Injectable({
  providedIn: 'root'
})
export class ProdottiMagazzinoService {

  private prodURL='http://localhost:8080/warehouse/products';
  private boxURL='http://localhost:8080/warehouse/boxes';

  constructor(private http: HttpClient) { }

  getProdottiMagazzino(): Observable<ProdottiMagazzino[]>{
    return this.http.get<ProdottiMagazzino[]>(this.prodURL);
  }

  getBoxMagazzino(): Observable<BoxMagazzino[]>{
    return this.http.get<BoxMagazzino[]>(this.boxURL);
  }

}
