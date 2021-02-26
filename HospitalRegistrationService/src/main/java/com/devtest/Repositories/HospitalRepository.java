package com.devtest.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtest.DomainModels.Hospital;

public interface HospitalRepository extends JpaRepository<Hospital, Long> {

}
