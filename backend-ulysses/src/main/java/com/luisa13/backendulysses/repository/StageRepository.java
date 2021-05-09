package com.luisa13.backendulysses.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luisa13.backendulysses.model.Stage;

public interface StageRepository extends JpaRepository<Stage, Long>{
	Stage findByName(String name);
}
