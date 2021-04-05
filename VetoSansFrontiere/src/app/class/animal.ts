export interface Animal {
  nom: string;
  noAnimal:number

  noClinique: number;
  noProprietaire: number;

  type: string;
  espece: string;
  description: string;

  poids: number;
  taille: number;

  dateNaissance: Date;
  dateInscription: Date;

  etatActuel: string;
}
