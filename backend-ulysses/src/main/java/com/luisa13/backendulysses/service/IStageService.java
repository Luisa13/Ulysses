package com.luisa13.backendulysses.service;

import java.util.List;

import com.luisa13.backendulysses.model.Stage;

public interface IStageService {

	public Stage addStage(Stage stage);
	public void deleteStage(Stage stage);
	public void updateUSer(Stage stage);
	public Stage findById(Long id);
	public List<Stage> getAllStages();
}
