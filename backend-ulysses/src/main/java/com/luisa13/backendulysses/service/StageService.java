package com.luisa13.backendulysses.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.luisa13.backendulysses.model.Stage;
import com.luisa13.backendulysses.repository.StageRepository;

@Service
public class StageService implements IStageService{

	@Autowired
	StageRepository stageRepo;
	
	@Override
	public Stage addStage(Stage stage) {
		return this.stageRepo.save(stage);
	}

	@Override
	public void deleteStage(Stage stage) {
		this.stageRepo.delete(stage);
	}

	@Override
	public void updateUSer(Stage stage) {
		this.stageRepo.findById(stage.getId()).orElseThrow();
		this.stageRepo.save(stage);
	}

	@Override
	public Stage findById(Long id) {
		return this.stageRepo.findById(id).get();
	}

	@Override
	public List<Stage> getAllStages() {
		return this.stageRepo.findAll();
	}

	@Override
	public void deleteStageById(Long id) {
		this.stageRepo.deleteById(id);
	}

}
