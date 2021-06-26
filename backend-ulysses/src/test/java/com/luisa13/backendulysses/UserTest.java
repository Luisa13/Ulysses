package com.luisa13.backendulysses;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.junit4.SpringRunner;

import com.luisa13.backendulysses.model.User;
import com.luisa13.backendulysses.service.UserService;


@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@ComponentScan(basePackages = {"com.luisa13.backendulysses.service"})
class UserTest {
	
	@Autowired
	UserService userService;

	@Test
	void testSaveUser() {
		User user = new User("Jhon", "Doe", "jhon@doe.com");
		User dbUser = userService.addUSer(user);
		
		assertTrue(dbUser != null && dbUser.getId() == user.getId());
	}
	
	@Test
	void testgetUSerThatExists() {
		User user = new User("Daniel", "Jackson", "daniel@jackson.com");
		userService.addUSer(user);
		User foundUser = userService.findUserById(user.getId());
		
		assertTrue(foundUser.getId() == user.getId());
	}
	
	@Test
	void testGetUserNotExists() {
		User foundUser = userService.findUserById(Integer.toUnsignedLong(1));
		assertNull(foundUser);
	}
	
	@Test
	void testGetAllUsers() {
		User user1 = new User("Jhon", "Doe", "jhon@doe.com");
		this.userService.addUSer(user1);
		User user2 = new User("Daniel", "Jackson", "daniel@jackson.com");
		this.userService.addUSer(user2);
		
		assertNotNull(this.userService.getAllUsers());
	}
	
	@Test
	void testDeleteUserThatExists() {
		User user = new User("Jhon", "Doe",  "jhon@doe.com");
		this.userService.addUSer(user);
		this.userService.deleteUserById(user.getId());
		
		assertTrue(this.userService.getAllUsers().isEmpty());
	}
	
	
	

}
