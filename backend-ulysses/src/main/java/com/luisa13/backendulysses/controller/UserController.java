package com.luisa13.backendulysses.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.luisa13.backendulysses.model.User;
import com.luisa13.backendulysses.service.UserService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public User addUser(@RequestBody User user) {
		return this.userService.addUser(user);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable Long id) {
		HttpStatus response;
		try {
			this.userService.deleteUserById(id);
			response = HttpStatus.OK;
		}catch(NoSuchElementException ex) {
			System.out.println(ex.getMessage());
			response = HttpStatus.NOT_FOUND;
		}
		
		return new ResponseEntity<String>(response);
	}
	
	@PutMapping("/updateuser")
	public ResponseEntity<String> updateUSer(@RequestBody User user) {
		HttpStatus response;
		try {
			this.userService.updateUser(user);
			response = HttpStatus.OK;
		}catch(RuntimeException ex) {
			System.out.println(ex.getMessage());
			response = HttpStatus.NOT_FOUND;
		}
		
		return new ResponseEntity<String>(response);
	}
	
	@GetMapping("/allusers")
	public List<User> getAllUser(){
		return this.userService.getAllUsers();
	}
	
	
	
	
}
