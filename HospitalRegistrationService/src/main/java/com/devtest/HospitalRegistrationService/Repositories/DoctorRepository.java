package com.devtest.HospitalRegistrationService.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtest.HospitalRegistrationService.DomainModels.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

}
