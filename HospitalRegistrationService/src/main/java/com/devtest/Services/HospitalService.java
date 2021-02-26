package com.devtest.Services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.devtest.DomainModels.Hospital;
import com.devtest.Repositories.HospitalRepository;

@Service
@Transactional
public class HospitalService extends AbstractCRUDService<Hospital, HospitalRepository> {
}
