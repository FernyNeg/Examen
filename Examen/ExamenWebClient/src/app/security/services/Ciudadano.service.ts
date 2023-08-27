import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudadano } from '../shared/models/Ciudadano.model';
import { UrlConstantes } from '../shared/UrlConstantes';
import { ConsultaList } from '../shared/models/Base/ConsultaList.model';

@Injectable({
  providedIn: 'root'
})
export class CiudadanosService {
  constructor(private conexion: HttpClient) { }
  AgregarCiudadano(param: Ciudadano) { return this.conexion.post<Ciudadano>(UrlConstantes.agregarCiudadano, param); }
  EditarCiudadano(param: Ciudadano) { return this.conexion.post<Ciudadano>(UrlConstantes.editarCiudadano, param); }
  BorrarCiudadano(param: Ciudadano) { return this.conexion.post(UrlConstantes.borrarCiudadano, param); }
  LeerCiudadanosList() { return this.conexion.post<Ciudadano[]>(UrlConstantes.leerCiudadanos, null); }
  LeerCiudadanoPorId(param: number) { return this.conexion.post<Ciudadano>(UrlConstantes.leerCiudadanoPorId, param); }
}