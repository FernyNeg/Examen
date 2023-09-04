import { Ciudadano } from "./Ciudadano.model";

export class Domicilio {
  id: number;
  ciudad: string;
  pais: string;
  codPostal: string;
  direccion: string;
  activo: boolean = false;
  ciudadanos: Ciudadano[] = [];
}