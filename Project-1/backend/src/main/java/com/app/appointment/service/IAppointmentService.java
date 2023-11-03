package com.app.appointment.service;

import java.util.List;

import com.app.appointment.pojos.Appointment;

public interface IAppointmentService {

	public List<Appointment> viewAllAppointments(int docid);
	
	public void deleteDoctor(int docid);
}
