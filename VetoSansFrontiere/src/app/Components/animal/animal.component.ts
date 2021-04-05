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
  animal:Animal
  proprietaires:Proprietaire[];
  constructor(private requestService:ServerRequestService) {
      this.animal = {
        nom: 'Tom',
        noAnimal: 3,
        noClinique: 1,
      } as Animal;
      this.proprietaires = [];
      for(let i = 0; i<5; i++){
        this.proprietaires.push({noClinque:1,noProprietaire:i,nom:['random'+i.toString()]} as Proprietaire)
      }
      requestService.basicGet().subscribe((response)=> {console.log(response);}, (error)=>{console.log(error)});
   }

  ngOnInit(): void {
    for (const prop of this.proprietaires){
      let a = document.createElement('option');
      a.value = prop.nom[0];
      a.innerText = prop.nom[0];
      document.getElementById('Proprietaire').appendChild(a);
      
    }
  }

  

}
