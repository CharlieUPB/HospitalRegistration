package com.devtest.HospitalRegistrationService.DomainModels;

import java.util.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.devtest.HospitalRegistrationService.Audit.AuditableEntity;

@Entity
@Table(name="doctor")
public class Doctor extends AuditableEntity {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;

	private String name;

	private String lastName;

	private Date birthdate;

	private String address;

	private String profilePicture;

	@ManyToMany
	@JoinTable(
			name = "doctor_speciality",
			joinColumns = @JoinColumn(name = "doctor_id"),
			inverseJoinColumns = @JoinColumn(name = "speciality_id"))
	private Set<Speciality> specialities;

	@OneToMany(mappedBy = "doctor")
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

	public Set<Speciality> getSpecialities() {
		return specialities;
	}

	public void setSpecialities(Set<Speciality> specialities) {
		this.specialities = specialities;
	}

	public Set<MedicalAppointmentNote> getMedicalAppointmentNotes() {
		return medicalAppointmentNotes;
	}

	public void setMedicalAppointmentNotes(Set<MedicalAppointmentNote> medicalAppointmentNotes) {
		this.medicalAppointmentNotes = medicalAppointmentNotes;
	}
}
