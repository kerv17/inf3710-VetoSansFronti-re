import { Component, OnInit } from "@angular/core";
import { Animal } from "../../../../common/tables/Animal";
import { Clinique } from "../../../../common/tables/Clinique";
import { Facture } from '../../../../common/tables/facture';
import { Examen} from '../../../../common/tables/Examen';
import { CommunicationService } from "../communication.service";

@Component({
  selector: "app-facture",
  templateUrl: "./facture.component.html",
  styleUrls: ["./facture.component.css"]
})
export class FactureComponent implements OnInit {
  facture:Facture;
  displayFacture = false;
  noClinique: string;
  noAnimal: string;
  modalOpen = false;

  public animaux: Animal[] = [];
  public cliniques: Clinique[] = [];
  public examens: Examen[] = [];

  public noExamenAGenerer: string;
  public constructor(private communicationService:CommunicationService) { }

  public ngOnInit() {
      this.getCliniques();
  }

  public updateSelectedClinique(index: number): void {
    this.noClinique = this.cliniques[index].noclinique;
    this.getAnimaux(this.noClinique);
  }
  public updateSelectedAnimal(index: number): void {
    this.noAnimal = this.animaux[index].noanimal;
    this.getExamens();
    console.log(this.examens);
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
    this.getExamens();
  }

  getExamens():void {
    this.communicationService.getExamens(this.noClinique,this.noAnimal).subscribe((examens: Examen[]) =>{
      this.examens = examens;
      console.log(examens);
    })
  }

  showFacture(index:number){
    this.facture = this.examens[index].facture;

    this.displayFacture = true;
  }

  hideFacture(index:number){
    this.facture = this.examens[index].facture;
    this.displayFacture = false;
  }

  setFacture(facture:Facture){
    const examen = this.examens.find(element => element.noexamen === this.noExamenAGenerer) as Examen;
    examen.facture= facture;
  }
}
