package com.luisa13.backendulysses.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.luisa13.backendulysses.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	Optional<User> findByName(String username);

}
