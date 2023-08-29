import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Domicilio } from '../shared/models/Domicilio.model';
import { UrlConstantes } from '../shared/UrlConstantes';

@Injectable({
  providedIn: 'root'
})
export class DomiciolioService {
  constructor(private conexion: HttpClient) { }
  AgregarDomicilio(param: Domicilio) { return this.conexion.post<Domicilio>(UrlConstantes.agregarDomicilio, param); }
  EditarDomicilio(param: Domicilio) { return this.conexion.post<Domicilio>(UrlConstantes.editarDomicilio, param); }
  BorrarDomicilio(param: Domicilio) { return this.conexion.post<Domicilio>(UrlConstantes.borrarDomicilio, param); }
  LeerDomiciolioList() { return this.conexion.post<Domicilio[]>(UrlConstantes.leerDomicilios, null); }
  LeerDomicilioPorId(param: number) { return this.conexion.post<Domicilio>(UrlConstantes.leerDomicilioPorId, param); }
}