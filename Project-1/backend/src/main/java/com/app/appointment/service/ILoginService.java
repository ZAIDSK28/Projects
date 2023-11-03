package com.app.appointment.service;

import com.app.appointment.pojos.Login;

public interface ILoginService {

	public Login add(Login l);

	public void deleteDoctor(int docid);

	public Login getByrole(String email, String password);
}
