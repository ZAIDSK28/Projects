package com.app.appointment.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name = "login")
public class Login {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private int loginid;

	@Column
	private String email;

	@Column
	private String password;

	@Column
	private String role;

	public Login() {
		super();
	}

	public Login(int loginid, String email, String password, String role) {
		super();
		this.loginid = loginid;
		this.email = email;
		this.password = password;
		this.role = role;
	}

	public Login(String email, String password, String role) {
		super();
		this.email = email;
		this.password = password;
		this.role = role;
	}

	public int getLoginid() {
		return loginid;
	}

	public void setLoginid(int loginid) {
		this.loginid = loginid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "Login [loginid=" + loginid + ", email=" + email + ", password=" + password + ", role=" + role + "]";
	}

}
