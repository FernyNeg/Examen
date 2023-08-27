package examen.ciuddomi.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import examen.ciuddomi.constantes.UrlConstantes;
import examen.ciuddomi.entity.Domicilio;
import examen.ciuddomi.service.DomicilioService;

@RestController
@RequestMapping("/controller/domicilio")
public class DomicilioController {

	@Autowired
	private DomicilioService service;

	@PostMapping(value = UrlConstantes.agregarDomicilio)
	@ResponseBody
	public Domicilio agregarDomicilio(@RequestBody Domicilio dom) {
		return service.agregarDomicilio(dom);
	}

	@PostMapping(value = UrlConstantes.editarDomicilio)
	@ResponseBody
	public Domicilio editarDomicilio(@RequestBody Domicilio dom) {
		return editarDomicilio(dom);
	}

	@PostMapping(value = UrlConstantes.borrarDomicilio)
	@ResponseBody
	public void borrarDomicilio(@RequestBody Domicilio dom) {
		service.borrarDomicilio(dom);
	}

	@PostMapping(value = UrlConstantes.leerDomicilios)
	@ResponseBody
	public List<Domicilio> leerDomicilios() {
		return service.leerDomicilios();
	}

	@PostMapping(value = UrlConstantes.leerDomicilioPorId)
	@ResponseBody
	public Optional<Domicilio> leerDomicilioPorId(@RequestBody Long id) {
		return service.leerDomicilioPorId(id);
	}
}
