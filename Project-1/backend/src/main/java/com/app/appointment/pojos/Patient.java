package com.app.appointment.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "patient")
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;

	@Column
	private String fname;

	@Column
	private String lname;

	private String dob;

	@Column
	private String contactno;

	@Column
	private String email;

	@Column
	private String gender;

	@Column
	private String bloodgroup;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "loginid")
	private Login loginid;

	public Patient() {
		super();
	}

	public Patient(int pid) {
		this.pid = pid;
	}

	public Patient(String contactno, String dob, String fname, String lname, String email, String gender,
			String bloodgroup, Login loginid) {
		super();

		this.fname = fname;
		this.lname = lname;
		this.dob = dob;
		this.contactno = contactno;
		this.email = email;
		this.gender = gender;
		this.bloodgroup = bloodgroup;
		this.loginid = loginid;
	}

	public Patient(int pid, String fname, String lname, String dob, String contactno, String email, String gender,
			String bloodgroup, Login loginid) {
		super();
		this.pid = pid;
		this.fname = fname;
		this.lname = lname;
		this.dob = dob;
		this.contactno = contactno;
		this.email = email;
		this.gender = gender;
		this.bloodgroup = bloodgroup;
		this.loginid = loginid;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
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

	public Login getLoginid() {
		return loginid;
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

	public void setLoginid(Login loginid) {
		this.loginid = loginid;
	}

	@Override
	public String toString() {
		return "Patient [pid=" + pid + ", fname=" + fname + ", lname=" + lname + ", dob=" + dob + ", contactno="
				+ contactno + ", email=" + email + ", gender=" + gender + ", bloodgroup=" + bloodgroup + ", loginid="
				+ loginid + "]";
	}

}
