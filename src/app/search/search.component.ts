import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { SearchService } from '../../Services/search.service';
import { Prodotto } from '../file ts/prodotti';
import {AuthService} from "../../Services/auth.service";

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

  constructor(private route: ActivatedRoute, private search: SearchService, private authService: AuthService) {
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

  logout(){
    this.authService.setAuthentication();
    localStorage.removeItem("user");
  }

}
