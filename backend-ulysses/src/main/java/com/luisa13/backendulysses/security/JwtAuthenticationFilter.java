package com.luisa13.backendulysses.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

/**
 * Gets the JWT token from the request, validates it and loads the corresponding user 
 * passing it to Spring Security.
 * 
 * @author luisa
 * */
public class JwtAuthenticationFilter extends OncePerRequestFilter{
	
	private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationFilter.class);
	
	@Autowired
	private JwtTokenProvider tokenProvider;
	@Autowired
	private CustomUserDetailService customUserDetailService;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		try {
			String jwtRequest = getJwtFromRequest(request);
			if(StringUtils.hasText(jwtRequest) && tokenProvider.validate(jwtRequest)) {
				Long userId = tokenProvider.getUserIdFromJwt(jwtRequest);
				UserDetails userDetails = customUserDetailService.loadUserById(userId);
				UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
						userDetails, null, userDetails.getAuthorities());
				
				SecurityContextHolder.getContext().setAuthentication(authentication);
				
			}
		}catch(Exception ex) {
			logger.error("Impossible to set Authentication user in security context", ex);
		}
		
		filterChain.doFilter(request, response);
		
	}
	
	/**
	 * Gets the parsed JWT from the authorization header of the request.
	 * 
	 * @param HttpServletRequest
	 * @return String
	 * */
	private String getJwtFromRequest(HttpServletRequest request) {
		String jwtRequest = "";
		String tokenRequest  = request.getHeader("Authorization");
		if(tokenRequest != null && tokenRequest.startsWith("Bearer ")) {
			jwtRequest = tokenRequest.substring(7, tokenRequest.length());
		}
		
		return jwtRequest;
		
	}

}
