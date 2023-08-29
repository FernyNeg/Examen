import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertasService {
  private toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer:8000
  });

  private confirmacion = Swal.mixin({
    icon: 'question',
    buttonsStyling: false,
    showConfirmButton: true,
    showCancelButton: true,
    reverseButtons: true,
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    }
  })

  info(titulo?: string, msg?: string) {
    this.toast.fire({
      title: titulo ? titulo : "Información",
      text: msg ? msg : "",
      icon: 'info',
    });
  }

  warning(titulo?: string, msg?: string) {
    this.toast.fire({
      title: titulo ? titulo : "Advertencia",
      text: msg ? msg : "",
      icon: 'warning',
    });
  }

  success(titulo?: string, msg?: string) {
    this.toast.fire({
      title: titulo ? titulo : "Tarea completa",
      text: msg ? msg : "Actividad completada con exito",
      icon: 'success',
    });
  }

  error(titulo?: string, msg?: string) {
    this.toast.fire({
      title: titulo ? titulo : "Error",
      text: msg ? msg : "Ha ocurrido un error en la tarea",
      icon: 'error',
    });
  }

  async confirmacionAlert(titulo: string, msg: string, confirmText:string,cancelText:string, callback) {
    const res = await this.confirmacion.fire({
      title: titulo ? titulo : '¿Esta seguro de realizar esta accion?',
      text: msg ? msg : "¡No puede deshacer esta acción!",
      confirmButtonText: confirmText?confirmText:'Eliminar',
      cancelButtonText:  cancelText?cancelText:'Cancelar',
    }).then(env => {
      callback(env);
    });
  }

}