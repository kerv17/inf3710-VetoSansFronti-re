import { Output,EventEmitter, Input } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { Facture } from '../../../../common/tables/facture';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() isVisibleEvent = new EventEmitter<boolean>();
  @Input() noClinique:string;
  @Input() noExamen:string;
  @Output() facture: Facture;
  paid:boolean;
  
  constructor(private communicationService:CommunicationService) { }
  moyens = ['credit','debit','comptant','interact','cheque'];
  payment:string = this.moyens[0];
  

  ngOnInit() {
    this.isVisibleEvent.emit(false);
  }
  close():void{
    this.isVisibleEvent.emit(false);
  }

  genererFacture(paiementType:string ,isPaid:boolean){
    console.log(paiementType,isPaid);
    this.communicationService.generateFacture(this.noClinique,this.noExamen,paiementType,isPaid).subscribe((facture: Facture) =>{
      this.facture = facture;
    })
    close();
  }

  setMoyen(index:number){
    this.payment = this.moyens[index];
  }
}
