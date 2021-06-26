package com.luisa13.backendulysses.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luisa13.backendulysses.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	Optional<User> findByUserOrEmail(String usernameEmail, String usernameEmail2);

}
