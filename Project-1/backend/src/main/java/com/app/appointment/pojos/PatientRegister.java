package com.app.appointment.pojos;

public class PatientRegister {

	private String fname;

	private String lname;

	private String dob;

	private String contactno;

	private String email;

	private String pwd;

	private String gender;

	private String bloodgroup;

	public PatientRegister() {
		super();
	}

	public PatientRegister(String fname, String lname, String dob, String contactno, String email, String pwd,
			String gender, String bloodgroup) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.dob = dob;
		this.contactno = contactno;
		this.email = email;
		this.pwd = pwd;
		this.gender = gender;
		this.bloodgroup = bloodgroup;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getContactno() {
		return contactno;
	}

	public void setContactno(String contactno) {
		this.contactno = contactno;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public String getBloodgroup() {
		return bloodgroup;
	}

	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}

	@Override
	public String toString() {
		return "PatientRegister [fname=" + fname + ", lname=" + lname + ", dob=" + dob + ", contactno=" + contactno
				+ ", email=" + email + ", pwd=" + pwd + ", gender=" + gender + ", bloodgroup=" + bloodgroup + "]";
	}

}
