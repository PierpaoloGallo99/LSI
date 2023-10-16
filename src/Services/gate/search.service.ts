import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornitore } from 'src/app/supplier/fornitori';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private suppURL='http://localhost:8080/supplier/search/supp_by_id?id='
  private prodURL='http://localhost:8080/supplier/search/prod_by_id?id='

  private fornitore='http://localhost:8080/supplier/search/supplier_by_id?id='

  constructor(private http:HttpClient) { }

  getProdotti(id: string): Observable<any[]>{
    return this.http.get<any[]>(this.prodURL+id);
  }

  getFornitori(id: string): Observable<any[]>{
    return this.http.get<any[]>(this.suppURL+id);
  }

  getFornitoreSingolo(id: string): Observable<Fornitore>{
    return this.http.get<Fornitore>(this.fornitore+id);
  }
}
