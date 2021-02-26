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

import com.devtest.HospitalRegistrationService.DomainModels.Doctor;
import com.devtest.HospitalRegistrationService.Services.DoctorService;

@RestController
@RequestMapping("/doctors")
public class DoctorController {

	@Autowired
	private DoctorService doctorService;
	
	@GetMapping("")
    public List<Doctor> list() {
        return doctorService.listAllEntities();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Doctor> get(@PathVariable Long id) {
        try {
            Doctor doctor = doctorService.getEntity(id);
            return new ResponseEntity<Doctor>(doctor, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Doctor>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/")
    public void add(@RequestBody Doctor doctor) {
        doctorService.saveEntity(doctor);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Doctor doctor, @PathVariable Long id) {
        try {
            Doctor existDoctor = doctorService.getEntity(id);
            doctor.setId(id);       
            doctorService.saveEntity(doctor);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        doctorService.deleteEntity(id);
    }	
}
