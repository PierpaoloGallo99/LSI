import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../Services/search.service';
import { Fornitore } from '../supplier/fornitori';
import { CartService } from 'src/Services/cart.service';

@Component({
  selector: 'app-prodotti-fornitore',
  templateUrl: './prodotti-fornitore.component.html',
  styleUrls: ['./prodotti-fornitore.component.css']
})
export class ProdottiFornitoreComponent implements OnInit {

  ricerca: any;
  prodotti: any[]=[];
  fornitore: any;

  constructor(private route: ActivatedRoute, private search: SearchService, private cartSrv: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.ricerca = params.get('ricerca');
      this.search.getFornitoreSingolo(this.ricerca).subscribe(data=>{
        this.fornitore=data;
      });
      this.search.getProdotti(this.ricerca).subscribe(data => {
        this.prodotti = data;
      });
    });

  }


  addToCart(prodotto: any, fornitore: any){
    console.log(prodotto, fornitore)
    const list: any[]=[];

    list[0]=fornitore.id;
    list[1]=fornitore.name;
    list[2]=prodotto.id;
    list[3]=prodotto.name;
    list[4]=prodotto.price;
    list[5]=1;

    this.cartSrv.addProductInCart(list).subscribe();
  }

}
