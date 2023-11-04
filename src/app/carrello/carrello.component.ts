import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Services/auth.service';
import { CartService } from 'src/Services/cart.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  loggedUser:any;

  flag:boolean=false;
  prodotti: any[]=[];
  constructor(private cartSrv: CartService, private authSrv: AuthService) { }

  ngOnInit(): void {
    this.cartSrv.getAllProductInCart().subscribe((data)=>{
      this.prodotti=data;
      if(this.prodotti.length>0){
        this.flag=true;
      }
    });

    this.loggedUser=this.authSrv.getAuthentication();
  }

  approvaOrdine(){
    this.cartSrv.deleteAllProductInCart().subscribe();
    location.reload();
  }

}
