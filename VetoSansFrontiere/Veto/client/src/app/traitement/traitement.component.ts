import { Component, OnInit } from "@angular/core";
import { Animal } from "../../../../common/tables/Animal";
import { Clinique } from "../../../../common/tables/Clinique";
import { TraitementEffectue } from '../../../../common/tables/TraitementEffectue';
import { CommunicationService } from "../communication.service";

@Component({
  selector: "app-traitement",
  templateUrl: "./traitement.component.html",
  styleUrls: ["./traitement.component.css"]
})
export class TraitementComponent implements OnInit {
  traitements: TraitementEffectue[];
  noClinique: string;
  noAnimal: string;

  public animaux: Animal[] = [];
  public cliniques: Clinique[] = [];
  
  public constructor(private communicationService:CommunicationService) {
    
   }

  public ngOnInit() {
    this.getCliniques();
    
    this.getTraitements();
  }

  public getCliniques(): void {
    this.communicationService.getCliniques().subscribe((cliniques: Clinique[]) =>{
      this.cliniques = cliniques;
    })
    this.noClinique = this.cliniques[0].noclinique;
    this.getAnimaux(this.noClinique);
  }

  public getAnimaux(noClinique:string): void {
    this.communicationService.getAnimaux(noClinique).subscribe((animaux: Animal[]) =>{
      this.animaux = animaux;
    })
    this.noAnimal = this.animaux[0].noanimal;
    this.getTraitements();
  }


  getTraitements():void {
    this.communicationService.getTraitements(this.noClinique,this.noAnimal).subscribe((traitements: TraitementEffectue[]) =>{
      this.traitements = traitements;
      console.log(traitements);
    })
  }

  public updateSelectedClinique(index: number): void {
    this.noClinique = this.cliniques[index].noclinique;
    this.getAnimaux(this.noClinique);
  }
  public updateSelectedAnimal(index: number): void {
    this.noAnimal = this.animaux[index].noanimal;
    this.getTraitements();
  }
}
