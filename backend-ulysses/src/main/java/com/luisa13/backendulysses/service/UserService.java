package com.luisa13.backendulysses.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.luisa13.backendulysses.model.User;
import com.luisa13.backendulysses.repository.UserRepository;

@Component
public class UserService implements IUserService{

	@Autowired
	private UserRepository userRepo;

	@Override
	public User addUser(User user) {
		return this.userRepo.save(user);
	}

	@Override
	public void deleteUser(User user) {
		this.userRepo.delete(user);
	}

	@Override
	public User findUserById(Long id) {
		return this.userRepo.findById(id).get();
	}

	@Override
	public User updateUser(User user) {
		User oldUser = this.userRepo.findById(user.getId())
				.orElseThrow();
		userRepo.save(user);
		return user;
	}

	@Override
	public List<User> getAllUsers() {
		return this.userRepo.findAll();
	}

	@Override
	public void deleteUserById(Long id) {
		this.userRepo.deleteById(id);
		
	}

	@Override
	public User findUserByName(String name) {
		return this.userRepo.findByName(name).get();
	}
	
	

}
