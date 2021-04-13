import { Veterinaire } from "./Veterinaire";

export interface Examen {
    noexamen:string;
    noanimal:string;
    noclinique:string;
    dateexamen:Date;
    heureexamen:Date;
    noveterinaire:string;
    description:string;
    Veterinaire:Veterinaire;
}