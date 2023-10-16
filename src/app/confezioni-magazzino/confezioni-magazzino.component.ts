import { Component, OnInit } from '@angular/core';
import { BoxMagazzino } from '../file ts/box-magazzino';
import { ProdottiMagazzinoService } from '../../Services/gate/prodotti-magazzino.service';

@Component({
  selector: 'app-confezioni-magazzino',
  templateUrl: './confezioni-magazzino.component.html',
  styleUrls: ['./confezioni-magazzino.component.css']
})
export class ConfezioniMagazzinoComponent implements OnInit {

  constructor(private warehouseService: ProdottiMagazzinoService) { }

  box: BoxMagazzino[]=[];


  ngOnInit(): void {
    this.getBoxMagazzino();
  }

  getBoxMagazzino(){
    this.warehouseService.getBoxMagazzino().subscribe((data => {
      this.box=data;
    }));
  }

}
