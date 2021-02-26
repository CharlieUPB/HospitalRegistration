package com.devtest.HospitalRegistrationService.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtest.HospitalRegistrationService.DomainModels.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {

}
