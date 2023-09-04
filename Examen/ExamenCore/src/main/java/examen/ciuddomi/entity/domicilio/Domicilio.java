package examen.ciuddomi.entity.domicilio;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;

import examen.ciuddomi.entity.ciudadano.Ciudadano;
import jakarta.persistence.*;

@Entity
@Table(name = "domicilio")
public class Domicilio {

	@Id
	@GeneratedValue
	@Column(name = "idDomicilio")
	private Long id;

	@Column(name = "ciudad", nullable = false)
	private String ciudad;

	@Column(name = "pais", nullable = false)
	private String pais;

	@Column(name = "codPostal", nullable = false)
	private int codPostal;

	@Column(name = "direccion", nullable = false)
	private String direccion;
	
	@ManyToMany(mappedBy = "domicilios",fetch = FetchType.LAZY)
  @JsonBackReference
	private Set<Ciudadano> ciudadanos;

	public Domicilio() {
	}

	public Domicilio(Long idDomicilio, String c, String p, int cp, String d) {
		this.id = idDomicilio;
		this.ciudad = c;
		this.pais = p;
		this.codPostal = cp;
		this.direccion = d;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public int getCodPostal() {
		return codPostal;
	}

	public void setCodPostal(int codPostal) {
		this.codPostal = codPostal;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

}
