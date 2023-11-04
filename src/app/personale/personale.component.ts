import { Component, OnInit } from '@angular/core';
import { PersonaleService } from '../../Services/personale.service';
import { Staff } from '../file ts/staff';
import { identifierName } from '@angular/compiler';
import { Password } from "../file ts/password";
import { AuthService } from 'src/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personale',
  templateUrl: './personale.component.html',
  styleUrls: ['./personale.component.css']
})
export class PersonaleComponent implements OnInit {

  loggedUser: any;

  constructor(private staffServ: PersonaleService, private authServ: AuthService, private router: Router) {
    this.loggedUser = this.authServ.utente;
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
    list[7] = formData.ruolo;
    this.staffServ.registerUser(list).subscribe((response) => {
      location.reload();
    });
  }

  deleteUser(s: any) {
    this.staffServ.deleteUser(s.id);
    this.staffServ.deletePasswordUser(s.id);
    location.reload();
  }

  cercaPersonale(s: any) {
    this.router.navigate(['/staff_info', s.id]);
  }

}
