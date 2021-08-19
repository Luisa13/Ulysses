package com.luisa13.backendulysses.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.luisa13.backendulysses.model.Stage;
import com.luisa13.backendulysses.model.User;

@Service
public interface IStageService {
	
	public Stage addStage(Stage stage);
	public void deleteStage(Stage stage);
	public void deleteStageById(Long id);
	public void updateUser(Stage stage);
	public Stage findById(Long id);
	public Stage findStageByIdAndIdTrip(Long id, Long idTrip);
	public List<Stage> getAllStages(Long idTrip);
}
