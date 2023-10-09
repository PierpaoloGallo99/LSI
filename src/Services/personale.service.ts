import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from 'src/app/file ts/staff';
import {Password} from "../app/file ts/password";

@Injectable({
  providedIn: 'root'
})
export class PersonaleService {

  private userURL = 'http://localhost:8080/users';
  public password:string='';

  constructor(private http: HttpClient) { }

  getPersonale(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.userURL + "/getAll");
  }

  registerUser(formData:any) {
    return this.http.post(this.userURL + "/addUser", formData);
  }

  deleteUser(id: number) {
    this.http.delete(this.userURL + '/delete/by_id?id=' + id).subscribe();
  }

  deletePasswordUser(id: number) {
    this.http.delete(this.userURL + '/delete/by_pass?pass=' + id).subscribe();
  }

}
