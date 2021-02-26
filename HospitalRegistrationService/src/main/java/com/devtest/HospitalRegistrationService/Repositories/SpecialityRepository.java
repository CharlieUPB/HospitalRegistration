package com.devtest.HospitalRegistrationService.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtest.HospitalRegistrationService.DomainModels.Speciality;

public interface SpecialityRepository extends JpaRepository<Speciality, Long> {

}
