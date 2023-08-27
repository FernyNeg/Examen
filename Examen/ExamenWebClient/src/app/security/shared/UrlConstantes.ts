import { environment } from "src/environments/environment";
const apiRuta: string = environment.ApiUrl;
export const UrlConstantes = {
  leerCiudadanos: apiRuta + "controller/ciudadano/leerCiudadanos",
  editarCiudadano: apiRuta + "controller/ciudadano/EditarCiudadano",
  borrarCiudadano: apiRuta + "controller/ciudadano/BorrarCiudadano",
  agregarCiudadano: apiRuta + "controller/ciudadano/AgregarCiudadano",
  leerCiudadanoPorId: apiRuta + "controller/ciudadano/LeerCiudadanoPorId",
  agregarDomicilio: apiRuta + "controller/domicilio/AgregarDomicilio",
  editarDomicilio: apiRuta + "controller/domicilio/EditarDomicilio",
  borrarDomicilio: apiRuta + "controller/domicilio/BorrarDomicilio",
  leerDomicilios: apiRuta + "controller/domicilio/leerDomicilios",
  leerDomicilioPorId: apiRuta + "controller/domicilio/LeerDomicilioPorId",
}