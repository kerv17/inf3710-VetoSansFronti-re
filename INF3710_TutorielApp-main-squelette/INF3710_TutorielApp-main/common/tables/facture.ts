import {TraitementEffectue}from "./TraitementEffectue"

export interface Facture {

    noFacture:number;
    noexamen:string;
    noclinique:string;
    moyenpaiement:string;
    date:Date;
    couttotal:number;
    estpaye:boolean;
    traitements:TraitementEffectue[];
    
    
    }