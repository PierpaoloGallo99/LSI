import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornitore } from '../fornitori';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private fornitoriURL= 'http://localhost:8080/supplier';

  constructor(private http: HttpClient) { }


  getAllSupplier(): Observable<Fornitore[]>{
    return this.http.get<Fornitore[]>(this.fornitoriURL+"/getAll");
  }


}
