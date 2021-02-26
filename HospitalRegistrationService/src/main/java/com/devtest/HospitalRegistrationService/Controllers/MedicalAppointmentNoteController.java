package com.devtest.HospitalRegistrationService.Controllers;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devtest.HospitalRegistrationService.DomainModels.MedicalAppointmentNote;
import com.devtest.HospitalRegistrationService.Services.MedicalAppointmentNoteService;

@RestController
@RequestMapping("/medicalAppointmentNotes")
public class MedicalAppointmentNoteController {

    @Autowired
	private MedicalAppointmentNoteService medicalAppointmentNoteService;
	
	@GetMapping("/")
    public List<MedicalAppointmentNote> list() {
        return medicalAppointmentNoteService.listAllEntities();
    }

    @GetMapping("/{id}")
    public ResponseEntity<MedicalAppointmentNote> get(@PathVariable Long id) {
        try {
            MedicalAppointmentNote medicalAppointmentNote = medicalAppointmentNoteService.getEntity(id);
            return new ResponseEntity<MedicalAppointmentNote>(medicalAppointmentNote, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<MedicalAppointmentNote>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/")
    public MedicalAppointmentNote add(@RequestBody MedicalAppointmentNote medicalAppointmentNote) {
        return medicalAppointmentNoteService.saveEntity(medicalAppointmentNote);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<MedicalAppointmentNote> update(@RequestBody MedicalAppointmentNote medicalAppointmentNote, @PathVariable Long id) {
        try {
            MedicalAppointmentNote existMedicalAppointmentNote = medicalAppointmentNoteService.getEntity(id);
            medicalAppointmentNote.setId(id);       
            MedicalAppointmentNote updatedNote = medicalAppointmentNoteService.saveEntity(medicalAppointmentNote);
            return new ResponseEntity<>(updatedNote, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        medicalAppointmentNoteService.deleteEntity(id);
    }
}
