package com.app.appointment.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "feedback")
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int srno;

	private String description;

	@OneToOne
	@JoinColumn(name = "pid")
	private Patient pid;

	@OneToOne
	@JoinColumn(name = "docid")
	private Doctor docid;

	public Feedback() {
		super();
	}

	public Feedback(Patient pid, Doctor docid, String description) {
		super();
		this.description = description;
		this.pid = pid;
		this.docid = docid;
	}

	public int getSrno() {
		return srno;
	}

	public void setSrno(int srno) {
		this.srno = srno;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Patient getPid() {
		return pid;
	}

	public void setPid(Patient pid) {
		this.pid = pid;
	}

	public Doctor getDocid() {
		return docid;
	}

	public void setDocid(Doctor docid) {
		this.docid = docid;
	}

	@Override
	public String toString() {
		return "Feedback [srno=" + srno + ", description=" + description + ", pid=" + pid + ", docid=" + docid + "]";
	}

}
