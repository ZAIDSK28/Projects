package com.app.appointment.pojos;

import java.sql.Time;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "appointment")
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "appid")
	private int appointmentid;

	@OneToOne
	@JoinColumn(name = "pid")
	private Patient pid;

	@OneToOne
	@JoinColumn(name = "docid")
	private Doctor docid;

	// @Temporal(TemporalType.DATE)
	private Date Date = new Date(System.currentTimeMillis());

	// @Temporal(TemporalType.TIME)
	private Time starttime = new Time(System.currentTimeMillis());

	private String status;

	public Appointment() {
		super();
	}

	public Appointment(Patient pid, Doctor docid, java.util.Date date, Time starttime, String status) {
		super();
		this.pid = pid;
		this.docid = docid;
		Date = date;
		this.starttime = starttime;
		this.status = status;
	}

	public int getAppointmentid() {
		return appointmentid;
	}

	public void setAppointmentid(int appointmentid) {
		this.appointmentid = appointmentid;
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

	public Date getDate() {
		return Date;
	}

	public void setDate(Date date) {
		Date = date;
	}

	public Time getStarttime() {
		return starttime;
	}

	public void setStarttime(Time starttime) {
		this.starttime = starttime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Appointment [appointmentid=" + appointmentid + ", pid=" + pid + ", docid=" + docid + ", Date=" + Date
				+ ", starttime=" + starttime + ", status=" + status + "]";
	}

}
