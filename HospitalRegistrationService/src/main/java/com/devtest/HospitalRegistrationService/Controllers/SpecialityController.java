package com.devtest.HospitalRegistrationService.Controllers;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devtest.HospitalRegistrationService.DomainModels.Speciality;
import com.devtest.HospitalRegistrationService.Services.SpecialityService;

@RestController
@RequestMapping("/specialities")
public class SpecialityController {

    @Autowired
	private SpecialityService specialityService;
	
	@GetMapping("/")
    public List<Speciality> list() {
        return specialityService.listAllEntities();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Speciality> get(@PathVariable Long id) {
        try {
            Speciality speciality = specialityService.getEntity(id);
            return new ResponseEntity<Speciality>(speciality, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Speciality>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/")
    public Speciality add(@RequestBody Speciality speciality) {
        return specialityService.saveEntity(speciality);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Speciality> update(@RequestBody Speciality speciality, @PathVariable Long id) {
        try {
            Speciality existSpeciality = specialityService.getEntity(id);
            speciality.setId(id);       
            Speciality updatedSpeciality = specialityService.saveEntity(speciality);
            return new ResponseEntity<>(updatedSpeciality, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        specialityService.deleteEntity(id);
    }
}
