import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CiudadanosService } from 'src/app/security/services/Ciudadano.service';
import { ModalType } from 'src/app/security/shared/models/Base/ModalType.model';
import { Ciudadano } from 'src/app/security/shared/models/Ciudadano.model';
import { AccionesModal } from 'src/app/security/shared/models/enums/AccionesModal.enum';
import { CiudadanoComponent } from '../../components/modals/ciudadanos/ciudadano.component';

@Component({
  selector: 'app-ciudadanos',
  templateUrl: './ciudadanos.component.html',
  styleUrls: ['./ciudadanos.component.scss']
})
export class CiudadanosComponent implements OnInit {

  //#region Inicio
  ciudadanos: Ciudadano[] = [];
  constructor(
    private service: CiudadanosService,
    private dialog: MatDialog,
  ) { }
  ngOnInit() {
    this.ConsultaIniService();
  }
  //#endregion

  //#region Eventos
  UpdateCiudadanoEvent(c: Ciudadano) {
    this.openDialog(c, AccionesModal.editar);
  }
  AgregarCiudadanoEvent() {
    this.openDialog(new Ciudadano, AccionesModal.crear);
  }
  //#endregion

  //#region Metodos
  private openDialog(c: Ciudadano, accion: AccionesModal) {
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
    dialogRef.afterClosed().subscribe(() => { this.ConsultaIniService(); });
  }
  //#endregion

  //#region Servicios
  private ConsultaIniService() {
    this.service.LeerCiudadanosList().subscribe(res => {
      this.ciudadanos = res;
      console.log(this.ciudadanos, " ciudadanos");
    });
  }
  //#endregion

}
