import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  private salaryURL='http://localhost:8080/salary';
  constructor(private http: HttpClient) { }

  getSalaryOfUser(id:any): Observable<any[]>{
    return this.http.get<any[]>(this.salaryURL+"/get_salary_of_user_id?id="+id);
  }

  changeHour(list: any){
    return this.http.post(this.salaryURL+"/change_hour", list);
  }
}
