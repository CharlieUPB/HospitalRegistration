package com.devtest.HospitalRegistrationService.Services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
@Transactional
public abstract class AbstractCRUDService<T, K extends JpaRepository<T, Long>> {

	@Autowired
	private K repository;
	
	public List<T> listAllEntities() {
		return repository.findAll();
	}
	
	public T saveEntity(T entity) {
		return repository.save(entity);
	}
	
	public T getEntity(Long id) {
		return repository.findById(id).get();
	}
	
	public void deleteEntity(Long id) {
		repository.deleteById(id);
	}
}
