import { Component, OnInit } from '@angular/core';
import { BoxMagazzino } from '../file ts/box-magazzino';
import { ProdottiMagazzinoService } from '../../Services/prodotti-magazzino.service';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-confezioni-magazzino',
  templateUrl: './confezioni-magazzino.component.html',
  styleUrls: ['./confezioni-magazzino.component.css']
})
export class ConfezioniMagazzinoComponent implements OnInit {

  loggedUser: any;
  constructor(private warehouseService: ProdottiMagazzinoService, private auth: AuthService) {
    this.loggedUser = this.auth.getAuthentication();
  }


  box: BoxMagazzino[] = [];

  ngOnInit(): void {
    this.getBoxMagazzino();
  }

  getBoxMagazzino() {
    this.warehouseService.getBoxMagazzino().subscribe((data => {
      this.box = data;
    }));
  }

  getValueForm(formData: any) {
    const list: any[] = [];
    list[0]=formData.id;
    list[1]=formData.quantity;

    this.warehouseService.addQuantityBoxMagazzino(list).subscribe();
    location.reload();
  }

}
