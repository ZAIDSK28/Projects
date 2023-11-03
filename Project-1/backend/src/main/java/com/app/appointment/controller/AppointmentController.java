package com.app.appointment.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.appointment.pojos.Doctor;
import com.app.appointment.pojos.DoctorSchedule;
import com.app.appointment.repo.DoctorScheduleRepo;
import com.app.appointment.service.DoctorScheduleImp;
import com.app.appointment.service.DoctorServiceImp;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/appointment")
public class AppointmentController {

	@Autowired
	private DoctorScheduleRepo docschedulerepo;

	@Autowired
	private DoctorServiceImp dserv;
	
	@Autowired
	private DoctorScheduleImp docsecserv;

	List<LocalDateTime> slots;
	List<LocalDateTime> remainingslot;

//	@PostMapping("/setschedule/{docid}")
//	public void setSchedule(@RequestBody DoctorSchedule schedule, @PathVariable int docid) {
//		System.out.println(schedule);
//		Doctor d = dserv.getDoctors(docid);
//		schedule.setDocid(d);
//		docschedulerepo.save(schedule);
//
//	}
	@PostMapping("/setschedule/{docid}")
	public void setSchedule(@RequestBody DoctorSchedule schedule, @PathVariable int docid) {

		docsecserv.setSchedule(schedule, docid);

	}

}
