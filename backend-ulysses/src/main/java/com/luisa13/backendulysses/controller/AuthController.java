package com.luisa13.backendulysses.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luisa13.backendulysses.security.JwtAuthResponse;
import com.luisa13.backendulysses.security.JwtLoginRequest;
import com.luisa13.backendulysses.security.JwtTokenProvider;
import com.luisa13.backendulysses.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	AuthenticationManager authManager;

	@Autowired
	UserService userService;
	@Autowired
	JwtTokenProvider tokenProvider;
	
	@PostMapping
	public ResponseEntity<?> authenticateUser(@RequestBody JwtLoginRequest loginRequest){
		Authentication authentication =  this.authManager.authenticate(new UsernamePasswordAuthenticationToken(
				loginRequest.getUsername(), 
				loginRequest.getPassword()));
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwtToken = this.tokenProvider.generateToken(authentication);
		return ResponseEntity.ok(new JwtAuthResponse(jwtToken));
	} 

}