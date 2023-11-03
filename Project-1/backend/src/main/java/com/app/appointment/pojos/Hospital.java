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
@Table(name = "hospital")
public class Hospital {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int hospid;

	private String hospname;

	private String contactno;

	private String email;

	private String address;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "loginid")
	private Login loginid;

	public Hospital() {
		super();
	}

	public Hospital(String hospname, String contactno, String email, String address, Login loginid) {
		super();
		this.hospname = hospname;
		this.contactno = contactno;
		this.email = email;
		this.address = address;
		this.loginid = loginid;
	}

	public String getHospname() {
		return hospname;
	}

	public void setHospname(String hospname) {
		this.hospname = hospname;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Login getLoginid() {
		return loginid;
	}

	public void setLoginid(Login loginid) {
		this.loginid = loginid;
	}

	public int getHospid() {
		return hospid;
	}

	public void setHospid(int hospid) {
		this.hospid = hospid;
	}

	@Override
	public String toString() {
		return "Hospital [hospname=" + hospname + ", contactno=" + contactno + ", email=" + email + ", address="
				+ address + ", loginid=" + loginid + "]";
	}

}
