package com.app.appointment.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "doctor")
public class Doctor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int docid;

	private String docname;

	private double experience;

	private String speciality;

	private String email;

	private int fees;

	private String contactno;

	private String dob;

	private String gender;

	private String department;

	@OneToOne(cascade = CascadeType.ALL)
	// @JoinTable(name = "login")
	@JoinColumn(name = "loginid")
	private Login loginid;

	@OneToOne
	@JoinColumn(name = "hospid")
	private Hospital hospid;

	public Doctor() {
		super();
	}

	public Doctor(int docid) {
		this.docid = docid;
	}

	public Doctor(String docname, double experience, String speciality, String email, int fees, String contactno,
			String dob, String gender, String department, Login loginid, Hospital hospid) {
		super();
		this.docname = docname;
		this.experience = experience;
		this.speciality = speciality;
		this.email = email;
		this.fees = fees;
		this.contactno = contactno;
		this.dob = dob;
		this.gender = gender;
		this.department = department;
		this.loginid = loginid;
		this.hospid = hospid;
	}

	public int getDocid() {
		return docid;
	}

	public void setDocid(int docid) {
		this.docid = docid;
	}

	public String getDocname() {
		return docname;
	}

	public void setDocname(String docname) {
		this.docname = docname;
	}

	public double getExperience() {
		return experience;
	}

	public void setExperience(double experience) {
		this.experience = experience;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getFees() {
		return fees;
	}

	public void setFees(int fees) {
		this.fees = fees;
	}

	public String getContactno() {
		return contactno;
	}

	public void setContactno(String contactno) {
		this.contactno = contactno;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public Login getLoginid() {
		return loginid;
	}

	public void setLoginid(Login loginid) {
		this.loginid = loginid;
	}

	public Hospital getHospid() {
		return hospid;
	}

	public void setHospid(Hospital hospid) {
		this.hospid = hospid;
	}

	@Override
	public String toString() {
		return "Doctor [docid=" + docid + ", docname=" + docname + ", experience=" + experience + ", speciality="
				+ speciality + ", email=" + email + ", fees=" + fees + ", contactno=" + contactno + ", dob=" + dob
				+ ", gender=" + gender + ", department=" + department + ", loginid=" + loginid + ", hospid=" + hospid
				+ "]";
	}

}
