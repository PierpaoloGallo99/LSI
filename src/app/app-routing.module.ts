import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ProdottiFornitoreComponent } from './prodotti-fornitore/prodotti-fornitore.component';
import { ProdottiMagazzinoComponent } from './prodotti-magazzino/prodotti-magazzino.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { PersonaleComponent } from './personale/personale.component';
import { SpedizioniComponent } from './spedizioni/spedizioni.component';
import { HomeComponent } from './home/home.component';
import { ProdComponent } from './SezioneProdotti/prod/prod.component';
import { MagazzinoComponent } from './magazzino/magazzino.component';
import { ConfezioniMagazzinoComponent } from './confezioni-magazzino/confezioni-magazzino.component';
import { ProdottiDaLavorareComponent } from './SezioneProdotti/prodotti-da-lavorare/prodotti-da-lavorare.component';
import { ProdottiVendutiComponent } from './SezioneProdotti/prodotti-venduti/prodotti-venduti.component';
import { ProdottiInEsposizioneComponent } from './SezioneProdotti/prodotti-in-esposizione/prodotti-in-esposizione.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProdComponent},
  {path: 'products/to-be-processed', component: ProdottiDaLavorareComponent},
  {path: 'products/sold', component: ProdottiVendutiComponent},
  {path: 'products/show', component: ProdottiInEsposizioneComponent},
  {path: 'supplier', component: SupplierComponent},
  {path: 'warehouse', component: MagazzinoComponent},
  {path: 'warehouse/products', component: ProdottiMagazzinoComponent},
  {path: 'warehouse/boxs', component: ConfezioniMagazzinoComponent},
  {path: 'cart', component: CarrelloComponent},
  {path: 'staff', component: PersonaleComponent},
  {path: 'orders', component: SpedizioniComponent},
  {path: 'products_of_supplier/:ricerca', component: ProdottiFornitoreComponent},
  {path: '', redirectTo:"/login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
