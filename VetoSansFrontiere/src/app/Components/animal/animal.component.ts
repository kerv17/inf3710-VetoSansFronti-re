import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/class/animal';
import { Proprietaire } from 'src/app/class/proprietaire';
import { ServerRequestService } from 'src/app/Service/server-request-service.service';

@Component({
  selector: 'animal-form',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  animal:Animal = {noproprietaire: '0'} as Animal;
  proprietaires:Map<string,Proprietaire>;
  tofind: number[];
  constructor(private requestService:ServerRequestService) {
      this.proprietaires = new Map<string,Proprietaire>();
      for(let i = 0; i<5; i++){
        this.proprietaires.set(i.toString(),{noClinque:'1',noproprietaire:i.toString(),nom:['random'+i.toString()]} as Proprietaire)
      }

      this.tofind = [3,2];
      requestService.basicGet( ).subscribe((response)=> 
      {
        this.animal = response.body[0];
        //console.log(response)
      }, (error)=>{console.log(error)});


      
   }

  ngOnInit(): void {
    for (const prop of this.proprietaires.values()){
      let a = document.createElement('option');
      a.value = prop.noproprietaire.toString();
      a.innerText = prop.noproprietaire +": "+ prop.nom[0].toString();
      (<HTMLSelectElement>document.getElementById('animal-proprietaire')).options.add(a);
      
    }
    
    (<HTMLSelectElement>document.getElementById('animal-proprietaire')).selectedIndex = Number(this.animal.noproprietaire);
  }

  sendAnimalToDB(){
      this.animal.nom = (<HTMLInputElement>document.getElementById('animal-nom')).value;

      let p = (<HTMLSelectElement>document.getElementById('animal-proprietaire')).value;
      this.animal.noproprietaire = p;
      this.animal.type = (<HTMLInputElement>document.getElementById('animal-type')).value;
      this.animal.espece = (<HTMLInputElement>document.getElementById('animal-espece')).value;
      this.animal.description = (<HTMLInputElement>document.getElementById('animal-description')).value;
      this.animal.poids = Number((<HTMLInputElement>document.getElementById('animal-poids')).value);

      this.animal.etatactuel = (<HTMLInputElement>document.getElementById('animal-etatActuel')).value;
  }

}
