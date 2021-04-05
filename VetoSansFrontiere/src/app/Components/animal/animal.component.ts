import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/class/animal';

@Component({
  selector: 'animal-form',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  animal:Animal
  constructor() {
      this.animal = {} as Animal;
   }

  ngOnInit(): void {
  }

}
