package com.devtest.HospitalRegistrationService.DomainModels;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.devtest.HospitalRegistrationService.Audit.AuditableEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="speciality")
public class Speciality extends AuditableEntity {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;

	private String name;

	private String description;

	private String iconIdentifier;

	@ManyToMany(mappedBy = "specialities")
	private Set<Doctor> doctors;
	
	public Speciality() {}

	public Speciality(String name, String description, String iconIdentifier) {
		super();
		this.name = name;
		this.description = description;
		this.iconIdentifier = iconIdentifier;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getIconIdentifier() {
		return iconIdentifier;
	}

	public void setIconIdentifier(String iconIdentifier) {
		this.iconIdentifier = iconIdentifier;
	}

	@JsonIgnore
	public Set<Doctor> getDoctors() {
		return doctors;
	}

	public void setDoctors(Set<Doctor> doctors) {
		this.doctors = doctors;
	}
}
