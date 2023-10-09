import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SupplierComponent} from './supplier/supplier.component';
import {ProdottiFornitoreComponent} from './prodotti-fornitore/prodotti-fornitore.component';
import {ProdottiMagazzinoComponent} from './prodotti-magazzino/prodotti-magazzino.component';
import {CarrelloComponent} from './carrello/carrello.component';
import {PersonaleComponent} from './personale/personale.component';
import {SpedizioniComponent} from './spedizioni/spedizioni.component';
import {HomeComponent} from './home/home.component';
import {ProdComponent} from './SezioneProdotti/prod/prod.component';
import {MagazzinoComponent} from './magazzino/magazzino.component';
import {ConfezioniMagazzinoComponent} from './confezioni-magazzino/confezioni-magazzino.component';
import {ProdottiDaLavorareComponent} from './SezioneProdotti/prodotti-da-lavorare/prodotti-da-lavorare.component';
import {ProdottiVendutiComponent} from './SezioneProdotti/prodotti-venduti/prodotti-venduti.component';
import {ProdottiInEsposizioneComponent} from './SezioneProdotti/prodotti-in-esposizione/prodotti-in-esposizione.component';
import {ROUTING_PATH_COSTANTS} from "../Services/costants/app.path-constants";
import {CanActivateViaAuthGuardService} from "../Services/common/canActivateViaAuthGuard.service";

const routes: Routes = [
  {path: ROUTING_PATH_COSTANTS.LOGIN, component: LoginComponent},
  {path: ROUTING_PATH_COSTANTS.HOME, component: HomeComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: ROUTING_PATH_COSTANTS.PRODUCTS, component: ProdComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: ROUTING_PATH_COSTANTS.PRODOTTI_DA_PROCESSARE, component: ProdottiDaLavorareComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: ROUTING_PATH_COSTANTS.PRODOTTI_VENDUTI, component: ProdottiVendutiComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: ROUTING_PATH_COSTANTS.PRODOTTI_IN_ESPOSIZIONE, component: ProdottiInEsposizioneComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: ROUTING_PATH_COSTANTS.FORNITORI, component: SupplierComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: ROUTING_PATH_COSTANTS.MAGAZZINO, component: MagazzinoComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: ROUTING_PATH_COSTANTS.MAGAZZINO_PRODOTTI, component: ProdottiMagazzinoComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: ROUTING_PATH_COSTANTS.MAGAZZINO_CONFEZIONI, component: ConfezioniMagazzinoComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: ROUTING_PATH_COSTANTS.CARRELLO, component: CarrelloComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: ROUTING_PATH_COSTANTS.PERSONALE, component: PersonaleComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: ROUTING_PATH_COSTANTS.ORDINI, component: SpedizioniComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: 'products_of_supplier/:ricerca', component: ProdottiFornitoreComponent, canActivate: [CanActivateViaAuthGuardService]},
  {path: '', redirectTo:ROUTING_PATH_COSTANTS.LOGIN, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: "legacy"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
