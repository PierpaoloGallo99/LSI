import { Component, OnInit } from '@angular/core';
import {Carrello} from "../file ts/carrello";
import {CarrelloService} from "../../Services/gate/carrello.service";

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  carrello: Carrello[]=[];
  constructor(private cartServ: CarrelloService) { }

  ngOnInit(): void {
  }

  getCarrello(){
    this.cartServ.getCarrello().subscribe((data => {
      this.carrello=data;
    }));
  }

}
