package examen.ciuddomi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import examen.ciuddomi.dao.DomicilioDao;
import examen.ciuddomi.entity.Domicilio;
import examen.ciuddomi.repository.DomicilioRepository;

@Service
public class DomicilioService {

	@Autowired
	private DomicilioDao dao;

	public Domicilio agregarDomicilio(Domicilio dom) {
		return dao.agregarDomicilio(dom);
	}

	public Domicilio editarDomicilio(Domicilio dom) {
		return dao.editarDomicilio(dom);
	}

	public void borrarDomicilio(Domicilio dom) {
		dao.borrarDomicilio(dom);
	}

	public List<Domicilio> leerDomicilios() {
		return dao.leerDomicilios();
	}

	public Optional<Domicilio> leerDomicilioPorId(Long id) {
		return dao.leerDomicilioPorId(id);
	}
}
