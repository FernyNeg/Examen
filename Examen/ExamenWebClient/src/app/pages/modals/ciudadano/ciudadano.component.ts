import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';

import { AlertasService } from 'src/app/security/services/Alertas.service';
import { CiudadanosService } from 'src/app/security/services/Ciudadano.service';
import { DomiciolioService } from 'src/app/security/services/Domicilio.service';
import { ModalType } from 'src/app/security/shared/models/Base/ModalType.model';
import { Ciudadano } from 'src/app/security/shared/models/Ciudadano.model';
import { Domicilio } from 'src/app/security/shared/models/Domicilio.model';
import { AccionesModal } from 'src/app/security/shared/models/enums/AccionesModal.enum';

@Component({
  selector: 'app-ciudadano',
  templateUrl: './ciudadano.component.html',
  styleUrls: ['./ciudadano.component.scss']
})
export class CiudadanoComponent implements OnInit {

  titulo = "";
  valor = false;
  focosArr: Array<Array<boolean>>;
  domicilios: Domicilio[] = [];

  //#region Inicios
  constructor(
    private dialog: MatDialogRef<CiudadanoComponent>,
    @Inject(MAT_DIALOG_DATA) public entrada: ModalType<Ciudadano>,
    private service: CiudadanosService,
    private serviceDom: DomiciolioService,
    private alertas: AlertasService
  ) { }
  ngOnInit() {
    this.validaAccion();
    this.inicioFocos();
    this.ConsultaInicialService();
  }
  private validaAccion() {
    if (this.entrada.accion === AccionesModal.editar) {
      this.titulo = "Edición de datos de ciudadano";
    } else {
      this.titulo = "Inserción de un nuevo ciudadano";
    }
  }
  private inicioFocos() {
    this.focosArr = [
      [false, false],
      [false, false],
      [false, false],
    ];
  }
  //#endregion

  //#region Metodos
  CombinaSeleccionados() {
    this.domicilios.forEach(d => {
      if (this.entrada.param.domiciliosList.find(domi => { return domi.id === d.id })) d.checked = true;
    });
  }
  async confirmaModicifacion() {
    let resp;
    await this.alertas.confirmacionAlert("Confirmación", "Se modificara el ciudadano actual", "Modificar", "Cancelar", async function (r) { resp = r });
    if (await resp.value) {
      this.EditaService();
    }
  }
  validaSeleccionadas() {
    this.entrada.param.domiciliosList = this.domicilios.filter(d => { if (d.checked === true) return d });
    this.entrada.accion === AccionesModal.crear ? this.CreaService() : this.confirmaModicifacion();
  }
  guardadoCorrecto() {
    this.alertas.success("Se ha guardado", "El domicilio se ha guardado correctamente");
    this.CerrarEvent();
  }
  //#endregion

  //#region Eventos
  GuarcaCiudadanoEvent() {
    this.validaSeleccionadas();
  }
  CerrarEvent() {
    this.dialog.close();
  }
  //#endregion

  //#region Services
  ConsultaInicialService() {
    forkJoin([
      this.service.LeerCiudadanoPorId(this.entrada.param.id),
      this.serviceDom.LeerDomiciolioList()]
    ).subscribe(res => {
      this.entrada.param = res[0];
      this.domicilios = res[1];
      this.CombinaSeleccionados();
    })
  }
  EditaService() {
    this.service.EditarCiudadano(this.entrada.param).subscribe(response => {
      this.alertas.success("Se ha guardado el cambio");
      this.CerrarEvent();
    });
  }
  CreaService() {
    this.service.AgregarCiudadano(this.entrada.param).subscribe(res => {
      res.id != 0 ?
        this.guardadoCorrecto() :
        this.alertas.error("Algo salio mal", "Ha ocurrido un error en la accion de guardar");
    });
  }
  //#endregion

}
