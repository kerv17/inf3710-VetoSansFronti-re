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
  animal:Animal = {} as Animal;
  proprietaires:Proprietaire[];
  constructor(private requestService:ServerRequestService) {
      this.proprietaires = [];
      for(let i = 0; i<5; i++){
        this.proprietaires.push({noClinque:'1',noProprietaire:i.toString(),nom:['random'+i.toString()]} as Proprietaire)
      }
      requestService.basicGet().subscribe((response)=> 
      {
        this.animal = response.body[0];
        console.log(response);
      }, (error)=>{console.log(error)});


      
   }

  ngOnInit(): void {
    for (const prop of this.proprietaires){
      let a = document.createElement('option');
      a.value = prop.noProprietaire.toString();
      console.log(a.value);
      a.innerText = prop.nom[0];
      (<HTMLSelectElement>document.getElementById('animal-proprietaire')).options.add(a);
      
    }
    
    (<HTMLSelectElement>document.getElementById('animal-proprietaire')).value = this.animal.noProprietaire;
  }

  sendAnimalToDB(){
      this.animal.nom = (<HTMLInputElement>document.getElementById('animal-nom')).value;
      this.animal.noProprietaire = (<HTMLSelectElement>document.getElementById('animal-proprietaire')).value;
      this.animal.type = (<HTMLInputElement>document.getElementById('animal-type')).value;
      this.animal.espece = (<HTMLInputElement>document.getElementById('animal-espece')).value;
      this.animal.description = (<HTMLInputElement>document.getElementById('animal-description')).value;
      this.animal.poids = Number((<HTMLInputElement>document.getElementById('animal-poids')).value);

      this.animal.etatactuel = (<HTMLInputElement>document.getElementById('animal-etatActuel')).value;


      console.log(this.animal);
  }

}
