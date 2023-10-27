import { Component, OnInit } from '@angular/core';
import { ProdottiService } from 'src/Services/prodotti.service';
import { ProductExposed } from '../file ts/ProductExposed';
import { ClientProblemService } from 'src/Services/client-problem.service';
import { ClientProblem } from '../file ts/ClientProblem';

@Component({
  selector: 'app-spedizioni',
  templateUrl: './spedizioni.component.html',
  styleUrls: ['./spedizioni.component.css']
})
export class SpedizioniComponent implements OnInit {

  listaProdottiEsposti : ProductExposed[]=[];

  lista: any[]=[];

  listaProblemiClienti: ClientProblem[]=[];
  constructor(private prodottiSrv: ProdottiService, private clientProbSrv: ClientProblemService) { }

  ngOnInit(): void {
    this.prodottiSrv.getAllProductExposed().subscribe((data)=> {
      this.listaProdottiEsposti=data;

      this.prodottiSrv.getAllProductSold().subscribe((data) => {
        
        for(let i=0; i<this.listaProdottiEsposti.length; i++){
          for(let j=0; j<data.length; j++){
            if(this.listaProdottiEsposti[i].id==data[j].idProduct){
              this.lista[j]=this.listaProdottiEsposti[i];
            }
          }
        }

        
      })
    })

    this.clientProbSrv.getAllClientProblem().subscribe((data)=>{
      
      this.listaProblemiClienti=data;
      
    })
  }


  getValueForm(formData: any) {
    const list: any[]=[];
    list[0]=formData.nome;
    list[1]=formData.cognome;
    list[2]=formData.telefono;
    list[3]=formData.prodotto;
    list[4]=formData.problema;

    this.clientProbSrv.registerNewClientProblem(list).subscribe();
    location.reload();
  }

  removeClient(c:any){
    this.clientProbSrv.deleteClientProblem(c.id).subscribe();
    location.reload();
  }
}
