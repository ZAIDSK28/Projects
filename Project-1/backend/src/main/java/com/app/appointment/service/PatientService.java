package com.app.appointment.service;

import java.util.List;

import com.app.appointment.pojos.Appointment;

import com.app.appointment.pojos.Patient;

public interface PatientService {

	public Patient savePatient(Patient p);

	public Patient add(Patient p);

	public Patient getPatient(int lid);

	public Patient getPatients(int pid);

	public List<Appointment> getAppointment(int pid);
}
