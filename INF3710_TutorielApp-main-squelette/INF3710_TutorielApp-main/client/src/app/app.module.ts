import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./communication.service";
import { CliniqueComponent } from './clinique/clinique.component';
import { ProprietaireAnimalComponent } from './proprietaire-animal/proprietaire-animal.component';
import { AnimalComponent } from './animal/animal.component';

@NgModule({
  declarations: [
    AppComponent,
    CliniqueComponent,
    ProprietaireAnimalComponent,
    AnimalComponent,
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
})
export class AppModule { }
