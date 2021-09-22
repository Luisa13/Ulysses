package com.luisa13.backendulysses.exception;

public class StageNotFoundException extends RuntimeException{

	public StageNotFoundException(String message) {
		super(message);
	}
	
	public StageNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}
	
	public StageNotFoundException(Throwable cause) {
		super(cause);
	}
}
