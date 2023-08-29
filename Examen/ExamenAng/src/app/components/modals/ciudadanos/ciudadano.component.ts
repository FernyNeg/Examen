import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlertasService } from 'src/app/security/services/Alertas.service';
import { CiudadanosService } from 'src/app/security/services/Ciudadano.service';
import { ModalType } from 'src/app/security/shared/models/Base/ModalType.model';
import { Ciudadano } from 'src/app/security/shared/models/Ciudadano.model';
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

  //#region Inicios
  constructor(
    private dialog: MatDialogRef<CiudadanoComponent>,
    @Inject(MAT_DIALOG_DATA) public entrada: ModalType<Ciudadano>,
    private service: CiudadanosService,
    private alertas: AlertasService
  ) { }
  ngOnInit() {
    this.validaAccion();
    this.inicioFocos();
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

  //#region Eventos
  GuarcaCiudadanoEvent() {
    this.entrada.accion === AccionesModal.crear ? this.CreaService() : this.EditaService();
  }
  CerrarEvent() {
    this.dialog.close();
  }
  //#endregion

  //#region Services
  async EditaService() {
    let resp;
    await this.alertas.confirmacionAlert("Confirmación", "Se modificara el ciudadano actual","Modificar","Cancelar", async function (r) { resp = r });
    if (await resp.value) {
      this.service.EditarCiudadano(this.entrada.param).subscribe(response => {
        this.alertas.success("Se ha guardado");
        this.CerrarEvent();
      });
    }
  }
  CreaService() {
    this.service.AgregarCiudadano(this.entrada.param).subscribe(res => {
      res.idCiudadano != 0 ?
        this.alertas.success("Se ha guardado", "El ciudadano se ha guardado correctamente") :
        this.alertas.error("Algo salio mal", "Ha ocurrido un error en la accion de guardar");
    });
  }
  //#endregion

}
