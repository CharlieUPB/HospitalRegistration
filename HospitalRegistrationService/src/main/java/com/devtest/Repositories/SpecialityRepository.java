package com.devtest.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtest.DomainModels.Speciality;

public interface SpecialityRepository extends JpaRepository<Speciality, Long> {

}
