import { Component, OnInit } from "@angular/core";
import { TraitementEffectue } from '../../../../common/tables/TraitementEffectue';

@Component({
  selector: "app-traitement",
  templateUrl: "./traitement.component.html",
  styleUrls: ["./traitement.component.css"]
})
export class TraitementComponent implements OnInit {
  traitements: TraitementEffectue[];
  noClinique: string;
  noAnimal: string;

  public constructor() { }

  public ngOnInit() {
    this.getTraitements()
  }


  getTraitements():void {
      
  }
}
