import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../Services/search.service';
import { Fornitore } from '../supplier/fornitori';

@Component({
  selector: 'app-prodotti-fornitore',
  templateUrl: './prodotti-fornitore.component.html',
  styleUrls: ['./prodotti-fornitore.component.css']
})
export class ProdottiFornitoreComponent implements OnInit {

  ricerca: any;
  prodotti: any[]=[];
  fornitore: any;

  constructor(private route: ActivatedRoute, private search: SearchService) { }

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

}
