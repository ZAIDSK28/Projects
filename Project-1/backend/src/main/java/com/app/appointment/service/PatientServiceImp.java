package com.app.appointment.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.app.appointment.pojos.Appointment;

import com.app.appointment.pojos.Login;
import com.app.appointment.pojos.Patient;
import com.app.appointment.repo.AppointmentRepo;
import com.app.appointment.repo.LoginRepo;
import com.app.appointment.repo.PatientRepo;

@Service
public class PatientServiceImp implements PatientService {

	@Autowired
	private PatientRepo prepo;

	@Autowired
	private LoginRepo lrepo;

	@Autowired
	private AppointmentRepo apprepo;

	@Override
	public Patient savePatient(Patient p) {
		return prepo.save(p);
	}

	@Override
	public Patient add(Patient p) {
		return prepo.save(p);
	}

	@Override
	public Patient getPatients(int pid) {

		Patient p = null;
		Optional<Patient> pt = prepo.findById((int) pid);
		try {
			p = pt.get();
		} catch (Exception e) {
			p = null;
		}
		return p;
	}

	public Patient getPatient(int lid) {
		Login l = lrepo.findById(lid).get();
		return prepo.getPatient(l);
	}

	public List<Appointment> getAppointment(int pid) {

		List<Appointment> list = apprepo.getAppointment(pid);
		return list;
	}

}
