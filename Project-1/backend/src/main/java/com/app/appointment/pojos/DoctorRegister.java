package com.app.appointment.pojos;

public class DoctorRegister {

	private String docname;

	private double experience;

	private String speciality;

	private String email;

	private int fees;

	private String contactno;

	private String dob;

	private String pwd;

	private String gender;

	private int hospid;

	private String department;

	public DoctorRegister() {
		super();
	}

	public DoctorRegister(String docname, double experience, String speciality, String email, int fees,
			String contactno, String dob, String pwd, String gender, int hospid, String department) {
		super();
		this.docname = docname;
		this.experience = experience;
		this.speciality = speciality;
		this.email = email;
		this.fees = fees;
		this.contactno = contactno;
		this.dob = dob;
		this.pwd = pwd;
		this.gender = gender;
		this.hospid = hospid;
		this.department = department;
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

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getHospid() {
		return hospid;
	}

	public void setHospid(int hospid) {
		this.hospid = hospid;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	@Override
	public String toString() {
		return "DoctorRegister [docname=" + docname + ", experience=" + experience + ", speciality=" + speciality
				+ ", email=" + email + ", fees=" + fees + ", contactno=" + contactno + ", dob=" + dob + ", pwd=" + pwd
				+ ", gender=" + gender + ", hospid=" + hospid + ", department=" + department + "]";
	}

}
