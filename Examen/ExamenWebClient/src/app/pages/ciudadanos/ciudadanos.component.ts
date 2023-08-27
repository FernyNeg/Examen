import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CiudadanosService } from 'src/app/security/services/Ciudadano.service';
import { Ciudadano } from 'src/app/security/shared/models/Ciudadano.model';
import { CiudadanoComponent } from '../modals/ciudadanos/ciudadano.component';
import { ModalType } from 'src/app/security/shared/models/Base/ModalType.model';
import { AccionesModal } from 'src/app/security/shared/models/enums/AccionesModal.enum';

@Component({
  selector: 'app-ciudadanos',
  templateUrl: './ciudadanos.component.html',
  styleUrls: ['./ciudadanos.component.scss']
})
export class CiudadanosComponent implements OnInit {
  //#region Inicios

  lista: Ciudadano[] = [];

  constructor(
    private service: CiudadanosService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.ConsultaService();
  }
  //#endregion

  //#region Eventos
  UpdateCiudadanoEvent(c: Ciudadano) {
    console.log(c);
    this.openDialog(c, AccionesModal.editar);
  }
  AgregarCiudadanoEvent() {
    this.openDialog(new Ciudadano, AccionesModal.crear);
  }
  //#endregion

  //#region Metodos
  openDialog(c: Ciudadano, accion: AccionesModal) {
    var env: ModalType<Ciudadano> = new ModalType<Ciudadano>();
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
  //#endregion

  //#region Servicios
  ConsultaService() {
    this.service.LeerCiudadanosList().subscribe(res => {
      this.lista = res;
    });
  }
  //#endregion

}
