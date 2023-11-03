package com.app.appointment.pojos;

import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "docschedule")
public class DoctorSchedule {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sid;

	@JsonFormat(pattern = "HH:mm")
	private LocalTime starttime;

	@JsonFormat(pattern = "HH:mm")
	private LocalTime endtime;

	@OneToOne
	@JoinColumn(name = "docid")
	private Doctor docid;

	private int monday;

	private int tuesday;

	private int wednesday;

	private int thursday;

	private int friday;

	private int saturday;

	private int sunday;

	public DoctorSchedule() {
		super();
	}

	public DoctorSchedule(LocalTime starttime, LocalTime endtime, Doctor docid, int monday, int tuesday, int wednesday,
			int thursday, int friday, int saturday, int sunday) {
		super();
		this.starttime = starttime;
		this.endtime = endtime;
		this.docid = docid;
		this.monday = monday;
		this.tuesday = tuesday;
		this.wednesday = wednesday;
		this.thursday = thursday;
		this.friday = friday;
		this.saturday = saturday;
		this.sunday = sunday;
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public LocalTime getStarttime() {
		return starttime;
	}

	public void setStarttime(LocalTime starttime) {
		this.starttime = starttime;
	}

	public LocalTime getEndtime() {
		return endtime;
	}

	public void setEndtime(LocalTime endtime) {
		this.endtime = endtime;
	}

	public Doctor getDocid() {
		return docid;
	}

	public void setDocid(Doctor docid) {
		this.docid = docid;
	}

	public int getMonday() {
		return monday;
	}

	public void setMonday(int monday) {
		this.monday = monday;
	}

	public int getTuesday() {
		return tuesday;
	}

	public void setTuesday(int tuesday) {
		this.tuesday = tuesday;
	}

	public int getWednesday() {
		return wednesday;
	}

	public void setWednesday(int wednesday) {
		this.wednesday = wednesday;
	}

	public int getThursday() {
		return thursday;
	}

	public void setThursday(int thursday) {
		this.thursday = thursday;
	}

	public int getFriday() {
		return friday;
	}

	public void setFriday(int friday) {
		this.friday = friday;
	}

	public int getSaturday() {
		return saturday;
	}

	public void setSaturday(int saturday) {
		this.saturday = saturday;
	}

	public int getSunday() {
		return sunday;
	}

	public void setSunday(int sunday) {
		this.sunday = sunday;
	}

	@Override
	public String toString() {
		return "DoctorSchedule [sid=" + sid + ", starttime=" + starttime + ", endtime=" + endtime + ", docid=" + docid
				+ ", monday=" + monday + ", tuesday=" + tuesday + ", wednesday=" + wednesday + ", thursday=" + thursday
				+ ", friday=" + friday + ", saturday=" + saturday + ", sunday=" + sunday + "]";
	}

}
