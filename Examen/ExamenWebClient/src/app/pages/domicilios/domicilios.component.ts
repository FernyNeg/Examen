import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomiciolioService } from 'src/app/security/services/Domicilio.service';
import { ModalType } from 'src/app/security/shared/models/Base/ModalType.model';
import { Domicilio } from 'src/app/security/shared/models/Domicilio.model';
import { AccionesModal } from 'src/app/security/shared/models/enums/AccionesModal.enum';
import { DomicilioComponent } from '../modals/domicilio/domicilio.component';

@Component({
  selector: 'app-domicilios',
  templateUrl: './domicilios.component.html',
  styleUrls: ['./domicilios.component.scss']
})
export class DomiciliosComponent implements OnInit {
  //#region Inicios

  respuesta: Domicilio[] = [];

  constructor(
    private service: DomiciolioService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.ConsultaService();
  }
  //#endregion

  //#region Eventos
  UpdateDomicilioEvent(c: Domicilio) {
    console.log(c);
    this.openDialog(c, AccionesModal.editar);
  }
  AgregarDomicilioEvent() {
    this.openDialog(new Domicilio, AccionesModal.crear);
  }
  //#endregion

  //#region Metodos
  openDialog(c: Domicilio, accion: AccionesModal) {
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
    dialogRef.afterClosed().subscribe(res => { this.ConsultaService(); });
  }
  //#endregion

  //#region Servicios
  ConsultaService() {
    this.service.LeerDomiciolioList().subscribe(res => {
      this.respuesta = res;
      console.log(this.respuesta);
    });
  }
  //#endregion

}
