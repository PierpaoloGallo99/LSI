import { Component, OnInit } from '@angular/core';
import { ProdottiMagazzinoService } from '../../Services/gate/prodotti-magazzino.service';
import { ProdottiMagazzino } from '../file ts/prodotti-magazzino';

@Component({
  selector: 'app-prodotti-magazzino',
  templateUrl: './prodotti-magazzino.component.html',
  styleUrls: ['./prodotti-magazzino.component.css']
})
export class ProdottiMagazzinoComponent implements OnInit {


  prodotti: ProdottiMagazzino[]=[];

  constructor(private warehouseService: ProdottiMagazzinoService) { }

  ngOnInit(): void {
    this.getProdottiMagazzino();
  }


  getProdottiMagazzino(){
    this.warehouseService.getProdottiMagazzino().subscribe((data => {
      this.prodotti=data;
    }));
  }



}
