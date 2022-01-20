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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.luisa13.backendulysses.exception.UserNotFoundException;
import com.luisa13.backendulysses.model.User;
import com.luisa13.backendulysses.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	/**
	 * Creates a new user in the system.
	 * 
	 * @param User
	 * @return User
	 */
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<User> addUser(@RequestBody User user) {
		HttpStatus response;
		try {
			User newUser = new User(user.getName(), user.getSurname(), user.getEmail());
			newUser.setPassword(user.getPassword());
			newUser.setRole("USER");
			response = HttpStatus.OK;
		} catch (RuntimeException ex) {
			response = HttpStatus.CONFLICT;
			throw new UserNotFoundException(ex.getMessage());
		}
		// return this.userService.addUser(user);
		return new ResponseEntity<User>(response);
	}

	/**
	 * Deletes a existing user in the system.
	 * 
	 * @param Long
	 * @return HttpStatus
	 */
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable Long id) {
		HttpStatus response;
		try {
			this.userService.deleteUserById(id);
			response = HttpStatus.OK;
		} catch (NoSuchElementException ex) {
			response = HttpStatus.NOT_FOUND;
			throw new UserNotFoundException(ex.getMessage());
		}

		return new ResponseEntity<String>(response);
	}

	/**
	 * Updates a user that already exists in the system.
	 * 
	 * @param User
	 * @return HttpStatus
	 */
	@PutMapping("/updateuser")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		HttpStatus response;
		try {
			this.userService.updateUser(user);
			response = HttpStatus.OK;
		} catch (RuntimeException ex) {
			response = HttpStatus.NOT_FOUND;
			throw new UserNotFoundException(ex.getMessage());
		}

		return new ResponseEntity<User>(response);
	}

	/**
	 * Returns a list with all the users in the system.
	 * 
	 * @return List<User>
	 */
	@GetMapping("/allusers")
	public List<User> getAllUser() {
		return this.userService.getAllUsers();
	}

}
