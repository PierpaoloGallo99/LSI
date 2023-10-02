import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './searchService/search.service';
import { Prodotto } from '../file ts/prodotti';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  ricerca: any;

  prodotti: Prodotto[] = [];
  fornitori: any[] = [];

  componentName:string | undefined;

  constructor(private route: ActivatedRoute, private search: SearchService) { 
    this.componentName = route.snapshot.component?.name;
  }

  ngOnInit(): void {
  }

  onSearch() {
    
    
    if(this.ricerca==''){
      return
    }
    this.search.getFornitori(this.ricerca).subscribe(data => {
      this.fornitori = data;
    });
    
  }

}
