package com.devtest.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtest.DomainModels.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {

}
