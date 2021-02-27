package com.devtest.HospitalRegistrationService.DomainModels;

import java.util.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.devtest.HospitalRegistrationService.Audit.AuditableEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="patient")
public class Patient extends AuditableEntity {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;

	private String name;

	private String lastName;

	private Date birthdate;

	private String address;

	private String profilePicture;

	@OneToMany(mappedBy = "patient")
	private Set<MedicalAppointmentNote> medicalAppointmentNotes;

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

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getProfilePicture() {
		return profilePicture;
	}

	public void setProfilePicture(String profilePicture) {
		this.profilePicture = profilePicture;
	}

	@JsonIgnore
	public Set<MedicalAppointmentNote> getMedicalAppointmentNotes() {
		return medicalAppointmentNotes;
	}

	public void setMedicalAppointmentNotes(Set<MedicalAppointmentNote> medicalAppointmentNotes) {
		this.medicalAppointmentNotes = medicalAppointmentNotes;
	}
}
