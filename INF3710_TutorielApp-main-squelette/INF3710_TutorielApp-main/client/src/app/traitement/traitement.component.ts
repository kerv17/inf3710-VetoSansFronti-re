import { Component, OnInit } from "@angular/core";
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

  public constructor(private communicationService:CommunicationService) {
    this.noClinique = '1';
    this.noAnimal = '1';
   }

  public ngOnInit() {
    this.getTraitements()
  }


  getTraitements():void {
    this.communicationService.getTraitements(this.noClinique,this.noAnimal).subscribe((traitements: TraitementEffectue[]) =>{
      this.traitements = traitements;
      console.log(traitements);
    })
  }
}
