import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomiciolioService } from 'src/app/security/services/Domicilio.service';
import { ModalType } from 'src/app/security/shared/models/Base/ModalType.model';
import { Domicilio } from 'src/app/security/shared/models/Domicilio.model';
import { AccionesModal } from 'src/app/security/shared/models/enums/AccionesModal.enum';
import { DomicilioComponent } from '../../components/modals/domicilio/domicilio.component';

@Component({
  selector: 'app-domicilios',
  templateUrl: './domicilios.component.html',
  styleUrls: ['./domicilios.component.scss']
})
export class DomiciliosComponent implements OnInit {

  //#region Inicio
  Domicilios: Domicilio[] = [];
  constructor(
    private service: DomiciolioService,
    private dialog: MatDialog,
  ) { }
  ngOnInit() {
    this.ConsultaIniService();
  }
  //#endregion

  //#region Eventos
  UpdateDomicilioEvent(c: Domicilio) {
    this.openDialog(c, AccionesModal.editar);
  }
  AgregarDomicilioEvent() {
    this.openDialog(new Domicilio, AccionesModal.crear);
  }
  //#endregion

  //#region Metodos
  private openDialog(c: Domicilio, accion: AccionesModal) {
    var env: ModalType<Domicilio> = new ModalType<Domicilio>();
    env.param = c;
    env.accion = accion;
    let dialogRef = this.dialog.open(DomicilioComponent, {
      panelClass: 'custom-modalbox',
      maxHeight: '80vh',
      maxWidth: '50vw',
      disableClose: true,
      data: env
    });
    dialogRef.afterClosed().subscribe(() => { this.ConsultaIniService(); });
  }
  //#endregion

  //#region Servicios
  private ConsultaIniService() {
    this.service.LeerDomiciolioList().subscribe(res => {
      this.Domicilios = res;
      console.log(this.Domicilios, " Domicilios");
    });
  }
}
