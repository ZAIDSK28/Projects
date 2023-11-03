package com.app.appointment.service;

import com.app.appointment.pojos.DoctorSchedule;

public interface IDoctorSchedule {
	public void setSchedule(DoctorSchedule schedule, int docid);
	
	public void deleteDoctor(int docid);
}
