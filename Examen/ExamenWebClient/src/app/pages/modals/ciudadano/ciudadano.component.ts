import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
    this.ConsultaPorIdService();

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
  EditaService() {
    this.service.EditarCiudadano(this.entrada.param).subscribe(response => {
      this.alertas.success("Se ha guardado el cambio");
      this.CerrarEvent();
    });
  }
  ConsultaPorIdService() {
    this.service.LeerCiudadanoPorId(this.entrada.param.id).subscribe(res => {
      this.entrada.param = res;
      this.GetDomicilioService();
    });
  }
  CreaService() {
    this.service.AgregarCiudadano(this.entrada.param).subscribe(res => {
      res.id != 0 ?
        this.guardadoCorrecto() :
        this.alertas.error("Algo salio mal", "Ha ocurrido un error en la accion de guardar");
    });
  }
  GetDomicilioService() {
    this.serviceDom.LeerDomiciolioList().subscribe(res => {
      this.domicilios = res;
      this.domicilios.forEach(d => {
        this.entrada.param.domiciliosList.forEach(selected => {
          if (selected.id === d.id) { d.checked = true }
        });
      });
    });
  }
  //#endregion

}
