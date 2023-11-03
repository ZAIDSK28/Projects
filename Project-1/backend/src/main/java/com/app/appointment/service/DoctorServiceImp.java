package com.app.appointment.service;

import java.sql.Time;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.appointment.pojos.Appointment;
import com.app.appointment.pojos.Doctor;
import com.app.appointment.pojos.DoctorSchedule;
import com.app.appointment.pojos.Hospital;
import com.app.appointment.pojos.Login;

import com.app.appointment.repo.DoctorRepo;
import com.app.appointment.repo.LoginRepo;

@Service
public class DoctorServiceImp implements IDoctorService {
	@Autowired
	private DoctorRepo docrepo;

	@Autowired
	private LoginRepo lrepo;

	@Override
	public List<Doctor> getAllDoctorsData() {

		return docrepo.findAll();
	}

	@Override
	public Doctor saveDoctor(Doctor d) {

		return docrepo.save(d);
	}

	@Override
	public Doctor getDoctors(int docid) {

		Doctor d = null;
		Optional<Doctor> doc = docrepo.findById((int) docid);
		try {
			d = doc.get();
		} catch (Exception e) {
			d = null;
		}
		return d;
	}

	public Doctor add(Doctor d) {
		return docrepo.save(d);
	}

	public void deleteDoctor(int a) {
		docrepo.deleteById(a);

	}

	public Doctor getDoctor(int lid) {
		Login l = lrepo.findById(lid).get();
		return docrepo.getDoctor(l);
	}

	public List<Doctor> getAllDoctorsByDept(String department) {
		List<Doctor> doclist = docrepo.getAllDoctorsByDept(department);
		return doclist;
	}

	public List<Doctor> getDoctorsByHospitalId(int hospid) {
		Hospital h = new Hospital();
		h.setHospid(hospid);
		List<Doctor> doc = docrepo.getDoctors(h);

		return doc;
	}

	public List<String> showAllDepartments() {
		List<String> dept = docrepo.showAllDepartments();
		return dept;
	}

	public boolean getAv(Doctor did, int wday) {

		List<Integer[]> avs = docrepo.checkWday(did);

		if (avs.get(0)[wday] == 1)
			return true;

		return false;
	}

	public List<Time> getAv(Doctor did, Date dt) {
		List<LocalTime[]> list = docrepo.getStartEnd(did);
		LocalTime start = list.get(0)[0];
		LocalTime end = list.get(0)[1];

		List<Time> avtimeslots = new ArrayList<>();

		List<LocalTime> slots = new ArrayList<>();

		while (start.isBefore(end)) {
			slots.add(start);
			start = start.plusMinutes(30);

		}

		for (LocalTime lt : slots) {
			LocalTime local = LocalTime.of(lt.getHour(), lt.getMinute());
			Time ltt = Time.valueOf(local);
			Appointment a = docrepo.getStatus(did, dt, ltt);
			if (a == null) {

				avtimeslots.add(ltt);
				System.out.println(ltt);
			} else
				System.out.println("Not Available!!!");
		}

		return avtimeslots;

	}

	

}
