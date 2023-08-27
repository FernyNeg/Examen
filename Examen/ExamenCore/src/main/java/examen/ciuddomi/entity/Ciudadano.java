package examen.ciuddomi.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "ciudadano")
public class Ciudadano {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idCiudadano")
	private Long id;

	@Column(name = "nombre")
	private String nombre;

	@Column(name = "aPaterno")
	private String aPaterno;

	@Column(name = "aMaterno")
	private String aMaterno;

	@Column(name = "edad")
	private int edad;

	public Ciudadano(Long idCiudadano, String nom, String pater, String mater, int edad) {
		this.id = idCiudadano;
		this.nombre = nom;
		this.aPaterno = pater;
		this.aMaterno = mater;
		this.edad = edad;
	}

	public Ciudadano() {
	}

	public Long getIdCiudadano() {
		return id;
	}

	public void setIdCiudadano(Long idCiudadano) {
		this.id = idCiudadano;
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

}
