package com.app.appointment.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.appointment.pojos.Doctor;
import com.app.appointment.pojos.Login;

@Repository
public interface LoginRepo extends JpaRepository<Login, Integer> {

	@Query("select l from Login l where email = :email and password = :password")
	public Login checkLogin(String email, String password);

	@Query("select d from Doctor d where docid = :a ")
	public Doctor getDoctor(int a);

}
