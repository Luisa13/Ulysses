package com.luisa13.backendulysses.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.luisa13.backendulysses.model.User;

@Service
public interface IUserService {
	 User addUser(User user);
	 void deleteUser(User user);
	 void deleteUserById(Long id);
	 User findUserById(Long id);
	 User findUserByName(String name);
	 User updateUser(User user);
	 List<User> getAllUsers();
}
