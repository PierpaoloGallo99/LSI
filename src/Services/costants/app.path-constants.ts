import {Routes} from "@angular/router";
import {LoginComponent} from "../../app/login/login.component";
import {HomeComponent} from "../../app/home/home.component";
import {ProdComponent} from "../../app/SezioneProdotti/prod/prod.component";
import {
  ProdottiDaLavorareComponent
} from "../../app/SezioneProdotti/prodotti-da-lavorare/prodotti-da-lavorare.component";
import {ProdottiVendutiComponent} from "../../app/SezioneProdotti/prodotti-venduti/prodotti-venduti.component";
import {
  ProdottiInEsposizioneComponent
} from "../../app/SezioneProdotti/prodotti-in-esposizione/prodotti-in-esposizione.component";
import {SupplierComponent} from "../../app/supplier/supplier.component";
import {MagazzinoComponent} from "../../app/magazzino/magazzino.component";
import {ProdottiMagazzinoComponent} from "../../app/prodotti-magazzino/prodotti-magazzino.component";
import {ConfezioniMagazzinoComponent} from "../../app/confezioni-magazzino/confezioni-magazzino.component";
import {CarrelloComponent} from "../../app/carrello/carrello.component";
import {PersonaleComponent} from "../../app/personale/personale.component";
import {SpedizioniComponent} from "../../app/spedizioni/spedizioni.component";
import {ProdottiFornitoreComponent} from "../../app/prodotti-fornitore/prodotti-fornitore.component";

export enum ROUTING_PATH_COSTANTS{
  LOGIN="login",
  HOME="home",
  PRODUCTS="products",
  PRODOTTI_DA_PROCESSARE="products/to-be-processed",
  PRODOTTI_VENDUTI="products/sold",
  PRODOTTI_IN_ESPOSIZIONE="products/show",
  FORNITORI="supplier",
  MAGAZZINO="warehouse",
  MAGAZZINO_PRODOTTI="warehouse/products",
  MAGAZZINO_CONFEZIONI="warehouse/products",
  CARRELLO="cart",
  PERSONALE="staff",
  ORDINI="orders",
  
}

