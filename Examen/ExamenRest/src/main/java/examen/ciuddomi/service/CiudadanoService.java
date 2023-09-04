package examen.ciuddomi.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import examen.ciuddomi.dao.CiudadanoDao;
import examen.ciuddomi.entity.ciudadano.Ciudadano;
import examen.ciuddomi.entity.ciudadano.dto.IidNombreEdadDTO;
import examen.ciuddomi.entity.models.ConsultaList;

@Service
public class CiudadanoService {
	private static final Logger log = LoggerFactory.getLogger(CiudadanoService.class);

	@Autowired
	private CiudadanoDao dao;

	public Ciudadano agregarCiudadano(Ciudadano dom) {
		log.info("Se procesa inserción de ciudadano");
		return dao.agregarCiudadano(dom);
	}

	public Ciudadano editarCiudadano(Ciudadano dom) {
		log.info("Se procesa edición de ciudadano");
		return dao.editarCiudadano(dom);
	}

	public void borrarCiudadano(Ciudadano dom) {
		log.info("Se procesa eliminación de ciudadano");
		dao.borrarCiudadano(dom);
	}

	public List<IidNombreEdadDTO> leerCiudadanosPorNombre(ConsultaList<Ciudadano> busqueda) {
		log.info("Se procesa consulta de ciudadanos");
		return dao.leerCiudadanosPorNombre(busqueda.getParam() == null ? "" : busqueda.getParam());
	}

	public Optional<Ciudadano> leerCiudadanoPorId(Long id) {
		log.info("Se procesa consulta de ciudadano por id");
		return dao.leerCiudadanoPorId(id);
	}

}
