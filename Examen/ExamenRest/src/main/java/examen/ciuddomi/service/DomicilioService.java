package examen.ciuddomi.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import examen.ciuddomi.dao.DomicilioDao;
import examen.ciuddomi.entity.domicilio.Domicilio;
import examen.ciuddomi.entity.domicilio.dto.IidCiudadDireccionDTO;
import examen.ciuddomi.entity.models.ConsultaList;

@Service
public class DomicilioService {
	private static final Logger log = LoggerFactory.getLogger(DomicilioService.class);

	@Autowired
	private DomicilioDao dao;

	public Domicilio agregarDomicilio(Domicilio dom) {
		log.info("Se proces inserción de domicilio");
		return dao.agregarDomicilio(dom);
	}

	public Domicilio editarDomicilio(Domicilio dom) {
		log.info("Se procesa edición de domicilio");
		return dao.editarDomicilio(dom);
	}

	public void borrarDomicilio(Domicilio dom) {
		log.info("Se procesa eliminación de domicilio");
		dao.borrarDomicilio(dom);
	}

	public List<IidCiudadDireccionDTO> leerDomiciliosPorDireccion(ConsultaList<Domicilio> busqueda) {
		log.info("Se procesa consulta de domicilios");
		return dao.leerDomiciliosPorDireccion(busqueda.getParam() == null ? "" : busqueda.getParam());
	}

	public Optional<Domicilio> leerDomicilioPorId(Long id) {
		log.info("Se procesa consulta de domicilio por id");
		return dao.leerDomicilioPorId(id);
	}
}
