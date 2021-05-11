package com.luisa13.backendulysses.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.luisa13.backendulysses.model.User;
import com.luisa13.backendulysses.repository.UserRepository;

@Service
public class UserService implements IUserService{

	@Autowired
	private UserRepository userRepo;

	@Override
	public User addUSer(User user) {
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
	public void updateUser(User user) {
		User oldUser = this.userRepo.findById(user.getId()).orElseThrow();
		userRepo.save(user);
	}

	@Override
	public List<User> getAllUsers() {
		return this.userRepo.findAll();
	}

	@Override
	public void deleteUserById(Long id) {
		this.userRepo.deleteById(id);
		
	}
	
	

}
