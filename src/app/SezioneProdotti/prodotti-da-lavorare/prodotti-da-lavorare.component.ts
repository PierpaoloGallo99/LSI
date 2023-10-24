import { Component, OnInit } from '@angular/core';
import { ProdottiService } from 'src/Services/prodotti.service';
import { Prodotto } from 'src/app/file ts/prodotti';
import { ProdottiInEsposizioneComponent } from '../prodotti-in-esposizione/prodotti-in-esposizione.component';
import { subscribeOn } from 'rxjs';
import { ProductCreated } from 'src/app/file ts/productCreated';
import { ProductExposed } from 'src/app/file ts/ProductExposed';
import { ProdottiMagazzinoService } from 'src/Services/prodotti-magazzino.service';
import { ProdottiMagazzino } from 'src/app/file ts/prodotti-magazzino';

@Component({
  selector: 'app-prodotti-da-lavorare',
  templateUrl: './prodotti-da-lavorare.component.html',
  styleUrls: ['./prodotti-da-lavorare.component.css']
})
export class ProdottiDaLavorareComponent implements OnInit {

  flag: boolean=false;

  myForm = {
    idProduct: 0,
    idProductSold: 0,
    quantity: 0
  }

  constructor(private productSrv: ProdottiService, private warehouseService: ProdottiMagazzinoService) {}
  prodotti: ProdottiMagazzino[]=[];
  listaProdottiEsposti : ProductExposed[]=[];

  lista: any[]=[];

  ngOnInit(): void {
    this.warehouseService.getProdottiMagazzino().subscribe((data => {
      this.prodotti=data;
    }));
    this.productSrv.getAllProductExposed().subscribe((data)=> {
      this.listaProdottiEsposti=data;

      this.productSrv.getAllProductCreated().subscribe((data) => {
        
        for(let i=0; i<this.listaProdottiEsposti.length; i++){
          for(let j=0; j<data.length; j++){
            if(this.listaProdottiEsposti[i].id==data[j].idProduct){
              this.lista[j]=this.listaProdottiEsposti[i];
              this.lista[j].quantity=data[j].quantity;
              const prodotto=this.getProduct(data[j].idMaterial);
              this.lista[j].idMaterial=prodotto?.name;
              this.lista[j].quantityMaterial=data[j].quantityMaterial;
            }
          }
        }
      })
    })
    
  }


  //tasto che se clicco mi aggiunge le quantità del prodotto creato a quello esposto
  //aggiorna il db dei materiali
  registraProdotti(prodotto : ProductExposed){  

    const list: any[]= [];
    list[0]=prodotto.id;
    list[1]=prodotto.quantity;
    this.productSrv.registerCreatedProduct(list).subscribe((response)=>{
      location.reload();
    }, 
    (error)=>{
      console.log(error);
    });
    
  }

  //aggiunge un prodotto che è già stato creato per crearne ancora
  //modifica il db dei materiali
  getValueForm(formData: any) {
    const list: any[] = [];
    list[0]=formData.idProductExposed;
    list[1]=formData.quantity;
    list[2]=formData.material;
    list[3]=formData.quantityMaterial;

    console.log(list)
    this.productSrv.registerProductExistToBeCreated(list).subscribe((response)=>{
      location.reload();
    }, 
    (error)=>{
      console.log(error);
    });
  }


  //aggiunge un nuovo prodotto che non esiste che deve essere creato
  //al momento non funziona
  getValueOtherForm(formData: any) {

    const prodotto= this.getProduct(formData.material);

    const list: any[] = [];
    list[0]=formData.name+" in "+prodotto?.name;
    list[1]=formData.price;
    list[2]=formData.barcode;
    list[3]=formData.quantity;
    list[4]=formData.material;
    list[5]=formData.quantityMaterial;

    console.log(list)
    this.productSrv.registerNewProductToBeCreated(list).subscribe((response)=>{
      location.reload();
    }, 
    (error)=>{
      console.log(error);
    });
  }

 
  getProduct(num: number){
    for(let i=0; i<this.prodotti.length; i++){
      if(this.prodotti[i].id==num)
        return this.prodotti[i];
    }
    return null;
  }

  changeForm(){
    this.flag= ! this.flag;
  }

}
