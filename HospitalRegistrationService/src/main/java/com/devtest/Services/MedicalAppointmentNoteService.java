package com.devtest.Services;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.devtest.DomainModels.MedicalAppointmentNote;
import com.devtest.Repositories.MedicalAppointmentNoteRepository;

@Service
@Transactional
public class MedicalAppointmentNoteService extends AbstractCRUDService<MedicalAppointmentNote, MedicalAppointmentNoteRepository> {
}
