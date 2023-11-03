package com.app.appointment.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.appointment.pojos.Hospital;
import com.app.appointment.pojos.Login;

@Repository
public interface HospitalRepo extends JpaRepository<Hospital, Integer> {

	@Query("select h from Hospital h where loginid = ?1 ")
	public Hospital getHospital(Login l);

	@Query("select d.docid from Doctor d where d.hospid = :hospid")
	public List<Integer> getAllDocIds(Hospital hospid);

}
