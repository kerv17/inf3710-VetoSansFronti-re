import { Output,EventEmitter, Input } from '@angular/core';

import { Component } from '@angular/core';
import { Facture } from '../../../../common/tables/facture';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {
  @Output() isVisibleEvent = new EventEmitter<boolean>();
  @Input() noClinique:string;
  @Input() noExamen:string;
  @Output() factureEvent= new EventEmitter<Facture>();
  facture:Facture;
  paid:boolean=false;

  constructor(private communicationService:CommunicationService) { }
  moyens = ['credit','debit','comptant','interact','cheque'];
  payment:string = this.moyens[0];


  /*ngOnInit() {
    //this.isVisibleEvent.emit(false);
  }*/
  close():void{
    this.isVisibleEvent.emit(false);
  }

  genererFacture(paiementType:string ,isPaid:boolean){
    console.log(paiementType,isPaid);
    console.log((this.noClinique));
    console.log((this.noExamen));
    this.communicationService.generateFacture(this.noClinique,this.noExamen,paiementType,isPaid).subscribe((facture: Facture) =>{
      this.facture = facture;
      console.log(facture);
    })
    close();
    this.factureEvent.emit(this.facture);
  }

  setMoyen(index:number){
    this.payment = this.moyens[index];
  }
}
