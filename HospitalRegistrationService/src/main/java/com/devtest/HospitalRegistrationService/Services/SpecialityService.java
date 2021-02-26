package com.devtest.HospitalRegistrationService.Services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.devtest.HospitalRegistrationService.DomainModels.Speciality;
import com.devtest.HospitalRegistrationService.Repositories.SpecialityRepository;

@Service
@Transactional
public class SpecialityService extends AbstractCRUDService<Speciality, SpecialityRepository> {
}
