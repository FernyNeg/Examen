import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlertasService } from 'src/app/security/services/Alertas.service';
import { DomiciolioService } from 'src/app/security/services/Domicilio.service';
import { ModalType } from 'src/app/security/shared/models/Base/ModalType.model';
import { Domicilio } from 'src/app/security/shared/models/Domicilio.model';
import { AccionesModal } from 'src/app/security/shared/models/enums/AccionesModal.enum';

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.scss']
})
export class DomicilioComponent implements OnInit {

  titulo = "";
  valor = false;
  focosArr: Array<Array<boolean>>;

  //#region Inicios
  constructor(
    private dialog: MatDialogRef<DomicilioComponent>,
    @Inject(MAT_DIALOG_DATA) public entrada: ModalType<Domicilio>,
    private service: DomiciolioService,
    private alertas: AlertasService
  ) { }
  ngOnInit() {
    this.validaAccion();
    this.inicioFocos();
  }
  private validaAccion() {
    if (this.entrada.accion === AccionesModal.editar) {
      this.titulo = "Edición de datos del domicilio";
    } else {
      this.titulo = "Inserción de un nuevo domicilio";
    }
  }
  private inicioFocos() {
    this.focosArr = [
      [false, false],
      [false, false],
      [false, false],
      [false, false],
    ];
  }
  //#endregion

  //#region Eventos
  GuarcaDomicilioEvent() {
    this.entrada.accion === AccionesModal.crear ? this.CreaService() : this.EditaService();
  }
  CerrarEvent() {
    this.dialog.close();
  }
  //#endregion

  //#region Services
  async EditaService() {
    let resp;
    await this.alertas.confirmacionAlert("Confirmación", "Se modificara el domicilio actual", "Modificar", "Cancelar", async function (r) { resp = r });
    console.log(await resp.value);
    if (await resp.value) {
      this.service.EditarDomicilio(this.entrada.param).subscribe(response => {
        this.alertas.success("Se ha guardado el cambio");
        this.CerrarEvent();
      });
    }
  }
  CreaService() {
    this.service.AgregarDomicilio(this.entrada.param).subscribe(res => {
      res.id != 0 ?
        this.alertas.success("Se ha guardado", "El domicilio se ha guardado correctamente") :
        this.alertas.error("Algo salio mal", "Ha ocurrido un error en la accion de guardar");
    });
  }
  //#endregion

}
