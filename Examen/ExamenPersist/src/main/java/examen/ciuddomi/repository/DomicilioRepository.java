package examen.ciuddomi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import examen.ciuddomi.entity.domicilio.Domicilio;
import examen.ciuddomi.entity.domicilio.dto.IidCiudadDireccionDTO;

@Repository
public interface DomicilioRepository extends JpaRepository<Domicilio, Long> {
	List<IidCiudadDireccionDTO> findByDireccionContaining(String nombre);}
