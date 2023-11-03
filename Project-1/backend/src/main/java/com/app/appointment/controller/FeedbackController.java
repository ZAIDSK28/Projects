package com.app.appointment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.appointment.pojos.Doctor;
import com.app.appointment.pojos.Feedback;
import com.app.appointment.pojos.Patient;
import com.app.appointment.repo.FeedbackRepo;
import com.app.appointment.service.FeedbackServiceImp;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/feedback")
public class FeedbackController {

	@Autowired
	private FeedbackRepo frepo;

	@Autowired
	private FeedbackServiceImp fserv;

	@PostMapping("/givefeedback/{pid}/{docid}")
	public void giveFeedback(@RequestBody Feedback f, @PathVariable int pid, @PathVariable int docid) {
		String str = f.getDescription();
		Patient p = new Patient(pid);
		Doctor d = new Doctor(docid);
		Feedback ff = new Feedback(p, d, str);
		frepo.save(ff);

	}

	@GetMapping("/showfeedback/{docid}")
	public List<Feedback> getFeedbacks(@PathVariable int docid) {
		List<Feedback> fb = fserv.getFeedbacks(docid);
		return fb;
	}

}
