package com.luisa13.backendulysses.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luisa13.backendulysses.model.Trip;

public interface TripRepository extends JpaRepository<Trip, Long>{
	
	Trip findByName(String name);
}
