package com.devtest.HospitalRegistrationService.Services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.devtest.HospitalRegistrationService.DomainModels.Doctor;
import com.devtest.HospitalRegistrationService.Repositories.DoctorRepository;

@Service
@Transactional
public class DoctorService extends AbstractCRUDService<Doctor, DoctorRepository> {
}
