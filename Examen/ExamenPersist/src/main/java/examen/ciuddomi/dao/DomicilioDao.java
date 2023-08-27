package examen.ciuddomi.dao;

import java.util.List;
import java.util.Optional;

import examen.ciuddomi.entity.Domicilio;

public interface DomicilioDao {

	Domicilio agregarDomicilio(Domicilio dom);

	Domicilio editarDomicilio(Domicilio dom);

	void borrarDomicilio(Domicilio dom);

	List<Domicilio> leerDomicilios();

	Optional<Domicilio> leerDomicilioPorId(Long id);

}
