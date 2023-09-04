import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Domicilio } from '../shared/models/Domicilio.model';
import { UrlConstantes } from '../shared/UrlConstantes';
import { ConsultaList } from '../shared/models/Base/ConsultaList.model';

@Injectable({
  providedIn: 'root'
})

export class DomiciolioService {
  constructor(private conexion: HttpClient) { }
  AgregarDomicilio(param: Domicilio) { return this.conexion.post<Domicilio>(UrlConstantes.agregarDomicilio, param); }
  EditarDomicilio(param: Domicilio) { return this.conexion.post<Domicilio>(UrlConstantes.editarDomicilio, param); }
  BorrarDomicilio(param: Domicilio) { return this.conexion.post(UrlConstantes.borrarDomicilio, param); }
  LeerDomiciolioList(param: ConsultaList<Domicilio>) { return this.conexion.post<Domicilio[]>(UrlConstantes.leerDomicilios, param); }
  LeerDomicilioPorId(param: number) { return this.conexion.post<Domicilio>(UrlConstantes.leerDomicilioPorId, param); }
}