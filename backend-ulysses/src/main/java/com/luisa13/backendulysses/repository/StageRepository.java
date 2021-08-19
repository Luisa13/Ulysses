package com.luisa13.backendulysses.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

import com.luisa13.backendulysses.model.Stage;

public interface StageRepository extends JpaRepository<Stage, Long>{
	@Query(value = "SELECT * FROM stages s WHERE s.id_stage = ?1 AND s.id_trip = ?2", nativeQuery = true)
	Optional<Stage> findByIdAndIdTrip(Long id, Long idTrip); 
	
	@Query(value = "SELECT * FROM stages s WHERE s.id_trip = ?1", nativeQuery = true)
	List<Stage> findByIdTrip(Long idTrip); 
}
