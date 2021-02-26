package com.devtest.Services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.devtest.DomainModels.Doctor;
import com.devtest.Repositories.DoctorRepository;

@Service
@Transactional
public class DoctorService extends AbstractCRUDService<Doctor, DoctorRepository> {
}
