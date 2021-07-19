package com.luisa13.backendulysses.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.luisa13.backendulysses.security.JwtAuthResponse;
import com.luisa13.backendulysses.security.JwtLoginRequest;
import com.luisa13.backendulysses.security.JwtTokenProvider;
import com.luisa13.backendulysses.service.UserService;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	AuthenticationManager authManager;

	@Autowired
	UserService userService;
	@Autowired
	JwtTokenProvider tokenProvider;
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(/*@RequestParam("username") final String username,
		    @RequestParam("password") final String password*/@RequestBody JwtLoginRequest loginRequest){
		UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
				loginRequest.getUsername(), 
				loginRequest.getPassword());
				//username, password);
		Authentication authentication =  this.authManager.authenticate(token);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwtToken = this.tokenProvider.generateToken(authentication);
		return ResponseEntity.ok(new JwtAuthResponse(jwtToken));
	} 

}
