package examen.ciuddomi.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import examen.ciuddomi.constantes.UrlConstantes;
import examen.ciuddomi.entity.ciudadano.Ciudadano;
import examen.ciuddomi.entity.ciudadano.dto.IidNombreEdadDTO;
import examen.ciuddomi.entity.models.ConsultaList;
import examen.ciuddomi.service.CiudadanoService;

@RestController
@RequestMapping("/controller/ciudadano")
public class CiudadanoController {
	private static final Logger log = LoggerFactory.getLogger(CiudadanoController.class);

	@Autowired
	private CiudadanoService service;

	@PostMapping(value = UrlConstantes.agregarCiudadano)
	@ResponseBody
	public Ciudadano agregarCiudadano(@RequestBody Ciudadano dom) {
		log.info("Se recibe inserción de ciudadano");
		return service.agregarCiudadano(dom);
	}

	@PostMapping(value = UrlConstantes.editarCiudadano)
	@ResponseBody
	public Ciudadano editarCiudadano(@RequestBody Ciudadano dom) {
		log.info("Se recibe edición de ciudadano");
		return service.editarCiudadano(dom);
	}

	@PostMapping(value = UrlConstantes.borrarCiudadano)
	public void borrarCiudadano(@RequestBody Ciudadano dom) {
		log.info("Se recibe eliminación de ciudadano");
		service.borrarCiudadano(dom);
	}

	@PostMapping(value = UrlConstantes.leerCiudadanos)
	@ResponseBody
	public List<IidNombreEdadDTO> leerCiudadanosPorNombre(@RequestBody ConsultaList<Ciudadano> busqueda) {
		log.info("Se recibe consulta de ciudadanos");
		return service.leerCiudadanosPorNombre(busqueda);
	}

	@PostMapping(value = UrlConstantes.leerCiudadanoPorId)
	@ResponseBody
	public Optional<Ciudadano> leerCiudadanoPorId(@RequestBody Long id) {
		log.info("Se recibe consulta de ciudadano por id");
		return service.leerCiudadanoPorId(id);
	}
}
