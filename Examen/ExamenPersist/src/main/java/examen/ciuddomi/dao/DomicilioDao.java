package examen.ciuddomi.dao;

import java.util.List;
import java.util.Optional;

import examen.ciuddomi.entity.domicilio.Domicilio;
import examen.ciuddomi.entity.domicilio.dto.IidCiudadDireccionDTO;

public interface DomicilioDao {

	Domicilio agregarDomicilio(Domicilio dom);

	Domicilio editarDomicilio(Domicilio dom);

	void borrarDomicilio(Domicilio dom);

	List<IidCiudadDireccionDTO> leerDomiciliosPorDireccion(String domicilio);

	Optional<Domicilio> leerDomicilioPorId(Long id);

}
