import { Component, OnInit } from '@angular/core';
import { ProdottiService } from 'src/Services/prodotti.service';
import { ProductExposed } from 'src/app/file ts/ProductExposed';
import { Prodotto } from 'src/app/file ts/prodotti';
import { ProductCreated } from 'src/app/file ts/productCreated';

@Component({
  selector: 'app-prodotti-venduti',
  templateUrl: './prodotti-venduti.component.html',
  styleUrls: ['./prodotti-venduti.component.css']
})
export class ProdottiVendutiComponent implements OnInit {

  constructor(private productSrv: ProdottiService) { }

  listaProdottiEsposti : ProductExposed[]=[];

  lista: any[]=[];

  ngOnInit(): void {

    this.productSrv.getAllProductExposed().subscribe((data)=> {
      this.listaProdottiEsposti=data;

      this.productSrv.getAllProductSold().subscribe((data) => {
        
        for(let i=0; i<this.listaProdottiEsposti.length; i++){
          for(let j=0; j<data.length; j++){
            if(this.listaProdottiEsposti[i].id==data[j].idProduct){
              this.lista[j]=this.listaProdottiEsposti[i];
              this.lista[j].quantity=data[j].quantity;
            }
          }
        }
      })
    })
    
  }

  addProdotti(formData: any){
    const list:any[]=[];
    list[0]=formData.idProductExposed;
    list[1]=formData.quantity;

    console.log(list);

    this.productSrv.registerNewProductSold(list).subscribe();
    location.reload();
  }

}
