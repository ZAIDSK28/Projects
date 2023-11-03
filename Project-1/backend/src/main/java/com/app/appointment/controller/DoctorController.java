package com.app.appointment.controller;

import java.sql.Time;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
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
import com.app.appointment.pojos.Doctor;
import com.app.appointment.pojos.DoctorRegister;
import com.app.appointment.pojos.Hospital;
import com.app.appointment.pojos.Login;
import com.app.appointment.pojos.Patient;
import com.app.appointment.repo.AppointmentRepo;
import com.app.appointment.repo.DoctorRepo;
import com.app.appointment.repo.HospitalRepo;
import com.app.appointment.service.AppointmentServiceImp;
import com.app.appointment.service.DoctorScheduleImp;
import com.app.appointment.service.FeedbackServiceImp;
import com.app.appointment.service.IDoctorService;
import com.app.appointment.service.ILoginService;
import com.app.appointment.service.PatientService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/doctors")
public class DoctorController {

	@Autowired
	private IDoctorService dserv;
	@Autowired
	private ILoginService lserv;

	@Autowired
	private DoctorRepo drepo;

	@Autowired
	private FeedbackServiceImp fserv;

	@Autowired
	private HospitalRepo hrepo;

	@Autowired
	private PatientService pserv;

	@Autowired
	private AppointmentRepo apprepo;

	@Autowired
	private AppointmentServiceImp appserv;
	
	@Autowired
	private DoctorScheduleImp dsserv;

	@GetMapping("/getdoctors")
	public ResponseEntity<?> getAllDoctors() {
		List<Doctor> doc = dserv.getAllDoctorsData();

		return ResponseEntity.ok(doc);
	}

	@GetMapping("/getdoctorbyhospid/{hospid}")
	public ResponseEntity<?> getDoctors(@PathVariable int hospid) {
		List<Doctor> doc = dserv.getDoctorsByHospitalId(hospid);

		return ResponseEntity.ok(doc);
	}

	@GetMapping("/getdoctorbyid/{docid}")
	public Doctor getDoctorById(@PathVariable int docid) {
		return dserv.getDoctors(docid);

	}

	@PutMapping("/updatedoctors/{docid}")
	public void updateDoctor(@RequestBody Doctor d, @PathVariable int docid) {

		Doctor dd = drepo.findById(docid).get();
		dd.setDocid(docid);
		dd.setDocname(d.getDocname());
		dd.setExperience(d.getExperience());
		dd.setFees(d.getFees());
		dd.setContactno(d.getContactno());
		dd.setSpeciality(d.getSpeciality());

		drepo.save(dd);

	}

	@PostMapping("/savedoctors")
	public Doctor saveDoctor(@RequestBody Doctor d) {
		return dserv.saveDoctor(d);
	}

	@PostMapping("/registerdoctor")
	public Doctor registerDoctor(@RequestBody DoctorRegister d) {

		Login l = new Login(d.getEmail(), d.getPwd(), "doctor");
		Login inserted = lserv.add(l);
		int lid = d.getHospid();
		Hospital hosdata = hrepo.findById(lid).get();
		Doctor dd = new Doctor(d.getDocname(), d.getExperience(), d.getSpeciality(), d.getEmail(), d.getFees(),
				d.getContactno(), d.getDob(), d.getGender(), d.getDepartment(), inserted, hosdata);
		return dserv.add(dd);

	}

	@DeleteMapping("/deletedoctor/{docid}")
	public void deleteDoctor(@PathVariable int docid) {
		lserv.deleteDoctor(docid);
		fserv.deleteDoctor(docid);
		dsserv.deleteDoctor(docid);
		appserv.deleteDoctor(docid);
		dserv.deleteDoctor(docid);
		
	}

	@GetMapping("/getdoctor")
	public Doctor getDoctor(@RequestParam("loginid") int lid) {
		return dserv.getDoctor(lid);
	}

	@GetMapping("/getdoctors/{department}")
	public List<Doctor> doctorByDepartment(@PathVariable String department) {
		List<Doctor> doclist = dserv.getAllDoctorsByDept(department);
		return doclist;
	}

	@GetMapping("/showdepartments")
	public List<String> showAllDepartments() {
		List<String> dept = dserv.showAllDepartments();

		return dept;
	}

	@GetMapping("/checkAv")
	public boolean checkAv(@RequestParam("did") int did, @RequestParam("wday") int dt) {
		// String[] arr =
		// {"sunday","monday","tuesday","wednesday","thursday","friday","saturday"};
		Doctor d = dserv.getDoctors(did);
		boolean av = dserv.getAv(d, dt);
		return av;
		// return new Object();
	}

	@GetMapping("/getAv")
	public List<Time> getAv(@RequestParam("did") int did,
			@RequestParam("dt") @DateTimeFormat(pattern = "yyyy-MM-dd") Date dt) {
		Doctor d = dserv.getDoctors(did);
		return dserv.getAv(d, dt);
	}

	@PostMapping("/bookappointment")
	public String bookAppointment(@RequestParam("pid") int pid, @RequestParam("did") int did,
			@RequestParam("dt") @DateTimeFormat(pattern = "yyyy-MM-dd") Date dt, @RequestParam("time") Time time) {
		System.out.println(dt);
		Patient p = pserv.getPatients(pid);
		Doctor d = dserv.getDoctors(did);
		Appointment app = new Appointment(p, d, dt, time, "confirmed");
		apprepo.save(app);
		return "true";
	}

	@GetMapping("/viewappointments")
	public List<Appointment> viewAllAppointments(@RequestParam("docid") int docid) {
		List<Appointment> appointments = appserv.viewAllAppointments(docid);
		return appointments;
	}

}
