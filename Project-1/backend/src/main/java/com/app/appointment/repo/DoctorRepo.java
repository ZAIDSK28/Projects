package com.app.appointment.repo;

import java.sql.Time;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.appointment.pojos.Appointment;
import com.app.appointment.pojos.Doctor;
import com.app.appointment.pojos.Hospital;
import com.app.appointment.pojos.Login;

@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Integer> {

	@Query("select d from Doctor d where loginid = ?1 ")
	public Doctor getDoctor(Login l);

	@Query("select d from Doctor d where hospid = :hid")
	public List<Doctor> findAllDoctors(int hid);

	@Query("select d from Doctor d where department = :department")
	public List<Doctor> getAllDoctorsByDept(String department);

	@Query("select d from Doctor d where hospid = :hid")
	public List<Doctor> getDoctors(Hospital hid);

	@Query(value = "select Distinct department from doctor ", nativeQuery = true)
	public List<String> showAllDepartments();

	@Query("select sunday,monday,tuesday,wednesday,thursday,friday,saturday from DoctorSchedule where docid = :did")
	public List<Integer[]> checkWday(Doctor did);

	@Query("select d.starttime,d.endtime from DoctorSchedule d where docid = :did")
	public List<LocalTime[]> getStartEnd(Doctor did);

	@Query("select a from Appointment a where docid = :did and date = :dt  and starttime = :t")
	public Appointment getStatus(Doctor did, Date dt, Time t);

}
