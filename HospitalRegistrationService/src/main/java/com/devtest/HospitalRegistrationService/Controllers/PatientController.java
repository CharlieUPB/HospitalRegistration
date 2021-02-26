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

import com.devtest.HospitalRegistrationService.DomainModels.Patient;
import com.devtest.HospitalRegistrationService.Services.PatientService;

@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
	private PatientService patientService;
	
	@GetMapping("/")
    public List<Patient> list() {
        return patientService.listAllEntities();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Patient> get(@PathVariable Long id) {
        try {
            Patient patient = patientService.getEntity(id);
            return new ResponseEntity<Patient>(patient, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Patient>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/")
    public Patient add(@RequestBody Patient patient) {
        return patientService.saveEntity(patient);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Patient> update(@RequestBody Patient patient, @PathVariable Long id) {
        try {
            Patient existPatient = patientService.getEntity(id);
            patient.setId(id);       
            Patient updatedPatient = patientService.saveEntity(patient);
            return new ResponseEntity<>(updatedPatient, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        patientService.deleteEntity(id);
    }
}
