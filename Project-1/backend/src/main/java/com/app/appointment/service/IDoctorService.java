package com.app.appointment.service;

import java.sql.Time;

import java.util.Date;
import java.util.List;

import com.app.appointment.pojos.Doctor;

public interface IDoctorService {

	List<Doctor> getAllDoctorsData();

	public Doctor saveDoctor(Doctor d);

	public Doctor getDoctor(int docid);

	public Doctor getDoctors(int docid);

	public List<Doctor> getAllDoctorsByDept(String department);

	public List<Doctor> getDoctorsByHospitalId(int hospid);

	public List<String> showAllDepartments();

	public boolean getAv(Doctor did, int wday);

	public List<Time> getAv(Doctor did, Date dt);

	public Doctor add(Doctor d);

	public void deleteDoctor(int a);
}
