import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animal } from '../../../../common/tables/Animal';
import { Clinique } from '../../../../common/tables/Clinique';
import { CommunicationService } from '../communication.service';
import { Proprietaire } from '../../../../common/tables/proprietaire';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  @ViewChild("newAnimalNumber") newAnimalNumber: ElementRef;
  @ViewChild("newAnimalProprietaireNumber") newAnimalProprietaireNumber: ElementRef;
  @ViewChild("newAnimalNom") newAnimalNom: ElementRef;
  @ViewChild("newAnimalType") newAnimalType: ElementRef;
  @ViewChild("newAnimalTaille") newAnimalTaille: ElementRef;
  @ViewChild("newAnimalPoids") newAnimalPoids: ElementRef;
  @ViewChild("newAnimalDateNaissance") newAnimalDateNaissance: ElementRef;
  @ViewChild("newAnimalEspece") newAnimalEspece: ElementRef;
  @ViewChild("newAnimalDescrpition") newAnimalDescrpition: ElementRef;
  @ViewChild("newAnimalDateInscription") newAnimalDateInscription: ElementRef;
  @ViewChild("newAnimalEtat") newAnimalEtat: ElementRef;

  public animaux: Animal[] = [];
  public cliniques: Clinique[] = [];
  public proprietaires: Proprietaire[] = [];

  noms = ['tom','jerry','al','bob','thomas']

  public duplicateError: boolean =false;
  constructor(private communicationService: CommunicationService) { }
  
  ngOnInit() {
      this.refresh();
  }
  noClinique = '';

  createFakeDb(){
    for( let i = 0; i < 5; i++){
      this.proprietaires.push({nom: this.noms[i]} as Proprietaire)
    }
    for( let i = 0; i < 5; i++){
      this.animaux.push({nom: i.toString()} as Animal)
    }
  }

  public getAnimaux(noClinique:string): void {
    this.communicationService.getAnimaux(noClinique).subscribe((animaux: Animal[]) =>{
      this.animaux = animaux;
    })
  }

  public getCliniques(): void {
    this.communicationService.getCliniques().subscribe((cliniques: Clinique[]) =>{
      this.cliniques = cliniques;
    })
  }

  public getProprietaires(): void {
    this.communicationService.getProprietaires().subscribe((proprietaires: Proprietaire[]) =>{
      this.proprietaires = proprietaires;
    })
  }


  public updateSelectedClinique(index: number): void {
      this.noClinique = this.cliniques[index].noclinique;
      this.refresh();
  }

  public refresh(){
    this.getAnimaux(this.noClinique);
    this.getCliniques();
    this.getProprietaires();
  }


  public updateOwner(animal:number, proprietaire: number){
      this.animaux[animal].noproprietaire = this.proprietaires[proprietaire].noproprietaire;
  }

  public insertAnimal(){
      const animal:Animal = {
        noclinique: this.noClinique,
        noanimal: this.newAnimalNumber.nativeElement.innerText,
        noproprietaire: this.proprietaires[this.nouveauProprietaireIndex].noproprietaire,
        nom: this.newAnimalNom.nativeElement.innerText,
        type: this.newAnimalType.nativeElement.innerText,
        espece: this.newAnimalEspece.nativeElement.innerText,
        taille: this.newAnimalTaille.nativeElement.innerText,
        poids: this.newAnimalPoids.nativeElement.innerText,
        description: this.newAnimalDescrpition.nativeElement.innerText,
        datenaissance: this.newAnimalDateNaissance.nativeElement.innerText,
        dateinscription: this.newAnimalDateInscription.nativeElement.innerText,
        etatactuel: this.newAnimalEtat.nativeElement.innerText
      }

      this.communicationService.insertAnimal(animal).subscribe((res: number) => {
        this.refresh();
      });
  }
  
  nouveauProprietaireIndex: number;
  public newOwner(i:number){
    this.nouveauProprietaireIndex = i;
  }

  public updateAnimal(i: number) {
    this.communicationService
      .updateAnimal(this.animaux[i])
      .subscribe((res: any) => {
        this.refresh();
      });
  }

  public deleteAnimal(noClinique: string, noAnimal: string) {
    this.communicationService
      .deleteAnimal(noClinique, noAnimal)
      .subscribe((res: any) => {
        this.refresh();
      });
  }


  public changeAnimalName(event: any, i: number) {
    const editField = event.target.textContent;
    this.animaux[i].nom = editField;
  }

  public changeAnimalType(event: any, i: number) {
    const editField = event.target.textContent;
    this.animaux[i].type = editField;
  }

  public changeAnimalTaille(event: any, i: number) {
    const editField = event.target.textContent;
    this.animaux[i].taille = editField;
  }

  public changeAnimalPoids(event: any, i: number) {
    const editField = event.target.textContent;
    this.animaux[i].poids = editField;
  }
  public changeAnimalDescription(event: any, i: number) {
    const editField = event.target.textContent;
    this.animaux[i].description = editField;
  }
  public changeAnimalState(event: any, i: number) {
    const editField = event.target.textContent;
    this.animaux[i].etatactuel = editField;
  }
  public changeAnimalEspece(event: any, i: number) {
    const editField = event.target.textContent;
    this.animaux[i].espece = editField;
  }
}
