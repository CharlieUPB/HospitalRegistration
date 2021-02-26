package com.devtest.Services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.devtest.DomainModels.Patient;
import com.devtest.Repositories.PatientRepository;

@Service
@Transactional
public class PatientService extends AbstractCRUDService<Patient, PatientRepository> {
}
