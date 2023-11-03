package com.app.appointment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.appointment.pojos.Feedback;
import com.app.appointment.pojos.Hospital;
import com.app.appointment.repo.FeedbackRepo;
import com.app.appointment.repo.HospitalRepo;
import com.app.appointment.service.FeedbackServiceImp;
import com.app.appointment.service.HospitalService;
import com.app.appointment.service.IDoctorService;
import com.app.appointment.service.ILoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private HospitalRepo hrepo;

	@Autowired
	private IDoctorService dserv;

	@Autowired
	private ILoginService lserv;

	@Autowired
	private FeedbackServiceImp fserv;

	@Autowired
	private FeedbackRepo frepo;
	
	@Autowired
	private HospitalService hserv;

	@GetMapping("/showhospitals")
	public ResponseEntity<?> showAllHospitals() {
		List<Hospital> showhosp = hrepo.findAll();

		return ResponseEntity.ok(showhosp);
	}

	@DeleteMapping("/deletehospital/{hospid}")
	public void deleteHospital(@PathVariable int hospid) {
		try {
			Hospital h = new Hospital();
			h.setHospid(hospid);
			List<Integer> docids = hrepo.getAllDocIds(h);
			System.out.println(docids);
			for (Integer d : docids) {
				lserv.deleteDoctor(d);
				fserv.deleteDoctor(d);
				dserv.deleteDoctor(d);
			}

			hrepo.deleteById(hospid);
		} catch (Exception e) {
			System.out.println("no such id present!!!");
		}
	}
	
//	@DeleteMapping("/deletehospital/{hospid}")
//	public void deleteHospital(@PathVariable int hospid) 
//	{
//		
//		Hospital h = hserv.getHospitals(hospid);
//		
//	   List<Integer> docids = hrepo.getAllDocIds(h);
//	   System.out.println(docids);
//	   for(Integer d : docids)
//	   {
//		   
//		   lserv.deleteDoctor(d);
//		    fserv.deleteDoctor(d);
//			dserv.deleteDoctor(d);
//	   }
//	   
//	   
//	   hrepo.deleteById(hospid);
//	   
//	  
//	 
//    }
//	

	@GetMapping("/showallfeedbacks")
	public List<Feedback> showAllFeedbacks() {
		List<Feedback> feedback = frepo.findAll();

		return feedback;
	}

}
