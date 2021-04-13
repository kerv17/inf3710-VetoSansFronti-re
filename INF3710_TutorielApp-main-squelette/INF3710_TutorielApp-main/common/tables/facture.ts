import {TraitementEffectue}from "./TraitementEffectue"
import {Animal} from './Animal'
import {Proprietaire} from './Proprietaire'
import {Veterinaire} from './Veterinaire'
export interface Facture {

    noFacture:number;
    noexamen:string;
    noclinique:string;
    moyenpaiement:string;
    date:Date;
    couttotal:number;
    estpaye:boolean;
    traitements:TraitementEffectue[];
    animal:Animal;
    proprietaire:Proprietaire;
    veterinaire:Veterinaire;

    
    
    }