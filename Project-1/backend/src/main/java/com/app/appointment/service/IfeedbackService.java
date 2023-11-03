package com.app.appointment.service;

import java.util.List;

import com.app.appointment.pojos.Feedback;

public interface IfeedbackService {

	public void deleteDoctor(int a);

	public List<Feedback> getFeedbacks(int docid);
}
