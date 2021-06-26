package com.luisa13.backendulysses.security;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

/**
 * Generates a JWT after the user logs in successfully, and validating the JWT sent 
 * to the authorization header of the request.
 * 
 * @author luisa
 * 
 * */
public class JwtTokenProvider {

	private static final Logger logger = LoggerFactory.getLogger(JwtTokenProvider.class);
	
	@Value("${ulysses.jwtSecret}")
	private String jwtSecret;
	
	@Value("${ulysses.jwtExpirationTimeMs}")
	private String jwtExpirationTimeMs;
}
