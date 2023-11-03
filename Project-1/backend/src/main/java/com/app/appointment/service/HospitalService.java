package com.app.appointment.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.appointment.pojos.Hospital;
import com.app.appointment.pojos.Login;

import com.app.appointment.repo.HospitalRepo;
import com.app.appointment.repo.LoginRepo;

@Service

public class HospitalService implements IHospitalService {

	@Autowired
	private HospitalRepo hrepo;
	@Autowired
	private LoginRepo lrepo;

	public Hospital add(Hospital h) {
		return hrepo.save(h);
	}

	@Override
	public Hospital getHospitals(int hospid) {

		Hospital h = null;
		Optional<Hospital> hosp = hrepo.findById((int) hospid);
		try {
			h = hosp.get();
		} catch (Exception e) {
			h = null;
		}
		return h;
	}

	public Hospital getHospital(int lid) {
		Login l = lrepo.findById(lid).get();
		return hrepo.getHospital(l);
	}
}
