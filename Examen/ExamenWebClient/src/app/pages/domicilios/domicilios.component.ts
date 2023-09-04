import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomiciolioService } from 'src/app/security/services/Domicilio.service';
import { ModalType } from 'src/app/security/shared/models/Base/ModalType.model';
import { Domicilio } from 'src/app/security/shared/models/Domicilio.model';
import { AccionesModal } from 'src/app/security/shared/models/enums/AccionesModal.enum';
import { DomicilioComponent } from '../modals/domicilio/domicilio.component';
import { AlertasService } from 'src/app/security/services/Alertas.service';
import { ConsultaList } from 'src/app/security/shared/models/Base/ConsultaList.model';

@Component({
  selector: 'app-domicilios',
  templateUrl: './domicilios.component.html',
  styleUrls: ['./domicilios.component.scss']
})
export class DomiciliosComponent implements OnInit {
  //#region Inicios

  busqueda: ConsultaList<Domicilio> = new ConsultaList<Domicilio>();

  constructor(
    private service: DomiciolioService,
    private dialog: MatDialog,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    this.ConsultaService();
  }
  //#endregion

  //#region Eventos
  UpdateDomicilioEvent(d: Domicilio) {
    this.openDialog(d, AccionesModal.editar);
  }
  AgregarDomicilioEvent() {
    this.openDialog(new Domicilio, AccionesModal.crear);
  }
  DeleteDomicilioEvent(d: Domicilio) {
    this.ConfirmaEliminacion(d);
  }
  BuscarPorNombreEvent() {
    this.ConsultaService();
  }
  //#endregion

  //#region Metodos
  openDialog(d: Domicilio, accion: AccionesModal) {
    let env: ModalType<Domicilio> = new ModalType<Domicilio>();
    env.param = d;
    env.accion = accion;
    let dialogRef = this.dialog.open(DomicilioComponent, {
      panelClass: 'custom-modalbox',
      maxHeight: '80vh',
      maxWidth: '50vw',
      disableClose: true,
      data: env
    });
    dialogRef.afterClosed().subscribe(res => { this.ConsultaService(); });
  }
  async ConfirmaEliminacion(d: Domicilio) {
    let confirmacion;
    await this.alertas.confirmacionAlert("Alerta", "Seguro que desea eliminar este domicilio", "Eliminar", "cancelar", async function (res) { confirmacion = res; })
    if (await confirmacion.value) {
      this.DeleteDomicilioService(d);
    }
  }
  //#endregion

  //#region Servicios
  ConsultaService() {
    this.service.LeerDomiciolioList(this.busqueda).subscribe(res => {
      this.busqueda.list = res;
    });
  }
  DeleteDomicilioService(d) {
    this.service.BorrarDomicilio(d).subscribe(() => {
      this.alertas.success(null, "Se ha eliminado correctamente el registro");
      this.ConsultaService();
    });
  }
  //#endregion

}
