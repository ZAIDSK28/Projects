package com.app.appointment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.appointment.pojos.Login;
import com.app.appointment.service.ILoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private ILoginService lserv;

	@PostMapping("/getbyrole")
	public Login getByrole(@RequestBody Login l) {

		return lserv.getByrole(l.getEmail(), l.getPassword());

	}

}
