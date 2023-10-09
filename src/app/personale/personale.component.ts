import {Component, OnInit} from '@angular/core';
import {PersonaleService} from '../../Services/personale.service';
import {Staff} from '../file ts/staff';
import {identifierName} from '@angular/compiler';
import {Password} from "../file ts/password";

@Component({
  selector: 'app-personale',
  templateUrl: './personale.component.html',
  styleUrls: ['./personale.component.css']
})
export class PersonaleComponent implements OnInit {

  constructor(private staffServ: PersonaleService) {
  }

  password = new Password();

  myForm = {
    firstName: '',
    lastName: '',
    telephoneNumber: '',
    email: '',
    password: '',
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
    const list: any[] = [];
    list[0] = formData.nome;
    list[1] = formData.cognome;
    list[2] = formData.telefono;
    list[3] = formData.email;
    list[4] = formData.id;
    list[5] = "00";
    list[6] = formData.password;
    this.staffServ.registerUser(list).subscribe((response) => {
      location.reload();
    });
  }

  deleteUser(s: any) {
    this.staffServ.deleteUser(s.id);
    this.staffServ.deletePasswordUser(s.id);
    location.reload();
  }


}
