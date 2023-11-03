package com.app.appointment.pojos;

public class HospitalRegister {

	private String hospname;

	private String contactno;

	private String email;

	private String address;

	private String pwd;

	public HospitalRegister() {
		super();
	}

	public HospitalRegister(String hospname, String contactno, String email, String address, String pwd) {
		super();
		this.hospname = hospname;
		this.contactno = contactno;
		this.email = email;
		this.address = address;
		this.pwd = pwd;
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

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	@Override
	public String toString() {
		return "HospitalRegister [hospname=" + hospname + ", contactno=" + contactno + ", email=" + email + ", address="
				+ address + ", pwd=" + pwd + "]";
	}

}
