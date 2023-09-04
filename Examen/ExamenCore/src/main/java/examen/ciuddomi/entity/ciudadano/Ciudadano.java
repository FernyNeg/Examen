package examen.ciuddomi.entity.ciudadano;

import java.util.Set;

import examen.ciuddomi.entity.domicilio.Domicilio;
import jakarta.persistence.*;

@Entity
@Table(name = "ciudadano")
public class Ciudadano {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idCiudadano")
	private Long id;

	@Column(name = "nombre", nullable = false)
	private String nombre;

	@Column(name = "aPaterno", nullable = false)
	private String aPaterno;

	@Column(name = "aMaterno")
	private String aMaterno;

	@Column(name = "edad", nullable = false)
	private int edad;

	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "Ciudadano_domicilio_table",
		joinColumns = {
			@JoinColumn(name = "idCiudadano_fk", referencedColumnName = "idCiudadano")
		},
		inverseJoinColumns = {
			@JoinColumn(name = "idDomicilio_fk", referencedColumnName = "idDomicilio")
		}
	)
	private Set<Domicilio> domicilios;

	public Ciudadano() {
	}

	public Ciudadano(Long idCiudadano, String nom, String pater, String mater, int edad) {
		this.id = idCiudadano;
		this.nombre = nom;
		this.aPaterno = pater;
		this.aMaterno = mater;
		this.edad = edad;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getaPaterno() {
		return aPaterno;
	}

	public void setaPaterno(String aPaterno) {
		this.aPaterno = aPaterno;
	}

	public String getaMaterno() {
		return aMaterno;
	}

	public void setaMaterno(String aMaterno) {
		this.aMaterno = aMaterno;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public Set<Domicilio> getDomicilios() {
		return domicilios;
	}

	public void setDomicilios(Set<Domicilio> domicilios) {
		this.domicilios = domicilios;
	}

}
