package com.app.appointment.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.appointment.pojos.Login;
import com.app.appointment.pojos.Patient;

@Repository
public interface PatientRepo extends JpaRepository<Patient, Integer> {

	@Query("select p from Patient p where loginid = ?1 ")
	public Patient getPatient(Login l);

}
