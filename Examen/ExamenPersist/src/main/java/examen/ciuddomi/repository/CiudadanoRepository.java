package examen.ciuddomi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import examen.ciuddomi.entity.ciudadano.Ciudadano;
import examen.ciuddomi.entity.ciudadano.dto.IidNombreEdadDTO;

@Repository
public interface CiudadanoRepository extends JpaRepository<Ciudadano, Long> {
	
	List<IidNombreEdadDTO> findByNombreContaining(String nombre);
	List<IidNombreEdadDTO> findByNombreContains(String nombre);
	List<IidNombreEdadDTO> findByNombreIsContaining(String nombre);

}
