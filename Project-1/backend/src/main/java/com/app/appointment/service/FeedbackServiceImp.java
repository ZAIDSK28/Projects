package com.app.appointment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.appointment.pojos.Doctor;
import com.app.appointment.pojos.Feedback;

import com.app.appointment.repo.FeedbackRepo;

@Service
public class FeedbackServiceImp implements IfeedbackService {

	@Autowired
	private FeedbackRepo frepo;

	@Autowired
	private DoctorServiceImp dserv;

	public void deleteDoctor(int a) {

		Doctor d = dserv.getDoctors(a);

		List<Feedback> ff = frepo.getFeedbacks(d);

		for (Feedback f : ff) {

			frepo.deleteById(f.getSrno());
		}

	}

	public List<Feedback> getFeedbacks(int docid) {

		Doctor d = new Doctor();
		d.setDocid(docid);

		List<Feedback> ff = frepo.getFeedbacks(d);

		return ff;
	}

}
