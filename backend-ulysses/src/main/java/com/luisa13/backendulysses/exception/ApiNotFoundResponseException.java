package com.luisa13.backendulysses.exception;

import org.springframework.http.HttpStatus;

public class ApiNotFoundResponseException extends UlyssesApiException{

	public static final String DEFAULT_MESAGE = "Resource not found";
	
	public ApiNotFoundResponseException() {
		this(DEFAULT_MESAGE);
	}
	
	public ApiNotFoundResponseException(String message) {
		super(message, HttpStatus.NOT_FOUND);
	}

}
