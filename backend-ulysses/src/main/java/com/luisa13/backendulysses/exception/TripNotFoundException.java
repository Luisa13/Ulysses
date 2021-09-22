package com.luisa13.backendulysses.exception;

public class TripNotFoundException extends RuntimeException{

	public TripNotFoundException(String message) {
		super(message);
	}
	
	public TripNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}
	
	public TripNotFoundException(Throwable cause) {
		super(cause);
	}
	
	
}
