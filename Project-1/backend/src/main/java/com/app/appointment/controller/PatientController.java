package com.app.appointment.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.appointment.pojos.Appointment;
import com.app.appointment.pojos.Login;
import com.app.appointment.pojos.Patient;
import com.app.appointment.pojos.PatientRegister;
import com.app.appointment.repo.AppointmentRepo;
import com.app.appointment.repo.PatientRepo;
import com.app.appointment.service.LoginServiceImp;
import com.app.appointment.service.PatientService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/patient")
public class PatientController {

	@Autowired
	private PatientService pserv;
	@Autowired
	private PatientRepo prepo;

	@Autowired
	private AppointmentRepo apprepo;

	@Autowired
	private LoginServiceImp lserv;

	@GetMapping("/getpatients")
	public List<Patient> getAllPatients() {
		List<Patient> Patients = new ArrayList<Patient>();
		prepo.findAll().forEach(Patient -> Patients.add(Patient));
		return Patients;
	}

	@GetMapping("/getpatientbyid/{pid}")
	public Patient getPatientById(@PathVariable int pid) {
		return pserv.getPatients(pid);

	}

	@PostMapping("/savepatient")
	public Patient savePatient(@RequestBody Patient p) {
		return pserv.savePatient(p);

	}

	@PostMapping("/registerpatient")
	public Patient registerPatient(@RequestBody PatientRegister p) {
		Login l = new Login(p.getEmail(), p.getPwd(), "patient");
		Login inserted = lserv.add(l);
		Patient pp = new Patient(p.getContactno(), p.getDob(), p.getFname(), p.getLname(), p.getEmail(), p.getGender(),
				p.getBloodgroup(), inserted);
		return pserv.add(pp);

	}

	@PutMapping("/updatepatient/{pid}")
	public void updatePatient(@RequestBody Patient p, @PathVariable int pid) {

		Patient pp = prepo.findById(pid).get();
		pp.setPid(pid);
		pp.setBloodgroup(p.getBloodgroup());
		pp.setFname(p.getFname());
		pp.setLname(p.getLname());
		pp.setContactno(p.getContactno());
		pp.setDob(p.getDob());
		// pp.setGender(p.getGender());

		prepo.save(pp);

	}

	@GetMapping("/getpatient")
	public Patient getPatient(@RequestParam("loginid") int lid) {
		return pserv.getPatient(lid);
	}

	@GetMapping("/myappointments")
	public List<Appointment> getAppoinment(@RequestParam("pid") int pid) {

		List<Appointment> list = pserv.getAppointment(pid);

		return list;

	}

	@DeleteMapping("/cancelappointment")
	public void cancelAppointment(@RequestParam("appid") int appid) {
		apprepo.deleteById(appid);
	}

}
