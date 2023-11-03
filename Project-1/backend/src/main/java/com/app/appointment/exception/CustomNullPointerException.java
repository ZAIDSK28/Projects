package com.app.appointment.exception;

import org.springframework.stereotype.Component;

@Component
public class CustomNullPointerException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	private String error;

	private String details;

	public CustomNullPointerException() {
		super();
	}

	public CustomNullPointerException(String error, String details) {
		super();
		this.error = error;
		this.details = details;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "CustomNullPointerException [error=" + error + ", details=" + details + "]";
	}

}