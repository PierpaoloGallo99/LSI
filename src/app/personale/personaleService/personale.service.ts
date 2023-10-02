import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from 'src/app/file ts/staff';

@Injectable({
  providedIn: 'root'
})
export class PersonaleService {

  private userURL = 'http://localhost:8080/users';


  constructor(private http: HttpClient) { }

  getPersonale(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.userURL + "/getAll");
  }


  registerUser(user: Staff) {
    return this.http.post(this.userURL + "/addUser", user);
  }

  deleteUser(id: number) {
    this.http.delete(this.userURL + '/delete/by_id?id=' + id).subscribe();
  }

}
