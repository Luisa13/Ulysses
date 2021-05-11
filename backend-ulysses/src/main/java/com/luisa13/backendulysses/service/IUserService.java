package com.luisa13.backendulysses.service;

import java.util.List;

import com.luisa13.backendulysses.model.User;

public interface IUserService {
	 User addUSer(User user);
	 void deleteUser(User user);
	 User findUserById(Long id);
	 void updateUser(User user);
	 List<User> getAllUsers();
}
