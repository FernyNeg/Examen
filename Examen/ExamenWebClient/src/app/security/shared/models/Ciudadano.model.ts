import { Domicilio } from "./Domicilio.model";

export class Ciudadano {
  id: number;
  nombre: string;
  aPaterno: string;
  aMaterno: string;
  edad: string;
  domiciliosList: Domicilio[] = [];
}