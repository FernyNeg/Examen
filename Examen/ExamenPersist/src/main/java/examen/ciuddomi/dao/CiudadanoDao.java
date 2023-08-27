package examen.ciuddomi.dao;

import java.util.List;
import java.util.Optional;

import examen.ciuddomi.entity.Ciudadano;

public interface CiudadanoDao {
	Ciudadano agregarCiudadano(Ciudadano dom);

	Ciudadano editarCiudadano(Ciudadano dom);

	void borrarCiudadano(Ciudadano dom);

	List<Ciudadano> leerCiudadanos();

	Optional<Ciudadano> leerCiudadanoPorId(Long id);
}