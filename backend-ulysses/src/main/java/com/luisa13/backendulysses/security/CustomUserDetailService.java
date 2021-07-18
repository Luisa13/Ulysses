package com.luisa13.backendulysses.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.luisa13.backendulysses.model.User;
import com.luisa13.backendulysses.repository.UserRepository;

@Service
public class CustomUserDetailService implements UserDetailsService{
	@Autowired
	UserRepository userRepo;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String usernameEmail) throws UsernameNotFoundException {
		User user = userRepo.findByName(usernameEmail)
				.orElseThrow(
						() -> new UsernameNotFoundException("User not found with username or email: " + usernameEmail));

		return new UserPrincipal(user);
	}
	
	public UserDetails loadUserById(Long userId) {
		User user = userRepo.findById(userId).orElseThrow(
				()-> new UsernameNotFoundException("User not found with id: " + userId));
		
		return new UserPrincipal(user);
				
	}

}
