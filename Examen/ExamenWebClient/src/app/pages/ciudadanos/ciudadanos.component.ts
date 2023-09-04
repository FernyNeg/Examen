import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CiudadanosService } from 'src/app/security/services/Ciudadano.service';
import { Ciudadano } from 'src/app/security/shared/models/Ciudadano.model';
import { CiudadanoComponent } from '../modals/ciudadano/ciudadano.component';
import { ModalType } from 'src/app/security/shared/models/Base/ModalType.model';
import { AccionesModal } from 'src/app/security/shared/models/enums/AccionesModal.enum';
import { AlertasService } from 'src/app/security/services/Alertas.service';
import { ConsultaList } from 'src/app/security/shared/models/Base/ConsultaList.model';

@Component({
  selector: 'app-ciudadanos',
  templateUrl: './ciudadanos.component.html',
  styleUrls: ['./ciudadanos.component.scss']
})
export class CiudadanosComponent implements OnInit {
  //#region Inicios

  busqueda: ConsultaList<Ciudadano> = new ConsultaList<Ciudadano>();

  constructor(
    private service: CiudadanosService,
    private dialog: MatDialog,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    this.ConsultaService();
  }
  //#endregion

  //#region Eventos
  UpdateCiudadanoEvent(c: Ciudadano) {
    this.openDialog(c, AccionesModal.editar);
  }
  AgregarCiudadanoEvent() {
    this.openDialog(new Ciudadano, AccionesModal.crear);
  }
  DeleteCiudadanoEvent(c: Ciudadano) {
    this.ConfirmaEliminacion(c);
  }
  BuscarPorNombreEvent() {
    this.ConsultaService();
  }
  //#endregion

  //#region Metodos
  openDialog(c: Ciudadano, accion: AccionesModal) {
    let env: ModalType<Ciudadano> = new ModalType<Ciudadano>();
    env.param = c;
    env.accion = accion;
    let dialogRef = this.dialog.open(CiudadanoComponent, {
      panelClass: 'custom-modalbox',
      maxHeight: '80vh',
      maxWidth: '50vw',
      disableClose: true,
      data: env
    });
    dialogRef.afterClosed().subscribe(res => { this.ConsultaService(); });
  }
  async ConfirmaEliminacion(c: Ciudadano) {
    let confirmacion;
    await this.alerta.confirmacionAlert("Alerta", "¿Seguro que desea eliminar este registro?", "Eliminar", "Cancelar", async function (res) { confirmacion = res; });
    if (await confirmacion.value) {
      this.DeleteCiudadanoService(c)
    }
  }
  //#endregion

  //#region Servicios
  ConsultaService() {
    this.service.LeerCiudadanosList(this.busqueda).subscribe(res => {
      this.busqueda.list = res;
    });
  }
  DeleteCiudadanoService(c: Ciudadano) {
    this.service.BorrarCiudadano(c).subscribe(() => {
      this.alerta.success(null, "Se ha eliminado correctamente el registro");
      this.ConsultaService();
    });
  }
  //#endregion

}
