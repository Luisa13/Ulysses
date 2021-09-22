package com.luisa13.backendulysses.exception;

import org.springframework.http.HttpStatus;

public class ApiForbiddenException extends UlyssesApiException{

	public static final String DEFAULT_MESAGE = "This resource acces, creation or modification is forbidden";
	
	public ApiForbiddenException() {
		this(DEFAULT_MESAGE);
	}
	
	public ApiForbiddenException(String message) {
		super(message, HttpStatus.FORBIDDEN);
	}

	
}
