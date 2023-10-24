import { Component, OnInit } from '@angular/core';
import { ProdottiService } from 'src/Services/prodotti.service';
import { ProductExposed } from 'src/app/file ts/ProductExposed';
import { Prodotto } from 'src/app/file ts/prodotti';

@Component({
  selector: 'app-prodotti-in-esposizione',
  templateUrl: './prodotti-in-esposizione.component.html',
  styleUrls: ['./prodotti-in-esposizione.component.css']
})
export class ProdottiInEsposizioneComponent implements OnInit {

  constructor(private productSrv: ProdottiService) { }

  lista: ProductExposed[]=[];

  ngOnInit(): void {
    this.productSrv.getAllProductExposed().subscribe((data)=> {
      this.lista=data;
    })
  }

  setFlagProduct(prod: ProductExposed){
    if(prod.quantity==0){
      return;
    }
    if(prod.flag==1){
      prod.flag=0;
      this.productSrv.setFlagProduct(prod).subscribe();
      return;
    }
    if(prod.flag==0){
      prod.flag=1;
      this.productSrv.setFlagProduct(prod).subscribe();
      return;
    }

    
  }

}
