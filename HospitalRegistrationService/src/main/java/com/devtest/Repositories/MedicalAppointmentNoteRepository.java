package com.devtest.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtest.DomainModels.MedicalAppointmentNote;

public interface MedicalAppointmentNoteRepository extends JpaRepository<MedicalAppointmentNote, Long> {

}
