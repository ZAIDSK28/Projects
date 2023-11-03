package com.app.appointment.service;

import com.app.appointment.pojos.Hospital;

public interface IHospitalService {

	public Hospital add(Hospital h);

	public Hospital getHospital(int lid);

	public Hospital getHospitals(int hospid);

}
