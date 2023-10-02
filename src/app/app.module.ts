import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SupplierComponent } from './supplier/supplier.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProdottiFornitoreComponent } from './prodotti-fornitore/prodotti-fornitore.component';
import { ProdottiMagazzinoComponent } from './prodotti-magazzino/prodotti-magazzino.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { SpedizioniComponent } from './spedizioni/spedizioni.component';
import { PersonaleComponent } from './personale/personale.component';
import { HomeComponent } from './home/home.component';
import { ProdComponent } from './SezioneProdotti/prod/prod.component';
import { MagazzinoComponent } from './magazzino/magazzino.component';
import { ConfezioniMagazzinoComponent } from './confezioni-magazzino/confezioni-magazzino.component';
import { ProdottiDaLavorareComponent } from './SezioneProdotti/prodotti-da-lavorare/prodotti-da-lavorare.component';
import { ProdottiVendutiComponent } from './SezioneProdotti/prodotti-venduti/prodotti-venduti.component';
import { ProdottiInEsposizioneComponent } from './SezioneProdotti/prodotti-in-esposizione/prodotti-in-esposizione.component';
import { SalarioComponent } from './personale/salario/salario.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SupplierComponent,
    SearchComponent,
    ProdottiFornitoreComponent,
    ProdottiMagazzinoComponent,
    CarrelloComponent,
    SpedizioniComponent,
    PersonaleComponent,
    HomeComponent,
    ProdComponent,
    MagazzinoComponent,
    ConfezioniMagazzinoComponent,
    ProdottiDaLavorareComponent,
    ProdottiVendutiComponent,
    ProdottiInEsposizioneComponent,
    SalarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
