import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Clinique } from '../../../../common/tables/Clinique'

@Component({
  selector: 'app-clinique',
  templateUrl: './clinique.component.html',
  styleUrls: ['./clinique.component.css']
})
export class CliniqueComponent implements OnInit {

  constructor(private communicationService: CommunicationService) { }
  @ViewChild("newCliniqueNumber") newCliniqueNumber: ElementRef;
  @ViewChild("newCliniqueName") newCliniqueName: ElementRef;
  @ViewChild("newCliniqueStreet") newCliniqueStreet: ElementRef;
  @ViewChild("newCliniqueCity") newCliniqueCity: ElementRef;
  @ViewChild("newCliniqueProvince") newCliniqueProvince: ElementRef;
  @ViewChild("newCliniquepostal") newCliniquepostal: ElementRef;
  @ViewChild("newCliniquePhone") newCliniquePhone: ElementRef;
  @ViewChild("newCliniqueFax") newCliniqueFax: ElementRef;



  public cliniques: Clinique[] = [];
  public duplicateError: boolean = false;
  ngOnInit() {
    
  }


  public getCliniques(): void {
    this.communicationService.getCliniques().subscribe((cliniques: Clinique[]) => {
      this.cliniques = cliniques;
    });
  }

  public insertClinique(): void {
    const clinique: Clinique = {
      noclinique: this.newCliniqueNumber.nativeElement.innerText,
      nom: this.newCliniqueName.nativeElement.innerText,
      rue: this.newCliniqueStreet.nativeElement.innerText,
      ville: this.newCliniqueCity.nativeElement.innerText,
      province: this.newCliniqueProvince.nativeElement.innerText,
      codepostal: this.newCliniquepostal.nativeElement.innerText,
      numtelephone: this.newCliniquePhone.nativeElement.innerText,
      numtelecopieur: this.newCliniqueFax.nativeElement.innerText,
    };

    this.communicationService.insertClinique(clinique).subscribe((res: number) => {
      if (res > 0) {
        this.communicationService.filter("update");
      }
      this.refresh();
      this.duplicateError = res === -1;
    });
  }

  private refresh() {
    this.getCliniques();
    this.newCliniqueNumber.nativeElement.innerText = "";
    this.newCliniqueName.nativeElement.innerText = "";
    this.newCliniqueStreet.nativeElement.innerText = "";
    this.newCliniqueCity.nativeElement.innerText = "";
    this.newCliniqueProvince.nativeElement.innerText = "";
    this.newCliniquepostal.nativeElement.innerText = "";
    this.newCliniquePhone.nativeElement.innerText = "";
    this.newCliniqueFax.nativeElement.innerText = "";
  }

  public deleteClinique(cliniqueNb: string) {
    this.communicationService.deleteClinique(cliniqueNb).subscribe((res: any) => {
      this.refresh();
    });
  }

  public changeCliniqueName(event: any, i:number){
    const editField = event.target.textContent;
    this.cliniques[i].nom = editField;
  }

  public changeCliniqueStreet(event: any, i:number){
    const editField = event.target.textContent;
    this.cliniques[i].ville = editField;
  }

  public changeCliniqueCity(event: any, i:number){
    const editField = event.target.textContent;
    this.cliniques[i].ville = editField;
  }

  public changeCliniqueProvince(event: any, i:number){
    const editField = event.target.textContent;
    this.cliniques[i].province = editField;
  }

  public changeCliniquePostal(event: any, i:number){
    const editField = event.target.textContent;
    this.cliniques[i].codepostal = editField;
  }

  public changeCliniquePhone(event: any, i:number){
    const editField = event.target.textContent;
    this.cliniques[i].numtelephone = editField;
  }

  public changeCliniqueFax(event: any, i:number){
    const editField = event.target.textContent;
    this.cliniques[i].numtelecopieur = editField;
  }

}
