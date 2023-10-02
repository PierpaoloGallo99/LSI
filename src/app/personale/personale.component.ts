import { Component, OnInit } from '@angular/core';
import { PersonaleService } from './personaleService/personale.service';
import { Staff } from '../file ts/staff';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-personale',
  templateUrl: './personale.component.html',
  styleUrls: ['./personale.component.css']
})
export class PersonaleComponent implements OnInit {

  constructor(private staffServ: PersonaleService) { }


  myForm = {
    firstName: '',
    lastName: '',
    telephoneNumber: '',
    email: '',
    idSalary: 0
  }

  utente = new Staff();

  lista: any[] = [];

  ngOnInit(): void {
    this.getStaff();
  }

  getStaff() {
    this.staffServ.getPersonale().subscribe(data => {
      this.lista = data;
    })
  }

  getValueForm(formData: any) {
    let max = 0;
    for (let s of this.lista) {
      if (s.id >= max) {
        max = s.id;
      }
    }


    this.utente.firstName = formData.nome;
    this.utente.lastName = formData.cognome;
    this.utente.telephoneNumber = formData.telefono;
    this.utente.email = formData.email;
    this.utente.idSalary = formData.id;
    this.utente.code = "00";
    this.utente.password = "";

    console.log(this.utente);

    this.staffServ.registerUser(this.utente).subscribe();
    location.reload();
  }

  deleteUser(s: any){
    this.staffServ.deleteUser(s.id);
    location.reload();
  }

}
