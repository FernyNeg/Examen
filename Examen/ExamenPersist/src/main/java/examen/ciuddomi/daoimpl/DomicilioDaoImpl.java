package examen.ciuddomi.daoimpl;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import examen.ciuddomi.dao.DomicilioDao;
import examen.ciuddomi.entity.domicilio.Domicilio;
import examen.ciuddomi.entity.domicilio.dto.IidCiudadDireccionDTO;
import examen.ciuddomi.repository.DomicilioRepository;

@Service
public class DomicilioDaoImpl implements DomicilioDao {
	private static final Logger log = LoggerFactory.getLogger(DomicilioDaoImpl.class);

	@Autowired
	private DomicilioRepository repo;

	@Override
	public Domicilio agregarDomicilio(Domicilio dom) {
		log.info("Se inicia inserción de domicilio");
		return repo.save(dom);
	}

	@Override
	public Domicilio editarDomicilio(Domicilio dom) {
		log.info("Se inicia edición de domicilio");
		return repo.save(dom);
	}

	@Override
	public void borrarDomicilio(Domicilio dom) {
		log.info("Se inicia eliminación de domicilio");
		repo.deleteById(dom.getId());
	}

	@Override
	public List<IidCiudadDireccionDTO> leerDomiciliosPorDireccion(String direccion) {
		log.info("Se inicia consulta de domicilios");
		return repo.findByDireccionContaining(direccion);
	}

	@Override
	public Optional<Domicilio> leerDomicilioPorId(Long id) {
		log.info("Se inicia consulta de domicilio por id");
		return repo.findById(id);
	}

}
