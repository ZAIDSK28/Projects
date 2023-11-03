package com.app.appointment.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.appointment.pojos.Appointment;
import com.app.appointment.pojos.Doctor;
import com.app.appointment.pojos.Feedback;
import com.app.appointment.pojos.Hospital;

@Repository
public interface AppointmentRepo extends JpaRepository<Appointment, Integer> {
	@Query(value = "select * from appointment  where pid = :pid and status='confirmed' order by date ", nativeQuery = true)
	public List<Appointment> getAppointment(int pid);

	@Query(value = "select * from appointment  where docid = :docid and status='confirmed' order by date ", nativeQuery = true)
	public List<Appointment> viewAllAppointments(int docid);

	@Query(value = " select * from appointment a join doctor d on a.docid=d.docid join hospital h on d.hospid= h.hospid where h.hospid= :hpid and  a.status='confirmed'  ", nativeQuery = true)
	public List<Appointment> showAllAppointments(Hospital hpid);
	
	@Query("select f from Appointment f where docid = :a ")
	public List<Appointment> getAppointments(Doctor a);

}
