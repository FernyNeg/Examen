package examen.ciuddomi.dao;

import java.util.List;
import java.util.Optional;

import examen.ciuddomi.entity.ciudadano.Ciudadano;
import examen.ciuddomi.entity.ciudadano.dto.IidNombreEdadDTO;

public interface CiudadanoDao {
	Ciudadano agregarCiudadano(Ciudadano dom);

	Ciudadano editarCiudadano(Ciudadano dom);

	void borrarCiudadano(Ciudadano dom);

	List<IidNombreEdadDTO> leerCiudadanosPorNombre(String nombre);

	Optional<Ciudadano> leerCiudadanoPorId(Long id);
}