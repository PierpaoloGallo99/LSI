import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientProblem } from 'src/app/file ts/ClientProblem';

@Injectable({
  providedIn: 'root'
})
export class ClientProblemService {

  private clientProblemURL='http://localhost:8080/client_problem';
  constructor(private http: HttpClient) { }

  registerNewClientProblem(list: any){
    return this.http.post(this.clientProblemURL+"/new_client", list);
  }

  getAllClientProblem(): Observable<ClientProblem[]>{
    return this.http.get<ClientProblem[]>(this.clientProblemURL+"/get_all_client_problem");
  }

  deleteClientProblem(id: number){
    return this.http.post(this.clientProblemURL+"/remove_client_problem", id);
  }
}
