package com.devtest.Services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.devtest.DomainModels.Speciality;
import com.devtest.Repositories.SpecialityRepository;

@Service
@Transactional
public class SpecialityService extends AbstractCRUDService<Speciality, SpecialityRepository> {
}
