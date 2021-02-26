package com.devtest.HospitalRegistrationService.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtest.HospitalRegistrationService.DomainModels.Hospital;

public interface HospitalRepository extends JpaRepository<Hospital, Long> {

}
