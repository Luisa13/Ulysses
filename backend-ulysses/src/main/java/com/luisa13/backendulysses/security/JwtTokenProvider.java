package com.luisa13.backendulysses.security;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.*;

/**
 * Generates a JWT after the user logs in successfully, and validating the JWT sent 
 * to the authorization header of the request.
 * 
 * @author luisa
 * 
 * */

@Component
public class JwtTokenProvider {

	private static final Logger logger = LoggerFactory.getLogger(JwtTokenProvider.class);
	
	@Value("${ulysses.jwtSecret}")
	private String jwtSecret;
	
	@Value("${ulysses.jwtExpirationTimeMs}")
	private int jwtExpirationTimeMs;
	
	/**
	 * Generates the token when the user logs in
	 * @param Authentication
	 * @return String
	 * */
	public String generateToken(Authentication authentication) {
		UserPrincipal principal = (UserPrincipal)authentication.getPrincipal();
		
		Date instantCurrentTime = new Date();
		Date expiration = new Date(instantCurrentTime.getTime() + this.jwtExpirationTimeMs);
		
		return Jwts.builder()
		.setSubject(Long.toString(principal.getId()))
		.setIssuedAt(new Date())
		.setExpiration(expiration)
		.signWith(SignatureAlgorithm.HS512, jwtSecret)
		.compact();
		
	}
	
	/**
	 * Gets the user id associated to a token
	 * 
	 * @param String
	 * @return Long
	 * */
	protected Long getUserIdFromJwt(String token) {
		Claims claims = Jwts.parser().setSigningKey(this.jwtSecret).parseClaimsJws(token).getBody();
		
		return Long.parseLong(claims.getSubject());
	}
	
	/**
	 * Validates the token
	 * 
	 * @param String
	 * @return boolean
	 * */
	protected boolean validate(String token) {
		try {
			Jwts.parser().setSigningKey(this.jwtSecret).parseClaimsJws(token);
			return true;
		}catch(SignatureException ex) {
			logger.error("Invalid JWT signature", ex);
		}catch(MalformedJwtException ex) {
			logger.error("Malformed JWT token", ex);
		}catch(ExpiredJwtException ex) {
			logger.error("Expired token", ex);
		}catch(UnsupportedJwtException ex) {
			logger.error("Not supported token", ex);
		}catch(IllegalArgumentException ex) {
			logger.error("JWT string is empty", ex);
		}
		
		return false;
		
	}
}
