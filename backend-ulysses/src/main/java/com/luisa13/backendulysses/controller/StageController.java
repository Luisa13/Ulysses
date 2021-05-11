package com.luisa13.backendulysses.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.luisa13.backendulysses.model.Stage;
import com.luisa13.backendulysses.service.StageService;

@RestController
@RequestMapping("/stage")
public class StageController {
	
	@Autowired
	private StageService stageService;
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Stage addStage(@RequestBody Stage stage) {
		return this.stageService.addStage(stage);
	}
	
	@PutMapping("/updatestage")
	public ResponseEntity<String> updateStage(@RequestBody Stage stage){
		HttpStatus response;
		try {
			this.stageService.updateUSer(stage);
			response = HttpStatus.OK;
		}catch(NoSuchElementException ex) {
			System.out.println(ex.getMessage());
			response = HttpStatus.NOT_FOUND;
		}
		
		return new ResponseEntity<String>(response);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> delete(@PathVariable Long id){
		HttpStatus response;
		try {
			this.stageService.deleteStageById(id);
			response = HttpStatus.OK;
		}catch(NoSuchElementException ex) {
			System.out.println(ex.getMessage());
			response = HttpStatus.NOT_FOUND;
		}
		
		return new ResponseEntity<String>(response);
	}
	
	@GetMapping("/allstages")
	public List<Stage> getAllStages(){
		return this.stageService.getAllStages();
	}

}
