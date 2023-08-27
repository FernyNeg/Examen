package examen.ciuddomi.daoimpl;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import examen.ciuddomi.dao.CiudadanoDao;
import examen.ciuddomi.entity.Ciudadano;
import examen.ciuddomi.repository.CiudadanoRepository;

@Service
public class CiudadanoDaoImpl implements CiudadanoDao {
	private static final Logger log = LoggerFactory.getLogger(CiudadanoDaoImpl.class);

	@Autowired
	private CiudadanoRepository repo;

	@Override
	public Ciudadano agregarCiudadano(Ciudadano dom) {
		log.info("Se inicia eliminación de ciudadano");
		return repo.save(dom);
	}

	@Override
	public Ciudadano editarCiudadano(Ciudadano dom) {
		log.info("Se inicia eliminación de ciudadano");
		return repo.save(dom);
	}

	@Override
	public void borrarCiudadano(Ciudadano dom) {
		log.info("Se inicia eliminación de ciudadano");
		repo.deleteById(dom.getIdCiudadano());
	}

	@Override
	public List<Ciudadano> leerCiudadanos() {
		log.info("Se inicia eliminación de ciudadano");
		return repo.findAll();
	}

	@Override
	public Optional<Ciudadano> leerCiudadanoPorId(Long id) {
		log.info("Se inicia eliminación de ciudadano");
		return repo.findById(id);
	}

}
