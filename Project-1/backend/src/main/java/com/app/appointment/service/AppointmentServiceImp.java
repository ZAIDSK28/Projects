package com.app.appointment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.appointment.pojos.Appointment;
import com.app.appointment.pojos.Doctor;
import com.app.appointment.pojos.Feedback;
import com.app.appointment.repo.AppointmentRepo;

@Service
public class AppointmentServiceImp implements IAppointmentService {
	@Autowired
	private AppointmentRepo apprepo;
	
	@Autowired 
	private DoctorServiceImp dserv;

	public List<Appointment> viewAllAppointments(int docid) {
		List<Appointment> appointment = apprepo.viewAllAppointments(docid);
		return appointment;
	}
	
	public void deleteDoctor(int docid)
	{
		Doctor d = dserv.getDoctors(docid);

		List<Appointment> ff = apprepo.getAppointments(d);

		for (Appointment f : ff) {

			apprepo.deleteById(f.getAppointmentid());
		}
	}
}
