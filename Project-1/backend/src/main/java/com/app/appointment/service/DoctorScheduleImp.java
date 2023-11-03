package com.app.appointment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.appointment.pojos.Doctor;
import com.app.appointment.pojos.DoctorSchedule;
import com.app.appointment.repo.DoctorScheduleRepo;

@Service
public class DoctorScheduleImp implements IDoctorSchedule {

	@Autowired
	private DoctorScheduleRepo docschedulerepo;

	@Autowired
	private DoctorServiceImp dserv;

	public void setSchedule(DoctorSchedule schedule, int docid) {

		int temp = 0;

		DoctorSchedule d1 = new DoctorSchedule();
		Doctor d = dserv.getDoctors(docid);
		List<DoctorSchedule> lists = docschedulerepo.findAll();

		try {
			for (DoctorSchedule ds : lists) {

				if (ds.getDocid() == d) {
					d1.setSid(ds.getSid());
					temp = 1;
				}

			}
			if (temp == 1) {

				d1.setDocid(d);
				d1.setStarttime(schedule.getStarttime());
				d1.setEndtime(schedule.getEndtime());
				d1.setSunday(schedule.getSunday());
				d1.setMonday(schedule.getMonday());
				d1.setTuesday(schedule.getTuesday());
				d1.setWednesday(schedule.getWednesday());
				d1.setThursday(schedule.getThursday());
				d1.setFriday(schedule.getFriday());
				d1.setSaturday(schedule.getSaturday());
				docschedulerepo.save(d1);
			} else {
				schedule.setDocid(d);
				docschedulerepo.save(schedule);
			}

		} catch (Exception e) {

		}

	}
	public void deleteDoctor(int docid)
	{
		Doctor d = dserv.getDoctors(docid);
		DoctorSchedule id=docschedulerepo.deleteDoctor(d);
		docschedulerepo.deleteById(id.getSid());
	}

}