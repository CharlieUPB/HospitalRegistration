package com.devtest.HospitalRegistrationService.Services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.devtest.HospitalRegistrationService.DomainModels.Patient;
import com.devtest.HospitalRegistrationService.Repositories.PatientRepository;

@Service
@Transactional
public class PatientService extends AbstractCRUDService<Patient, PatientRepository> {
}
