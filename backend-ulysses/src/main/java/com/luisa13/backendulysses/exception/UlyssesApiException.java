package com.luisa13.backendulysses.exception;

import org.springframework.http.HttpStatus;

public class UlyssesApiException extends RuntimeException{

	private final HttpStatus status;
	
	public UlyssesApiException(String message) {
		this(message, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	public UlyssesApiException(String message, HttpStatus internalServerError) {
		super(message);
		this.status = internalServerError;
	}
	
}
