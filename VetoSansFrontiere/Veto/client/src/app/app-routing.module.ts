import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { CliniqueComponent } from "./clinique/clinique.component";
import { AnimalComponent } from "./animal/animal.component";
import { TraitementComponent } from "./traitement/traitement.component";
import { FactureComponent } from "./facture/facture.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "cliniques", component: CliniqueComponent },
  { path: "animals", component: AnimalComponent},
  { path: "traitements", component: TraitementComponent},
  { path: "examens", component:FactureComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }