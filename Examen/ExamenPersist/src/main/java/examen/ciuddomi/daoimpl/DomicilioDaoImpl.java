package examen.ciuddomi.daoimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import examen.ciuddomi.dao.DomicilioDao;
import examen.ciuddomi.entity.Domicilio;
import examen.ciuddomi.repository.DomicilioRepository;

@Service
public class DomicilioDaoImpl implements DomicilioDao {

	@Autowired
	private DomicilioRepository repo;

	@Override
	public Domicilio agregarDomicilio(Domicilio dom) {
		return repo.save(dom);
	}

	@Override
	public Domicilio editarDomicilio(Domicilio dom) {
		return repo.save(dom);
	}

	@Override
	public void borrarDomicilio(Domicilio dom) {
		repo.deleteById(dom.getId());
	}

	@Override
	public List<Domicilio> leerDomicilios() {
		return repo.findAll();
	}

	@Override
	public Optional<Domicilio> leerDomicilioPorId(Long id) {
		return repo.findById(id);
	}

}
