package com.devtest.HospitalRegistrationService.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtest.HospitalRegistrationService.DomainModels.MedicalAppointmentNote;

public interface MedicalAppointmentNoteRepository extends JpaRepository<MedicalAppointmentNote, Long> {

}
