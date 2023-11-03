package com.app.appointment.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class AllException {

	@ExceptionHandler(CustomNullPointerException.class)
	public ResponseEntity<String> handleCustomNullPointerException(CustomNullPointerException nullexception) {
		/*
		 * String messageforNullPointerException = nullexception.getLocalizedMessage();
		 * if( messageforNullPointerException == null) { messageforNullPointerException
		 * = nullexception.toString(); }
		 * 
		 * ErrorDetail ed = new ErrorDetail(messageforNullPointerException);
		 */

		return new ResponseEntity<String>("You Got Null Pointer Exception ", HttpStatus.BAD_REQUEST);

	}
}