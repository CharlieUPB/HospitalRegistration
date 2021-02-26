package com.devtest.HospitalRegistrationService.Services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.devtest.HospitalRegistrationService.DomainModels.Hospital;
import com.devtest.HospitalRegistrationService.Repositories.HospitalRepository;

@Service
@Transactional
public class HospitalService extends AbstractCRUDService<Hospital, HospitalRepository> {
}
