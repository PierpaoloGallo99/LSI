import { Component, OnInit } from '@angular/core';
import { Fornitore } from './fornitori';
import { HttpClient } from '@angular/common/http';
import { SupplierService } from '../../Services/supplier.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  ricerca: string='';
  fornitori: Fornitore[] = [];

  constructor(private http: HttpClient, private supplierService: SupplierService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.supplierService.getAllSupplier().subscribe((data: any) => {
      this.fornitori = data;
    })
  }

  //quando clicco su un fornitore vengo rimandato a una pagina che mi prende il fornitore
  //e mi mostra tutti i suoi prodotti
  cercaFornitore(f: Fornitore){
    this.router.navigate(['/ricerca', f.id]);
  }
}
