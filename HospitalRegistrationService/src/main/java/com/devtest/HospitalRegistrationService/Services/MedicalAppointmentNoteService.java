package com.devtest.HospitalRegistrationService.Services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.devtest.HospitalRegistrationService.DomainModels.MedicalAppointmentNote;
import com.devtest.HospitalRegistrationService.Repositories.MedicalAppointmentNoteRepository;

@Service
@Transactional
public class MedicalAppointmentNoteService extends AbstractCRUDService<MedicalAppointmentNote, MedicalAppointmentNoteRepository> {
}
