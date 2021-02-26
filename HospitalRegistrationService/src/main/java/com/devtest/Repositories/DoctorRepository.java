package com.devtest.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devtest.DomainModels.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

}
