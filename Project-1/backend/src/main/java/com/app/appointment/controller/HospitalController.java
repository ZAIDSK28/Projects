package com.app.appointment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.appointment.pojos.Appointment;
import com.app.appointment.pojos.Hospital;
import com.app.appointment.pojos.HospitalRegister;
import com.app.appointment.pojos.Login;
import com.app.appointment.repo.AppointmentRepo;
import com.app.appointment.repo.HospitalRepo;
import com.app.appointment.service.HospitalService;
import com.app.appointment.service.ILoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/hospital")
public class HospitalController {

	@Autowired
	private ILoginService lserv;

	@Autowired
	private HospitalService hserv;

	@Autowired
	private HospitalRepo hrepo;

	@Autowired
	private AppointmentRepo apprepo;

	@PostMapping("/registerhospital")
	public Hospital registerPatient(@RequestBody HospitalRegister h) {
		Login l = new Login(h.getEmail(), h.getPwd(), "hospital");
		Login inserted = lserv.add(l);
		Hospital dd = new Hospital(h.getHospname(), h.getContactno(), h.getEmail(), h.getAddress(), inserted);
		return hserv.add(dd);

	}

	@GetMapping("/gethospitalbyid/{hospid}")
	public Hospital getHospitalById(@PathVariable int hospid) {
		return hserv.getHospitals(hospid);
	}

	@PutMapping("/updatehospitals/{hospid}")
	public void updateDoctor(@RequestBody Hospital d, @PathVariable int hospid) {

		Hospital hh = hrepo.findById(hospid).get();
		hh.setHospid(hospid);
		hh.setHospname(d.getHospname());
		hh.setAddress(d.getAddress());
		hh.setContactno(d.getContactno());

		hrepo.save(hh);

	}

	@GetMapping("/gethospital")
	public Hospital getPatient(@RequestParam("loginid") int lid) {
		return hserv.getHospital(lid);
	}

	@GetMapping("/showappointments")
	public List<Appointment> showAllAppointments(@RequestParam("hospid") int hospid) {
		Hospital h = hserv.getHospitals(hospid);
		List<Appointment> appointments = apprepo.showAllAppointments(h);
		return appointments;
	}

}
