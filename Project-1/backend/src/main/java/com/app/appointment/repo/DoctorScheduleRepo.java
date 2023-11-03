package com.app.appointment.repo;

import java.time.LocalTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.appointment.pojos.Doctor;
import com.app.appointment.pojos.DoctorSchedule;

@Repository
public interface DoctorScheduleRepo extends JpaRepository<DoctorSchedule, Integer> {
	@Query(value = "select d.starttime from docschedule d where docid = :docid ", nativeQuery = true)
	public List<LocalTime> showSlots(int docid);
	
	@Query("select d from DoctorSchedule d where docid=:docid")
	public DoctorSchedule deleteDoctor(Doctor docid);
}
