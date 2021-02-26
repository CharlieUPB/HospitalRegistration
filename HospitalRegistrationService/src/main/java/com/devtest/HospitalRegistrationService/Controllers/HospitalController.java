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

import com.devtest.HospitalRegistrationService.DomainModels.Hospital;
import com.devtest.HospitalRegistrationService.Services.HospitalService;

@RestController
@RequestMapping("/hospitals")
public class HospitalController {

    @Autowired
	private HospitalService hospitalService;
	
	@GetMapping("")
    public List<Hospital> list() {
        return hospitalService.listAllEntities();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hospital> get(@PathVariable Long id) {
        try {
            Hospital hospital = hospitalService.getEntity(id);
            return new ResponseEntity<Hospital>(hospital, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Hospital>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/")
    public void add(@RequestBody Hospital hospital) {
        hospitalService.saveEntity(hospital);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Hospital hospital, @PathVariable Long id) {
        try {
            Hospital existhospital = hospitalService.getEntity(id);
            hospital.setId(id);       
            hospitalService.saveEntity(hospital);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        hospitalService.deleteEntity(id);
    }
}
