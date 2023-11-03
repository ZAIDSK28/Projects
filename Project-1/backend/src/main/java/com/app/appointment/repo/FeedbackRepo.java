package com.app.appointment.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.appointment.pojos.Doctor;
import com.app.appointment.pojos.Feedback;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Integer> {

	@Query("select d from Doctor d where docid = :a")
	public List<Doctor> getDoctors(int a);

	@Query("select f from Feedback f where docid = :a ")
	public List<Feedback> getFeedbacks(Doctor a);

	@Query(" select f from Feedback f where docid = :a")
	public Feedback getFeedback(Doctor a);

}
