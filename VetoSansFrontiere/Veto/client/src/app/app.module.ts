import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AnimalComponent } from "./animal/animal.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CliniqueComponent } from "./clinique/clinique.component";
import { CommunicationService } from "./communication.service";
import { FactureComponent } from "./facture/facture.component";
import { ProprietaireAnimalComponent } from "./proprietaire-animal/proprietaire-animal.component";
import { TraitementComponent } from "./traitement/traitement.component";
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CliniqueComponent,
    ProprietaireAnimalComponent,
    AnimalComponent,
    TraitementComponent,
    FactureComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent],
  exports: [ModalComponent],
})
export class AppModule { }
