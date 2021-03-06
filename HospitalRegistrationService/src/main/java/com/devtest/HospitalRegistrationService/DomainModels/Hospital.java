package com.devtest.HospitalRegistrationService.DomainModels;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.devtest.HospitalRegistrationService.Audit.AuditableEntity;

@Entity
@Table(name="hospital")
public class Hospital extends AuditableEntity {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;
	
	public Hospital() {
		
	}
	
	public Hospital(String name, String description) {
		super();
		this.name = name;
		this.description = description;
	}

	private String name;
	
	private String description;

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
}
