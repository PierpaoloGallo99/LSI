import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaleService } from 'src/Services/personale.service';
import { SalaryService } from 'src/Services/salary.service';
import { SalaryUser } from 'src/app/file ts/SalaryUser';

@Component({
  selector: 'app-info-personale',
  templateUrl: './info-personale.component.html',
  styleUrls: ['./info-personale.component.css']
})
export class InfoPersonaleComponent implements OnInit {

  ricerca: any;
  utente: any;
  salario: SalaryUser[] = [];



  constructor(private route: ActivatedRoute, private staffSrv: PersonaleService, private salarySrv: SalaryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.ricerca = params.get('ricerca');
      this.staffSrv.findStaffInfo(this.ricerca).subscribe(data => {
        this.utente = data;
      })
      this.salarySrv.getSalaryOfUser(this.ricerca).subscribe(data => {
        this.salario = data;
      })
    });
  }


  getValueForm(formData: any) {
    const list: any[] = [];
    list[0] = this.utente.id;
    list[1] = formData.mese;
    list[2] = formData.anno;
    list[3] = formData.oreLavorate;
    list[4] = formData.straordinari;
    list[5] = formData.ferie;

    this.salarySrv.changeHour(list).subscribe();
    location.reload();
  }

}
