package com.app.appointment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.appointment.pojos.Doctor;
import com.app.appointment.pojos.Login;

import com.app.appointment.repo.LoginRepo;

@Service
public class LoginServiceImp implements ILoginService {

	@Autowired
	private LoginRepo lrepo;

	public Login getByrole(String email, String password) {
		return lrepo.checkLogin(email, password);

	}

	public Login add(Login l) {
		return lrepo.save(l);
	}

	public void deleteDoctor(int a) {
		Doctor l = lrepo.getDoctor(a);
		Login s = l.getLoginid();
		lrepo.deleteById(s.getLoginid());
	}

}
